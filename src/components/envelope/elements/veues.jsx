import ImageRetina from 'components/imageRetina';
import {
    Hotel,
    HotelLadies,
    HotelMans,
} from 'components/envelope/elements/hotels';
import React from 'react';

export const VenueLadies = () => {
    return (
        <div className="pb-5 mb-5">
            <h2>女家長輩敬茶部份</h2>
            <div className="row">
                <div className="col-12 col-sm-6 order-0 order-sm-1">
                    <a
                        href="https://www.google.com/maps/?q=金鐘港島香格里拉大酒店"
                        target="_blank"
                        rel="noopener noreferrer">
                        <ImageRetina
                            alt={'welcome'}
                            className="img-thumbnail"
                            src={`${process.env.PUBLIC_URL}/images/jpg/mapsladies.jpg`}
                            set={[
                                `${process.env.PUBLIC_URL}/images/jpg/mapsladies.jpg 1x`,
                                `${process.env.PUBLIC_URL}/images/jpg/mapsladies@2x.jpg 2x`,
                                `${process.env.PUBLIC_URL}/images/jpg/mapsladies@3x.jpg 3x`,
                            ]}
                        />
                        <div className="px-1">
                            <span>點擊查看 Google 地圖</span>
                        </div>
                    </a>
                </div>
                <div className="col-12 col-sm-6 order-1 order-sm-0">
                    <hr />
                    <ul className="list-unstyled m-0">
                        <li className="lead">
                            日期：2020 年 3 月 22 日（週日）
                        </li>
                        <li className="lead">時間：早上 6:30 至 8:00</li>
                        <li className="lead">地點：金鐘港島香格里拉大酒店</li>
                    </ul>
                    <hr />
                    <strong>泊車：</strong>
                    <span>金鐘太古廣場（電梯上五字樓到酒店）</span>
                    <ul>
                        <li>
                            <strong>柏暉徑停車場</strong>
                            <br />
                            經由太古廣場4樓平台進入
                        </li>
                        <li>
                            <strong>太古廣場三座停車場</strong>
                            <br />
                            經由皇后大道東駛入永豐街進入
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row py-5 my-5">
                <div className="col-12 col-sm-6">
                    <ImageRetina
                        alt={'welcome'}
                        className="img-thumbnail"
                        src={`${process.env.PUBLIC_URL}/images/jpg/hkiShangriLaImg001.jpg`}
                        set={[
                            `${process.env.PUBLIC_URL}/images/jpg/hkiShangriLaImg001.jpg 1x`,
                            `${process.env.PUBLIC_URL}/images/jpg/hkiShangriLaImg001@2x.jpg 2x`,
                            `${process.env.PUBLIC_URL}/images/jpg/hkiShangriLaImg001@3x.jpg 3x`,
                        ]}
                    />
                    <div className="px-1">
                        <span>酒店房間</span>
                    </div>
                </div>
                <div className="col">
                    <HotelLadies />
                </div>
            </div>
        </div>
    );
};

export const VenueMans = () => {
    return (
        <div className="pb-5 mb-5">
            <h2>男家長輩敬茶部份</h2>
            <div className="row">
                <div className="col-12 col-sm-6 order-0 order-sm-1">
                    <a
                        href="https://www.google.com/maps/?q=淺水灣露台餐廳"
                        target="_blank"
                        rel="noopener noreferrer">
                        <ImageRetina
                            alt={'welcome'}
                            className="img-thumbnail"
                            src={`${process.env.PUBLIC_URL}/images/jpg/mapsmans.jpg`}
                            set={[
                                `${process.env.PUBLIC_URL}/images/jpg/mapsmans.jpg 1x`,
                                `${process.env.PUBLIC_URL}/images/jpg/mapsmans@2x.jpg 2x`,
                                `${process.env.PUBLIC_URL}/images/jpg/mapsmans@3x.jpg 3x`,
                            ]}
                        />
                        <div className="px-1">
                            <span>點擊查看 Google 地圖</span>
                        </div>
                    </a>
                </div>
                <div className="col-12 col-sm-6 order-1 order-sm-0">
                    <hr />
                    <ul className="list-unstyled m-0">
                        <li className="lead">
                            日期：2020 年 3 月 22 日（週日）
                        </li>
                        <li className="lead">時間：早上 9:00 至 10:00</li>
                        <li className="lead">
                            地點：淺水灣露台餐廳 Bamboo Bar
                        </li>
                    </ul>
                    <hr />
                    <strong>泊車：</strong>
                    <span>淺水灣購物中心</span>
                    <ul>
                        <li>地面露天已預留，有需要請聯絡兩位新人安排，數量有限</li>
                        <li>地庫室內為公眾車位，40 個車位先到先得</li>
                        <li>所有停車位當日免費</li>
                    </ul>
                </div>
            </div>
            <div className="row py-5 my-5">
                <div className="col-12 col-sm-6">
                    <ImageRetina
                        alt={'welcome'}
                        className="img-thumbnail"
                        src={`${process.env.PUBLIC_URL}/images/jpg/verandahImg003.jpg`}
                        set={[
                            `${process.env.PUBLIC_URL}/images/jpg/verandahImg003.jpg 1x`,
                            `${process.env.PUBLIC_URL}/images/jpg/verandahImg003@2x.jpg 2x`,
                            `${process.env.PUBLIC_URL}/images/jpg/verandahImg003@3x.jpg 3x`,
                        ]}
                    />
                    <div className="px-1">
                        <span>Bamboo Bar</span>
                    </div>
                </div>
                <div className="col">
                    <HotelMans />
                </div>
            </div>
        </div>
    );
};

