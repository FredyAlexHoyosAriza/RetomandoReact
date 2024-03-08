import { Link } from "react-router-dom";

function DogBreedCard({ Breed, DogImg, DogImgAltMsg, likes1, comments, views }) {
    let page;
    if (Breed === 'Pastor Belga Malinois') {
        page = '/pastor_belga';
    } else if (Breed === 'Border Collie') {
        page = '/border_collie';
    }
    return (
        <Link to={page}>
            <li className="breedCard">
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
        </Link>
    );
}

export default DogBreedCard;