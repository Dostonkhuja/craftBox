import React from 'react';
import styles from './manufactoring.module.css'
import target from './images/Group 2.png'
import phone from './images/phone-call 1.png'

const Manufactoring = () => {
    return (
        <div className={styles.manufactoringContainer}>
            <div className={styles.advantages}>
                <h5>Adavantages</h5>
               <div className={styles.advantagesBox}>
                   <div>
                       <h1>+5</h1>
                       <p>years of experience</p>
                   </div>
                   <div>
                       <h1>+1000</h1>
                       <p>satisfied customers</p>
                   </div>
                   <div>
                       <h1>%98</h1>
                       <p>regular customers</p>
                   </div>
                   <div>
                       <h1>+100</h1>
                       <p>unique products</p>
                   </div>
               </div>
            </div>
            <div className={styles.questions}>
                <div>
                    <h4>Have a questioins?</h4>
                    <p><img src={target}/> Ask our specialist</p>
                </div>
                <div className={styles.phoneNumber}>
                    <img src={phone}/> <p>+998 71 999 99 99</p>
                </div>
                <div>
                    <button className={styles.buttonProject}>Discuss your project</button>
                </div>
            </div>
        </div>
    );
};

export default Manufactoring;