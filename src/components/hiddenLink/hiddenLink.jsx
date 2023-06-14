import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/features/authFeature";

export function ShowLogout({ children }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return children;
  }
  return null;
}

export function ShowLogin({ children }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn) {
    return children;
  }
  return null;
}

// export default ShowLogout;
