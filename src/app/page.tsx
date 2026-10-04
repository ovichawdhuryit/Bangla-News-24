import MainNews from "@/Components/MainNews";
import Marquee from "@/Components/Marquee";
import MostRead from "@/Components/MostRead";
import NewsCard from "@/Components/NewsCard";

interface otherSection {
  curationId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
  }[];
}

export default async function Home() {

  const response = await fetch("https://news-api-v2.vercel.app/api/news/sections")
  const data = await response.json()
  const sections = data.data
  const mainNews = sections[0].articles
  const otherNews:otherSection[] = sections.slice(1)





  return (
    <div>
      <Marquee />
      <div className="grid grid-cols-3 max-w-7xl mx-auto">

        {/* News Section */}
        <div className="col-span-2 ">
          <MainNews news={mainNews} />


          {otherNews.map((os) => (
            <section
              className="mt-4   pb-4"
              key={os.curationId}
            >
              <h1 className="mb-4 font-bold border-b-2 border-red-600 text-xl">
                {os.title}
              </h1>

              <div className="grid grid-cols-3 gap-2">
                {os.articles.map((news) => (
                  <NewsCard key={news.id} news={news} />
                ))}
              </div>
            </section>
          ))}

        </div>

        {/* Most Read Section */}
        <div className="col-span-1">
          <MostRead />

          

        </div>
      </div>

    </div>
  )
}
