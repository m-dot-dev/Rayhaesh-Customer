import React, { useMemo, useState } from "react";
import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

const NavbarAccordingToOriginalDesign = () => {
  const [active, setActive] = useState("Home");

  const links = useMemo(() => {
    return [
      {
        name: "Home",
        link: "./",
      },
      {
        name: "Buy",
        link: "/properties",
      },
      {
        name: "Exchange",
        link: "/exchange",
      },
      {
        name: "Rent",
        link: "/rent",
      },
      {
        name: "News & Insights",
        link: "/blogs",
      },
    ];
  }, []);

  const buttons = useMemo(() => {
    return [
      {
        name: "Login",
        link: "/login",
        filled: true,
      },
      {
        name: "Sign Up",
        link: "/register",
        filled: false,
      },
      //   {
      //     name: "Subscription",
      //     link: "/subscription",
      //     filled: false,
      //   },
    ];
  }, []);

  return (
    <nav class="shadow-[0px_7px_45px_rgba(0,0,0,0.05)]bg-white sticky top-0 z-50 flex h-[100px] w-full items-center justify-between bg-white px-[10px] shadow-[0px_7px_45px_rgba(0,0,0,0.05)] 2xl:h-[150px] 2xl:px-[42px]">
      <div class="!h-3/4">
        <img src={Logo} alt="Rayhaesh Logo" class="h-full" />
      </div>
      <div class="links hidden font-normal text-navBlack lg:block">
        {links.map((link) => (
          <Link
            to={link.link}
            className={`relative mr-[10px] bg-[center_bottom_-10px] bg-no-repeat text-[18px] font-semibold duration-300  hover:text-accentRed xl:mr-[30px] xl:text-[22px] 3xl:mr-[45px] 3xl:text-[26.5px] ${
              active === link.name
                ? "after:absolute after:top-0 after:bottom-[-10px] after:max-w-[67px] after:w-full after:right-0 after:block after:bg-[url('src/assets/icons/active-link.png')] after:bg-contain after:bg-bottom after:bg-no-repeat after:content-[''] text-accentRed"
                : ""
            }`}
            onClick={() => setActive(link.name)}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div class="mobile-nav lg:hidden">
        <div class="nav-button block">
          <input
            type="checkbox"
            name="show-navbar"
            id="show-navbar"
            class="peer hidden"
          />
          <label
            for="show-navbar"
            class="padding-[30px] peer-checked:padding-[20px] bg-[url(assets/icons/hamburger-menu.png')] mr-[30px] inline-block h-[24px] w-[24px] bg-center bg-no-repeat peer-checked:bg-[url('assets/icons/close-hamburger-menu.png')]"
          ></label>
        </div>
        <div class="navigation-container fixed top-[100px] right-0 hidden h-[calc(100vh-100px)] w-[500px] rounded-tl-[10px] rounded-bl-[10px] border bg-accentRed/[0.85] p-[50px] drop-shadow-lg backdrop-blur-sm">
          <a
            href="./index.html"
            class="list-item list-inside list-[decimal-leading-zero] py-[16px] text-[26.5px] text-white duration-300 hover:text-accentRed"
          >
            Home
          </a>
          <a
            href="./BuyPage.html"
            class="list-item list-inside list-[decimal-leading-zero] py-[16px] text-[26.5px] text-white duration-300 hover:text-accentRed"
          >
            Buy
          </a>
          <a
            href="./SellPage.html"
            class="list-item list-inside list-[decimal-leading-zero] py-[16px] text-[26.5px] text-white duration-300 hover:text-accentRed"
          >
            Sell
          </a>
          <a
            href="./ExchangePage.html"
            class="list-item list-inside list-[decimal-leading-zero] py-[16px] text-[26.5px] text-white duration-300 hover:text-accentRed"
          >
            Exchange
          </a>
          <a
            href="./RentalPage.html"
            class="list-item list-inside list-[decimal-leading-zero] py-[16px] text-[26.5px] text-white duration-300 hover:text-accentRed"
          >
            Rent
          </a>
          <a
            href="#"
            class="list-item list-inside list-[decimal-leading-zero] py-[10px] text-[26.5px] text-white duration-300 hover:text-accentRed"
          >
            News & Insights
          </a>
        </div>
      </div>
      <div class="buttons hidden lg:block">
        {buttons.map((button) => (
          <Link
            to={button.link}
            onClick={() => setActive(button.name)}
            className={cn(
              "inline-flex h-[40px] w-[120px] items-center justify-center rounded-[8px] border-2 border-accentRed text-accentRed duration-300 hover:bg-accentRed hover:text-white 2xl:mr-[15px] 2xl:h-[50px] 2xl:w-[154px] 2xl:rounded-[10px] 2xl:text-[22px] 3xl:mr-[23px] 3xl:h-[60px] 3xl:w-[184px] 3xl:text-[26.5px]",
              button.filled
                ? "bg-accentRed text-white"
                : "bg-white text-accentRed"
            )}
          >
            {button.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavbarAccordingToOriginalDesign;
