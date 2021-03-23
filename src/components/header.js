import '../styles/header.css'
import { NavLink } from 'react-router-dom'

export function Header(props) {
    return (
    const Navigation = (props) => {
            props.items.map((navObject, key) => {
                if (item.link === '/') {
                    return (
                        <NavLink key={key} exact to={navObject.link}>
                            {navObject.name}
                        </NavLink>
                    )
                }
                else {
                    return (
                        <NavLink key={key} to={navObject.link}>
                            {navObject.name}
                        </NavLink>
                    )
                }

            })
    )
         
    }

return (
    <header className="main-header">

        <img src={props.logo} />

        <h1>{props.title}</h1>

        <Navigation items={ }

        </header>
    )
}
export default Header;