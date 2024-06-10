import React from 'react'
import './BlogPost.css'

const BlogPost = (props) => {
  return (
    <div className='post'>
        <div className="post-left">
           <img src={props.image} alt="" /> 
           {/* <hr /> */}
        </div>
        <div className="post-right">
            <a href={props.link} target="_blank" rel="noopener noreferrer"><h3>{props.heading}</h3></a>
            <div className='post-right-info'>
            <p>{props.name}</p>
            <p>{props.date}</p>
            </div>
        </div>
    </div>
  )
}

export default BlogPost