import React from "react";

export default function TemplateEditor({
  headers,
  template,
  onTemplateChange,
}) {
  if (!template) {
    return <div>Please select or create a template.</div>;
  }
  return (
    <div className="template-editor">
      {headers.length > 0 && (
        <div
          style={{
            marginTop: "20px",
            border: "1px solid #ccc",
            padding: "10px",
          }}
        >
          <h3>Available CSV Headers for your MailMerge Template:</h3>
          <ul>
            {headers.map((header, index) => (
              <li key={index}>{`${header}`}</li>
            ))}
          </ul>
        </div>
      )}
      <h3>Template Editor</h3>
      <textarea
        value={template.content}
        onChange={(e) => onTemplateChange(e.target.value)}
        className="template-editor-text"
        rows="6"
        cols="50"
      />
    </div>
  );
}
