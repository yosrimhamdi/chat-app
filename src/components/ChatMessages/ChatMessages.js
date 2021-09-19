import React from 'react';

import './ChatMessages.scss';
import ChatMessage from '../ChatMessage/ChatMessage';

function ChatMessages({ contactImage }) {
  return (
    <div className="chat-messages">
      <ChatMessage
        contactImage={contactImage}
        message="introuction, analyse lexical et syntaxique?"
      />
      <ChatMessage contactImage={contactImage} message="cad 3?" />
      <ChatMessage contactImage={contactImage} message="ça va ?" received />
      <ChatMessage
        contactImage={contactImage}
        message="Salut mon ami cv et toi?"
      />
      <ChatMessage
        contactImage={contactImage}
        message="ça va... Les vacances se passent bien ?"
        received
      />
      <ChatMessage
        contactImage={contactImage}
        message="Oui il nous reste un mois"
      />
      <ChatMessage contactImage={contactImage} message="😀" />
      <ChatMessage
        contactImage={contactImage}
        message="La rentrée cest quand ?"
        received
      />
      <ChatMessage
        contactImage={contactImage}
        message="Je pense c le 11 octobre"
      />
      <ChatMessage
        contactImage={contactImage}
        message="Daccord mon ami"
        received
      />
    </div>
  );
}

export default ChatMessages;
