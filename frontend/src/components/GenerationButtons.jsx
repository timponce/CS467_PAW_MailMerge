import React from "react";

const GenerationButtons = ({
  onViewEmailsInNewTabs,
  onDownloadAsTxt,
  onDownloadAsPdf,
}) => {
  return (
    <div className="generation-buttons">
      <button onClick={onViewEmailsInNewTabs}>View emails in new tabs</button>
      <button onClick={onDownloadAsTxt}>Download as TXT</button>
      <button onClick={onDownloadAsPdf}>Download as PDF</button>
    </div>
  );
};

export default GenerationButtons;
