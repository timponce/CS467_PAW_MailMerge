import React from "react";

export default function TemplatesList({ templates, selectedTemplateId, onSelectTemplate, onAddTemplate }){
    return (
        <div>
            <h3>Email Templates</h3>
            <select 
                value={selectedTemplateId} 
                onChange={(e) => onSelectTemplate(Number(e.target.value))} // Convert to number for template ID
            >
                {templates.map((template) => (
                <option key={template.id} value={template.id}>
                    {template.name}
                </option>
                ))}
            </select>
            <button onClick={onAddTemplate} style={{ marginLeft: '10px' }}>
                Add New Template
            </button>
        </div>
    )
}