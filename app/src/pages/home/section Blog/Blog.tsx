import React from 'react';
import blog1 from '../../../assets/image/home/blog/blog-1.jpg';
import blog2 from '../../../assets/image/home/blog/blog-2.jpg';
import blog3 from '../../../assets/image/home/blog/blog-3.jpg';
import superHero1 from '../../../assets/image/home/blog/superhero1.svg';
import superHero2 from '../../../assets/image/home/blog/superhero2.svg';
import superHero3 from '../../../assets/image/home/blog/superhero3.svg';
import gitHub from '../../../assets/image/home/blog/github.svg';
import './Blog.css';

const Blog = () => {
  return (
    <section className="blog">
      <div className="container">
        <h1 className="blogTitle">Hard workers</h1>
        <div className="blogWrapper">
          <div className="item">
            <img src={blog1} alt="blog images" className="itemImg" />
            <div className="itemInfo">
              <img className="hero" src={superHero1} alt="super hero" />
              <span>Andrew - Documentation!!!</span>
            </div>
          </div>
          <div className="item">
            <img src={blog2} alt="blog images" className="itemImg" />
            <a href="https://github.com/shastinmax" className="itemInfo">
              {' '}
              <img className="hero" src={superHero3} alt="super hero" />
              <div className="inner">
                <span>MC Max !!!</span>
                <img src={gitHub} alt="gitHub" />
              </div>
            </a>
          </div>
          <div className="item">
            <img src={blog3} alt="blog images" className="itemImg" />
            <a href="https://github.com/Nekipel" className="itemInfo">
              <img className="hero" src={superHero2} alt="super hero" />
              <div className="inner">
                <span>AnatolicH !!!</span>
                <img src={gitHub} alt="gitHub" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
