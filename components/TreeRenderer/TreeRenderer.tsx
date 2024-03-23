import React from "react";
import { Nodes } from "../../hooks/useNodes";

interface Props {
  nodes: Nodes;
  onClick: (e: any) => void;
}

export default function TreeRenderer({ nodes, onClick }: Props) {
  // (Updated) Nodes -> (Updated) React Components like 'FileItem' and 'FolderItem'

  return <div onClick={onClick}>React Components</div>;
}
