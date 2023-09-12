import { CiMoneyBill } from "react-icons/ci";

export default function Itinerary({ itinerary }) {
  return (
    <div className="car text-bg-info mb-3">
      <div >
        <h2 className="card-text">{itinerary.title}</h2>
       
      </div>
      <div>
        <div className="row g-0">
          <div className="container d-flex justify-content-center">
            <figure>
              <img
                className="figure-img img-fluid rounded" width="100" height="80"
                src={itinerary.profilePhoto}
                alt={itinerary.title}
              />
              <figcaption className="figure-caption">{itinerary.authorName}</figcaption>
            </figure>
            
          </div>
          <div className="flex flex-row">
            <div className="self-center">
              <CiMoneyBill />
            </div>
            <p> {itinerary.price}</p>
          </div>
          <p>Duration: {itinerary.duration} hs</p>
        </div>
      </div>
    </div>
  );
}