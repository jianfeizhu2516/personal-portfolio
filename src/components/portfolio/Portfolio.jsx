import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Online Pizza Shop Proejct",
    img: "/pizzaShop.png",
    demoLink:'https://food-delivery-web-peach.vercel.app/',
    desc: "An online pizza shop where users can register, login, place order using integrated Stripe payment page",
  },
  {
    id: 2,
    title: "E-Commerce Proejct",
    img: "/ecommerce.png",
    desc: "E-Commerce project based on React",
  },
  {
    id: 3,
    title: "Real-time Chat App",
    img: "/chatapp.png",
    desc: "Real-time chat project based on React",
  },
  {
    id: 4,
    title: "Treatment planning system",
    img: "/tps.jpg",
    desc: "Previous work experience- a web treatment planning system for radiotherapy based on React",
  }
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const goToDemo = (demoLink)=>{
    window.location.href = demoLink;
  }
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={()=>goToDemo(item.demoLink)}>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;