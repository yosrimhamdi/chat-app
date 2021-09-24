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
import { UPLOADING_FILE } from '../../redux/actions/types';

const path = (file, channelId) => {
  const mimetype = file.type.split('/')[1];

  return `/channels/${channelId}/${uuidv4()}.${mimetype}`;
};

const uploadImage = async (file, channelId, setPercent, setLoading) => {
  const storage = getStorage();
  const storageRef = ref(storage, path(file, channelId));

  const UploadTask = uploadBytesResumable(storageRef, file);
  setLoading(UPLOADING_FILE, true);

  UploadTask.on('state_changed', snapshot => {
    const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

    setPercent(Math.round(percent));

    if (percent >= 100) {
      setTimeout(async () => {
        const imageURL = await getDownloadURL(storageRef);

        await createImageMessage(imageURL, channelId, getAuth().currentUser);

        setLoading(UPLOADING_FILE, false);
        setPercent(0);
      }, 2000);
    }
  });
};

export default catcher(uploadImage);
