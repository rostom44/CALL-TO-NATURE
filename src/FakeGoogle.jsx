import "./FakeGoogle.css"

export default function FakeGoogle() {
  return (
    <div className="general">
      <nav id="header">
        <ul>
          <li>
            <a href="">+You</a>
          </li>
          <li>
            <a href="">Gmail</a>
          </li>
          <li>
            <a href="">Images</a>
          </li>
          <li>
            <a href="">Apps</a>
          </li>
          <li>
            <a href="">Sign in</a>
          </li>
        </ul>
      </nav>

      <div id="container">
        <h1 id="logo">Google</h1>

        <form>
          <input type="text" />
          <input type="submit" value="Google search" />
          <input type="submit" value="Feeling Lucky" />
        </form>

        <p>
          <small>
            Google.ca offered in:<a href=""> Français</a>
          </small>
        </p>
      </div>

      <footer>
        <nav className="clearfix">
          <ul className="left-links">
            <li>
              <a href="">Advertising</a>
            </li>
            <li>
              <a href="">Business</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
          </ul>

          <ul className="right-links">
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Terms</a>
            </li>
            <li>
              <a href="">Settings</a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}
