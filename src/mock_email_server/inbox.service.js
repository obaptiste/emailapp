import React from 'react';
import { Component } from "React";
import email1 from './email-1.json';
import email2 from './email-2.json';
import email3 from './email-3.json';


class Inbox extends Component {
    constructor(props){
        super(props);
        
        let emails = [];
        let e_A = email1.data;
        let e_B = email2.data;
        let e_C = email3.data;
        emails = [e_A, e_B, e_C]
        let id = 0;

        console.log(emails);

        for (const email of emails) {
            email.id = id ++;
        }

        this.state = {
            selectedEmailId: 0,
            currentSection: 'inbox',
            emails
        };
    }
}
export default Inbox;