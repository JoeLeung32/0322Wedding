import React, {useCallback, useEffect, useState} from 'react';
import {Link, useHistory, useLocation, useParams} from 'react-router-dom';

import ImageRetina from 'components/imageRetina';

let timer;
let timer2;

const Envelope = props => {
    const history = useHistory();
    const location = useLocation();
    const params = useParams();
    const [loaded, setLoaded] = useState(0);
    const [height, setHeight] = useState(0);
    const handleResize = () => {
        const envelopeBody = document.querySelector('.envelopeBody');
        setHeight(envelopeBody.clientHeight);
    };
    const envelopeAnimation = useCallback(() => {
        handleResize();
        const envelope = document.querySelector('.envelope');
        const classList = envelope.classList;
        const isOpen = classList.contains('envelope--open');
        const isAction = classList.contains('envelope--animating');
        clearTimeout(timer2);
        if (isAction) return;
        if (isOpen) {
            classList.add('envelope--animating');
            classList.toggle('envelope--showContent');
            timer = setTimeout(() => {
                classList.toggle('envelope--shownContent');
                classList.toggle('envelope--open');
                classList.toggle('envelope--close');
                classList.remove('envelope--animating');
            }, 400);
        } else {
            classList.add('envelope--animating');
            classList.toggle('envelope--open');
            classList.toggle('envelope--close');
            timer = setTimeout(() => {
                classList.toggle('envelope--showContent');
                classList.toggle('envelope--shownContent');
                classList.remove('envelope--animating');
            }, 400);
        }
    }, []);
    const Note = () => {
        const {name} = params;
        const {pathname} = location;
        const isFamily = pathname.search('invitations') > 0;
        const uUr = isFamily ? '您哋' : '您';
        return (
            <>
                <div className="font-weight-bold pb-1">
                    {name}
                    {uUr}好，呢到有我哋婚禮、婚宴資訊及疫情下的安排。
                </div>
                <Link to={'/0322'}>點擊查看</Link>
            </>
        );
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    useEffect(() => {
        if (loaded === 3) {
            timer = setTimeout(() => {
                handleResize();
                const envelope = document.querySelector('.envelope');
                const classList = envelope.classList;
                classList.toggle('envelope--display');
                const envelopeLoader = document.querySelector(
                    '.envelopeLoader',
                );
                envelopeLoader.remove();
                timer2 = setTimeout(() => {
                    envelopeAnimation();
                }, 4000);
            }, 400);
        }
    }, [envelopeAnimation, loaded]);
    return (
        <div
            className="envelope envelope--close"
            onClick={envelopeAnimation}
            style={{minHeight: `${height}px`}}>
            <div className="envelopeAnimation">
                <div className="envelopeCover">
                    <ImageRetina
                        alt={'envelopeCover'}
                        className="img-fluid"
                        src={`${process.env.PUBLIC_URL}/images/envelopeCover.png`}
                        set={[
                            `${process.env.PUBLIC_URL}/images/envelopeCover.png 1x`,
                            `${process.env.PUBLIC_URL}/images/envelopeCover@2x.png 2x`,
                            `${process.env.PUBLIC_URL}/images/envelopeCover@3x.png 3x`,
                        ]}
                        onLoad={() => setLoaded(loaded + 1)}
                    />
                </div>
                <div
                    className="envelopeContent w-100 h-100"
                    style={{minHeight: `${height}px`}}>
                    <div className="px-1 pt-1 text-center">
                        <div className="position-absolute note ml-lg-5">
                            <div className="p-3 ml-lg-5 col-10">
                                <Note />
                            </div>
                        </div>
                        <ImageRetina
                            alt={'welcome'}
                            className="img-fluid"
                            src={`${process.env.PUBLIC_URL}/images/welcome.jpg`}
                            set={[
                                `${process.env.PUBLIC_URL}/images/welcome.jpg 1x`,
                                `${process.env.PUBLIC_URL}/images/welcome@2x.jpg 2x`,
                                `${process.env.PUBLIC_URL}/images/welcome@3x.jpg 3x`,
                            ]}
                            onLoad={() => setLoaded(loaded + 1)}
                        />
                    </div>
                </div>
                <div className="envelopeBody">
                    <ImageRetina
                        alt={'envelopeMask'}
                        className="img-fluid"
                        src={`${process.env.PUBLIC_URL}/images/envelopeMask.png`}
                        set={[
                            `${process.env.PUBLIC_URL}/images/envelopeMask.png 1x`,
                            `${process.env.PUBLIC_URL}/images/envelopeMask@2x.png 2x`,
                            `${process.env.PUBLIC_URL}/images/envelopeMask@3x.png 3x`,
                        ]}
                        onLoad={() => setLoaded(loaded + 1)}
                    />
                </div>
                <div
                    className="envelopeBodyBottom w-100"
                    style={{height: `${height}px`}}
                />
            </div>
        </div>
    );
};

Envelope.propTypes = {};

const EnvelopeWrapper = () => {
    const Content = () => (
        <div className="text-center">
            <h2>您收到一封密函</h2>
            <h3>是來自 Emily & Joe 的</h3>
            <h4>快啲打開啦</h4>
        </div>
    );
    return (
        <div className="container px-0 pb-5">
            <div className="row justify-content-md-center">
                <div className="col col-lg-12">
                    <div className="envelopeOffset position-relative">
                        <div className="position-absolute w-100 h-100">
                            <div className="d-flex flex-wrap align-items-center h-100">
                                <div className="d-flex justify-content-center w-100">
                                    <Content />
                                </div>
                            </div>
                        </div>
                        <ImageRetina
                            alt={'envelopeCover'}
                            className="img-fluid"
                            src={`${process.env.PUBLIC_URL}/images/envelopeCover.png`}
                        />
                    </div>
                </div>
            </div>
            <div className="row justify-content-md-center">
                <div className="col col-lg-12">
                    <div className="envelopeLoader" />
                    <Envelope />
                </div>
            </div>
        </div>
    );
};

export default EnvelopeWrapper;
