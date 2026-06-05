import React from 'react'
import './Header.css'

import logo from'../../assets/img/logo.svg'

const Header = () =>{
    return(
        <>
            <header>
                <img src={logo} alt='Ricky and Morty Logo'/>
            </header>
            <div className='hero'>
                <h1>The Rick and Morty API</h1>
            </div>
            
        </>
    )
}

export default Header