import NavBar from "./NavBar"
import Button from "./button"
import Footer from "./footer/page"
import Services from "./services/page"
import About from "./about/page"



const Home = () => {
  return (
    <div className="font-mono w-full overflow-x-hidden">
      <section className="bg-[url('/bgimage.jpg')] bg-cover bg-center h-screen relative font-mono">
        <div className="bg-(--main-background-color-dark-blue) inset-0  opacity-70 absolute z-0"> </div>
        <div className=" relative z-10  ">
          <NavBar />
          <div className=" md:ml-10 md:flex md:items-start md:flex-col md:flex-start md:pt-20 pt-30 px-10 max-w-sreen-md flex items-center justify-center flex-col">

            <h3
  className="mb-[10px] text-[25px] font-medium tracking-[.5]"
  style={{ color: 'var(--main-text-color)' }}
>
  Hello There, I&apos;m
</h3>
            <h1 className=" mb-[25px] text-(--main-text-color) md:flex md:flex-start text-center  md:text-[40px] text-[35px] font-extrabold tracking-[0.1]"> CHINYEMBA MALVIN <span className="text-(--text-color-gold)">DIGITAL MARKETER</span></h1>
            <h4 className="mb-[65px] text-(--second-theme-color) text-[20px] md:flex md:flex-start text-center font-light italic  ">Passionate, data-driven marketer crafting impactful, engaging strategies</h4>
            <Button
              label="Contact Me"
              bgcolor="bg-(--button-color-grey)"
              textcolor="text-(--text-color-gold)"
            />
          </div>
        </div>
      </section>

      <section className="w-full">
        <About />
      </section>

      <section className="w-full">
        <Services />
      </section>

      <section className="w-full">
        <Footer/>
      </section>

    </div>
  )
}

export default Home
