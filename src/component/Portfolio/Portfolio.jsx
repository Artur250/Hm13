import React from 'react';
import './Portfolio.css'
import img4 from '../../assets/info/Слой 8.png'
import img5 from '../../assets/info/reebok_web.png'
import img6 from '../../assets/info/reebok_web (1).png'




const Portfolio = () =>  {
     
        return (
            <div className='Portfolio'>
                <div className='portfolio'>
                    <h2>Portfolio</h2>
                    <br /><br />
                <img src={img4} alt="" />
                <br />
                <p>Online fashion store - Homepage</p>
                <br />
                <img src={img5} alt="" />
                <br />
                <p>Reebok Store - Concept</p>
                <br />
                <img src={img6} alt="" />
                <br />
                <p>Braun Landing Page - Concept</p>

                </div>
            </div>
        );
}


export default Portfolio;
