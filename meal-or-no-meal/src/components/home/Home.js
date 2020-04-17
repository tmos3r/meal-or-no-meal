import React from 'react';

import { useHistory } from 'react-router-dom';

import Calendar from './Calendar';

import styles from './styles/Home.module.css';

const Home = () => {
    let history = useHistory();

    const handleCalendarClick = () => {
        history.push('/meals');
    };

    return (
        <div className={styles.home}>
            <Calendar onClick={handleCalendarClick} />
        </div>
    );
};

export default Home;