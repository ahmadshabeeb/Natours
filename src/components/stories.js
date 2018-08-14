import React from 'react';

class Stories extends React.Component {
    render() {
        return(
            <section className="section-stories">
                <div className="bg-video">
                    <video className="bg-video__content" autoPlay muted loop>
                        <source src="images/video.mp4" type="video/mp4" />
                        <source src="images/video.webm" type="video/webm" />
                        Your browser is not supported
                    </video>
                </div>
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        We make people genuinely happy
                    </h2>
                </div>

                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img src="images/nat-8.jpg" alt="person on a tour" className="story__img" />
                            <figcaption className="story__caption">Mary Smith</figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">I had the best week with my family</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates inventore, natus expedita facilis in perferendis magnam reiciendis quae quam, consequuntur ipsam enim doloremque maxime laborum necessitatibus repellat magni eaque sapiente.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img src="images/nat-9.jpg" alt="person on a tour" className="story__img" />
                            <figcaption className="story__caption">Jack Wilson</figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">
                            WOW! My life is completely different right now</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates inventore, natus expedita facilis in perferendis magnam reiciendis quae quam, consequuntur ipsam enim doloremque maxime laborum necessitatibus repellat magni eaque sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates inventore, natus expedita facilis in perferendis magnam.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="u-center-text u-margin-top-huge">
                    <a href="#" className="btn-text">Read all stories &rarr;</a>
                </div>
            </section>
        )
    }
}

export default Stories;