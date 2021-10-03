import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

import catcher from '../../catcher';
import createImageMessage from '../database/createImageMessage';
import { UPLOADING_FILE } from '../../redux/actions/types';

const uploadImage = async (
  file,
  uploadPath,
  messagePath,
  channelId,
  setPercent,
  setLoading,
) => {
  const mimetype = file.type.split('/')[1];

  const storage = getStorage();
  const storageRef = ref(
    storage,
    `${uploadPath}${channelId}/${uuidv4()}.${mimetype}`,
  );

  const UploadTask = uploadBytesResumable(storageRef, file);
  setLoading(UPLOADING_FILE, true);

  UploadTask.on('state_changed', async snapshot => {
    const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

    setPercent(Math.round(percent));

    if (percent >= 100) {
      while (true) {
        try {
          const imageURL = await getDownloadURL(storageRef);

          await createImageMessage(imageURL, messagePath, channelId);

          setLoading(UPLOADING_FILE, false);
          setPercent(0);

          break;
        } catch {
          //
        }
      }
    }
  });
};

export default catcher(uploadImage);
