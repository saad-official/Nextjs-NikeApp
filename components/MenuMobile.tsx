import React from "react";
import Link from "next/link";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const MenuMobile = ({
  setMobileMenu,
}: {
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <li className="py-4 px-5 border-b">
              <Link href={"/"} onClick={() => setMobileMenu(false)}>
                {item.name}
              </Link>
            </li>
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
