import { getDatabase, ref, onValue } from 'firebase/database';

const onCollectionChange = (collectionName, actionType) => dispatch => {
  const db = getDatabase();
  const channelsRef = ref(db, collectionName);

  onValue(channelsRef, snapshot => {
    const documents = Object.values(snapshot.val() || []);

    dispatch({
      type: actionType,
      payload: documents,
    });
  });
};

export default onCollectionChange;
