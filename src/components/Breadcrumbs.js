import { useLocation, Link } from "react-router-dom"

export default function Breadcrumbs() {
  const location = useLocation()

  let currentLink = ''

  let crumbsLength = location.pathname.split('/')
    .filter(crumb => crumb !== '').length




  let crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
      currentLink += `/${crumb}`

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{capitalize(crumb)}</Link>
        </div>
      )
    })
  if (crumbsLength === 1){
    crumbs = []
  }


  return (
    <div className="breadcrumbs">
      {crumbs}
    </div>
  )
}

function capitalize(s){
  return s[0].toUpperCase() + s.substring(1).toLowerCase()

}