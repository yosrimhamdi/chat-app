import React from 'react';

import './ChatMessages.scss';
import ChatMessage from '../ChatMessage/ChatMessage';

function ChatMessages() {
  return (
    <div className="chat-messages">
      <ChatMessage message="introuction, analyse lexical et syntaxique?" />
      <ChatMessage message="cad 3?" />
      <ChatMessage message="ça va ?" received />
      <ChatMessage message="Salut mon ami cv et toi?" />
      <ChatMessage message="ça va... Les vacances se passent bien ?" received />
      <ChatMessage message="Oui il nous reste un mois" />
      <ChatMessage message="😀" />
      <ChatMessage message="La rentrée cest quand ?" received />
      <ChatMessage message="Je pense c le 11 octobre" />
      <ChatMessage message="Daccord mon ami" received />
    </div>
  );
}

export default ChatMessages;
