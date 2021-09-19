import React from 'react';

import './ChatMessages.scss';

function ChatMessages() {
  return (
    <div className="chat-messages">
      <p className="me">introuction, analyse lexical et syntaxique?</p>
      <p className="me">cad 3?</p>
      <p className="him">mon ami</p>
      <p className="him">ça va ?</p>
      <p className="me">Salut mon ami cv et toi?</p>
      <p className="him">ça va... Les vacances se passent bien ?</p>
      <p className="me">Oui il nous reste un mois</p>
      <p className="him">La rentrée cest quand ?</p>
      <p className="me">Je pense c le 11 octobre</p>
      <p className="him">Daccord mon ami</p>
    </div>
  );
}

export default ChatMessages;
