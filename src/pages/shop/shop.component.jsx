import React, { useState } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const ShopPage = () => {
  const [state, setState] = useState({
    collections: SHOP_DATA
  });

  const collections = state.collections;

  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default ShopPage;
