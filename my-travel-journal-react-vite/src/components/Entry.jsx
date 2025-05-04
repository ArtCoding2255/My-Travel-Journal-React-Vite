import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Entry(props) {
    
    return (

        <article key={props.entry.id} className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" src={props.entry?.img.src} alt="mount-fuji"/>
            </div>

            
            <div className="details-container">
            <HiOutlineLocationMarker className="marker"/>
            <span className="place-name">{props.entry.title}</span>
            <span className="country">{props.entry.country}</span>
            <a className="google-map-link" 
            href={props.entry.googleMapsLink}> View on Goole Maps</a>
            <p className="date">{props.entry.dates}</p>
            <p className="description">{props.entry.text}
            </p>
            </div>
        </article>
        
    )    
    
}


