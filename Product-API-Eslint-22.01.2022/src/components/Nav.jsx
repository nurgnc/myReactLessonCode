import { Link } from "react-router-dom";
// SLUG
const Nav = (props) => (
  <ul>
    <li>
      <Link to="/">Ana Sayfa</Link>
    </li>
    <li>
      <Link to="/products">Urunler</Link>
    </li>
    <li>
      <Link to="/query-products">Q - Urunler</Link>
    </li>
    <li>
      <Link to="/contact">Iletisim</Link>
    </li>
  </ul>
);

export default Nav;
