import { getDatabase, ref, child, get } from 'firebase/database';

const readData = async path => {
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, path));
  const data = snapshot.val();

  return Object.values(data ?? {});
};

export default readData;
