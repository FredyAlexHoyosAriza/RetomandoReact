import DogBreedCard from "../components/DogBreedCard";
import borderCollie from "../media/Border_Collie.jpg"
import pastorBelgaMalinois from "../media/pastor-belga-malinois_530_0_600.jpg"

function Index() {
    return (
        <section>
            <h1 className="titulo">Razas de Perros</h1>
            <ul className="breedCardContainer">
                <DogBreedCard Breed="Border Collie" DogImg={borderCollie} DogImgAltMsg="Imagen Border Collie" likes={150} comments="1.5k" views={120} />
                <DogBreedCard Breed="Pastor Belga Malinois" DogImg={pastorBelgaMalinois} DogImgAltMsg="Imagen Pastor Belga Malinois" likes={450} comments="1.1k" views={850} />
                <DogBreedCard Breed="Border Collie" DogImg={borderCollie} DogImgAltMsg="Imagen Border Collie" likes={150} comments="1.5k" views={120} />
                <DogBreedCard Breed="Pastor Belga Malinois" DogImg={pastorBelgaMalinois} DogImgAltMsg="Imagen Pastor Belga Malinois" likes={450} comments="1.1k" views={850} />
            </ul>
        </section>
    )
}

/*Una funcion que es componente se exporta para poder importarla en otros archivos
en los que se requiera este componente */
export default Index;