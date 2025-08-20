import React from 'react'
import Products from '../../components/home/Products'
import AdsVideos from '../../components/home/AdsVideos'
import OurStory from '../../components/home/OurStory'
import AveesSpecials from '../../components/home/AveesSpecials'
import OurBrands from '../../components/home/Brands'
import Banner from '../../components/home/Banner'
import OurFoods from '../../components/home/OurFoods'
import Batters from '../../components/home/Batters'

function HomeContents() {
  return (
    <div>
        <Banner/>
        <Products/>
        <OurFoods/>
        <AveesSpecials/>
        <Batters/>
        <OurStory/>
        <AdsVideos/>
        {/* <OurBrands/> */}
    </div>
  )
}

export default HomeContents







