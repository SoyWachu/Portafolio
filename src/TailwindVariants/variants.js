const variants = {
    open: {
        y: "-2vw",
        transition: {
            duration: 0.5,
        },
    },
    closed: {
        x: 0,
        transition: {
            duration: 1,
        },
    },
    textAppear: {
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
    textDissappear: {
        opacity: 0,
        transition: {
            duration: 0.1,
        },
    },
};

export default variants;
