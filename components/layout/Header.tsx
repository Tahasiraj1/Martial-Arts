"use client";

import { RiMenu3Line } from "react-icons/ri";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { programsList } from "../Programs";
import { SignedIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const pathName = usePathname();

  const isActive = (path: string) => pathName === path;

  return (
    <div className="font-poppins bg-black text-xl w-full h-20 flex items-center justify-between drop-shadow-xl text-white px-4 md:px-8 sticky top-0 z-50">
      <h1 className="font-bold text-2xl animate-in slide-in-from-left-full transition-transform transform duration-1000">
        THE EXECUTOR
      </h1>

      <div className="hidden md:block font-semibold">
        <ul className="flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="/">
                  <Button
                    className={`rounded-none hover:bg-red-700 ${
                      isActive("/") ? "bg-red-700" : "bg-black"
                    }`}
                  >
                    <motion.li
                      className="font-semibold text-lg"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      HOME
                    </motion.li>
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`rounded-none hover:bg-red-700 h-[40px] ${
                    isActive("/programs") ? "bg-red-700" : "bg-black"
                  }`}
                >
                  <motion.li
                    className="font-semibold text-lg"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    COURSES
                  </motion.li>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-red-700 text-white">
                  <ul className="grid w-[350px] gap-3 p-4 md:grid-cols-2">
                    {programsList.map((item) => (
                      <li key={item.id} title={item.name}>
                        <Link href={item.href}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/contact">
                  <Button
                    className={`rounded-none hover:bg-red-700 ${
                      isActive("/contact") ? "bg-red-700" : "bg-black"
                    }`}
                  >
                    <motion.li
                      className="font-semibold text-lg"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      CONTACT
                    </motion.li>
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/about">
                  <Button
                    className={`rounded-none hover:bg-red-700 ${
                      isActive("/about") ? "bg-red-700" : "bg-black"
                    }`}
                  >
                    <motion.li
                      className="font-semibold text-lg"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.1 }}
                    >
                      ABOUT
                    </motion.li>
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </ul>
      </div>

      <div className="flex gap-2 items-center justify-center animate-in slide-in-from-right-full transition-transform transform duration-1000">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden bg-transparent hover:bg-transparent"
            >
              <RiMenu3Line className="w-6 h-6 text-white hover:text-gray-300" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="pt-20 bg-[#0e0f0f] text-white border-gray-600"
          >
            <SheetHeader>
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            </SheetHeader>
            <nav>
              <ul className="flex flex-col gap-4">
                <li>
                  <Button
                    variant="linkHover2"
                    asChild
                    className="w-full justify-start"
                  >
                    <Link href="/">HOME</Link>
                  </Button>
                </li>
                <li>
                  <Button
                    variant="linkHover2"
                    asChild
                    className="w-full justify-start"
                  >
                    <Link href="/programs">COURSES</Link>
                  </Button>
                </li>
                <li>
                  <Button
                    variant="linkHover2"
                    asChild
                    className="w-full justify-start"
                  >
                    <Link href="/contact">CONTACT</Link>
                  </Button>
                </li>
                <li>
                  <Button
                    variant="linkHover2"
                    asChild
                    className="w-full justify-start"
                  >
                    <Link href="/about">ABOUT</Link>
                  </Button>
                </li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>

        <span className="active:scale-95 transition-transform transform duration-300 font-semibold">
          <SignedOut>
            <SignInButton mode="modal">
              <Button
                variant="ghost"
                size="icon"
                className="text-red-600 bg-transparent hover:bg-transparent hover:text-red-500"
              >
                <FaUserCircle className="w-6 h-6" />
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </span>
      </div>
    </div>
  );
};

export default Header;
