"use client";
import styles from "./page.module.css";
import React from "react";
import StatefulInput from "./StatefulInput";
export default function Home() {
  return (
    <main className={styles.main}>
      <StatefulInput />
    </main>
  );
}
