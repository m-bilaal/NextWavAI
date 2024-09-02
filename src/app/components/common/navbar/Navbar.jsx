import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/utils/helper";

const Navbar = () => {
  return (
    <header className="py-4">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div>
            <Link
              className="flex items-end justify-between gap-x-2"
              href="javascript:;"
            >
              <Image
                src="images/nextwavai.svg"
                alt="NextWavAI"
                width={35}
                height={33}
              />
              <span className="text-lg font-medium leading-snug">
                NextWavAI
              </span>
            </Link>
          </div>
          <nav>
            <ul className="flex items-center justify-center flex-row gap-x-4">
              {navLinks.map((link, id) => (
                <li key={id}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="flex items-center justify-center gap-x-4">
            <li>
              <Link
                className="bg-primary-purple px-5 py-2 rounded-3xl text-white border border-transparent animate-waves inline-block hover:bg-white hover:text-primary-purple hover:border-primary-purple"
                href="javascript:;"
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                className="border bg-white border-primary-purple text-primary-purple px-5 py-2 rounded-3xl inline-block hover:text-white hover:border-transparent hover:bg-primary-purple"
                href="javascript:;"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
