import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <NavigationMenu>
        <NavigationMenuList>

          {/* Auth Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Account</NavigationMenuTrigger>
            <NavigationMenuContent className="p-4 bg-white shadow-lg rounded-lg dark:bg-gray-900">
              <ul className="flex flex-col gap-2">
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/login" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                      Login
                    </Link>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <Link href="/register" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                      Create Account
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
