import myimg from '../assets/Profile_Imam1-transformed.png';
import myabout from '../assets/about.jpg';
import resume from '../assets/CV-ATS-Imam Baihaqi.pdf';
import { TypeAnimation } from 'react-type-animation';
import { motion, useScroll } from 'framer-motion';
import { useState, useTransition } from 'react';
import TabButton from '../component/tabButton';
import ProjectCard from '../component/projectCard';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const projectData = [
  {
    id: 1,
    title: 'Immersive Dashboard',
    description:
      'Aplikasi yang digunakan untuk mengelola data siswa di Alterra',
    image: '/public/img/Immersive.PNG',
    gitUrl: 'https://github.com/ImamHaqi23/Immersive-Dashboard',
    previewUrl: 'https://immersivedash.vercel.app/',
  },
  {
    id: 2,
    title: 'HRIS Apps',
    description: 'Aplikasi yang digunakan untuk mengelola SDM perusahaan',
    image: '/public/img/hris.PNG',
    gitUrl: 'https://github.com/ImamHaqi23/HRIS-Apps',
    previewUrl: 'https://hris-group-1.vercel.app/',
  },
  {
    id: 3,
    title: 'EVVE Apps',
    description:
      'Aplikasi yang digunakan untuk penjualan tiket online dan pengelolaan Event',
    image: '/public/img/evve.PNG',
    gitUrl: 'https://github.com/ImamHaqi23/EVVE-Apps',
    previewUrl: 'https://evve.vercel.app/',
  },
];

const contactMe = [
  {
    id: 1,
    icon: <FaGithub />,
    linkContact: 'https://github.com/ImamHaqi23',
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    linkContact: 'https://www.linkedin.com/in/imam-baihaqi-10932819a/',
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    linkContact: 'https://wa.me/085731490413',
  },
  {
    id: 4,
    icon: <FaInstagram />,
    linkContact: 'https://www.instagram.com/imambaihaqi_23/',
  },
];

const dataAbout = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <span className="flex gap-2">
        <img
          src="https://skillicons.dev/icons?i=react,js,ts,tailwind,bootstrap,html,css"
          alt="icon-react"
        />
      </span>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul>
        <li>STIKI Malang (Teknik Informatika)</li>
        <li>Alterra Academy (Front End Enginer)</li>
      </ul>
    ),
  },
  {
    title: 'Certification',
    id: 'certification',
    content: (
      <ul>
        <li>
          <a href="https://www.dicoding.com/certificates/QLZ92JQO7X5D">
            Belajar Dasar Pemrograman JavaScript (Issued byDicoding).
          </a>
        </li>
        <li>
          <a href="https://www.codepolitan.com/c/HVTQJCX/">
            Sertifikat Kelas Belajar Bootstrap CSS Framework (Issued
            byCODEPOLITAN).
          </a>
        </li>
      </ul>
    ),
  },
];

