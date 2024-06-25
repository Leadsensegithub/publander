import React, { useState } from "react";
import AppContent from "../components/AppContent";
import AppHeader from "../components/appHeader/AppHeader";
import AppSidebar from "../components/appSidebar/AppSidebar";

const DefaultLayout = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div className="App">
      <AppHeader setMenuToggle={setMenuToggle} />
      <div className="wrapper d-flex h-100">
        <AppSidebar menuToggle={menuToggle} setMenuToggle={setMenuToggle} />
        <div className="body flex-lg-grow-1 flex-sm-grow-1 flex-md-grow-1">
          <AppContent />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
