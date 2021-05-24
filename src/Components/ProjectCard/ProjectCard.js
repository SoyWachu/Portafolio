import React from "react";
import { useLocation, Link } from "wouter";
import { motion } from "framer-motion";

export default function ProjectCard({ img, description, name, alt, id }) {
    const [push, pushLocation] = useLocation();
    const slashMotion = {
        rest: { ease: "easeOut", duration: 0.2, type: "tween" },
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.4,
            },
        },
    };

    return (
        <motion.div
            whileHover="hover"
            variants={slashMotion}
            className="group h-56 w-56 mb-8 bg-blue-500 flex justify-center items-center rounded-lg"
        >
            <div className="h-48 w-48 flex justify-center flex-col items-center">
                <div className="group h-56 w-56 bg-none hover:bg-black hover:opacity-70 absolute  flex justify-center items-center rounded-lg">
                    <button
                        onClick={() => pushLocation(`/project/${id}`)}
                        className="h-8 w-32 absolute opacity-0 group-hover:opacity-100 pl-2 pr-2 focus:outline-none border-white border-2 text-white bg-none hover:text-black hover:bg-white hover: border-black"
                    >
                        Learn more
                    </button>
                </div>
                <img src={img} alt={alt} className="h-48 w-48 shadow-lg pt-2" />
                <h3 className="text-white">{name}</h3>
            </div>
        </motion.div>
    );
}
