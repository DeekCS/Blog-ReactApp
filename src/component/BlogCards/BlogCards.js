import React from 'react';
// import './blog.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function BlogCards() {
    return (
        <div className="card col-lg-4  ">
            <img
                src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
                alt="" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">Sunset</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ut eum similique repellat a laborum, rerum voluptates ipsam eos quo tempore
                    iusto dolore modi dolorum in pariatur. Incidunt repellendus praesentium
                    quae!</p>
                <a href="" className="btn btn-outline-success btn-sm">Read More</a>
                <a href="" className="btn btn-outline-danger btn-sm"><i
                    className="far fa-heart" /></a>
            </div>
        </div>
    );
}

export default BlogCards;


/*

 */