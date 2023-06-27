import React, { Component, useState } from 'react'
import './searchBox.css'
import Box from './box/Box'
import {useNavigate} from 'react-router-dom'

const SearchBox = () => {

    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("");

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/products/${keyword}`);

        }
    };
    
    return (
        <div className='searchBox'>
            <div className='searchBoxLeft'>
                <h1 className='searchBoxHeading'>
                    Share your Blessings
                </h1>
                <p className='searchBoxPara'> Make impressions to your customers
                    <div className='numbers'>
                        <p>50+ Templates</p>
                        <p>|</p>
                        <p>100+ Customers</p>
                    </div>
                    
                </p>
                <div className='box'>
                    {/* <Box/> */}
                    <form className="searchBar" onSubmit={searchSubmitHandler}>
                        <input type="text"
                            placeholder="Search a product..."
                            onChange={(e) => setKeyword(e.target.value)}
                            className='searchBar-input'
                        />
                        <input className="searchBar-submit" type="submit" value="Search"/>
                    </form>
                </div>

            </div>
        </div>
    )
    
}

export default SearchBox;
