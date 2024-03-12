"use client";
import styles from "./page.module.css";
import React from "react";
import FetchUsers from "./FetchUsers";
import StatefulInput from "./StatefulInput";
export default function Home() {
  return (
    <main className={styles.main}>
      <FetchUsers />
      <StatefulInput />
    </main>
  );
}
