import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
/*
  We do React Router's new data loading feature, which called loaders, in three steps:
  1. Create a loader
  2. Provide the loader
  3. Provide the data to the page

  This data loader can be placed anywhere in our code base, but the convention seems to be to place the loader for the data of a certain page inside the file of that page.

  And the convention is to just call this function a loader.
*/

export default Menu;
