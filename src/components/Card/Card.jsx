import "./Card.css"
import mapPin from "../../assets/map-pin.png"

function Card(props) {
    const imgSrc = props.imageUrl
    return (
        <div className="card">
            <img className="card--main-image" src={imgSrc}></img>
            <div className="card--location-info">
                <div className="card--title-row">
                    <img className="card--map-pin" src={mapPin}></img>
                    <p className="card--country">{props.location}</p>
                    <a className="card--view-maps" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <p className="card--date">{props.startDate} - {props.endDate}</p>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )

}


export default Card