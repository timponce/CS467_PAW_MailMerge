import React from "react";

const EmailPreviewer = ({ generatedEmails }) => {
  return (
    <div>
      <h2>Generated Emails</h2>
      {generatedEmails.length > 0 ? (
        <ul>
          {generatedEmails.map((email, index) => (
            <li
              key={index}
              style={{
                marginBottom: "20px",
                border: "1px solid #ccc",
                padding: "10px",
              }}
            >
              {email}
            </li>
          ))}
        </ul>
      ) : (
        <p>
          No emails generated yet. Upload a CSV and create a template above.
        </p>
      )}
    </div>
  );
};

export default EmailPreviewer;
