import React from "react";
import { jsPDF } from "jspdf";

const DownloadEmails = ({ generatedEmails }) => {
  const downloadAsTxt = () => {
    const blob = new Blob([generatedEmails.join("\n\n")], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "generated_emails.txt";
    link.click();
  };

  // Function to download as .pdf file
  const downloadAsPdf = () => {
    const doc = new jsPDF();
    generatedEmails.forEach((email, index) => {
      if (index > 0) doc.addPage();
      doc.text(email, 10, 10);
    });
    doc.save("generated_emails.pdf");
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={downloadAsTxt} style={{ marginRight: "10px" }}>Download as .txt</button>
      <button onClick={downloadAsPdf}>Download as .pdf</button>
    </div>
  );
};

export default DownloadEmails;
