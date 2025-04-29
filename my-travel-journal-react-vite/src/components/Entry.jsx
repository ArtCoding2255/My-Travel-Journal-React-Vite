import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Entry(props) {
    return (

        <article className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" src={props.img.src} alt="mount-fuji"/>
            </div>

            
            <div className="details-container">
            <HiOutlineLocationMarker className="marker"/>
            <span className="place-name">{props.title}</span>
            <span className="country">{props.country}</span>
            <a className="google-map-link" 
            href={props.googleMapsLink}> View on Goole Maps</a>
            <p className="date">{props.dates}</p>
            <p className="description">{props.text}
            </p>
            </div>
        </article>
    )    
}


