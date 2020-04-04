import React from 'react';

import img from '../logo.svg';

import styles from './styles/Logo.module.css';

const Logo = () => {
    return (
        <div>
            <img className={styles.logo} data-testid="logo" src={img} alt="" />
        </div>
    );
};

export default Logo;