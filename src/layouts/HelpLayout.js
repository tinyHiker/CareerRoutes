import { NavLink, Outlet } from "react-router-dom"

export default function HelpLayout() {
  return (
    <div className="help-layout">

      <h2>Get more help</h2>
      <p>If you have any questions or concerns after visiting the careers page, view the FAQ or contact us.</p>

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />

    </div>
  )
}
