import React, {useState} from 'react'
import styles from './home.module.css'
import logo from './images/logo.png'
import group3 from './images/Group3.png'
import phone from './images/phone-call 1.png'
import menu from './images/Menu_icon_icon-icons.com_71858.png'

const Home = () => {

    const [openMenu,setOpenMenu] = useState(false)
    
    return <div className={styles.container}>
               <div className={styles.navbar}>
                    <ul>
                        <li><img src={logo}/></li>
                        <li>Product</li>
                        <li>Company</li>
                        <li>Manufactoring</li>
                        <li>Experience</li>
                        <li>Contacts</li>
                        <li><img src={phone}/> +99871 999 99 99</li>
                    </ul>
               </div>
        <div className={styles.mobileNavbar}>
            <ul>
                <li><img src={logo}/></li>
                <li><button onClick={()=>setOpenMenu(!openMenu)} className={styles.menuButton}><img src={menu} className={styles.mobileMenuButton}/></button></li>
            </ul>
        </div>

        {openMenu &&
            <div className={styles.mobileMenu}>
                <ul>
                    <li>Product</li>
                    <li>Company</li>
                    <li>Manufactoring</li>
                    <li>Experience</li>
                    <li>Contacts</li>
                </ul>
            </div>
        }

        <div className={styles.box}>
            <div>
            <h1 className={styles.title}>
                Inovatite
                <br/>
                carton products
                <br/>
                and solution
            </h1>
            <p className={styles.description}>
                At CraftBox we have a long tradition of producing
                <br/>
                corrugated packaging
                and integrating paper. We’re
                <br/>
                innovative and have the expertise
                to consistently deliver
                <br/>
                high-quality products that meet our customers’ needs.
            </p>
                <div className={styles.downloadButtonWrapper}>
            <button className={styles.downloadButton}>
                Download catalog
            </button>
                </div>
            </div>

            <div className={styles.fiberboard}>
                <div className={styles.fiberboardChild1}>
                    <img src={group3} />
                   <span> Corrugated fiberboard</span>
                </div>
                <img src={group3} />
                <img src={group3} />
            </div>
        </div>
            </div>
}

export default Home;