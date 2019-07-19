import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import email1 from './mock_email_server/email-1.json';
import email2 from './mock_email_server/email-2.json';
import email3 from './mock_email_server/email-3.json';
import CollapsibleEmailBody from './collapsibleEmail';

let emails = {};
emails = data.collection;
let messages = data.collection.pageinfo;

let inbox = [email1, email2, email3];


class App extends Component {
  constructor(props){
    super(props);
    this.prvRef = React.createRef();
    
  }
  
  state = {
    inbox:inbox,
    selectedEmail: null
  }

  updateRef() {
    this.prvRef.current = this.state.preview;
    return;
  }

openEmail(e) { 
  let id = e;
  id = parseInt(id);
 
  let selectedEmail = inbox.filter(x => x.id == id);
  selectedEmail.map((x) => {
    this.setState({
      selectedEmail: x.body.html,
    });
  });  
}

openPreview(e) { 
  let id = e;
  id = parseInt(id);
 
  let selectedPreview = inbox.filter(x => x.id == id);
  selectedPreview.map((x) => {
    this.prvRef.current =  x.body.text.substring(150, 250);
    this.setState({
      selectedPreview: x.body.text.substring(150, 250)
    });
  });  
}

render() {
  return (
    <div className="App">
      <header className="App-header">
        <p>An Inbox creation</p>
        <p>You have {messages.total} messages</p>
      </header>

      
      <div className="inbox">
      {emails && emails.items.map((email) => (
        <div key={email.id} className="email">
          <span className="e_name">
            {email.name}
          </span>
          <span className="subject">{email.subjects}</span>
          <button onClick={(e) => this.openEmail(email.id)}>Read me</button>  
          
          <CollapsibleEmailBody>
            {(collapsed, toggleCollapse) => {
              if (collapsed) {
                return (
                  <tr>
                    <td>
                      <button onClick={(e) => {
                          toggleCollapse();
                          this.openPreview(email.id)
                        }}>View Preview</button>
                    </td>
                  </tr>
                );
              } else {
                return (
                  <tr>
                    <td>
                      <button onClick={toggleCollapse}>Hide Preview</button>
                    </td>
                    <td>
                        {/* <span className="preview">{this.state.selectedPreview}</span>      */}
                        <span>{this.prvRef.current}</span>                 
                    </td>
                  </tr>
                );
              }
            }}
          </CollapsibleEmailBody>
      </div>
      )
      )}    
      </div>
      
      <div className="email_content">   
        <div  dangerouslySetInnerHTML={{__html: this.state.selectedEmail}}></div>
      </div>
    </div>
  );

}
}

export default App;
