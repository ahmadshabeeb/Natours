import React from 'react';

class About extends React.Component {
    render() {
        return (
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Exciting tours for adventurous people
                    </h2>
                </div>

                <div className="row">
                    <div className="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            You're going to fall in love with nature</h3>
                        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi culpa aliquid officia provident dolores, commodi dignissimos impedit voluptate temporibus quisquam expedita unde rerum nisi at odio consequatur? Impedit, quos dolor.</p>

                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Live adventurous like you have never before</h3>
                        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi culpa aliquid officia provident dolores, commodi dignissimos impedit.</p>

                        <a href="#" className="btn-text">Learn more &rarr;</a>
                    </div>
                    <div className="col-1-of-2">
                        <div className="composition">
                            <img 
                                srcSet="images/nat-1.jpg 300w, images/nat-1-large.jpg 1000w"
                                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                className="composition__photo composition__photo--p1"
                                alt="Photo 1"
                                src="images/nat-1-large.jpg" />
                            <img 
                                srcSet="images/nat-2.jpg 300w, images/nat-2-large.jpg 1000w"
                                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                className="composition__photo composition__photo--p2"
                                alt="Photo 2"
                                src="images/nat-2-large.jpg" />
                            <img 
                                srcSet="images/nat-3.jpg 300w, images/nat-3-large.jpg 1000w"
                                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                                className="composition__photo composition__photo--p3"
                                alt="Photo 3"
                                src="images/nat-3-large.jpg" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;