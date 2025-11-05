import { HandFist, LayoutDashboard, LayoutTemplate, Plus } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavLink, useLocation } from "react-router-dom";

// Menu items.
const items = [
  {
    title: "Vue d'ensemble",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Templates",
    url: "/dashboard/templates",
    icon: LayoutTemplate,
  },
  {
    title: "Nouveau CV",
    url: "/dashboard/new",
    icon: Plus,
  },
  {
    title: "Mes réalisations",
    url: "/dashboard/own",
    icon: HandFist,
  },
];

const DashboardSidebar = () => {
  const location = useLocation().pathname;
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="w-full py-8 my-4 text-center text-3xl text-bold">
            CVMaker
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={location === item.url ? true : false}
                  >
                    <NavLink to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default DashboardSidebar;
