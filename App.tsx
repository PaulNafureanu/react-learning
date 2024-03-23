import React from "react";
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
  const [nodes, setNodes] = useNodes();

  return (
    <div className={styles.App}>
      <TopMenu />
      <FileExplorer>
        <TreeRenderer nodes={nodes} onClick={setNodes} />
      </FileExplorer>
      <FileViewer>
        <FileItem />
      </FileViewer>
    </div>
  );
}
