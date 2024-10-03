import { Link, useLocation } from "react-router-dom"

const NavigationItem = ({route}) => {
    const location = useLocation();
  return (
    <Link to={`/${route.toLowerCase()}`}>
    <li
      className={`py-1 px-2 ${
        location.pathname === `/${route.toLowerCase()}`
          ? "text-dark-gray bg-white rounded-full"
          : "text-light-gray mx-2"
      } `}
    >
      {route}
    </li>
  </Link>
  )
}

export default NavigationItem
