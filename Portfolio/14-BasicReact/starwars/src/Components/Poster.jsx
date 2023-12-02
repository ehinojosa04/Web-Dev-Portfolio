import App from "../App"
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Poster({data}) {
    const [isHovered, setIsHovered] = useState(false);
    const il = "images/"+data.poster;
    let lo = "images/";
    lo +=data.best_character.affiliation=== 'Jedi' ? 'rebel.png' : 'sith.png';
    let cb = "card-body";
    cb += data.best_character.affiliation === 'Jedi' ? ' bg-primary' : ' bg-danger';
    const likes = (
        <div className="row">
            <div className="col"><button className="btn">Likes: </button></div>
            <div className="col"><button className="btn">Dislikes: </button></div>
        </div>
    )

    return (
        <div className="col" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div class="card" style={{height: "400px"}}>
                <img src={isHovered ? lo : il} class="card-img-top" alt="..."/>
                <div class={isHovered ? cb : "card-body"}>
                    <h5 class="card-title">{data.title}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">{data.year}</h6>
                    <a href="#" class="card-link text-black">More...</a>
                    {isHovered ? likes : null}
                </div>
            </div>
        </div>
      );
}

export default Poster