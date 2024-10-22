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

  return (
    <div style={{ padding: "20px" }}>
      <h1>PAW MailMerge</h1>
      <CSVUploader onDataParsed={handleDataParsed} />
    </div>
  );
};

export default App;
