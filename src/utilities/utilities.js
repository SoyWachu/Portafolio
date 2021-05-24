import Clon from "../assets/clones.jpg";
import Tequiero from "../assets/tequieroecommerce.png";
import Under from "../assets/under.png";
import HTML from "../assets/htmllogo.png";
import CSS from "../assets/csslogo.jpg";
import JS from "../assets/jslogo.png";
import REACT from "../assets/react.logo.png";
import REDUX from "../assets/reduxlogo.png";
import NODE from "../assets/nodejsloco.png";
import SQL from "../assets/SQL.png";
import TAILWIND from "../assets/tailwindlogo.png";
import STYLED from "../assets/styledcomponents.logo.png";
import IG from "../assets/instagram.png";
import TE from "../assets/Banner-2.png";

const html = <h3 className=" bg-yellow-500 tech">HTML</h3>;
const css = <h3 className="tech bg-blue-500">CSS</h3>;
const js = <h3 className=" tech bg-yellow-300">Javascript</h3>;
const react = <h3 className="tech bg-blue-400">React</h3>;
const redux = <h3 className="tech bg-purple-400">Redux</h3>;
const node = <h3 className="tech bg-green-500">Node</h3>;
const sql = <h3 className="tech bg-blue-500">SQL</h3>;
// const tailwind = <h3 className="tech bg-indigo-400">TailWind</h3>;
const styled = <h3 className="tech bg-pink-400 ">Styled Components</h3>;

const descripcion2 = (
    <div>
        E-Commerce de te hecho como proyecto final con fecha limite para el
        bootcamp intensivo de SoyHenry
        <br />
        <br />
        Tecnologias usadas:
        <div>
            <span className="inline-block ">{html}</span>
            <span className="inline-block ">{css}</span>
            <span className="inline-block ">{js}</span>
            <span className="inline-block ">{react}</span>
            <span className="inline-block ">{redux}</span>
            <span className="inline-block ">{node}</span>
            <span className="inline-block ">{styled}</span>
            <span className="inline-block ">{sql}</span>
        </div>
    </div>
);

const descripcion3 = (
    <h3>
        Pagina web del famoso juego Legue of legends usando su API para
        desarrolladores
    </h3>
);

const detailClon = (
    <div className=" flex justify-center  w-4/6 mb-16 ">
        <div className="mr-8 ml-8">
            <h3 className="font-bold pb-1 ">Services</h3>
            <p>Frontend Development</p>
        </div>
        <div className="mr-8 ml-8">
            <h3 className="font-bold pb-1">Tecnologias</h3>
            <p>{html}</p>
            <p>{css}</p>
        </div>
        <div className="mr-8 ml-8">
            <button className="button">Launch Site</button>
        </div>
    </div>
);

const detailEcommerce = (
    <div className=" flex justify-center  w-4/6 mb-16 ">
        <div className="mr-8 ml-8">
            <h3 className="font-bold pb-1 ">Services</h3>
            <p>Frontend Development</p>
            <p>Backend Development</p>
            <p>UI/UX Design</p>
        </div>
        <div className="mr-8 ml-8">
            <h3 className="font-bold pb-1">Tecnologias</h3>
            <p>{html}</p>
            <p>{css}</p>
            <p>{js}</p>
            <p>{react}</p>
            <p>{redux}</p>
            <p>{node}</p>
            <p>{sql}</p>
            <p>{styled}</p>
        </div>
        <div className="mr-8 ml-8">
            <button className="button">Launch Site</button>
        </div>
    </div>
);

const descripcion4 = <h3>En construccion</h3>;

const proyectos = [
    {
        id: 1,
        name: "Clon Project",
        img: Clon,
        description:
            "Proyecto de practica para desarrollar mis habilidades tanto de HTML como de CSS puro realizando el maquetado de grandes paginas web como lo son Facebook, Twitter,Instagram, Youtube y Whatsapp Web.",
        alt: `Imagen proyecto.`,
        detail: detailClon,
        imgalt: IG,
    },
    {
        id: 2,
        name: "Te quiero Ecommerce",
        img: Tequiero,
        description:
            "Te quiero es un Ecommerce donde puedes comprar Te de manera facil y segura, es el proyecto final que realice junto a un grupo para el curso intensivo SoyHenry, un bootcamp de 800h donde teniamos una fecha limite y demos de forma semanal, hice tareas tanto en el FrontEnd como en el BackEnd y ayude a montar la base de datos con postgreSQL.",
        alt: "Imagen proyecto",
        detail: detailEcommerce,
        imgalt: TE,
    },
    {
        name: "Lol champ info",
        id: 3,
        img: Under,
        description: descripcion3,
    },
    {
        id: 4,
        img: Under,
        description: descripcion4,
    },
    {
        id: 5,
        img: Under,
        description: descripcion4,
    },
    {
        id: 6,
        img: Under,
        description: descripcion4,
    },
    {
        id: 7,
        img: Under,
        description: descripcion4,
    },

    {
        id: 8,
        img: Under,
        description: descripcion4,
    },
];

const tecnologias = [
    {
        name: "HTML",
        url: HTML,
        alt: "HTML LOGO",
    },
    {
        name: "CSS",
        url: CSS,
        alt: "CSS LOGO",
    },
    {
        name: "JavaScript",
        url: JS,
        alt: "JS LOGO",
    },
    {
        name: "React",
        url: REACT,
        alt: "REACT LOGO",
    },
    {
        name: "Redux",
        url: REDUX,
        alt: "REDUX LOGO",
    },
    {
        name: "Node JS",
        url: NODE,
        alt: "NODE LOGO",
    },
    {
        name: "PostgreSQL",
        url: SQL,
        alt: "SQL LOGO",
    },
    {
        name: "TailWind CSS",
        url: TAILWIND,
        alt: "TAILWIND LOGO",
    },
    {
        name: `Styled Compts`,
        url: STYLED,
        alt: "STYLED COMPONENTS LOGO",
    },
];

export { tecnologias, proyectos };
