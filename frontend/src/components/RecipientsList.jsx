import React from "react";

export default function RecipientsList({ recipients, onSelectRecipient }) {
    if (!recipients || recipients.length === 0) {
        return <p>No recipients available</p>; // Show a message if there are no recipients
      }
      
    return (
        <div>
            <h3>Recipients</h3>
            <ul>
                {recipients.map((recipient, index) => (
                    <li
                        key={index}
                        onClick={() => onSelectRecipient(recipient)}
                        style={{ cursor: 'pointer', marginBottom: '8px' }}
                    >
                        {recipient.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}