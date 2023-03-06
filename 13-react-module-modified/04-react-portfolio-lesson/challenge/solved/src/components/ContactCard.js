import React from 'react';

const ContactCard = ({ platform, hyperlink, content }) => {
    return (
        <div>
            <a
                id={platform}
                href={hyperlink}
                target='_blank'
                rel="noreferrer"
                className='btn btn-primary'
                
            >
                {content}
            </a>
        </div>
    );
};

export default ContactCard;