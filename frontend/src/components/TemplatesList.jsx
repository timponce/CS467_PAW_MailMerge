import React from "react";

export default function TemplatesList({
  templates,
  selectedTemplateId,
  onSelectTemplate,
  onAddTemplate,
  editableName,
  isDropdownOpen,
  onEditableNameChange,
  setIsDropdownOpen,
}) {
  const handleTemplateSelect = (id) => {
    onSelectTemplate(id); // Update selected template
    const selectedTemplate = templates.find((template) => template.id === id);
    if (selectedTemplate) {
      onEditableNameChange(selectedTemplate.name);
    }
    setIsDropdownOpen(false);
  };

  return (
    <div className="templates-container">
      <h3 className="templates-heading">Email Templates</h3>
      <div className="editable-name-container">
        <input
          type="text"
          value={editableName}
          onChange={(e) => onEditableNameChange(e.target.value)}
          className="editable-name-input"
        />
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="dropdown-toggle-button"
        >
          ▼
        </button>
        {isDropdownOpen && (
          <div className="custom-dropdown">
            {templates.map((template) => (
              <div
                key={template.id}
                className={`dropdown-option ${
                  selectedTemplateId === template.id ? "selected" : ""
                }`}
                onClick={() => handleTemplateSelect(template.id)}
              >
                {template.name}
              </div>
            ))}
          </div>
        )}
      </div>
      <button
        onClick={onAddTemplate}
        className="add-template-button"
      >
        Add New Template
      </button>
    </div>
  );
}
