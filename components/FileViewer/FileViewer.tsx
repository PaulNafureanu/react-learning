import React from "react";
import styles from "./FileViewer.module.css";

interface Props {
  children?: React.JSX.Element;
}

export default function FileViewer({ children }: Props) {
  return <div className={styles.FileViewer}>{children}</div>;
}
