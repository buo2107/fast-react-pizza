import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  /* Create a mechanism to reuse the style(className) */

  // The base style is what will be common to all the Buttons
  const base =
    "inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-yellow-100 ";

  const styles = {
    // Then we do some things, which would be base + new style
    primary: base + "px-4 py-3 md:px-6 md:py-4",
    small: base + "px-4 py-2 md:px-5 md:py-2.5 text-xs",
  };

  // Deal with the <Link> which we want it look like our common Button style
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
