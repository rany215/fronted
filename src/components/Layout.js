import Sidebar from "./Sidebar";
import Footer from "./Footer";

import { Outlet } from "react-router-dom";

function Layout() {

  return (

    <div className="app-container">

      <Sidebar />

      <div className="main-section">

        <div className="content">

          <Outlet />

        </div>

        <Footer />

      </div>

    </div>

  );

}

export default Layout;