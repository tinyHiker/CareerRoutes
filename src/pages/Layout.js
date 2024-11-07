import { 
    
    NavLink, Outlet
    
   } from "react-router-dom"

export default function Layout() {
    return (
    <header>
        <nav>
          <h1>Jobarouter</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>

        <Outlet />
      </header>
    )
  }