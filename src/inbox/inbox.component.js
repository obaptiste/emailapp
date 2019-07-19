import React from 'react';
import './inbox.css';

import MessageService from './inbox.service'; 
import data from '../mock_email_server';

class App extends Component {
    constructor(props){
        super(props);
        
        const emails = this.props.emails;
        let id = 0;

        for (const email of emails) {
            email.id = id ++;
        }

        this.state = {
            selectedEmailId: 0,
            currentSection: 'inbox',
            emails
        };
    }

    openEmail(id) {
        const emails = this.state.emails;
        const index = emails.findIndex(x => x.id === id);
        emails[index].read = 'true';
        this.setState({
            selectedEmailId: id,
            emails
        });

        console.log(emails)

    }
}