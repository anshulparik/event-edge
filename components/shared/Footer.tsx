import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t ">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link className="flex items-center" href="/">
          <Image
            src="/assets/images/event-edge.png"
            width={50}
            height={20}
            className="rounded-full"
            alt="logo"
          />
          <h3 className="ml-3 font-medium tracking-wide">Event Edge</h3>
        </Link>

        <p>2024 Event Edge. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
