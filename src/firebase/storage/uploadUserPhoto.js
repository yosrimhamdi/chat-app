import {
  getDownloadURL,
  uploadBytesResumable,
  ref,
  getStorage,
} from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { v4 as uuidv4 } from 'uuid';

const uploadUserPhoto = async (file, setPercent) => {
  const { currentUser } = getAuth();
  const storage = getStorage();

  const ext = file.type.split('/')[1];
  const path = `photos/users/${currentUser.uid}/${uuidv4()}.${ext}`;

  const storageRef = ref(storage, path);

  const UploadTask = uploadBytesResumable(storageRef, file);

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

export default uploadUserPhoto;
