import Carousel from "../components/Carousel";


export default function Home() {
  return (
    <>
      <main>
        <div className="hero-container">
          <h1>Find the perfect destination</h1>
          <h2>Our app will help you find the perfect path for wour next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</h2>
          <a className="btn" href="#">View More</a>
          <Carousel />
        </div>
        
      </main>
      
      </>
  )
}
