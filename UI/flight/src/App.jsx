import Header from "./Components/Header";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Usage from "./Components/Usage";
import DropDown from "./Components/DropDown";
import Delete from "./Components/Delete";

export default function App() {
  return(
    <>
      <Header />
      <Home />
      <Products />
      <Usage />
      <DropDown />
      {/* <Delete /> */}
    </>
  )
}