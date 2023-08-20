import React, { useState } from 'react';

function ChatInput({ onSendMessage }) {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);

  const handleSendMessage = () => {
    if (username && (message || image)) {
      onSendMessage({ username, message, image });
      setUsername('');
      setMessage('');
      setImage(null);
    }
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Ім'я користувача"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Повідомлення або ім'я файлу"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <button onClick={handleSendMessage}>Надіслати</button>
    </div>
  );
}

export default ChatInput;