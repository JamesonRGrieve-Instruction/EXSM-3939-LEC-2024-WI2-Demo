"use client";
import styles from './page.module.css'
import React from 'react';
import TextMechanic from "./TextMechanic";
export default function HomePage() {
  return (
    <>
      <main className={styles.main}>
        <TextMechanic />
      </main>
      <footer className={styles.footer}>
        <p>&copy; University of Alberta {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
