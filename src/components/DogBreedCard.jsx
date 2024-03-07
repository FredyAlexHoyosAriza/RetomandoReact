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

export default DogBreedCard;