import {Link} from 'react-router-dom';

function Header({ title, menuItems }) {
  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <ul>
          {menuItems.map((menuItem, index) => (
            <li key={index}>
              <Link to={menuItem.link}>{menuItem.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
