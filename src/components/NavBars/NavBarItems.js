import {NavLink} from 'react-router-dom';

function NavBarItems({label,uri}) {
    return(
        <li>
           <NavLink className="hover:text-gray-200" to={uri}>{label}</NavLink>
        </li>
    );

}

export default NavBarItems;
