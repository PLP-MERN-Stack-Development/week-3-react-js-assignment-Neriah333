import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";


export default function Layout() {

// const filteredTasks = task.filter(t => {
//   if (filter === "active") return !t.completed;
//   if (filter === "completed") return t.completed;
//   return true; // 'all'
// });


  return (
    <div className="flex justify-center items-center py-4 shadow-none border-none">
        <NavigationMenu className="mt-5 mb-5">
        <NavigationMenuList className="flex justify-between items-center w-full">
          <div className="flex gap-6 text-sm">
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className="text-3xl font-bold text-white hover:text-blue-600">Dashboard</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/tasks" className="text-3xl font-bold text-white hover:text-blue-600">Tasks</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/completed" className="text-3xl font-bold text-white hover:text-blue-600">Completed</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/in-progress" className="text-3xl font-bold text-white hover:text-blue-600">In Progress</NavigationMenuLink>
            </NavigationMenuItem>
          </div>
          <Input placeholder="Search tasks..." className="w-64 text-white" />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
