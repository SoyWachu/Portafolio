import React from "react";
import Logo from "../../assets/logo.jfif";
import { useTranslation } from "react-i18next";

export default function Contact() {
    const [t] = useTranslation("global");

    return (
        <div className="flex justify-evenly items-center mt-30 ">
            <div className="flex flex-cols border-blue-400 border-2 shadown">
                <div className="pl-6 pr-6 pt-6">
                    <p className="h-16 w-96 text-center">{t("contact.t24")}</p>
                    <div className="flex justify-center items-end h-16">
                        <a
                            className="border-2 border-blue-400 rounded-md hover:bg-blue-400 hover:text-white py-2 px-2 animate-pulse "
                            href="mailto:mauroocando@gmail.com"
                        >
                            {t("contact.t25")}
                        </a>
                    </div>
                </div>
                <img className="h-48" alt="Foto mia" src={Logo} />
            </div>
        </div>
    );
}
