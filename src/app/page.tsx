"use client";

import Image from 'next/image';
import styles from './page.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [showBubble, setShowBubble] = useState(false);
  const [bubbleMessage, setBubbleMessage] = useState('');

  const handleProfileClick = (index: number) => {
    const anglePerProfile = 360 / 5; // Assuming 5 profiles
    const newAngle = -(index - 1) * anglePerProfile;
    setRotationAngle(newAngle);
    setShowBubble(false); // Hide bubble during rotation

    // Set a timeout to show the bubble after rotation
    setTimeout(() => {
      setBubbleMessage(`Hello from ${['Pranav', 'Praneeth', 'Reshmi', 'Other Pranav', 'Default'][index]}`);
      setShowBubble(true);
    }, 500); // Match this with the CSS transition duration
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputSubmit = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const user = 'pranav'; // Example user, you can change this dynamically
      try {
        await axios.post('/api/saveInput', { input: inputValue, user });
        setInputValue(''); // Clear input after submission
      } catch (error) {
        console.error('Error saving input:', error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileCluster} style={{ transform: `rotate(${rotationAngle}deg)`, transition: 'transform 0.5s ease' }}>
        {['pranav-pfp-new-notify.png', 'praneeth-pfp-notify.png', 'reshmi-pfp-notify-new.png', 'other-pranav-pfp-notify.png', 'default-pic-notify.png'].map((src, index) => (
          <div key={index} className={`${styles.profileWrapper} ${styles[`profile${index + 1}`]}`} onClick={() => handleProfileClick(index)}>
            <Image
              src={`/${src}`}
              alt="Profile picture"
              width={100 - index * 10}
              height={100 - index * 10}
              className={styles.profilePic}
              style={{ transform: `rotate(${-rotationAngle}deg)`, transition: 'transform 0.5s ease' }}
            />
            {showBubble && index === ((Math.abs(rotationAngle / (360 / 5))) % 5) && (
              <div className={styles.speechBubble}>
                {bubbleMessage}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles.inputWrapper}>
        <input 
          type="text"
          className={styles.input}
          placeholder="Type your message..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleInputSubmit}
        />
      </div>
    </div>
  );
}
