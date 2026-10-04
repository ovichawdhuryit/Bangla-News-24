import Marquee from "@/Components/Marquee";


export default function Home() {
  return (
    <div>
      <Marquee />
      <div className = "grid grid-cols-3 mx-w-7xl mx-auto  ">

        {/* News section */}
        <div className = "col-span-2 bg-amber-400">

        </div>

        {/* Most read section */}
        <div className= "bg-amber-950 col-span-1">

        </div>
      </div>
    </div>
  )
}
