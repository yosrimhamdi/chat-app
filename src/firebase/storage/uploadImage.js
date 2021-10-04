import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';

import catcher from '../../catcher';

const uploadImage = async (file, path, setPercent) => {
  const storage = getStorage();
  const storageRef = ref(storage, path);

  const UploadTask = uploadBytesResumable(storageRef, file);

  const imageURL = await new Promise(resolve => {
    UploadTask.on('state_changed', async snapshot => {
      const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

      setPercent(Math.round(percent));

      if (percent >= 100) {
        while (true) {
          try {
            const imageURL = await getDownloadURL(storageRef);

            setPercent(0);
            resolve(imageURL);

            break;
          } catch {
            //
          }
        }
      }
    });
  });

  return imageURL;
};

export default catcher(uploadImage);
