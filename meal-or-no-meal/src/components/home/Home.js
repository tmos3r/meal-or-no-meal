import React from 'react';

import Calendar from './Calendar';

import styles from './styles/Home.module.css';

const Home = () => {
    return (
        <div className={styles.home}>
            <Calendar />
        </div>
    );
};

export default Home;