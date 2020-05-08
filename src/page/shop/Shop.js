import React from 'react'
import PreviewCollection from '../../component/preview-collection/PreviewCollection'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { selectCollections } from '../../redux/shop/shop.selectors'

const ShopPage = ({collections}) => {
        return (<div className='shop-page'>
            {
                collections.map(({ id, ...otherProps }) => (
                    <PreviewCollection key={id} {...otherProps} />
                ))
            }
        </div>);
    }

const mapStateToProps = createStructuredSelector({
    collections : selectCollections 
});

export default connect(mapStateToProps)(ShopPage);