import React from "react";

export default function EmailPreview({ template, recipient }) {

  const generatePreview = () => {
    if (!template || !template.content) {
      return 'No template selected';
    }

    let preview = template.content;
    Object.keys(recipient).forEach((csvColumn) => {
      const placeholder = `{${csvColumn}}`;
      preview = preview.replace(new RegExp(placeholder, 'g'), recipient[csvColumn]);
    });
    return preview;
  };

  return (
    <div className="email-preview">
      <h3>Email Preview</h3>
      <div className="email-preview-text"><p>{generatePreview()}</p></div>
    </div>
  )
}