const textVariantsLeft = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const textVariantsRight = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const textVariantsBottom = {
  initial: {
    y: 300,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Home = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="scroll-smooth">
      {/* Header */}
      <section
        id="header"
        className="grid grid-cols-1 lg:grid-cols-12 mx-auto container px-16 min-h-screen mt-9 "
      >
        <motion.div
          variants={textVariantsLeft}
          initial="initial"
          animate="animate"
          className="col-span-7 place-self-center text-center  sm:text-left"
        >
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0810f]  to-[#e6df44] ">
              Hello, I'm{' '}
            </span>{' '}
            <br />
            <TypeAnimation
              sequence={['Imam Baihaqi', 1000, 'Frontend Developer', 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-slate-400 text-lg font-bold mb-6 md:text-xl mt-3">
            "Creative code, dynamic design: Creating unique, innovative, and
            inspiring web experiences"
          </p>
          <button className="relative px-6 py-3 rounded-full text-white font-semibold text-lg mb-6 w-full sm:w-fit overflow-hidden group border-2 border-[#f0810f]">
            <span className="absolute inset-0 bg-gradient-to-br from-[#f0810f] to-[#e6df44] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <a href={resume} download="resume" className="relative z-10">
              Download CV
            </a>
          </button>
        </motion.div>
        <motion.div
          variants={textVariantsRight}
          initial="initial"
          animate="animate"
          className="col-span-5 sm:place-self-center ml-5 -mt-7 lg:ml-14"
        >
          <div className="rounded-full bg-gradient-to-br from-[#f0810f] to-[#e6df44] w-[250px] h-[250px] lg:w-[260px] lg:h-[260px] relative">
            <img
              src={myimg}
              alt="image"
              width={250}
              height={250}
              className="absolute transform -translate-x-1/2 -top-5 lg:-top-2 left-1/2"
            />
          </div>
        </motion.div>
      </section>
      {/* Header */}

      {/* About */}
      <section
        id="about"
        className="container grid grid-cols-1 lg:grid-cols-12 px-16 min-h-screen"
      >
        <motion.div
          variants={textVariantsLeft}
          initial="initial"
          viewport={{ once: true }}
          whileInView="animate"
          className="col-span-5 mt-1"
        >
          <div className="w-[300px] md:w-[500px]">
            <img src={myabout} alt="imageAbout" className="rounded-xl" />
          </div>
        </motion.div>

        <motion.div
          variants={textVariantsRight}
          initial="initial"
          viewport={{ once: true }}
          whileInView="animate"
          className="text-white col-span-7 md:pl-24 -mt-32 md:mt-0"
        >
          <h1 className="text-3xl font-bold mb-6 ">About Me</h1>
          <p className="md:text-lg  text-slate-400">
            I am a front-end developer with a passion for creating compelling
            web experiences. Armed with skills in HTML, CSS, and JavaScript, I
            am committed to building interfaces that are not only aesthetically
            pleasing, but also responsive and functional. Through my experience
            in various projects, I take each design to the next level with an
            eye for detail and a focus on optimal user experience.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('certification')}
              active={tab === 'certification'}
            >
              Certification
            </TabButton>
          </div>
          <div className="mt-8">
            {dataAbout.find((item) => item.id === tab)?.content}
          </div>
        </motion.div>
      </section>
      {/* About */}

      {/* Project */}
      <section id="project" className="container px-16 min-h-screen">
        <h1 className="text-center text-white text-4xl font-bold mb-16">
          My Project
        </h1>
        <motion.div
          variants={textVariantsBottom}
          initial="initial"
          viewport={{ once: true }}
          whileInView="animate"
          className="grid md:grid-cols-3 gap-8 md:gap-12"
        >
          {projectData.map((item) => (
            <ProjectCard
              key={item.id}
              title={item.title}
              desc={item.description}
              imgUrl={item.image}
              gitUrl={item.gitUrl}
              previewUrl={item.previewUrl}
            />
          ))}
        </motion.div>
      </section>
      {/* Project */}
      {/* Contact */}
      <section id="contact" className="container px-16 min-h-screen relative">
        <h1 className="text-4xl font-bold text-white text-center mb-16 mt-16">
          Contact
        </h1>
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#f0810f] to-transparent rounded-full h-80 w-80 z-0 blur-xl absolute top-96 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 z-10">
          <motion.div
            variants={textVariantsLeft}
            initial="initial"
            viewport={{ once: true }}
            whileInView="animate"
            className="col-span-5 justify-center items-center"
          >
            <h2 className="text-white text-xl font-semibold mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-slate-400">
              I'm currently looking for new opportunities, my inbox is always
              open. Whether you have a question or just want to say hi, i'll try
              my best to get back to you!
            </p>
            <span className="flex gap-3 text-4xl ">
              {contactMe.map((item) => (
                <a
                  target="_blank"
                  className="text-slate-400 hover:text-white my-4"
                  href={item.linkContact}
                >
                  {item.icon}
                </a>
              ))}
            </span>
          </motion.div>
          <div className="col-span-7">
            <motion.form
              variants={textVariantsRight}
              initial="initial"
              viewport={{ once: true }}
              whileInView="animate"
              onSubmit={handleSubmit}
              className="flex flex-col"
            >
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="text-white block mb-2 text-md font-medium"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="john@email.com"
                  className="bg-[#001b27] border border-[#33353f] placeholder-slate-400 text-slate-100 text-sm rounded-lg block w-full p-2.5"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="text-white block mb-2 text-md font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Just say hi"
                  className="bg-[#001b27] border border-[#33353f] placeholder-slate-400 text-slate-100 text-sm rounded-lg block w-full p-2.5"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-white block mb-2 text-md font-medium"
                >
                  Subject
                </label>
                <textarea
                  placeholder="Let's talk about ...."
                  className="bg-[#001b27] border border-[#33353f] placeholder-slate-400 text-slate-100 text-sm rounded-lg block w-full p-2.5"
                  name="message"
                  id="message"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-[#f0810f] to-[#e6df44] text-white text-lg font-semibold py-2.5 px-5 rounded-lg w-full mb-10"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
