import React from 'react';
import {Link} from 'react-router-dom';
import ImageRetina from "components/imageRetina";

import {COVID19Card, ShuttleBusCard, ContactCard} from "components/ourDate/elements/cards";

const OurDate = props => {
    return (
        <div className="wrapper ourDate py-3">
            <div className="container O322">
                <div className="row">
                    <div className="col">
                        <ShuttleBusCard/>
                        <COVID19Card/>
                        <ContactCard/>
                    </div>
                </div>
            </div>
        </div>
    );
};

OurDate.propTypes = {};

export default OurDate;
