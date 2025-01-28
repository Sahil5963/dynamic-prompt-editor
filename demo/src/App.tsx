import { useEffect, useRef, useState } from "react";
import { DraftPromptEditor, DraftPromptEditorRef } from "../../src";
import { defaultSuggestions } from "../../src/utils/constants";
import "./App.css";

function App() {
  const [promptValue, setPromptValue] = useState<string>("Hello {{VISITOR.name}}, welcome to {{CONTACT.company}}!");
  const editorRef = useRef<DraftPromptEditorRef>(null);

  useEffect(() => {
    console.log(editorRef.current?.getEditor());
  });

  return (
    <div className="app-container">
      <h1>Dynamic Prompt Editor Demo</h1>
      <section className="editor-section">
        <h2>Basic Usage</h2>
        <DraftPromptEditor ref={editorRef} value={promptValue} onChange={setPromptValue} suggestions={defaultSuggestions} />
      </section>
    </div>
  );
}

export default App;
