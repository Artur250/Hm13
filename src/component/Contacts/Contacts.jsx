import React from 'react';
import './Contacts.css'
import img6 from '../../assets/info/Group 12.png'

const Contacts = () => {
   
        return (
            <div className='Contacts'>

                <div className='contacts'>
                    <h1>Contacts</h1>
                    <br />
                    <p>Want to know more or just chat? 
                        <br />
                        You are welcome!</p>
                        <br />

                    <button className='btn2'>Send message</button>
                        <br /><br />
                    <img src={img6} alt="" />
                        <br /><br />
                    <p>Like me on
                        <br />  
                    LinkedIn, Instagram, Behance, Dribble</p>

                </div>


                
            </div>
        );
    }


export default Contacts;
