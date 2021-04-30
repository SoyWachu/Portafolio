import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const [t] = useTranslation("global");

    return (
        <div className="flex justify-between items-center bg-blue-300 h-16 mt-10">
            <div></div>
            <p>{t("footer.t26")}</p>
            <div className="flex">
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/SoyWachu"
                >
                    <img
                        alt="logo github"
                        className="h-8"
                        src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                    />
                </a>
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/mauricio-ocando-732238184/"
                >
                    <img
                        src="https://pics.freeicons.io/uploads/icons/png/541526511556105711-512.png"
                        alt="linkedin Logo"
                        className="h-8 pl-2 pr-2"
                    />
                </a>
            </div>
        </div>
    );
}
