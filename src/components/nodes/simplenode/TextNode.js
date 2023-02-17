import React, { useState } from 'react'
import NodeContainer from '../../node-container';
import { Editor, EditorState } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function TextNode() {

  const [editorState, setEditorState] = useState(EditorState?.createEmpty());
  const [text, setText] = useState();

  const handleEditorStateChange = function (editorState){
    setEditorState(editorState)
    let text = editorState.getCurrentContent().getPlainText("\u0001");
    setText(text);
  }

  console.log(text)

  return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={handleEditorStateChange}
        mention={{
          separator: " ",
          trigger: "@",
          suggestions: [
            { text: "APPLE", value: "apple" },
            { text: "BANANA", value: "banana", url: "banana" },
            { text: "CHERRY", value: "cherry", url: "cherry" },
            { text: "DURIAN", value: "durian", url: "durian" },
            { text: "EGGFRUIT", value: "eggfruit", url: "eggfruit" },
            { text: "FIG", value: "fig", url: "fig" },
            { text: "GRAPEFRUIT", value: "grapefruit", url: "grapefruit" },
            { text: "HONEYDEW", value: "honeydew", url: "honeydew" }
          ]
        }}
      />
    </div>
  )
}

export default TextNode


function Sidebar({ onDragStart }) {
    return (
      <div className="dndnode" onDragStart={(event) => onDragStart(event, "text-node")} draggable>
        Text Node
      </div>
    );
}
  
export function TextNodeWrapper(props) {
    return (
        <NodeContainer {...props} label="Text Node" isLeftHandle className="chart-container text-editor">
          <TextNode />
        </NodeContainer>
    );
}
TextNodeWrapper.Sidebar = Sidebar;