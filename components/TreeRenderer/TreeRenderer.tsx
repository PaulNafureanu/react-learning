import React from "react";
import { Nodes, NodesEvent } from "../../hooks/useNodes";
import eventFnWrapper from "../../libs/EventFnWrapper";

interface Props {
  nodes: Nodes;
  onClick: (e: NodesEvent) => void;
}

export default function TreeRenderer({ nodes, onClick }: Props) {
  // (Updated) Nodes -> (Updated) React Components like 'FileItem' and 'FolderItem'

  const handleClick = eventFnWrapper(() => onClick({ type: "AddNode" }));

  return <div onClick={handleClick}>React Components</div>;
}
