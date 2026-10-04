import Link from 'next/link';
import React from 'react';

interface navsType{
    slug: string;
    title: string;
    scrapable: boolean;
    topicId: null | string;
    url: string;
}

const NavLinks = async () => {
    const response = await fetch('https://news-api-v2.vercel.app/api/categories');
    const data = await response.json();
    const navs: navsType[] = data.data;
    const navsFilter = navs.filter(n => n.scrapable)

    return (
        <div className="flex justify-center gap-5 mt-5">

            <div className="text-red-500 font-bold">
                <Link href="/">হোম</Link>
            </div>

            {navsFilter.map((n, i) => <Link key={i} href={`/category/${n.slug}`}> {n.title}</Link>)}
        </div>
    );
};

export default NavLinks;