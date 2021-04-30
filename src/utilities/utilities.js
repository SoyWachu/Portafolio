import Clon from "../assets/clones.jpg";
import Tequiero from "../assets/tequieroecommerce.png";
import Under from "../assets/under.png";

const html = <h3 className=" bg-yellow-500 tech">HTML</h3>;
const css = <h3 className="tech bg-blue-500">CSS</h3>;
const js = <h3 className=" tech bg-yellow-300">Javascript</h3>;
const react = <h3 className="tech bg-blue-400">React</h3>;
const redux = <h3 className="tech bg-purple-400">Redux</h3>;
const node = <h3 className="tech bg-green-500">Node</h3>;
const sql = <h3 className="tech bg-blue-500">SQL</h3>;
const tailwind = <h3 className="tech bg-indigo-400">TailWind</h3>;
const styled = <h3 className="tech bg-pink-400 ">Styled Components</h3>;

const descripcion = (
    <div>
        Maquetado de grandes paginas web como lo son Facebook, Twitter,
        Instagram, Youtube y Whatsapp Web.
        <br />
        <br />
        Tecnologias usadas:
        <div>
            <span className="inline-block ">{html}</span>
            <span className="inline-block ">{css}</span>
        </div>
    </div>
);

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

const descripcion4 = <h3>En construccion</h3>;

const proyectos = [
    {
        id: 1,
        img: Clon,
        description: descripcion,
        alt: `Imagen proyecto`,
    },
    {
        id: 2,
        img: Tequiero,
        description: descripcion2,
        alt: "Imagen proyecto",
    },
    {
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
        url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/230px-HTML5_logo_and_wordmark.svg.png",
        alt: "HTML LOGO",
    },
    {
        name: "CSS",
        url: "http://1000marcas.net/wp-content/uploads/2021/02/CSS-Logo.png",
        alt: "CSS LOGO",
    },
    {
        name: "JavaScript",
        url:
            "https://techtatva.co/techtatva140717/wp-content/uploads/2018/09/js-logo.png",
        alt: "JS LOGO",
    },
    {
        name: "React",
        url:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
        alt: "REACT LOGO",
    },
    {
        name: "Redux",
        url:
            "data:image/png;base64,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",
        alt: "REDUX LOGO",
    },
    {
        name: "Node JS",
        url: "https://img.icons8.com/color/452/nodejs.png",
        alt: "NODE LOGO",
    },
    {
        name: "PostgreSQL",
        url:
            "https://userscontent2.emaze.com/images/46397bcf-c2bc-46d3-80ee-e80bb7ee1b92/7ab87d49737b0b12fbdc806effac21b3.png",
        alt: "SQL LOGO",
    },
    {
        name: "TailWind CSS",
        url: "https://www.drupal.org/files/project-images/screenshot_361.png",
        alt: "TAILWIND LOGO",
    },
    {
        name: `Styled Compts`,
        url: "https://miro.medium.com/max/318/1*7jRD5QhgARucFKvRHFxpOg.png",
        alt: "STYLED COMPONENTS LOGO",
    },
];

export { tecnologias, proyectos };
