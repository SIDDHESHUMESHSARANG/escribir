import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useEffect, useRef, useState } from "react";
import "../App.css";

export const TextEditor = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [quill, setQuill] = useState<Quill | null>(null);

  useEffect(() => {
    if (editorRef.current) {
      const q = new Quill(editorRef.current, { theme: "snow" });
      setQuill(q);
    }
  }, []);

  const handleSave = () => {
    if (quill) {
      const content = quill.root.innerHTML;

      const blob = new Blob(
        [
          `<!DOCTYPE html>
          <html>
          <head><meta charset="UTF-8"></head>
          <body>${content}</body>
          </html>`
        ],
        { type: "application/msword" }
      );

      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Escribir-Document.docx";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="editor-container">
      <div className="toolbar">
        <span className="editor-title">Escribir</span>
        <button className="btn btn-primary btn-sm" onClick={handleSave}>
          Save as DOCX
        </button>
      </div>

      <div className="editor-wrapper">
        <div ref={editorRef} className="editor" />
      </div>
    </div>
  );
};
