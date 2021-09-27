import { getDatabase, ref, onValue } from 'firebase/database';

const onCollectionChange = (collectionName, actionCreator) => {
  const db = getDatabase();
  const collectionRef = ref(db, collectionName);

  onValue(collectionRef, snapshot => {
    const documents = Object.values(snapshot.val() || []);

    actionCreator(documents);
  });
};

export default onCollectionChange;
