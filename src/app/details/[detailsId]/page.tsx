import React from 'react';

const detailedPage = async ({ params }: { params: { newsId: string } }) => {
    const { newsId } = await params
    const response = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`)
    const data = response.json()
    const news = data.data
    console.log (data)

    return (
        <div>

        </div>
    );
};

export default detailedPage;