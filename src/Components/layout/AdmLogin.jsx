import React from 'react'

import BannerAdm from "./BannerAdm.jsx";
import ManageBlog from './ManageBlog.jsx';
import MenuAdm from './MenuAdm.jsx';

function AdmLogin() {
  return(
    <div>
      <BannerAdm />
      <MenuAdm />
      <ManageBlog />
    </div>
  )
}

export default AdmLogin