import React from 'react'
import FeaturedPost from '../Components/FeaturedPost/FeaturedPost'
import './CSS/Blogs.css'
import LatestPost from '../Components/RelatedPost/LatestPost'

const Blogs = () => {
  return (
    <div>
     
      <FeaturedPost/>
      <LatestPost/>
    </div>
  )
}

export default Blogs