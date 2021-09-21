import { getDatabase, ref, set, push, child } from 'firebase/database';

const writeUserData = async (collectionName, data) => {
  const db = getDatabase();

  const key = push(child(ref(db), collectionName)).key;

  data.id = key;

  await set(ref(db, collectionName + key), data);

  return data;
};

export default writeUserData;
