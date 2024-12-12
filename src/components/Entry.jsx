import marker from "../assets/marker.png";

export default function Entry(props) {
  console.log(props)
  return (
    <article className="journal">
      <img
        className="main-image"
        src={props.img.src}
        alt={props.img.alt}
      />
      <div>
        <img className="marker" src={marker} alt="marker" />
        <span className="country"> {props.country} </span>
        <a
          className="map-link"
          href={props.googleMap}
        >
          View on Google Maps
        </a>
        <h2>{props.title}</h2>
        <p className="dates">{props.dates}</p>
        <p className="description">{props.description}</p>
      </div>
    </article>
  );
}
