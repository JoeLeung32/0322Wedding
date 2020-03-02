import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {Venue, VenueLadies, VenueMans} from "components/envelope/elements/veues";

const Details = props => {
    const {type} = useParams();
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    return (
        <div className="wrapper details">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col px-0">
                        <div className="bg-info">
                            <div className="p-2 text-center">
                                <strong>
                                    我們並沒有中國內地的親戚朋友出席或參與
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col px-0">
                        <div className="bg-warning">
                            <div className="p-2 text-center">
                                若有發燒跡象(99.5-100.4華氏(°F)或以上或37.5-38攝氏(°C)或以上)或出現其他病徵，請盡早求診。
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col">
                        <Link to={'/0322'}>返回資訊頁</Link>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="px-2 py-3">
                            {type === 'ladies' && <VenueLadies/>}
                            {type === 'mans' && <VenueMans/>}
                            <Venue/>
                        </div>
                    </div>
                </div>
                <div className="row pb-3">
                    <div className="col">
                        <Link to={'/0322'}>返回資訊頁</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Details.propTypes = {};

export default Details;
