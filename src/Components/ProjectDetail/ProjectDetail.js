import React from "react";
import { useLocation } from "wouter";
import { proyectos } from "../../utilities/utilities";

export default function ProjectDetail({ params }) {
    const [push, pushLocation] = useLocation();

    return (
        <div>
            {proyectos
                .filter((e) => e.id == params.id)
                .map((e) => {
                    return (
                        <div>
                            <div className="flex justify-center items-center flex-col mt-16 mb-16">
                                <div className="text-7xl pb-8 leading-none">
                                    <h1>
                                        {e.name}
                                        <span className="text-blue-500">.</span>
                                    </h1>
                                </div>
                                {e.detail}
                                <div className="text-lg w-4/6">
                                    <p>{e.description}</p>
                                </div>
                                <img
                                    className="w-4/6 h-5/6 mt-16 mb-16 border-8 rounded-md border-blue-500"
                                    src={e.imgalt}
                                />
                                <button
                                    className="button"
                                    onClick={() => pushLocation(`/`)}
                                >
                                    Back
                                </button>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
}
