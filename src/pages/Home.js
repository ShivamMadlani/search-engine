import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../components/Search';

const Home = () => {
    return (
        <>
            <div className='App-header'>
                Search Engine
            </div>
            <div className='body'>
                <Search />
            </div>
        </>
    );
}

export default Home;