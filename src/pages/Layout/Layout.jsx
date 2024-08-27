import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Outlet, useNavigate, Link, NavLink } from "react-router-dom"
import { CircleUser, Menu, Package2, Search, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import YeabyCarLogo from "../../../public/imgs/car.png"
import { links as allLinks, mobileFooterLinks } from "./util"

const Layout = () => {
  const localStorage = window.localStorage
  const navigate = useNavigate()

  if (!localStorage.getItem("yeabyAdmin")) {
    return (
      <div className="flex min-h-screen w-full flex-col">
        <div
          className="h-full"
        >
          <Outlet />
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-20 items-center gap-4 border-b bg-background px-4 max-md:hidden">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base cursor-pointer"
          >
            <div className="img-container h-16 w-16">
              <img src={YeabyCarLogo} alt="Yeaby Car" />
            </div>
          </Link>
          {allLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive, isPending }) => 
                `transition-colors hover:text-foreground whitespace-nowrap ${isActive ? "text-foreground" : "text-muted-foreground"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                to="/"
                className="flex items-center gap-2 text-lg font-semibold md:text-base cursor-pointer"
              >
                <div className="img-container h-16 w-16">
                  <img src={YeabyCarLogo} alt="Yeaby Car" />
                </div>
              </Link>
              {allLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div
        className="h-[calc(100vh-5rem)]"
      >
        <Outlet />
      </div>
      <footer className="md:hidden h-20 w-full flex gap-6 justify-between items-center pl-12 pr-12" style={{ background: "#f0f2f5", borderTop: "1.5px solid #cbd5e1" }}>
        {mobileFooterLinks.map((link) => (
          <NavLink
            key={link.label}
            to={link.href}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center transition-colors gap-1 ${isActive ? "text-foreground" : "text-muted-foreground"}`
            }
          >
            {link.icon}
            <span style={{ fontSize: "14px" }} >{link.label}</span>
          </NavLink>
        ))}
      </footer>
    </div>
  )
}

export default Layout