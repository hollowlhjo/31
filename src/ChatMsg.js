import React from 'react';

function ChatMessage({ username, text, file, date }) {
  return (
    <div>
      <strong>{username}:</strong>
      {file ? (
        <img src={file} alt="Зображення" style={{ maxWidth: '200px' }} />
      ) : (
        <span>{text}</span>
      )}
      <span> ({date})</span>
    </div>
  );
}

export default ChatMessage;