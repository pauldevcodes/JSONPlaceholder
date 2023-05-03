import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <div className=" max-w-screen-lg mx-auto mt-10">
        <Outlet />
      </div>
    </>
  );
}

export default App;