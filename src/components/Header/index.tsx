'use client';

import HeaderButton from '../HeaderButton';
import styles from './Header.module.css';

const Header = ({
  title,
  buttonText,
  handleClick,
}: {
  title: string;
  buttonText: string;
  handleClick: () => void;
}) => {
  return (
    <header className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.headerButtonContainer}>
        <HeaderButton buttonText={buttonText} handleClick={handleClick} />
      </div>
    </header>
  );
};

export default Header;
