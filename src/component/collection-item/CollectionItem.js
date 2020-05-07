import React from 'react'
import './CollectionItem.scss'
import CustomButton from '../custom-button/CustomButton'

const CollectionItem = ({name, price, imageUrl}) =>
(
    <div className='collection-item'>
        <div className='image'
             style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <CustomButton inverted>ADD</CustomButton>
    </div>
);

export default CollectionItem;