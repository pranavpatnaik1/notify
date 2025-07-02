"use client";

import Image from 'next/image';
import styles from './page.module.css';
import { useState } from 'react';

export default function Home() {
  const [rotationAngle, setRotationAngle] = useState(0);

  const handleProfileClick = (index: number) => {
    const anglePerProfile = 360 / 5; // Assuming 5 profiles
    const newAngle = -(index - 1) * anglePerProfile;
    setRotationAngle(newAngle);
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
          </div>
        ))}
      </div>
      <div className={styles.inputWrapper}>
        <input 
          type="text"
          className={styles.input}
          placeholder="Type your message..."
        />
      </div>
    </div>
  );
}
