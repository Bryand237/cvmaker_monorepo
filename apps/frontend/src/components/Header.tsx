import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookTemplate, Download, Plus } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";

const Header = () => {
  const navigarions = [
    {
      trigger: "Actions",
      children: [
        {
          linkname: "Nouveau CV",
          linkdescription: "Créez un nouveau CV.",
          linkicon: Plus,
          linkpath: "/cv_dashboard",
        },
        {
          linkname: "Choisir un template",
          linkdescription: "Choisissez un template à modifier.",
          linkicon: BookTemplate,
          linkpath: "/templates",
        },
        {
          linkname: "Sauvegarder",
          linkdescription: "Visualisez et sauvegardez votre CV.",
          linkicon: Download,
          linkpath: "/cv/save",
        },
      ],
    },
  ];
  return (
    <header className="w-screen bg-background min-h-16 py-2 px-4 flex items-center justify-between text-foreground dark">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        CVMaker
      </h3>

      <NavigationMenu>
        <NavigationMenuList>
          {navigarions.map((nav, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuTrigger>{nav.trigger}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-4">
                  {nav.children.map((child, index) => (
                    <li>
                      <NavigationMenuLink asChild key={index}>
                        <NavLink to={child.linkpath}>
                          <div className="font-medium flex items-center gap-2">
                            <child.linkicon />
                            {child.linkname}
                          </div>
                          <div className="text-muted-foreground">
                            {child.linkdescription}
                          </div>
                        </NavLink>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <Sheet>
        <SheetTrigger>
          <div className="p-2 rounded-full shadow hover:shadow-md hover:cursor-pointer transition-shadow hover:bg-accent-foreground/10">
            <Avatar className="bg-transparent">
              <AvatarImage src="./IMG_20250706_141140_491.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <div className="avatar">
                <Avatar className="bg-transparent w-20 h-20 m-8 mx-auto">
                  <AvatarImage src="./IMG_20250706_141140_491.jpg" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </SheetTitle>
            <SheetDescription className="text-center text-foreground">
              <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Mastermind
              </h2>
              <p className="leading-7 not-first:mt-4">
                masterminddelta237@gmail.com
              </p>
              <div className="flex flex-col gap-4 mt-8 px-6">
                <Button variant={"secondary"} className="hover:bg-gray-200">
                  Mes CVs
                </Button>
                <Button variant={"outline"}>Se deconnecter</Button>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
