
const Navbar = () => {
  return (
    <>
      <nav className="navbar fixed-top">
        <div className="container-fluid flex-wrap flex-md-nowrap">

          <a className="navbar-brand" href="/">
            <b>
              <i className="fa-solid fa-people-roof"></i>{' '}
              <span className="navbar-brand-text">Local Worker Finder</span>
            </b>
          </a>

          <form action="#" method="GET" style={{ display: 'inline' }}>
            <div className="searchbox">
              <button type="submit" style={{ background: 'none', border: 'none', padding: 0 }}>
                <i className="fa-solid fa-magnifying-glass" style={{ cursor: 'pointer' }}></i>
              </button>
              <input
                type="text"
                name="query"
                id="searchtext"
                placeholder="Search Worker (e.g. Plumber)"
              />
            </div>
          </form>

          <i
            className="fa-solid fa-bars"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          ></i>

        </div>
      </nav>

      {/* Off Canvas Sidebar - Moved Outside Nav for Stability */}
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <a href="#">Home</a>
          <a href="#">About us</a>
          <div className="dropdown">
            <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Register
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">User</a></li>
              <li><a className="dropdown-item" href="#">Worker</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
