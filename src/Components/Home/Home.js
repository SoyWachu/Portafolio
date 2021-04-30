import React from "react";
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
    return (
        <div id="home">
            <Nav />
            <LandingPage />
            <span id="about" />
            <About />
            <span id="tecnologias" />
            <div className=" flex justify-evenly mt-32">
                <TechList />
                <SoftSkillsList />
            </div>
            <span id="proyectos" />
            <ProjectList />
            <Contact />
            <Footer />
        </div>
    );
}
