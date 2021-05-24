import React, { useState } from "react";
import "./Nav.css";
import { motion } from "framer-motion";

import { AiOutlineMenu } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

export default function Nav() {
    const [sidebar, setSideBar] = useState(false);
    const [t, i18n] = useTranslation("global");

    const showSideBar = () => setSideBar(!sidebar);

    const variants = {
        openedSide: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
            },
        },
        closedSide: {
            opacity: 0,
            x: "-100vw",
            transition: {
                duration: 1.5,
            },
        },
        openedRight: {
            opacity: 0.5,
            transition: {
                duration: 0.5,
                delay: 0.3,
            },
        },
        closedRight: {
            opacity: 0,
        },
    };

    return (
        <div className="h-14 w-full  flex justify-between items-center fixed bg-white nav">
            <div className="flex justify-center items-center flex-col self-center">
                <div className="flex justify-center items-center self-start  ">
                    <AiOutlineMenu
                        className="mr-2 ml-2 cursor-pointer"
                        onClick={showSideBar}
                    />
                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        className="cursor-pointer"
                    >
                        <span className="text-2xl">Mauricio Ocando</span>
                    </Link>
                </div>
                <motion.div
                    variants={variants}
                    initial="closedSide"
                    animate={sidebar ? "openedSide" : "closedSide"}
                    className=" flex justify-center items-center text-5xl leading-loose text-center text-white w-4/12 bg-blue-500 fixed left-0 bottom-10 visible top-14 h-screen border-r-2 border-blue-500"
                >
                    <ul className="">
                        <motion.li whileHover={{ scale: 1.2 }}>
                            <Link
                                to="about"
                                spy={true}
                                smooth={true}
                                className=" cursor-pointer"
                            >
                                {t("nav.t1")}
                            </Link>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.2 }}>
                            <Link
                                to="tecnologias"
                                spy={true}
                                smooth={true}
                                className="cursor-pointer"
                            >
                                {t("nav.t2")}
                            </Link>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.2 }}>
                            <Link
                                to="proyectos"
                                spy={true}
                                smooth={true}
                                className=" cursor-pointer"
                            >
                                {t("nav.t3")}
                            </Link>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.2 }}>
                            <Link
                                to="proyectos"
                                spy={true}
                                smooth={true}
                                className=" cursor-pointer"
                            >
                                CONTACT
                            </Link>
                        </motion.li>
                    </ul>
                </motion.div>
                {/* <motion.div
                    variants={variants}
                    animate={sidebar ? "openedRight" : "closedRight"}
                    className="h-screen w-8/12 top-14 bg-black fixed bottom-10 right-0 opacity-40"
                ></motion.div> */}
            </div>
            <div className="flex pr-8">
                <button
                    onClick={() => i18n.changeLanguage("en")}
                    className="mr-2 focus:outline-none"
                >
                    EN
                </button>
                <button
                    onClick={() => i18n.changeLanguage("es")}
                    className="mr-2 focus:outline-none"
                >
                    ES
                </button>
            </div>
        </div>
    );
}
