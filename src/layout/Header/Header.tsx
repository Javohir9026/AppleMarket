import React from "react";
import { LogoApple } from "../../assets";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const menu = [
    {
      id: 1,
      name: "Весь каталог",
      link: "#",
    },
    {
      id: 2,
      name: "Акции",
      link: "#",
    },
    {
      id: 3,
      name: "Гарантия",
      link: "#",
    },
    {
      id: 4,
      name: "Политика возврата",
      link: "#",
    },
    {
      id: 5,
      name: "Кредит",
      link: "#",
    },
    {
      id: 6,
      name: "Доставка и оплата",
      link: "#",
    },
    {
      id: 7,
      name: "Отзывы",
      link: "#",
    },
    {
      id: 8,
      name: "Контакты",
      link: "#",
    },
  ];
  return (
    <div className="container mt-[23px] flex items-center justify-between">
      <div>
        <img src={LogoApple} alt="logo" />
      </div>
      <div className="flex gap-5">
        {menu.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="text-[14px] font-medium text-[#333] hover:text-[#007bff]"
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="flex gap-2 items-center">
        <Phone size={20} /> <Link to="tel:+78125619662">+7 812 561 96 62</Link>
      </div>
    </div>
  );
};

export default Header;
