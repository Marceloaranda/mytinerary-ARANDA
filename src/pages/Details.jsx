
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import cityActions from "../store/actions/cityActions";
import { useEffect } from "react";
import Itinerary from "../components/Itinerary";
import { Link as Anchor} from "react-router-dom"

export default function Details() {
    const {id} = useParams();
   // console.log(id);
    const dispatch = useDispatch();

 useEffect(() => {
    dispatch(cityActions.detailCity(id));

 },[]);


    const cityStore = useSelector((store) => store.citiesReducer.city);
    console.log("Tengo el citySore:", cityStore)
    
  return (
    <>
      {cityStore ? (

        <div className="card detail mb-3" >
          <div className="row g-5">
            <div className="col-md-4">
              <figure>
                <img className="img-fluid rounded-start" width="300" height="150" src={cityStore.image} alt={cityStore.city} />
              </figure>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">{cityStore.city}</h2>
                <p className="card-text">{cityStore.description}</p>
              </div>
              <div >
                <Anchor to="/cities">Go back to Cities</Anchor>
              </div>
            </div>
          </div>
          <div>
            {cityStore._itineraries?.map((itinerary, i) => (
              <>
                <Itinerary itinerary={itinerary} key={i} />
                <div className="accordion accordion-flush" id="accordionFlushExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        View more ...
                      </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"> Under Construction.</div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          
        </div>

      ) : (
        <h2> No Cities</h2>
      )}
    </>
  )
}

