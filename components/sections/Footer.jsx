import { footerLinks } from "@/constants";
import { socialMedia } from "@/constants";
import { copyrightSign } from "@/public/icons";
import { footerLogo } from "@/public/images";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer" className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col ">
        <div className="flex flex-col items-start">
          <Link href="/">
            <Image
              src={footerLogo}
              width={150}
              height={46}
              alt="footer logo"
              className="m-0"
            />
          </Link>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <ul className="flex items-start mt-8 gap-5">
            {socialMedia.map((item, index) => (
              <div
                className="flex bg-white justify-center items-center h-12 w-12 rounded-full"
                key={index}
              >
                <Image src={item.src} alt={item.alt} height={24} width={24} />
              </div>
            ))}
          </ul>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                  >
                    <Link href={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <Image
            src={copyrightSign}
            alt="copyright"
            height={20}
            width={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
