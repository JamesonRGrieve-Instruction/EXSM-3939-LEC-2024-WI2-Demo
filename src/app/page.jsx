"use client";
import StatefulInput from "../components/fields/StatefulInput";
import StatefulTextArea from "../components/fields/StatefulTextArea";
import StatefulCheckbox from "../components/fields/StatefulCheckbox";
import StatefulRadioButtons from "../components/fields/StatefulRadioButtons";
import styles from './page.module.css'
import React from 'react';
export default function HomePage() {
  return (
    <>
      <main className={styles.main}>
        <StatefulInput />
        <StatefulTextArea />
        <StatefulCheckbox />
        <StatefulRadioButtons />
      </main>
      <footer className={styles.footer}>
        <p>&copy; University of Alberta {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
