import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import email1 from './mock_email_server/email-1.json';
import email2 from './mock_email_server/email-2.json';
import email3 from './mock_email_server/email-3.json';

let emails = {};
emails = data.collection;
let messages = data.collection.pageinfo;

let inbox = [email1, email2, email3];

class App extends Component {
  state = {
    inbox:inbox,
    selectedEmail: null
  }

  componentDidMount() {
   
}

openEmail(e) {
  
  
  let id = e;
  console.log("message is ", id)
  const emails = this.state.inbox;
   id = parseInt(id);
 
  const index = emails.findIndex(x => x.id === e);
  console.log(index);  

  

  let selectedEmail = inbox.filter(x => x.id == id);
  let emailPrev = selectedEmail.map((x) => {
    console.log(x.body.text)
    
    this.setState({
      selectedEmail: x.body.html
    });
  }

  );

  console.log(selectedEmail)
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

      </div>
      )
      )}
      
     
        </div><div className="email_content">   
      <div  dangerouslySetInnerHTML={{__html: this.state.selectedEmail}}>
        </div>
      </div>
    </div>
  );

}
}

export default App;
