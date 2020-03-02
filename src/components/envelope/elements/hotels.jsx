import React from 'react';
import ImageRetina from 'components/imageRetina';

export const HotelLadies = () => (
    <>
        <h2 className="pt-3">酒店防疫資訊</h2>
        <ol>
            <li>當日上班員工會先探熱；</li>
            <li>每位員工均會配戴口罩，為客人探熱時亦會配戴手套；</li>
            <li>
                客人進入酒店大堂前都需要由員工探熱，並需使用酒店提供的消毒用品潔手；
            </li>
            <li>酒店並不會強制住客、訪客必須戴上口罩才能進出酒店範圍；</li>
        </ol>
    </>
);

export const HotelMans = () => (
    <>
        <h2 className="pt-3">露台餐廳防疫資訊</h2>
        <ol>
            <li>每日三次為當日上班的員工探熱；</li>
            <li>
                嚴密監控所有員工的健康狀況，在過去14天中沒有疾病跡象，沒有出差的跡象；
            </li>
            <li>
                每小時增加公共“接觸”點（包括扶手，電梯）公共區域的消毒頻率；
            </li>
            <li>接送賓客前後，用 1:​​49 漂白劑為穿梭巴士消毒；</li>
        </ol>
        <h4 className="pt-3 text-danger">更新：</h4>
        <ol>
            <li>交場前一晚婚禮草地及宴會場地會清潔乾淨；（二月廿七日核實）</li>
            <li>會有一位職員配備紅外線探熱器檢查賓客體溫；（二月廿七日核實）
                <blockquote  className="bg-warning p-2">
                    若有發燒跡象(99.5-100.4華氏(°F)或以上或37.5-38攝氏(°C)或以上)或出現其他病徵，請盡早求診。
                </blockquote>
            </li>
        </ol>
    </>
);

export const Hotel = () => (
    <>
        <div className="row py-5 my-5">
            <div className="col-12 col-sm-6">
                <ImageRetina
                    alt={'welcome'}
                    className="img-thumbnail"
                    src={`${process.env.PUBLIC_URL}/images/jpg/verandahImg001.jpg`}
                    set={[
                        `${process.env.PUBLIC_URL}/images/jpg/verandahImg001.jpg 1x`,
                        `${process.env.PUBLIC_URL}/images/jpg/verandahImg001@2x.jpg 2x`,
                        `${process.env.PUBLIC_URL}/images/jpg/verandahImg001@3x.jpg 3x`,
                    ]}
                />
                <div className="px-1">
                    <span>婚禮草地</span>
                </div>
                <h2 className="pt-3">婚禮場地防疫資訊</h2>
                <ol>
                    <li>全戶外草地，注意保暖；</li>
                    <li>如遇天雨狀況，將改到婚宴場地舉行；</li>
                    <li>加強草地衛生的措施；</li>
                    <li>每位員工均會配戴口罩；</li>
                    <li>賓客可按自己需要決定是否戴上口罩，包括拍照時；</li>
                    <li>建議避免握手；</li>
                </ol>
                <h4 className="pt-3 text-danger">更新：</h4>
                <ol>
                    <li>消毒洗手液或酒精置於草地入口附近；（二月廿七日核實）</li>
                </ol>
            </div>
            <div className="col">
                <ImageRetina
                    alt={'welcome'}
                    className="img-thumbnail"
                    src={`${process.env.PUBLIC_URL}/images/jpg/verandahImg002.jpg`}
                    set={[
                        `${process.env.PUBLIC_URL}/images/jpg/verandahImg002.jpg 1x`,
                        `${process.env.PUBLIC_URL}/images/jpg/verandahImg002@2x.jpg 2x`,
                        `${process.env.PUBLIC_URL}/images/jpg/verandahImg002@3x.jpg 3x`,
                    ]}
                />
                <div className="px-1">
                    <span>宴會場地</span>
                </div>
                <h2 className="pt-3">婚宴場地防疫資訊</h2>
                <ol>
                    <li>天氣環境許可下打開餐廳的所有窗戶以增強空氣流通；</li>
                    <li>增加了清潔桌布的標準；</li>
                    <li>餐巾由布料轉為即棄紙料；</li>
                    <li>
                        經過認證的 HACCP
                        系統，用於控制和監控從供應商到存儲，加工，烹飪和服務的食品；
                    </li>
                    <li>每位員工均會配戴口罩；</li>
                    <li>
                        每位員工（食品處理人員和清潔人員）都戴著一次性手套進行食品處理；
                    </li>
                    <li>所有餐食盤、熱薰盤、冷盤都有蓋，職員會主動蓋實；</li>
                    <li>
                        餐食供應次序改動，不會一次過上晒，甜品等會安排於稍後時間登場；
                    </li>
                    <li>第一轉取餐時會進行分流，減低取餐區人流；</li>
                    <li>賓客可按自己需要決定是否戴上口罩；</li>
                    <li>建議取餐時避免交談；</li>
                    <li>
                        敬酒環節會減少參與人數，只會由兩位新人、父母、職員及拍攝隊伍到每圍敬酒，並會保持適當距離；
                    </li>
                </ol>
                <h4 className="pt-3 text-danger">更新：</h4>
                <ol>
                    <li>消毒洗手液或酒精置於餐廳中間位置；（二月廿七日核實）</li>
                </ol>
            </div>
        </div>
    </>
);
