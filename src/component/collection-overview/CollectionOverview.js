import React from 'react'
import './CollectionOverview.scss'
import {connect} from 'react-redux'  
import {createStructuredSelector} from 'reselect'
import PreviewCollection from '../preview-collection/PreviewCollection'
import { seletCollectionsForPreview } from '../../redux/shop/shop.selectors'

const CollectionOverview = ({collections}) => (
    <div className="collections-overview">
        {
            collections.map(({ id, ...otherProps }) => (
                <PreviewCollection key={id} {...otherProps} />
            ))
        }
    </div>

);

const mapStateToProps = createStructuredSelector({
    collections: seletCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);