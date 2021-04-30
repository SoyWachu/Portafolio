import React from "react";
import "./Nav.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

export default function Nav() {
    const [t, i18n] = useTranslation("global");

    return (
        <div className="h-16 w-screen text-white bg-blue-300  flex justify-between pl-10 items-center fixed">
            <Link
                to="home"
                spy={true}
                smooth={true}
                className="text-5xl cursor-pointer"
            >
                Ocando
            </Link>
            <div>
                <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    className="mr-8 text-base cursor-pointer"
                >
                    {t("nav.t1")}
                </Link>
                <Link
                    to="tecnologias"
                    spy={true}
                    smooth={true}
                    className="mr-8 text-base cursor-pointer"
                >
                    {t("nav.t2")}
                </Link>
                <Link
                    to="proyectos"
                    spy={true}
                    smooth={true}
                    className="mr-8 text-base cursor-pointer"
                >
                    {t("nav.t3")}
                </Link>
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
