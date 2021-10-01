import { getDatabase, ref, child, get } from 'firebase/database';

import catcher from '../../catcher';

const readData = async (path, creator) => {
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, path));

  creator(Object.values(snapshot.val() || {}));
};

export default catcher(readData);
