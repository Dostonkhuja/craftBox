import React from 'react';
import styles from './partners.module.css'
import logo1 from './partners-logo/Glamour-product 1.png'
import logo2 from './partners-logo/neomed 1.png'
import logo3 from './partners-logo/lakomka 1.png'
import logo4 from './partners-logo/logo 1.png'

const Partners = () => {
    return (
        <div className={styles.partnersContainer}>
            <div className={styles.ourPartners}>
                <h5>Our partners</h5>
                <div className={styles.ourPartnersBox}>
                    <img src={logo1}/>
                    <img src={logo2}/>
                    <img src={logo3}/>
                    <img src={logo4}/>
                </div>
            </div>
        </div>
    );
};

export default Partners;