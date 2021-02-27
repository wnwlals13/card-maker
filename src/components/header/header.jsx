import React, { memo } from "react";
import styles from "./header.module.css";

const Header = memo(({ display, onLogout }) => {
  // const displayType = display === "list" ? styles.list : styles.grid;
  return (
    <header className={`${styles.head}`}>
      <img
        className={`${styles.mainlogo}`}
        src="../images/logo.png"
        alt="logo"
      />
      <span className={styles.serviceName}>Business Card Maker</span>
      {onLogout && (
        <button className={styles.logoutBtn} onClick={onLogout}>
          logout
        </button>
      )}
    </header>
  );
});

export default Header;
