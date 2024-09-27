import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to }) {
  /* Create a mechanism to reuse the style(className) */
  const clasName = "text-sm text-blue-500 hover:text-blue-600 hover:underline";
  const navigate = useNavigate();
  // Deal with the <button> which we want it look like our common Link style
  if (to === "-1")
    return (
      <button className={clasName} onClick={() => navigate(-1)}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={clasName}>
      {children}
    </Link>
  );
}

export default LinkButton;
