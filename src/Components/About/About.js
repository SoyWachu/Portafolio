import React from "react";
import think from "../../assets/programmer-thinking.png";
import { useTranslation } from "react-i18next";

export default function About() {
    const [t] = useTranslation("global");

    return (
        <div className="flex items-start justify-around mt-32">
            <img className="w-2/6 " alt="Thinking Logo" src={think} />
            <div className="w-2/5  ">
                <h1 className="text-6xl ">{t("about.t9")}</h1>
                <p className="w-3/5 mt-8">
                    {t("about.t10")}
                    <br />
                </p>
            </div>
        </div>
    );
}
