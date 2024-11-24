import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';

export default function InstructionsPage() {
    return (
        <div className="instructions-page">
            <h2>How to Use</h2>
            <p>To use Paw MailMerge, please follow these steps:</p>
            <ol>
                <li>
                    <strong>Upload CSV:</strong> Click "Upload CSV" and input a valid CSV file 
                    (note: one of your columns must be titled "email" and contain each recipient's email address).
                </li>
                <li>
                    <strong>Select or Add a Template:</strong> Choose an existing template from the dropdown menu or click 
                    "Add New Template" to create a new one.
                </li>
                <li>
                    <strong>Edit Template:</strong> Use the Template Editor to modify your template, 
                    placing curly brackets around each available CSV header for example, if name is a column header in your CSV,
                    you would use "<code>{"{name}"}</code>".
                </li>
                <li>
                    <strong>Email Preview:</strong> Verify your generated email using the Email Preview section.
                </li>
                <li>
                    <strong>Generate Emails:</strong> Select the appropriate button to view your emails in new tabs 
                    or download them as a file.
                </li>
            </ol>

            {/* Back Button */}
            <div className="back-button-container">
                <Link to="/">
                    <button className="back-button">Back</button>
                </Link>
            </div>
        </div>
    );
}
