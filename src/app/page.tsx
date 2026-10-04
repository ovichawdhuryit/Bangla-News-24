import MainNews from "@/Components/MainNews";
import Marquee from "@/Components/Marquee";


export default async function Home() {

  const response = await fetch("https://news-api-v2.vercel.app/api/news/sections")
  const data = await response.json()
  const sections = data.data
  const mainNews = sections[0].articles


  return (
    <div>
      <Marquee />
      <div className="grid grid-cols-3 max-w-7xl mx-auto">

        {/* News Section */}
        <div className="col-span-2 ">
          <MainNews news={mainNews} />
        </div>

        {/* Most Read Section */}
        <div className="bg-amber-950 col-span-1">
          
        </div>
      </div>

    </div>
  )
}
