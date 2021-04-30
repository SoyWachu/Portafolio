import React from "react";
import "./ProjectCard.css";
import { motion } from "framer-motion";

export default function ProjectCard({ img, description, alt }) {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="h-96 w-48 mb-16"
        >
            <div className="flex justify-center items-center flex-col">
                <img
                    src={img}
                    alt={alt}
                    className="mydiv h-48 w-48 shadow-lg cursor-pointer"
                />
                <p className="hide pl-1 pb-2 pt-2 h-8 ">{description}</p>
            </div>
        </motion.div>
    );
}
