import React from 'react';
import {Link} from 'react-router-dom';
import ImageRetina from 'components/imageRetina';

const AddAHomepage = props => {
    const ContactCard = () => {
        return (
            <div className="card">
                <div className="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/nvu7d_llzuw?controls=0"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen />
                </div>
                <div className="card-body">
                    <p className="card-text">
                        教學，將這個網頁放到桌面
                    </p>
                </div>
            </div>
        );
    };
    return (
        <div className="wrapper learn">
            <div className="container">
                <div className="row py-3">
                    <div className="col">
                        <Link to={"/0322"}>返回資訊頁</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ContactCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

AddAHomepage.propTypes = {};

export default AddAHomepage;
