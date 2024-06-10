import React from 'react';
import './LatestPost.css';
import latest_posts from '../Assets/latest_posts';

const LatestPost = () => {
  return (
    <div className='latest'>
      <div className="latest-heading">
        <h3>Latest Articles</h3>
        <hr />
      </div>
      <div className="latest-content">
        {latest_posts.map(post => (
          <div key={post.id} className="latest-content-item">
            <div className="latest-content-left">
              <img src={post.image} alt={post.heading} />
            </div>
            <div className="latest-content-right">
              <a href={post.link} target="_blank" rel="noopener noreferrer"><h3>{post.heading}</h3></a>
              <div className="post-info">
                <p>{post.name}</p>
                <p>{post.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LatestPost;
