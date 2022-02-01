import React from 'react';
import styles from './company.module.css'
import companyPhoto from './focused-male-engineer-glasses-operating-machine 1.jpg'

const Company = () => {
    return (
        <div className={styles.containerCompany}>
            <div className={styles.company}>
            <div>
                <h1>About company</h1>
                <p>Packaging has always had a significant influence on customer’s decisions. The function of packaging plays an important role
                    at the POS, as well as in the whole supply chain. We are helping you with these decisions by making the perfect packaging!
                    <br/> <br/>
                    As a packaging company, we are aware we have an important mission to satisfy not only our customers, but also their
                    customers. That has always been our number one priority.
                    <br/><br/>
                    Let us help with all steps leading to both your and your customer’s
                    complete satisfaction; from idea to realization.</p>
            </div>
            <div>
                <img src={companyPhoto}/>
            </div>
            </div>
        </div>
    );
};

export default Company;