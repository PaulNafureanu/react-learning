import React from "react";
import styles from "./FileExplorer.module.css";

interface Props {
  children?: React.JSX.Element;
}

export default function FileExplorer({ children }: Props) {
  return (
    <div className={styles.FileExplorer}>
      <div>{children}</div>
    </div>
  );
}
