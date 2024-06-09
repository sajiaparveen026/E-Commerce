import React from 'react'
import all_products from '../Components/Assets/all_products'
import {useParams} from 'react-router-dom'
import Breadcrums from '../Components/BreadCrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplpay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {productId} = useParams();
  const product = all_products.find((e)=>e.id===Number(productId))
  return (
    <div className=''>
      <Breadcrums  product={product}/>
      <ProductDisplay  product={product}/>
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product