import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import TechList from "../TechList/TechList";
import Nav from "../Nav/Nav";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import LandingPage from "../LandingPage/LandingPage";
import About from "../About/About";
import ProjectList from "../ProjectsList/ProjectsList";
import SoftSkillsList from "../SoftSkillsList/SoftSkillsList";
import "./Home.css";

export default function Home() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (
        <div id="home">
            <Nav />
            <LandingPage />
            <span id="proyectos" />
            <ProjectList data-aos="fade-up" />
            <span id="about" />
            <About />
            <span id="tecnologias" />
            <div
                data-aos="fade-up"
                className=" flex justify-evenly mt-32 pt-10 pb-10 "
            >
                <TechList />
                <SoftSkillsList />
            </div>

            <Contact />
            <Footer />
        </div>
    );
}
