import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

import catcher from '../../catcher';

const uploadFile = async (file, channelId) => {
  const mimetype = file.type.split('/')[1];

  const storage = getStorage();
  const storageRef = ref(
    storage,
    `/channels/${channelId}/${uuidv4()}.${mimetype}`
  );

  await uploadBytes(storageRef, file);

  return await getDownloadURL(storageRef);
};

export default catcher(uploadFile);
