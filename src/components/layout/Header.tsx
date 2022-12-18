import { ROUTES } from "@utils/constants/routes";
import Link from "next/link";
import React from "react";
import { Logo } from "../../icons/Logo";

export const Header = () => {
  return (
    <header className="bg-gray-300 w-full">
      <div className="flex justify-between py-4 px-4 items-center text-slate-700">
        <span>
          <Logo />
        </span>
        <nav>
          <ul>
            <li>
              <Link href={ROUTES.CHARACTERS}>Characters</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
