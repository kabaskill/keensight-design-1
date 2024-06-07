"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import ThemeSwitcher from "./ThemeSwitcher";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { heroHeader, details } from "@/utils/siteData";

export default function NavBar() {
  const menuItems = ["about us", "chatgpt", "consulting services"];

  return (
    <Navbar isBlurred maxWidth="xl">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarContent className="sm:hidden " justify="center">
        <NavbarBrand>
          <Link href="/">
            <Image
              src="/keensight-logo.svg"
              width={200}
              height={100}
              alt="Keensight Analytics Logo"
              className="filter invert dark:filter-none dark:invert-none"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarBrand>
          <Link href="/">
            <Image
              src="/keensight-logo.svg"
              width={200}
              height={100}
              alt="Keensight Analytics Logo"
              className="filter invert dark:filter-none dark:invert-none"
            />
          </Link>
        </NavbarBrand>

        <NavbarItem>
          <Button as={Link} variant="light">
            about us
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} variant="light">
            chatgpt
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Dropdown>
            <DropdownTrigger>
              <Button endContent={<ChevronDown size={16} />} variant="light">
                consulting services
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              {heroHeader.map((service) => {
                return (
                  <DropdownItem
                    key={service.title}
                    description={`${service.title} ${service.span}`}
                    as={Link}
                    href={service.link}
                    className="text-ellipsis"
                    startContent={
                      <Image
                        src={service.image}
                        width={32}
                        height={32}
                        alt={service.title}
                        className="dark-filter dark:invert "
                      />
                    }
                  >
                    {service.span}
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Button as={Link} color="primary" href="#" variant="solid" className="hidden lg:flex">
            Request a Consultation
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href="#" size="lg" color="foreground">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
