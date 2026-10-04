import Image from "next/image";
import React from "react";

const NewsCard = ({ news }) => {
  return (
    <div className="card  bg-base-100 shadow-sm">
      <figure>
        <Image
          height={300}
          width={400}
          src={news.imageUrl}
          alt={news.imageAlt || news.title}
        />
      </figure>

      <div className="card-body">
        <p className="font-bold text-red-600">{news.category}</p>

        <h2 className="card-title">{news.title}</h2>

        <p>{news.description}</p>
      </div>
    </div>
  );
};

export default NewsCard;