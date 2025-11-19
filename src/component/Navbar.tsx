"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "./../../public/image/n-logo-vector-art-design-template-b9687b1b4336ef5ce4f7cc1d769fc63a_screen.jpg";
import { usePathname } from "next/navigation";
import Container from "./../component/Container";

function Navbar() {
  const pathName = usePathname();
  const navbarItem = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "store",
      href: "/store",
    },
  ];
  return (
    <div>
      <Container>
        <div className="shadow p-5 flex justify-between items-center">
        <ul className="flex gap-3 items-center ">
          {navbarItem.map((item) => (
            <Link key={item.href} href={item.href}>
              <li
                className={`${
                  pathName === item.href ? "text-sky-500" : "text-black"
                }`}
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
        <Image width={100} height={100} src={logo} alt="" />
      </div>
      </Container>
    </div>
  );
}

export default Navbar;
