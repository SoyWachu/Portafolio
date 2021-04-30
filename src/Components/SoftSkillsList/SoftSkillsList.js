import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function SoftSkillsList() {
    const [t] = useTranslation("global");

    return (
        <div className="flex justify-center ">
            <div>
                <div>
                    <h3 className="text-5xl mb-16 text-center ">
                        {t("skills.t25")}
                    </h3>
                </div>
                <div>
                    <ul className="grid grid-cols-2 list-disc cursor-pointer ">
                        <motion.li
                            className="flex justify-center w-15"
                            whileHover={{
                                scale: 1.4,
                                origenX: 0,
                            }}
                        >
                            {t("skills.t11")}
                        </motion.li>
                        <motion.li
                            className="flex justify-center w-15"
                            whileHover={{
                                scale: 1.4,
                                origenX: 0,
                            }}
                        >
                            {t("skills.t12")}
                        </motion.li>
                        <motion.li
                            className="flex justify-center w-15"
                            whileHover={{
                                scale: 1.4,
                                origenX: 0,
                            }}
                        >
                            {t("skills.t13")}
                        </motion.li>
                        <motion.li
                            className="flex justify-center w-15"
                            whileHover={{
                                scale: 1.4,
                                origenX: 0,
                            }}
                        >
                            {t("skills.t14")}
                        </motion.li>
                        <motion.li
                            className="flex justify-center w-15"
                            whileHover={{
                                scale: 1.4,
                                origenX: 0,
                            }}
                        >
                            {t("skills.t15")}
                        </motion.li>
                        <motion.li
                            className="flex justify-center w-15"
                            whileHover={{
                                scale: 1.4,
                                origenX: 0,
                            }}
                        >
                            {t("skills.t16")}
                        </motion.li>
                        <motion.li
                            className="flex justify-center w-15"
                            whileHover={{
                                scale: 1.4,
                                origenX: 0,
                            }}
                        >
                            {t("skills.t17")}
                        </motion.li>
                        <motion.li
                            className="flex justify-center w-15"
                            whileHover={{
                                scale: 1.4,
                                origenX: 0,
                            }}
                        >
                            {t("skills.t18")}
                        </motion.li>
                        <motion.li
                            className="flex justify-center w-15"
                            whileHover={{
                                scale: 1.4,
                                origenX: 0,
                            }}
                        >
                            {t("skills.t19")}
                        </motion.li>
                        <motion.li
                            className="flex justify-center w-15"
                            whileHover={{
                                scale: 1.4,
                                origenX: 0,
                            }}
                        >
                            {t("skills.t19")}
                        </motion.li>
                        <motion.li
                            className="flex justify-center w-15"
                            whileHover={{
                                scale: 1.4,
                                origenX: 0,
                            }}
                        >
                            {t("skills.t20")}
                        </motion.li>
                        <motion.li
                            className="flex justify-center w-15"
                            whileHover={{
                                scale: 1.4,
                                origenX: 0,
                            }}
                        >
                            {t("skills.t21")}
                        </motion.li>
                        <motion.li
                            className="flex justify-center w-15"
                            whileHover={{
                                scale: 1.4,
                                origenX: 0,
                            }}
                        >
                            {t("skills.t22")}
                        </motion.li>
                        <motion.li
                            className="flex justify-center w-15"
                            whileHover={{
                                scale: 1.4,
                                origenX: 0,
                            }}
                        >
                            {t("skills.t23")}
                        </motion.li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
