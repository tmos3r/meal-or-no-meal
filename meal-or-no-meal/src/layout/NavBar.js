import React from 'react';

import Logo from './Logo';

import styles from './styles/NavBar.module.css';

const NavBar = () => {
    return (
        <div className={styles.navbar} data-testid="navBar">
            <Logo />
        </div>
    );
};

export default NavBar;