import React, { useState } from 'react';
import './Search.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../components/StateProvider';
import { actionTypes } from './reducer';

const Search = () => {
    const [{ }, dispatch] = useStateValue();
    const [searchVal, setSearchVal] = useState("");
    const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: searchVal,
        });
        navigate("/search");
    }


    return (
        <form>
            <div className='search'>
                <input type="text"
                    id='input'
                    value={searchVal}
                    placeholder='Search'
                    onChange={(e) => {
                        setSearchVal(e.target.value);
                    }
                    } />
            </div>
            <button onClick={search} type='submit' className='btn'>
                <SearchRoundedIcon fontSize='large' />
            </button>
        </form>
    );
}

export default Search;