import "./intro.css"
import myphoto from '../../img/myphoto.jpeg';
import React from 'react';
const Intro = ()=>{
return(
    <div className='i'>
    <div className='i-left'>
        <div className="i-left-wrapper">
            <h2 className="i-intro"> Hello, My name is</h2>
            <h1 className="i-name"> Suyog Sinnarkar</h1>
            <div className="i-title">
                <div className="i-title-wrapper">
                <div className="i-title-item">I am a Web Developer</div>
                </div>
            </div>
        <div className="i-desc">
            {/* I make websites */}
        </div>
        </div>
    </div>
    <div className='i-right'>
        <img src={myphoto} className="i-img"/>
    </div>
    </div>
)
}
export default Intro;