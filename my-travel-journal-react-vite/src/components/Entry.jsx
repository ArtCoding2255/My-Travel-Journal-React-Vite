import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Entry(props) {
    return (

        <article className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" src={props.img} alt="mount-fuji"/>
            </div>

            
            <div className="details-container">
            <HiOutlineLocationMarker className="marker"/>
            <span className="place-name">{props.placeName}</span>
            <a className="google-map-link" 
            href="https://earth.google.com/web/@0,0,0a,22251752.77375655d,35y,0h,0t,0r/data=CgRCAggBQgIIAEoNCP___________wEQAA"> View on Goole Maps</a>
            <p className="date">{props.date}</p>
            <p className="description">{props.description}
            </p>
            </div>
        </article>
    )    
}


