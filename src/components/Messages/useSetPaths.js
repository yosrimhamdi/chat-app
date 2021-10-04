import { useEffect } from 'react';

const useSetPaths = (isPrivate, setMessagesPath, setUploadPath) => {
  useEffect(() => {
    let messagesPath = 'messages/public/';
    let uploadPath = 'chat/public';

    if (isPrivate) {
      messagesPath = 'messages/private/';
      uploadPath = 'chat/private';
    }

    setMessagesPath(messagesPath);
    setUploadPath(uploadPath);
  }, [isPrivate]);
};

export default useSetPaths;
