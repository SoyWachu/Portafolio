import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import personaje from "../../assets/37129062.jpg";

export default function LandingPage() {
    const [t] = useTranslation("global");

    return (
        <div className=" flex flex-column justify-center  items-center font-sans h-full w-auto pb-16 ">
            <div className=" h-auto w-2/5 leading-relaxed ">
                <h3 className="text-5xl leading-relaxed ">{t("landing.t4")}</h3>
                <h1 className="text-7xl leading-relaxed text-blue-500">
                    {t("landing.t5")}
                </h1>
                <h3 className="text-5xl leading-relaxed">{t("landing.t6")}</h3>
                <a href="../../assets/Curriculum.pdf" download="Curriculum.pdf">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="button"
                    >
                        {t("landing.t7")}
                    </motion.button>
                </a>
                <motion.button whileHover={{ scale: 1.1 }} className="button">
                    {t("landing.t8")}
                </motion.button>
            </div>
            <img className="w-2/5 " alt="Personaje Logo " src={personaje} />
        </div>
    );
}
