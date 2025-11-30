"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "./../../public/image/n-logo-vector-art-design-template-b9687b1b4336ef5ce4f7cc1d769fc63a_screen.jpg";
import { usePathname } from "next/navigation";
import Container from "./../component/Container";
import { useShoppingCartContext } from "@/app/contaext/ShoppingCartContext";
import panelImg from "./../../public/image/person_29dp_434343_FILL0_wght400_GRAD0_opsz24.png";

function Navbar() {
  const { getTotalQty } = useShoppingCartContext();
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
          <div className="flex items-center gap-10 justify-center">
            <Image width={100} height={100} src={logo} alt="" />
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
          </div>
          <div className="flex items-center">
            <Link href={"/basket"}>
              <span>Basket</span>
              <span className="bg-red-600 rounded-2xl  px-1.5 relative -top-2 right-2 text-white">
                {getTotalQty()}
              </span>
            </Link>
            <Link href={"/dashbord"}>
              <Image src={panelImg} alt={"panel"} />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
