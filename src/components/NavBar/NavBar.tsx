import ImageFrame from "../ImageFrame/ImageFrame";
import { Menu } from "./components/Menu/Menu";
import { NavUtils } from "./components/NavUtils/NavUtils";

import './NavBar.styles.scss';

const NavBar = () => {
    return <div className="nav-bar">
        <a href="/">
        <ImageFrame 
            src="https://cdn.worldvectorlogo.com/logos/the-north-face.svg"
            alt="logo-the nort face"
            width="50"
        />
        </a>
        <Menu />
        <NavUtils />
    </div>
}

export default NavBar;

