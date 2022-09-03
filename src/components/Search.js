import React, { useState } from 'react';
import './Search.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [searchVal, setSearchVal] = useState("");
    const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault();
        navigate.push("/search");
    }

    return (
        <form>
            <div className='search'>
                <input type="text"
                    id='input'
                    value={searchVal}
                    onChange={(e) => {
                        setSearchVal(e.target.value);
                    }
                    } />
            </div>
            <button onClick={search} className='btn'>
                <SearchRoundedIcon fontSize='large' />
            </button>
        </form>
    );
}

export default Search;