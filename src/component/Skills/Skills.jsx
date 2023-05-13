import React from 'react';
import './Skills.css'
import img from '../../assets/info/Group 6.png'
import img1 from '../../assets/info/Group 6 (1).png'
import img2 from '../../assets/info/Group 6 (2).png'
import img3 from '../../assets/info/Group 7.png'



const Skills = ()=> {
   
        return (
            <div className='Skills'>
                <div className='skills'>
                        <h1>
                             Skills  
                        </h1>
                    <br /><br />
                        <p>I work in such programs as</p>
                </div>



            <div className='image2'>
                <img  src={img} alt="" />
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img  src={img3} alt="" />
            </div>


            </div>
        );
    }


export default Skills;