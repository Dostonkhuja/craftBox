import React from 'react';
import styles from './contacts.module.css'
import location from './icons/pin 4.png'
import phone from './icons/phone-call 2.png'
import email from './icons/email 1.png'
import clock from './icons/wall-clock 1.png'

const Contacts = () => {
    const iframe = "<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13386.551414258658!2d-96.6223231018459!3d32.98695509532876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1c846a181d41%3A0xe1167132cabc18bd!2sHeptic!5e0!3m2!1sru!2s!4v1643641717398!5m2!1sru!2s\" " +
        "width=\"600\" height=\"410\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\"></iframe>"

    return (
        <div className={styles.contactsContainer}>
            <div className={styles.contactsBox}>
                <div>
                   <h1>Contacts</h1>
                    <div>
                        <img src={location}/>
                        <h5>3891 Ranchview Dr. Richardson, California 62639</h5>
                    </div>
                    <div>
                        <img src={phone}/>
                        <h5>(270) 555-0117</h5>
                    </div>
                    <div>
                        <img src={email}/>
                        <h5>infohelp@craftbox.com</h5>
                    </div>
                    <div>
                        <img src={clock}/>
                        <h5>Monday - Friday <br/>
                            09.00 - 18.00</h5>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={ {__html:  iframe?iframe:""}} />
            </div>
        </div>
    );
};

export default Contacts;