export const Venue = () => {
    return (
        <div className="pb-5 mb-5">
            <div className="row justify-content-center pb-5">
                <div className="col px-0">
                    <div className="bg-dark text-white">
                        <div className="p-2 text-center">
                            <span>
                                我們的婚禮團隊仍有數個項目正在跟場地方面討論、協調當中，淺水灣部份未來仍會有更新，屆時將會作通知，謝謝。
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <h2>婚禮及婚宴</h2>
            <div className="row">
                <div className="col-12 col-sm-6 order-0 order-sm-1">
                    <a
                        href="https://www.google.com/maps/?q=淺水灣露台餐廳"
                        target="_blank"
                        rel="noopener noreferrer">
                        <ImageRetina
                            alt={'welcome'}
                            className="img-thumbnail"
                            src={`${process.env.PUBLIC_URL}/images/jpg/mapsmans.jpg`}
                            set={[
                                `${process.env.PUBLIC_URL}/images/jpg/mapsmans.jpg 1x`,
                                `${process.env.PUBLIC_URL}/images/jpg/mapsmans@2x.jpg 2x`,
                                `${process.env.PUBLIC_URL}/images/jpg/mapsmans@3x.jpg 3x`,
                            ]}
                        />
                        <div className="px-1">
                            <span>點擊查看 Google 地圖</span>
                        </div>
                    </a>
                </div>
                <div className="col-12 col-sm-6 order-1 order-sm-0">
                    <hr />
                    <ul className="list-unstyled m-0">
                        <li className="lead">
                            日期：2020 年 3 月 22 日（週日）
                        </li>
                        <li className="lead">時間：早上 10:30 至 15:00</li>
                        <li className="lead">地點：淺水灣露台餐廳及草地</li>
                    </ul>
                    <hr />
                    <strong>泊車：</strong>
                    <span>淺水灣購物中心</span>
                    <ul>
                        <li>地面露天為預留停車，有需要請聯絡兩位新人安排</li>
                        <li>地庫室內為公眾車位，40 個車位先到先得</li>
                        <li>所有賓客停車位免費</li>
                    </ul>
                </div>
            </div>
            <div className="row py-5 my-5">
                <div className="col-12 col-sm-6">
                    <ImageRetina
                        alt={'welcome'}
                        className="img-thumbnail"
                        src={`${process.env.PUBLIC_URL}/images/jpg/verandahImg004.jpg`}
                        set={[
                            `${process.env.PUBLIC_URL}/images/jpg/verandahImg004.jpg 1x`,
                            `${process.env.PUBLIC_URL}/images/jpg/verandahImg004@2x.jpg 2x`,
                            `${process.env.PUBLIC_URL}/images/jpg/verandahImg004@3x.jpg 3x`,
                        ]}
                    />
                    <div className="px-1">
                        <span>淺水灣購物中心，一樓為露台餐廳</span>
                    </div>
                </div>
                <div className="col">
                    <HotelMans />
                </div>
            </div>
            <Hotel />
        </div>
    );
};
