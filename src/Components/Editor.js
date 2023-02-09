// Library Imports
import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";

const Editor = ({ value, onCodeChange, programmingLanguage }) => {
  const onLoad = () => {
    console.log("code editor rendered.");
  };
  return (
    <AceEditor
      className="codeEditor"
      placeholder="Your code here"
      mode={programmingLanguage}
      theme="monokai"
      name="editor"
      onLoad={onLoad}
      onChange={onCodeChange}
      fontSize={20}
      value={value}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
      width="100%"
    />
  );
};

export default Editor;
