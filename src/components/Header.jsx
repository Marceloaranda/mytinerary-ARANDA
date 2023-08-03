

export default function Header() {
  return (
    <header>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">My Tinerary</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup" >
              <div className="navbar-nav ">  
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                <a className="nav-link" href="#">Cities</a>
                <button className="btn btn-outline-success" type="submit">Login</button>
              </div>
            </div>
          </div>
        </nav>
    </header>
  )
}
