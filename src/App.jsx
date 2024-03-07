import './styles/App.css';
import borderCollie from "./media/Border_Collie.jpg"
import pastorBelgaMalinois from "./media/pastor-belga-malinois_530_0_600.jpg"
import logoPerro from "./media/perro.png"

function App() {
    return (
        <div className="App">
            <header>
                <ul className="navbar">
                    <li className="navelem">
                        <img src={logoPerro} alt="Logo de un perro" className="logo" />
                    </li>
                    <li><button className="button mainButton navelem">Nuevo Post</button></li>
                    <li>
                        <div className="buscar navelem">
                            <input placeholder="Buscar Raza" />
                            <i className="fas fa-search"></i>
                        </div>
                    </li>
                    <li><button className="button secondaryButton navelem">Login</button></li>
                    <li><button className="button mainButton navelem">Registro</button></li>
                </ul>
            </header>
            <main>
                <section>
                    <h1 className="titulo">Razas de Perros</h1>
                    <ul className="breedCardContainer">
                    <DogBreedCard Breed="Border Collie" DogImg={borderCollie} DogImgAltMsg="Imagen Border Collie" likes={150} comments="1.5k" views={120} />
                        <DogBreedCard Breed="Pastor Belga Malinois" DogImg={pastorBelgaMalinois} DogImgAltMsg="Imagen Pastor Belga Malinois" likes={450} comments="1.1k" views={850} />
                        <DogBreedCard Breed="Border Collie" DogImg={borderCollie} DogImgAltMsg="Imagen Border Collie" likes={150} comments="1.5k" views={120} />
                        <DogBreedCard Breed="Pastor Belga Malinois" DogImg={pastorBelgaMalinois} DogImgAltMsg="Imagen Pastor Belga Malinois" likes={450} comments="1.1k" views={850} />

                    </ul>
                </section>
            </main>
            <footer></footer>
        </div>
    );
}

function DogBreedCard({Breed, DogImg, DogImgAltMsg, likes1, comments, views}) {
    return (
        <li className="breedContainer">
            <img className="imgSize" src={DogImg} alt={DogImgAltMsg} name={Breed} />
            <div>
                <label>{Breed}</label>
                <ul className="interaction">
                    <li><i className="fa fa-heart"></i><span>{likes1}</span></li>
                    <li><i className="fa fa-comment"></i><span>{comments}</span></li>
                    <li><i className="fa fa-eye"></i><span>{views}</span></li>
                </ul>
            </div>
        </li>
    );
}

export default App;
