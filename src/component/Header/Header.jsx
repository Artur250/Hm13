import React from 'react'
import './Header.css'
import me from "../../assets/info/BSPP2266 (2).png"
import me2 from '../../assets/info/Group 3.png'


const Header = () =>{
    return (
        <div className='header'>
            <a href="" className="logo">Home</a>
            <nav className="nav">
                <a href="" className="link">About me</a>
                <a href="" className="link">Skills</a>
                <a href="" className="link">Portfolio</a>
                <a href="" className="link">Contact</a>
                </nav>

                 
                    <div className='Header'>
                    <h1>
                        Denis
                <br /> 
                        Novik
                    </h1>

                    
                        <h6>
                        UX | UI designer
                        <br />
                        24 years old, Minsk
                        </h6>
                 
                    </div>

                    

                <div className='image'>
                <img  src={me} alt="" />
                </div>
                
            

        </div>


    )
}


export default Header