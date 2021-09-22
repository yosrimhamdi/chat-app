import { getDatabase, ref, onValue } from 'firebase/database';

const onCollectionChange = (collectionName, actionCreator) => {
  const db = getDatabase();
  const channelsRef = ref(db, collectionName);

  onValue(channelsRef, snapshot => {
    const documents = Object.values(snapshot.val() || []);

    actionCreator(documents);
  });
};

export default onCollectionChange;
