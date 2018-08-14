import React from 'react';

class Popup extends React.Component {
    render() {
        return(
            <div className="popup" id="popup">
                <div className="popup__content">
                    <div className="popup__left">
                        <img src="images/nat-8.jpg" alt="Tour photo" className="popup__img" />
                        <img src="images/nat-9.jpg" alt="Tour photo" className="popup__img" />
                    </div>
                    <div className="popup__right">
                        <a href="#section-tours" className="popup__close">&times;</a>
                        <h2 className="heading-secondary u-margin-bottom-small">Start Booking Now</h2>
                        <h3 className="heading-tertiary u-margin-bottom-small">Enhance your life expereince</h3>
                        <p className="popup__text">No depending be convinced in unfeeling he. Excellence she unaffected and too sentiments her. Rooms he doors there ye aware in by shall. Education remainder in so cordially. His remainder and own dejection daughters sportsmen. Is easy took he shed to kind. Suppose end get boy warrant general natural. Delightful met sufficient projection ask. Decisively everything principles if preference do impression of. Preserved oh so difficult repulsive on in household. In what do miss time be. Valley as be appear cannot so by. Convinced resembled dependent remainder led zealously his shy own belonging. Always length letter adieus add number moment she. Promise few compass six several old offices removal parties fat. Concluded rapturous it intention perfectly daughters is as.</p>
                        <a href="#" className="btn btn--green">Book now</a>
                    </div>
                </div>
        </div>
        )
    }
}

export default Popup;