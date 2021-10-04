import {
  getDownloadURL,
  uploadBytesResumable,
  ref,
  getStorage,
} from 'firebase/storage';

const uploadImage = async (blob, path, setPercent) => {
  const storage = getStorage();

  const storageRef = ref(storage, path);

  const UploadTask = uploadBytesResumable(storageRef, blob);

  const photoURL = await new Promise(resolve => {
    UploadTask.on('state_changed', async snapshot => {
      const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

      setPercent(Math.round(percent));

      if (percent >= 100) {
        setPercent(0);
        while (true) {
          try {
            const photoURL = await getDownloadURL(storageRef);
            resolve(photoURL);
            break;
          } catch {
            //
          }
        }
      }
    });
  });

  return photoURL;
};

export default uploadImage;
