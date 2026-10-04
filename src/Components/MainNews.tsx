import Image from 'next/image';
import React from 'react';

const MainNews = ({ news }) => {
    const firstNews = news[0];

    const otherNews = news.slice(1, 5);

    return (
        <div className='flex gap-9'>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <Image
                        height={300}
                        width={400}
                        src={firstNews.imageUrl}
                        alt="First News"
                    />
                </figure>
                <div className="card-body">
                    <p className='text-red-600 font-bold'> {firstNews.category}</p>
                    <h2 className="card-title">{firstNews.title}</h2>
                    <p>{firstNews.description}</p>

                </div>

            </div>
            <div className='py-2  grid  gap-1.5 '>
                {otherNews.map((news) => (
                    <div className='border px-2.75 rounded-4xl  py-0.5 '

                        key={news.id}> <br></br>
                        <p className='text-red-600 font-bold'> {firstNews.category}</p>
                        {news.title}

                    </div>
                )
                )}
            </div>
        </div>
    );
};

export default MainNews;