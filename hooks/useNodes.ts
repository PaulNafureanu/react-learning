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

interface AddNodeEvent {
  type: "AddNode";
}

interface UpdateNodeEvent {
  type: "UpdateNode";
}

interface RemoveNodeEvent {
  type: "RemoveNode";
}

type NodesEvent = AddNodeEvent | UpdateNodeEvent | RemoveNodeEvent;

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

export default function useNodes(): [Nodes, (event: NodesEvent) => void] {
  // Fetch Raw DB data -> (First) Nodes -> React State & Set React State -> Nodes & Handle Nodes' Events
  // Events -> Handle Nodes' Events -> Set React State -> (New State / Rerender) -> New Nodes

  // Set default state
  const [stateNodes, setStateNodes] = useState<Nodes>({});

  useEffect(() => {
    const getData = async () => {
      // Simulate fetching data...
      const response = await fetch("http://localhost:3000/treedata");

      const rawFetchedData = (await response.json()) || {}; // assume data was fetched

      //process the raw fetched data
      const firstNodes: Nodes = { ...rawFetchedData };

      // update the state with the fetched nodes
      setStateNodes(firstNodes);
    };

    getData();
  }, []);

  // Define the return values:
  const nodes: Nodes = { ...stateNodes };
  const handleNodesEvents = (event: NodesEvent) => {
    // Use the utility functions for node operations

    //For example, adding a new file node into the Tree
    const newNodes = addNode(nodes);

    // Update the state with the new nodes
    setStateNodes(newNodes);
  };

  return [nodes, handleNodesEvents];
}
