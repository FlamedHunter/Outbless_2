
import SearchBox from './components/searchBox/SearchBox';
import BestSelling from './components/bestselling/BestSelling';
import Aboutus from './components/aboutus/Aboutus';
import Testimonialbox from './components/testimonialbox/Testimonialbox';
import Category from './components/category/Category';

import React from 'react'

export default function Home() {
  return (
    <>
      <SearchBox/>
      <BestSelling/>
      <Aboutus/>
      <Category/>
      <Testimonialbox/>
    </>
  )
}
