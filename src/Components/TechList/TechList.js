import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { tecnologias } from "../../utilities/utilities";

export default function TechList() {
    const [t] = useTranslation("global");

    return (
        <div>
            <h1 className="text-5xl text-center mb-16 text-blue-500">
                {t("tech.t27")}
            </h1>
            <div className="grid grid-cols-4 gap-9  text-black-500">
                {tecnologias.map((p) => {
                    return (
                        <motion.div
                            key={p.name}
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                            className="h-24 flex justify-start flex-col items-center cursor-pointer "
                        >
                            <img
                                alt={p.alt}
                                className="h-16 pr-4 mydiv"
                                src={p.url}
                            />
                            <p className="hide pt-2 ">
                                {p.name}
                                <br />
                            </p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
