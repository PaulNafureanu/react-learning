import { useEffect, useState } from "react";

interface Node {
  id: string;
  name: string;
  depth: number;
  isOpen: boolean;
  isViewed: boolean;
}

export interface FileNode extends Node {
  type: "File";
}

export interface FolderNode extends Node {
  type: "Folder";
  children: string[];
}

export type Nodes = { [key: string]: FileNode | FolderNode };

// Utility functions for node operations:
function addNode(nodes: Nodes): Nodes {
  return { ...nodes };
}
function updateNode(nodes: Nodes): Nodes {
  return { ...nodes };
}
function removeNode(nodes: Nodes): Nodes {
  return { ...nodes };
}

export default function useNodes(): [Nodes, (event?: any) => void] {
  // Fetch Raw DB data -> (First) Nodes -> React State & Set React State -> Nodes & Set Nodes
  // Events -> Set Nodes -> Set React State -> (New State / Rerender) -> New Nodes

  // Set default state
  const [reactNodes, setReactNodes] = useState<Nodes>({});

  useEffect(() => {
    // fetch data...
    const rawFetchedData = {}; // assume data was fetched

    //process the raw fetched data
    const firstNodes = { ...rawFetchedData };

    // update the state with the fetched nodes
    setReactNodes(firstNodes);
  }, []);

  // Define the return values:
  const nodes = { ...reactNodes };
  const setNodes = (event?: any) => {
    // Use the utility functions for node operations

    //For example, adding a new file node into the Tree
    const newNodes = addNode(nodes);

    // Update the state with the new nodes
    setReactNodes(newNodes);
  };

  return [nodes, setNodes];
}
