

export default function Nav({ links }) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark ">
      <div className="container-fluid">
        <a className="navbar-brand text-light font6" href="/">
          GamesHub
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-sm-center" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center  paddingL">
            {links.map((link) => link)}
          </ul>
        </div>
      </div>
    </nav>
  );
}