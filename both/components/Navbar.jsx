//Componente para Menu Burger and Navbar
export default class NavMenu extends React.Component{
  render(){
    return (
      <div className="outer-menu">
        <input className="checkbox-toggle" type="checkbox" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
