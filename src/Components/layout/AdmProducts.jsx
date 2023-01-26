import React from 'react'

import BannerAdm from "./BannerAdm.jsx";
import ManageProduct from './ManageProduct.jsx';
import MenuAdm from './MenuAdm.jsx';

function AdmProducts() {
  return(
    <div>
      <BannerAdm />
      <MenuAdm />
      <ManageProduct />
    </div>
  )
}

export default AdmProducts