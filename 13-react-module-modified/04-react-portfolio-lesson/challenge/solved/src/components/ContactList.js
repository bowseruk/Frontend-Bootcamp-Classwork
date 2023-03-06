import React from 'react';
import spockContactData from '../data/spockContactData.json'
import ContactCard from './ContactCard';

const ContactList = () => {

    const contactInfoList = spockContactData.map((contact, i) => <ContactCard {...contact} key={i} />)

    return (
        <footer className='contact-list'>
            {contactInfoList}
        </footer>
    );
};

export default ContactList;