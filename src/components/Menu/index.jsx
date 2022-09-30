import React from 'react'

import styles from './Menu.module.css';

function Menu({ items }) {

    return (
        < div className={styles.mainMenu} >
            <ul>
                {items.map((name, index) => (
                    <li
                        className={items.index === index ? styles.active : ''}
                        key={`${name}_${index}`}>
                        {name}
                    </li>
                ))}
            </ul>
        </div >
    );
}

export default Menu