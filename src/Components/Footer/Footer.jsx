import React from 'react';
import styles from './footer.module.css'
import logo from './icons/logo.png'
import phone from './icons/phone-call 1.png'
import facebook from './icons/facebook 1.png'
import insta from './icons/instagram 1.png'
import telegram from './icons/telegram 1.png'

const Footer = () => {
    return (
        <div className={styles.footerContaiener}>
            <div>
                <img src={logo} />
                <ul>
                    <li>Prodducts</li>
                    <li>Company</li>
                    <li>Manufactoring</li>
                    <li>Experience</li>
                    <li>Contacts</li>
                </ul>
                <p>Group of companies CrafBox <br/> All right reserved</p>
            </div>
            <div>
                <p>Contact us</p>
                <div><img src={phone}/><p> +998 71 999 99 99</p></div>
                <p>Social media</p>
                <div>
                    <img src={facebook}/>
                    <img src={insta}/>
                    <img src={telegram}/>
                </div>
            </div>
        </div>
    );
};

export default Footer;