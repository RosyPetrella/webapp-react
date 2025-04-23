export default function Footer() {
  return (
    <>
      <footer
        className="mt-5 py-5 text-light"
        style={{ backgroundColor: "#1c1c1c" }}
      >
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <h3 className="mb-3">Quick links</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="nav-link p-0 text-light">
                    Lorem
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link p-0 text-light">
                    Lorem
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link p-0 text-light">
                    Lorem
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4">
              <h3 className="mb-3">Legal</h3>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="nav-link p-0 text-light">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link p-0 text-light">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
