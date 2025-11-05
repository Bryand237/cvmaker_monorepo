import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";
import DashboradHeader from "./DashboradHeader";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";

const DashboradLayout = () => {
  return (
    <div className="w-screen h-screen flex">
      <SidebarProvider>
        {/* Sidebar */}
        <DashboardSidebar />
        <main className="flex flex-col gap-6 w-screen md:w-[calc(100dvw-255px)] h-screen p-4 overflow-hidden">
          <DashboradHeader />
          <div className="block relative w-full h-full overflow-y-auto">
            <SidebarTrigger
              className={
                "md:hidden absolute bottom-2 p-4 rounded-full text-white bg-gray-400 hover:text-white hover:bg-gray-500 left-2"
              }
            />
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default DashboradLayout;
