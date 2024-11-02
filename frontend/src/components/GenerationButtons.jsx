import React from 'react';

export default function GenerationButtons({ onViewEmailsInNewTabs, onDownloadAsTxt, onDownloadAsPdf }) {

    return (
        <div className='generation-buttons'>
            <button onClick={onViewEmailsInNewTabs}>View emails in new tabs</button>
            <button onClick={onDownloadAsTxt}>Download as TXT</button>
            <button onClick={onDownloadAsPdf}>Download as PDF</button>
        </div>
    );
}