import React from 'react';
import styles from './products.module.css'
import produc1 from './images/we-products/blank-fast-food-cup-burger-packages-with-paper-bag 1.png'
import produc2 from './images/we-products/production 2 hover.png'
import produc3 from './images/we-products/carton-boxes 1.png'
import ourProduct1 from './images/our-products/Rectangle 5.jpg'
import ourProduct2 from './images/our-products/Rectangle 6.jpg'
import ourProduct3 from './images/our-products/Rectangle 7.jpg'
import ourProduct4 from './images/our-products/Rectangle 8.jpg'
import ourProduct5 from './images/our-products/Rectangle 9.jpg'
import ourProduct6 from './images/our-products/Rectangle 10.jpg'

const Products = () => {
    return (<>
        <div className={styles.products}>
            <h5 className={styles.weProductsTitile}>We products</h5>
            <div className={styles.weProductsItemBox}>
                <img src={produc1}/>
                <img src={produc2}/>
                <img src={produc3}/>
            </div>
        </div>

        <div className={styles.products}>
            <h5 className={styles.ourProductsTitile}>Our products</h5>
            <div className={styles.ourProductsItemBox}>
                <div>
                    <img src={ourProduct1}/>
                </div>
                <div>
                    <img src={ourProduct2}/>
                    <img src={ourProduct3}/>
                </div>
                <div>
                    <img src={ourProduct4}/>
                    <img src={ourProduct5}/>
                    <img src={ourProduct6}/>
                </div>
            </div>
        </div>
    </>);
};

export default Products;