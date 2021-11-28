import React from 'react';
import './banner.css'
import BlogCards from "../BlogCards/BlogCards";
import {Link} from "react-router-dom";
function Banner() {
    return (
        <>
        <section id="hero" className=" scrolled-offset">
            <div className="overlay d-flex align-items-center">
            <div className="container position-relative aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                <h1>Welcome to My Blog</h1>
                <h2>Here i will share some of my daily things</h2>
                <Link to="/post" className="btn-get-started scrollto">Get Started</Link>
            </div>
            </div>
        </section>


            <div className="container">
                <div className="row">
                    <BlogCards  />
                    <BlogCards />
                    <BlogCards />
                    <BlogCards />
                    <BlogCards />

                </div>
            </div>




        </>
    );
}

export default Banner;