import React from 'react'
import './MenuItem.scss'

const MenuItem = ({title, subtitle, imageUrl, size}) => {
    return (
            <div className={`size : ${size} menu-item`} >
                    <div className='background-image' 
                         style={{backgroundImage : `url(${imageUrl})`}}/>
                <div className='content'>
                    <h1 className='title'>{title}</h1>
                    <span className='subtitle'>{subtitle}</span>
                </div>
            </div>
            );
};

export default MenuItem