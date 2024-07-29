import { navLinks } from "@/constants";
import { headerLogo } from "@/public/images";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full ">
      <nav className="flex justify-between items-center max-container">
        <Link href="/">
          <Image height={29} width={130} src={headerLogo} alt="Logo" />
        </Link>
        <ul className="flex justify-center items-center flex-1 gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="font-montserrat leading-normal text-slate-gray text-lg"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <span className="flex gap-2 text-lg text-black font-montserrat leading-normal font-medium max-lg:hidden wide:mr-24">
          <Link href="/">Sign in</Link>
          <span>/</span>
          <Link href="/"> Explore now</Link>
        </span>
      </nav>
    </header>
  );
};

export default Nav;
