import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { proyectos } from "../../utilities/utilities";
import { useTranslation } from "react-i18next";

export default function ProjectsList() {
    const [t] = useTranslation("global");

    return (
        <div data-aos="fade-up">
            <h1 className="text-7xl text-center mt-40 text-blue-500">
                {t("projects.t23")}
            </h1>
            <div className="flex justify-center mt-16">
                <div className="grid grid-cols-4 gap-8">
                    {proyectos.map((p) => {
                        return (
                            <ProjectCard
                                key={p.id}
                                id={p.id}
                                name={p.name}
                                img={p.img}
                                alt={p.alt}
                                description={p.description}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
