import React, { useState } from "react";
import CSVUploader from "./components/CSVUploader";

const App = () => {
  const [csvData, setCsvData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [emailTemplate, setEmailTemplate] = useState("");
  const [generatedEmails, setGeneratedEmails] = useState([]);

  const handleDataParsed = ({ data, headers }) => {
    setCsvData(data);
    setHeaders(headers);
    console.log("Parsed Data: ", data);
    console.log("Headers: ", headers);
  };

  const handleTemplateChange = (event) => {
    setEmailTemplate(event.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>PAW MailMerge</h1>
      <CSVUploader onDataParsed={handleDataParsed} />

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

      {/*Email Template */}
      <div style={{ marginTop: "20px" }}>
        <h3>Email Template:</h3>
        <textarea
          value={emailTemplate}
          onChange={handleTemplateChange}
          rows={5}
          cols={50}
          placeholder="Type your email template here..."
          style={{ width: "100%", padding: "10px" }}
        />
      </div>
    </div>
  );
};

export default App;
