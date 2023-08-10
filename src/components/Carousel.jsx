import { useEffect, useState } from 'react'
import Arrow from './Arrow'

const items = [
  [
  {country: 'Tokyo', src:'Tokyo.jpg',citie: 'Japan'},
  {country: 'Delhi',src:'Delhi.jpg',citie: 'India'},
  {country: 'Shanghai',src:'Shanghai.jpg',citie: 'China'},
  {country: 'Sao Paulo',src:'Sao_Paulo.jpg',citie: 'Brazil'}] ,

  [
  {country: 'Dhaka',src:'Dhaka.jpg',citie: 'Bangladesh'},
  {country: 'Cairo',src:'Cairo.jpg',citie: 'Egipto'},
  {country: 'Beijing',src:'Beijing.jpg',citie: 'China'},
  {country: 'Mumbai',src:'Mumbai.jpg',citie: 'India'}] ,

  [
  {country: 'Osaka',src:'Osaka.jpg',citie: 'Japan'},
  {country: 'Estambul',src:'Estambul.jpg',citie: 'Turquia'},
  {country: 'Buenos Aires',src:'Buenos_Aires.jpg',citie: 'Argentina'},
  {country: 'Lagos',src:'Lagos.jpg',citie: 'Nigeria'}]

]


const Carousel = () => {

  const [index, setIndex] = useState(0)

  const next = () => {
    if (index < items.length - 1) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }

  }
  const prev = () => {
    if (index > 0) {
      setIndex(index - 1)
    } else {
      setIndex(items.length - 1)
    }
  }

  const setBullet = (indice) => {
    setIndex(indice)
  }

  useEffect(() => {
    let intervalID = setInterval(() => {
      next()
    }, 2000)

    return () => {
      clearInterval(intervalID)
    }

  }, )

  return (
    <>
    <h3 className="m-3"> My Tinerary</h3>
    <div className="container d-flex justify-content-center align-items-center"  width="800" height="800">
     
      <Arrow src="./public/arrow_left_15601.png" alt='flecha-i' fn={prev} />
      <div>
        <div className="d-flex flex-wrap gap-1 align-items-center justify-content-center px-4" > 
          
          
            <div className= "card p-0 m-0 border-0"> 
            <img className="card-img"  src={items[index][0].src} alt="" />
          <div className="card-img-overlay text-dark"> 
            <div>
              <h5 className="text-light fw-bold">{items[index][0].citie}</h5>
              <p className="text-light fw-bold">{items[index][0].country}</p>
            </div>
          </div>
          </div>
          

          <div className= "card p-0 m-0 border-0"> 
            <img className="card-img"  src={items[index][1].src} alt="" />
          <div className="card-img-overlay text-dark"> 
            <div>
              <h5 className="text-light fw-bold">{items[index][1].citie}</h5>
              <p className="text-light fw-bold">{items[index][1].country}</p>
            </div>
          </div>
          </div>

          <div className= "card p-0 m-0 border-0"> 
            <img className="card-img"  src={items[index][2].src} alt="" />
          <div className="card-img-overlay text-dark"> 
            <div>
              <h5 className="text-light fw-bold">{items[index][2].citie}</h5>
              <p className="text-light fw-bold">{items[index][2].country}</p>
            </div>
          </div>
          </div>

          <div className= "card p-0 m-0 border-0"> 
            <img className="card-img"  src={items[index][3].src} alt="" />
          <div className="card-img-overlay text-dark"> 
            <div>
              <h5 className="text-light fw-bold">{items[index][3].citie}</h5>
              <p className="text-light fw-bold">{items[index][3].country}</p>
            </div>
          </div>
          </div>
          
             
        </div>
        <div className='flex w-full justify-center mt-4'>
          {
            items.map((item, indexMap) => {
              if (indexMap === index) return <span key={indexMap} className='cursor-pointer'>⚫</span>
              else return <span key={indexMap} className='cursor-pointer' onClick={() => setBullet(indexMap)}>⚪</span> // bind
            })
          }
        </div>
      </div>
      <Arrow src="./public/arrow_right_15600.png" alt='flecha-d' fn={next} />

    </div>
    </>
  )
}

export default Carousel 