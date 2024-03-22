import React, { Fragment, useState } from "react";
import { FileExplorer, FileViewer, TopMenu } from "./components";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.App}>
      <TopMenu />
      <FileExplorer />
      <FileViewer />
    </div>
  );
}
