import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';

function App() {

  const [templates, setTemplates] = useState([
    { id: 1, name: 'Greetings', content: 'Greetings {{name}}, \nHope everything is going well.\nThe following email is to...\nI look forward to your answer.\nThanks.'}
  ]);

  const [selectedTemplateId, setSelectedTemplateId] = useState(1);

  const [recipients, setRecipients] = useState([]);

  const [previewRecipient, setPreviewRecipient] = useState(null);

  const selectedTemplate = templates.find((template) => template.id === selectedTemplateId);

  const handleEmailGeneration = () => {

    recipients.forEach((recipient)=>{
      let emailcontent = selectedTemplate.content;
      Object.keys(recipient).forEach((csvColumn) => {
        const placeholder = `{{${csvColumn}}}`
        emailcontent = emailcontent.replace(new RegExp(placeholder, 'g'), recipient[csvColumn]);
      });
    })
  }

  return (
    
    <div className="App">
      <Header></Header>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
