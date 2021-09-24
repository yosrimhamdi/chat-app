import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { getAuth } from '@firebase/auth';
import { v4 as uuidv4 } from 'uuid';

import catcher from '../../catcher';
import createImageMessage from '../database/createImageMessage';

const path = (file, channelId) => {
  const mimetype = file.type.split('/')[1];

  return `/channels/${channelId}/${uuidv4()}.${mimetype}`;
};

const uploadImage = async (file, channelId) => {
  const storage = getStorage();
  const storageRef = ref(storage, path(file, channelId));

  const UploadTask = uploadBytesResumable(storageRef, file);

  UploadTask.on('state_changed', snapshot => {
    const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

    console.log(percent);

    if (percent >= 100) {
      setTimeout(async () => {
        const imageURL = await getDownloadURL(storageRef);

        createImageMessage(imageURL, channelId, getAuth().currentUser);
      }, 2000);
    }
  });
};

export default catcher(uploadImage);
