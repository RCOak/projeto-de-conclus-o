import React from 'react'

import BannerAdm from "./BannerAdm.jsx";
import ManageOrders from './ManageOrders.jsx';
import MenuAdm from './MenuAdm.jsx';

function AdmProducts() {
  return(
    <div>
      <BannerAdm />
      <MenuAdm />
      <ManageOrders />
    </div>
  )
}

export default AdmProducts