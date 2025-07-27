import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import ThemeToggle from "./ThemeToggle";


export default function Layout({ setFilter }) {



  return (
    <div className="flex justify-center items-center py-4 shadow-none border-none">
        <NavigationMenu className="mt-5 mb-5">
        <NavigationMenuList className="flex justify-between items-center w-full">
          <div className="flex justify-center items-center py-4 shadow-none border-none">
            <NavigationMenu className="mt-5 mb-5">
              <NavigationMenuList className="flex justify-between items-center w-full">
                <div className="flex gap-6 text-sm">
                  <NavigationMenuItem>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setFilter("all");
                      }}
                      className="text-3xl font-bold text-white hover:text-blue-600"
                    >
                      Tasks
                    </a>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setFilter("completed");
                      }}
                      className="text-3xl font-bold text-white hover:text-blue-600"
                    >
                      Completed
                    </a>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setFilter("active");
                      }}
                      className="text-3xl font-bold text-white hover:text-blue-600"
                    >
                      In Progress
                    </a>
                  </NavigationMenuItem>
                </div>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <Input placeholder="Search tasks..." className="w-64 text-white" />
          <ThemeToggle />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
