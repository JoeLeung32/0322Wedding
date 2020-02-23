import ImageRetina from 'components/imageRetina';
import {Link} from 'react-router-dom';
import React from 'react';

export const COVID19Card = () => {
    return (
        <div className="card">
            <ImageRetina
                alt={'welcome'}
                className="card-img-top"
                src={`${process.env.PUBLIC_URL}/images/welcome.jpg`}
                set={[
                    `${process.env.PUBLIC_URL}/images/welcome.jpg 1x`,
                    `${process.env.PUBLIC_URL}/images/welcome@2x.jpg 2x`,
                    `${process.env.PUBLIC_URL}/images/welcome@3x.jpg 3x`,
                ]}
            />
            <div className="bg-info text-white px-3 py-1">
                如期於 2020 年 3 月 22 日舉行，地點不變
            </div>
            <div className="card-body">
                <h5 className="card-title">武漢肺炎疫情安排</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    2020 年 2 月 22 日
                </h6>
                <p className="card-text">
                    就有關武漢肺炎疫情明白大家有顧慮，經過多日以來及多方面的溝通和考慮後，我們決定{' '}
                    <strong>繼 續 如 期</strong> 在 3 月 22
                    日星期日舉行婚禮及婚宴。
                </p>
                <p className="card-text">
                    為了令各位賓客都能夠放心參與，我們已經和酒店及宴會場地溝通好，以下將會詳列各部份的資訊：
                </p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <Link to={'/details/ladies'}>點擊查看關於〝女家親戚〞的安排</Link>
                </li>
                <li className="list-group-item">
                    <Link to={'/details/mans'}>點擊查看關於〝男家親戚〞的安排</Link>
                </li>
                <li className="list-group-item">
                    <Link to={'/details/friends'}>
                        同學、朋友、童軍手兄、同事…的安排
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export const ShuttleBusCard = () => {
    return (
        <div className="card">
            <ImageRetina
                alt={'welcome'}
                className="card-img-top"
                src={`${process.env.PUBLIC_URL}/images/jpg/shuttle.jpg`}
                set={[
                    `${process.env.PUBLIC_URL}/images/jpg/shuttle.jpg 1x`,
                    `${process.env.PUBLIC_URL}/images/jpg/shuttle@2x.jpg 2x`,
                    `${process.env.PUBLIC_URL}/images/jpg/shuttle@3x.jpg 3x`,
                ]}
            />
            <div className="bg-danger text-white px-3 py-1">
                賓客務必向新人報數，如超出 56 個位，新人需要安排另一架旅遊巴。
            </div>
            <div className="card-body">
                <h5 className="card-title">接駁巴士安排</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    56 座巴旅遊巴，一架
                </h6>
                <ul className="list-unstyled">
                    <li className="list-item py-2">
                        <strong>上車地點：</strong>
                        <span>海富中心麥當勞門口</span><br />
                        <span>金鐘德立街地鐵站A出口</span>
                    </li>
                    <li className="list-item py-2">
                        <strong>上車時間：</strong>
                        <span>早上 10:00</span>
                    </li>
                    <li className="list-item py-2">
                        <strong>開車時間：</strong>
                        <span>早上 10:15</span>
                    </li>
                    <li className="list-item py-2">
                        <strong>Google Map 地圖：</strong><br />
                        <a
                            href={
                                'https://www.google.com/maps/place/?q=%E6%B5%B7%E5%AF%8C%E4%B8%AD%E5%BF%83%E9%BA%A5%E7%95%B6%E5%8B%9E%E9%96%80%E5%8F%A3'
                            }
                            target="_blank"
                            rel="noopener noreferrer">
                            點擊查看 Google 地圖
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export const ContactCard = () => {
    return (
        <div className="card">
            <div className="card-body">
                <p className="card-text">
                    <Link to={'/faq/addHomepage'}>
                        如何將這個網址放到 iPhone 桌面上？
                    </Link>
                </p>
                <p className="card-text">
                    如對以上資訊有任何疑問，歡迎聯絡我們。
                </p>
            </div>
        </div>
    );
};
