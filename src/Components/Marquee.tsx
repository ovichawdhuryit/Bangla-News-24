import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface typeofNews {
    id: string;
    title: string;
    url: string;
}
const Marquee = async (): Promise<typeofNews[]> => {
    const response = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
    const data = await response.json();
    const news = data.data;


    return (
        <div className="my-7 bg-red-600 text-white">

            <div className="flex px-41">

                <div className="bg-red-500 px-3.5">
                    <h3> সর্বশেষ </h3>
                </div>

                <MarqueeText direction="right" duration={9}>
                    {news.map(h => <span key={h.id}>
                        <span> {h.title} </span>
                        <span className="mx-5"> • </span>
                    </span>)}
                </MarqueeText>
            </div>

        </div>
    );
};

export default Marquee;