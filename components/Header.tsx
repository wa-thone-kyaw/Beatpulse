"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="text-white p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Image
          src="/images/lightning-bolt.png"
          alt="Logo"
          width={40}
          height={40}
          className="mr-2"
        />
        <h1 className="text-3xl font-bold">Beatpulse</h1>
        <nav className="flex items-center ml-auto space-x-4">
          <Link href="/beats" className="hover:underline">
            Beats
          </Link>
          <Link href="/licensing" className="hover:underline">
            Licensing
          </Link>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <Image
          src="/images/globe.png"
          alt="Language"
          width={30}
          height={30}
          className="cursor-pointer"
        />

        <span className="hover:underline">EN</span>
        <Link href="/login" className="hover:underline">
          Login
        </Link>
        <span>|</span>
        <Image
          src="/images/blue-thunder.png"
          alt="Become Member"
          width={30}
          height={30}
          className="cursor-pointer"
        />
        <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300">
          Become Member
        </button>

        <div className="relative">
          <Image
            src="/images/shopping-cart-icon.png"
            alt="Shopping Cart"
            width={30}
            height={30}
            className="cursor-pointer"
          />

          <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
            3
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
