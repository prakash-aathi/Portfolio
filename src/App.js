import Spline from "@splinetool/react-spline";
import { useState } from 'react';
import { IoMenu, IoLogoGithub, IoFlameOutline } from 'react-icons/io5';
// vertical timeline 
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Experience, Projects, SocialLinks } from "./Data";
// framer motion
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [isActive, setisActive] = useState(false)

  const download = () => {
    fetch('resume.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'resume.pdf';
        alink.click();
      })
    })
  }


  return (
    <AnimatePresence initial={false}>
      <div className="bg-primary">
        <div className="w-screen  mb-4  relative  justify-center items-center flex flex-col " id="home">

          {/* nav */}
          <nav className="w-full px-6 z-50 fixed insert-x-0 top-2 flex justify-center items-center">
            <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center ">
              <p className="text-lg text-slate-200 font-medium">Prakash</p>
              {/* hidden small screen */}
              <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
                {/* <a href="#home" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Home</a> */}
                <a href="#about" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">About</a>
                <a href="#timeline" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Time Line</a>
                <a href="#projects" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Projects</a>
                <a href="#contact" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out">Contact</a>
                <motion.a whileTap={{ scale: 0.8 }} onClick={download} className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out">Download</motion.a>

              </div>
              {/* menu icon */}
              <motion.div className="block md:hidden ml-auto cursor-pointer" onClick={() => setisActive(!isActive)}>
                <IoMenu className="text-2xl text-textBase" />
              </motion.div>

              {isActive && (
                <div className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-center gap-6">
                  {/* <a href="#home" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out" onClick={() => setisActive(false)}>Home</a> */}
                  <a href="#about" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out" onClick={() => setisActive(false)}>About</a>
                  <a href="#timeline" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out" onClick={() => setisActive(false)}>Time Line</a>
                  <a href="#projects" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out" onClick={() => setisActive(false)} >Projects</a>
                  <a href="#contact" className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out" onClick={() => setisActive(false)}>Contact</a>
                  <div onClick={download} className=" text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out">Download</div>
                </div>
              )}
            </div>
          </nav>

          {/* <Spline className="relative" scene="https://prod.spline.design/RkZuBqdSNyGGlqNA/scene.splinecode" />
          <div className="absolute bottom-10 w-full justify-center items-center flex">
            <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl">
              <p className="text-textBase">Press and drag to orbit ! LoL it's 3D</p>
            </div>
          </div> */}
        </div>

        {/* main section */}
        <main className="w-[80%]  mt-5 m-auto justify-center   min-h-screen flex flex-col items-center" id="about">
          {/* about section start */}
          <section className=" grid grid-cols-1 md:grid-cols-2 gap-4 my-24" >
            {/* image box */}
            <div className="w-full h-420 flex items-center justify-center">
              <div className="w-275 h-340 bg-emerald-200 rounded-md relative">
                <img className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg shadow-lg" src="https://avatars.githubusercontent.com/u/76159067?v=4" alt="pic" />
              </div>
            </div>
            {/* content box */}
            <div className="w-full h-420 flex flex-col items-center justify-center">
              <p className="text-lg text-textBase text-center">
              Hi, I'm <span className="text-white">Prakash</span>, a final-year Bachelor of Engineering student majoring in ECE. I'm a passionate <span className="text-white">Full-stack web developer</span> with experience in front-end technologies like <span className="text-white">React and Vue.js,</span>  as well as proficiency in <span className="text-white">Java and Python </span> programming languages. I'm always eager to learn and recently started exploring backend development using <span className="text-white">Spring Boot, node js.</span>  In my spare time, I enjoy travelling, blogging, and web surfing. I'm excited about taking on new projects and collaborating with others. Feel free to get in touch with me to discuss any opportunities!
              </p>
              <div className="flex space-x-4">
                <motion.button whileTap={{ scale: 0.8 }}  className="bg-slate-100 px-4 py-2 mt-6 rounded-lg hover:bg-slate-200"> <a href="#contact">Contact Me</a> </motion.button>
                <motion.button whileTap={{ scale: 0.8 }} onClick={download} className="bg-slate-100 px-4 py-2 mt-6 rounded-lg hover:bg-slate-200">Download Resume</motion.button>
             </div>
            </div>
          </section>
          {/* adbout section end */}

          <div id="timeline"></div>
          {/* timeline */}
          <p className="text-2xl text-gray-400 capitalize mt-20 mb-16">TimeLine</p>
          <section className="w-full flex items-center justify-center">
            <VerticalTimeline>
              {
                Experience && Experience.map(n =>
                  <VerticalTimelineElement
                    key={n.id}
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(21,24,31)', color: '#888' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(21,24,31)' }}
                    date={n.date}
                    iconStyle={{ background: 'rgb(21,24,31)', color: '#888' }}
                    icon={n.iconsSrc}
                  >
                    <h3 className="vertical-timeline-element-title">{n.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{n.location}</h4>
                    <p>
                      {n.description}
                    </p>
                  </VerticalTimelineElement>
                )
              }
            </VerticalTimeline>
          </section>
          {/* end timeline */}

          <div id="projects"></div>

          {/* project section start */}
          <p className="text-2xl text-gray-400 capitalize mt-20 mb-8">Projects</p>
          <section className="flex flex-wrap items-center justify-evenly mb-24 gap-4" >
            {Projects && Projects.map(n =>
              <div key={n.id} className="border border-zinc-800 rounded-md p-2 min-w-[275px] md:max-w-[275px] hover:border-zinc-600 duration-100 ease-in-out">
                <p className="text-lg text-textBase font-medium uppercase">
                  {n.name.length > 25 ? `${n.name.slice(0, 22)}...` : n.name}
                </p>
                <img className="w-80 h-44 object-cover rounded-md my-4" src={n.imageSrc} alt="projImg" />
                <div className="flex flex-1 items-center justify-between">
                  <p className="text-lg text-gray-300">Technologies
                    <span className="block text-sm text-gray-500">
                      {n.techs}
                    </span>
                  </p>

                  <div className="flex items-center justify-center">
                    {
                      n.live && <a href={n.live} target="blank"> 
                      <IoFlameOutline className="text-orange-500 
                               text-3xl cursor-pointer"></IoFlameOutline>
                      </a>
                    }
                    <a href={n.github} target="blank">
                      <IoLogoGithub className="text-textBase 
                             text-3xl cursor-pointer"></IoLogoGithub>
                    </a>
                  </div>

                </div>
              </div>
            )}
          </section>
          {/* end project section */}

          <div id="contact"></div>
          {/* conatct section start */}
          <section className="flex flex-col items-center justify-center w-full my-24">
            <p className="text-2xl text-gray-400 capitalize">Follow me on</p>
            <motion.div whileTap={{ scale: 0.8 }}
              className="flex items-center justify-center w-full my-4 flex-wrap gap-4">
              {
                SocialLinks && SocialLinks.map(n =>
                  <a href={n.link} key={n.id} target="blank"
                    className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-2xl hover:border-zinc-600 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3">
                    {n.iconSrc}
                    {/* <IoLogoGithub className="text-textBase text-3xl cursor-pointer"/> */}
                    <p className="text-lg text-textBase">{n.name}</p>
                  </a>
                )
              }
            </motion.div>
          </section>
          {/* contact section end */}
        </main>
        {/* end main section */}
      </div>
    </AnimatePresence>
  );
}

export default App;
