import React from 'react';
import {Link} from 'react-router-dom';
import ImageRetina from 'components/imageRetina';

import {
    COVID19Card,
    ShuttleBusCard,
    ContactCard,
} from 'components/ourDate/elements/cards';

const OurDate = props => {
    return (
        <div className="wrapper ourDate py-3">
            <div className="container O322">
                <div className="row">
                    <div className="col">
                        <ShuttleBusCard />
                        <COVID19Card />
                        <ContactCard />
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center pt-3">
                        <a
                            href="https://github.com/JoeLeung32/0322Wedding"
                            target="_blank"
                            rel="noopener noreferrer">
                            <ImageRetina
                                alt={'github'}
                                className="githubLogo"
                                src={`${process.env.PUBLIC_URL}/images/png/github_logo.png`}
                                set={[
                                    `${process.env.PUBLIC_URL}/images/png/github_logo.png 1x`,
                                    `${process.env.PUBLIC_URL}/images/png/github_logo@2x.png 2x`,
                                    `${process.env.PUBLIC_URL}/images/png/github_logo@3x.png 3x`,
                                ]}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

OurDate.propTypes = {};

export default OurDate;
