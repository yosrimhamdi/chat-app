import { getDatabase, ref, child, get } from 'firebase/database';

const readData = async (path, creator) => {
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, path));

  creator(Object.values(snapshot.val() || {}));
};

export default readData;
