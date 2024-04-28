import React, { createContext, useState } from "react";

//=========================Create context=========================//
export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <SidebarContext.Provider value={{sidebarOpen, setSidebarOpen, handleCloseSidebar}}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
