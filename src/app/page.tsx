import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.profileCluster}>
        <div className={`${styles.profileWrapper} ${styles.profile1}`}>
          <Image
            src="/pranav-pfp-new-notify.png"
            alt="Profile picture"
            width={100}
            height={100}
            className={styles.profilePic}
          />
        </div>
        <div className={`${styles.profileWrapper} ${styles.profile2}`}>
          <Image
            src="/praneeth-pfp-notify.png"
            alt="Profile picture"
            width={80}
            height={80}
            className={styles.profilePic}
          />
        </div>
        <div className={`${styles.profileWrapper} ${styles.profile3}`}>
          <Image
            src="/reshmi-pfp-notify.png"
            alt="Profile picture"
            width={90}
            height={90}
            className={styles.profilePic}
          />
        </div>
        <div className={`${styles.profileWrapper} ${styles.profile4}`}>
          <Image
            src="/other-pranav-pfp-notify.png"
            alt="Profile picture"
            width={70}
            height={70}
            className={styles.profilePic}
          />
        </div>
        <div className={`${styles.profileWrapper} ${styles.profile5}`}>
          <Image
            src="/default-pic-notify.png"
            alt="Profile picture"
            width={60}
            height={60}
            className={styles.profilePic}
          />
        </div>
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
