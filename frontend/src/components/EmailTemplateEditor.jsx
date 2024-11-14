import React, { useState } from "react";

const EmailTemplateEditor = ({ headers, onTemplateChange }) => {
  const [template, setTemplate] = useState("");

  const handleTemplateChange = (event) => {
    const newTemplate = event.target.value;
    setTemplate(newTemplate);
    onTemplateChange(newTemplate);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      {/* Divider to show available column headers from CSV*/}
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
      <h3>Email Template:</h3>
      <textarea
        rows={5}
        cols={50}
        placeholder="Type your email template here..., e.g., 'Hello {firstName} {lastName}, your amount due is {amountDue}.'"
        value={template}
        onChange={handleTemplateChange}
      />
    </div>
  );
};

export default EmailTemplateEditor;
