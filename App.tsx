import React, { useEffect } from "react";
import {
  FileExplorer,
  FileItem,
  FileViewer,
  TopMenu,
  TreeRenderer,
} from "./components";
import useNodes from "./hooks/useNodes";
import styles from "./App.module.css";

export default function App() {
  const [nodes, handleNodesEvents] = useNodes();

  return (
    <div className={styles.App}>
      <TopMenu />
      <FileExplorer>
        <TreeRenderer nodes={nodes} onClick={handleNodesEvents} />
      </FileExplorer>
      <FileViewer>
        <FileItem />
      </FileViewer>
    </div>
  );
}
