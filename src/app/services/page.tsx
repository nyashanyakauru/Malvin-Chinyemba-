import Card from "../card"
import { FaLaptop, FaRocketchat, FaMailBulk, FaAddressCard, FaYoutube ,FaMailchimp, FaDesktop} from "react-icons/fa"


const Services = () => {
  return (
    <div className="md:h-screen bg-(--fifth-theme-color) p-[15px] w-100%" id="services">
      <div className="relative flex flex-col items-center">
        <span className="absolute text-(--main-text-color) text-7xl z-0 opacity-10 font-bold -translate-y-3 underline decoration-2">
          SERVICES
        </span>
        <span className="relative text-4xl font-bold z-10 text-(--text-color-gold) border-b-2 border-(--text-color-gold)  ">
          
          Services
        </span>
      </div>
      <div className="flex  flex-wrap  p-10 justify-center items-center ">
        <div className="mr-4 mb-4">
      <Card
      icon={<FaRocketchat size={70}  />}
      header="Social Media Marketing"
      text="Building community and brand loyalty"
      />
      </div>

      <div  className="mr-4 mb-4">
      <Card
      icon={<FaLaptop size={70}  />}
      header="Search Engine Optimization"
      text="Optimizing wesbsites to rank higher on google"
      />
      </div>

      <div  className="mr-4 mb-4">
      <Card
      icon={<FaMailBulk size={70}  />}
      header="Email Marketing"
      text="Designing and sending newsletters, promos and automated campaigns"
      />
      </div>

      <div  className="mr-4 mb-4">
      <Card
      icon={<FaAddressCard size={70}  />}
      header="User Interface"
      text="Designing clean and attractive and consistent interfaces(web/app)"
      />
      </div>

      <div className="mr-4 mb-4">
      <Card
      icon={<FaDesktop size={70}  />}
      header="User Experience "
      text="Creating user flows, wireframes and journey maps"
      />
      </div>

      <div  className="mr-4 mb-4">
      <Card
      icon={<FaYoutube size={70}  />}
      header="Content Marketing"
      text="Creating bolg posts, videos, infographics and download"
      />
      </div>
    </div>
    </div>
  )
}

export default Services
