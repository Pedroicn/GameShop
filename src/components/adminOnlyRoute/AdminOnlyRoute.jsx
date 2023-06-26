import { useSelector } from "react-redux";
import { selectEmail } from "../../redux/features/authFeature";
import { Link } from "react-router-dom";

function AdminOnlyRoute({ children }) {
  const userEmail = useSelector(selectEmail);

  if (userEmail === "pedro.icn88@gmail.com") {
    return children;
  }
  return (
    <section style={{ height: "80vh" }}>
      <div className="container">
        <h2>Permission Denied.</h2>
        <p>This page can only be view by an Admin user</p>
        <Link to='/'>
          <button className="--btn">&larr; Back To Home</button>
        </Link>
      </div>
    </section>
  );
}

export function AdminOnlyLink({ children }) {
  const userEmail = useSelector(selectEmail);

  if (userEmail === "pedro.icn88@gmail.com") {
    return children;
  }
  return null;
}

export default AdminOnlyRoute;
