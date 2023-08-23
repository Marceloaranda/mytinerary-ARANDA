import { Link as Anchor} from 'react-router-dom'

export default function CityCard({ city }) {
  return (
        <div  className= "card w-64 gb-base-100 image-full">
            <figure>
            <img src={city.image} className="img-thumbnail" alt={city.city} />
            </figure>
            <div className="card-body justify-between">
                <h2 className="card-title">{city.city}</h2>
                <div className="card-actions text-cyan-500">
                    <Anchor to='/details'>Details </Anchor>
                </div>    
            </div>            
        </div>

  )
}

