import NewsCard from '@/Components/NewsCard';
import React from 'react';


const CategoryPage = async ({ params }) => {
    const { categoryId } = await params;
    const response = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`)
    const data = await response.json()
    const categoryData = data.data
 


    return (
        <div>
            <h1 className="text-2xl font-bold text-red-600 border-b-2 mx-30">
                {data.title}
            </h1>

            <div className='grid grid-cols-3 gap-5 mt-3 mx-30'>
                {categoryData.map((news) => (
                    <div key={news.id}>
                        <NewsCard news={news} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;