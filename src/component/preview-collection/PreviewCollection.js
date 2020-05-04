import React from 'react'
import './PreviewCollection.scss'
import '../collection-item/CollectionItem'
import CollectionItem from '../collection-item/CollectionItem';

const PreviewCollection = ({ title, items }) => {
    return (<div className='collection-preview'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <div className='preview'>
                    {items 
                    .filter((item,index) => index < 4)
                    .map(({id, ...otherProps}) => (
                        <CollectionItem key={id} {...otherProps}/>
                    ))}
                </div> 
            </div>);
}

export default PreviewCollection;