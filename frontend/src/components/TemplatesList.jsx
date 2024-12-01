import React from "react";

export default function TemplatesList({
  templates,
  selectedTemplateId,
  onSelectTemplate,
  onAddTemplate,
  onEditableNameChange,
  onDeleteTemplate,
  onDeleteAllTemplates,
}) {
  const handleTemplateSelect = (id) => {
    onSelectTemplate(id);
  };

  const confirmDeleteTemplate = (id) => {
    const templateToDelete = templates.find((template) => template.id === id);
    if (
      window.confirm(
        `Are you sure you want to delete the template "${templateToDelete.name}"?`
      )
    ) {
      onDeleteTemplate(id);
    }
  };

  const confirmDeleteAllTemplates = () => {
    if (
      window.confirm(
        "Are you sure you want to delete all templates? This action cannot be undone."
      )
    ) {
      onDeleteAllTemplates();
    }
  };

  return (
    <div className="templates-container">
      <h3 className="templates-heading">Email Templates</h3>
      <div className="template-dropdown">
        {templates.length > 0 ? (
          templates.map((template) => (
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
              <button
                className="delete-template-button"
                onClick={(e) => {
                  e.stopPropagation();
                  confirmDeleteTemplate(template.id);
                }}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="no-templates-message">No templates available</p>
        )}
      </div>
      <button onClick={onAddTemplate} className="add-template-button">
        Add New Template
      </button>
      <button
        onClick={confirmDeleteAllTemplates}
        className="delete-all-templates-button"
      >
        Delete All Templates
      </button>
    </div>
  );
}
