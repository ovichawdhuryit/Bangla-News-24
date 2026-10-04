import React from 'react';

interface MostReadNews {
    rank: number;
    title: string;
    url: string;

}

const MostRead = async () => {

    const response = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
    const data = await response.json();
    const data2 = data.data
    console.log(data2)
    return (
        <div className="card p-3 bg-base-100 border border-gray-200">
            <h2 className="font-bold text-red-600">সর্বাধিক পঠিত</h2>

            <div className="grid gap-3">
                {data2.map((news: MostReadNews, i) => (
                    <div className = "flex" key={news.rank}>
                        <p className = "font-bold text-red-800">
                            {i + 1}.    
                        </p>
                        {news.title}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default MostRead;