import React from "react";
import "./Featuredpost.css";
import Post from "../BlogItem/BlogPost";
import featured_posts from "../Assets/featured_posts";

const FeaturedPost = () => {
  // Find the first post that is active
  const leftPost = featured_posts.find(post => post.active === "yes");

  return (
    <div className="featured-post">
      <div className="featured-post-left">
        {leftPost && (
          <>
            <img src={leftPost.image} alt="" />
            <h5>{leftPost.heading}</h5>
            <p className="post-description">{leftPost.description}</p>
           <div className="left-post-info">
           <p>{leftPost.name}</p>
           <p>{leftPost.date}</p>
           </div>
          </>
        )}
      </div>
      <div className="featured-post-right">
        <h4>Featured Articles</h4>
        <hr className="right-line"/>
        <div className="featured_post_content">
          {featured_posts.map((item, i) => {
            if(item.active === "no"){
              return (
                <Post
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  heading={item.heading}
                  date={item.date}
                  link={item.link}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
