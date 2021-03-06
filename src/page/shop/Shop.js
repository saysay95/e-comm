import React from 'react'
import './Shop.scss'
import CollectionOverview from '../../component/collection-overview/CollectionOverview'
import {Route} from 'react-router-dom'
import CollectionPage from '../collection/Collection'

const ShopPage = ({match}) => (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverview}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
    );


export default ShopPage;