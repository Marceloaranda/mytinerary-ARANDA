import { Link } from 'react-router-dom'

export default function CityCard({ city }) {
  return (
        <div  className= "card w-10 gb-base-100 image-full bg-transparent border-0 ">
            <figure>
            <img src={city.image} className="img-thumbnail" alt={city.city} />
            </figure>
            <div className="card-body justify-between w-10">
                <h5 className="card-title bg-secondary bg-gradient badge fs-5" >{city.city}</h5>
                <div className="card-actions text-cyan-500">
                    <Link className='btn btn-secondary' to={`/details/${city._id}`}>
                        Details
                    </Link>

                </div>    
            </div>            
        </div>

  )
}

