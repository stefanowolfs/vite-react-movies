import { Link, Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>fyuMovies</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search Movies"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`/top`}>Top Rated</Link>
            </li>
            <li>
              <Link to={`/hotnow`}>Hot Now</Link>
            </li>
            <li>
              <Link to={`/towatch`}>To Watch List</Link>
            </li>
            <li>
              <Link to={`/favorites`}>My Favorites</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
      <Outlet />
      </div>
    </>
  );
}