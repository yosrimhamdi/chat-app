import { getDatabase, ref, set, push, child } from 'firebase/database';

const writeData = async (collectionName, data) => {
  const db = getDatabase();

  const key = push(child(ref(db), collectionName)).key;

  data.id = key;

  return await set(ref(db, collectionName + key), data);
};

export default writeData;
