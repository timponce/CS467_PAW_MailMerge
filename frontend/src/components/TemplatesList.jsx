import React from "react";

export default function TemplatesList({
  templates,
  selectedTemplateId,
  onSelectTemplate,
  onAddTemplate,
  onEditableNameChange,
}) {
  const handleTemplateSelect = (id) => {
    onSelectTemplate(id);
  };

  return (
    <div className="templates-container">
      <h3 className="templates-heading">Email Templates</h3>
      <div className="template-dropdown">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`dropdown-item ${
              selectedTemplateId === template.id ? "selected" : ""
            }`}
            onClick={() => handleTemplateSelect(template.id)}
          >
            <input
              type="text"
              value={template.name}
              onChange={(e) =>
                onEditableNameChange(template.id, e.target.value)
              }
              className="editable-name-input"
              onClick={(e) => {
                e.stopPropagation();
                handleTemplateSelect(template.id);
              }}
            />
          </div>
        ))}
      </div>
      <button onClick={onAddTemplate} className="add-template-button">
        Add New Template
      </button>
    </div>
  );
}
