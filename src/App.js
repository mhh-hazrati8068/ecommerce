import { Outlet } from "react-router-dom";
import CopyRight from "./components/copyRight/CopyRight";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="bg-light relative flex flex-col gap-6">
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
      <CopyRight/>
    </div>
  );
}

export default App;
