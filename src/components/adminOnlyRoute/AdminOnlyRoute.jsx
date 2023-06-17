import React from "react";
import { useSelector } from "react-redux";
import { selectEmail } from "../../redux/features/authFeature";

function AdminOnlyRoute({ children }) {
  const userEmail = useSelector(selectEmail);
  console.log(userEmail);

  if (userEmail === "pedro.icn88@gmail.com") {
    return children;
  }
  return null;
}

export default AdminOnlyRoute;
