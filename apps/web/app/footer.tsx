import React from "react";
import LinkArrow from "./linkArrow";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 w-full md:flex overflow-y-hidden items-center justify-between gap-4 px-8 py-8 text-sm text-zinc-500 overflow-hidden text-center">
      <p>© {currentYear} Arthur Barbosa</p>
      <div className="flex gap-5 justify-around my-2">
        <a
          className="group/git flex items-center"
          target="_blank"
          href="https://github.com/arba9752"
        >
          Github{" "}
          <LinkArrow classname="group-hover/git:opacity-100 opacity-0 transition hidden md:block" />
        </a> 
        <a
          className="group/mail flex items-center"
          target="_blank"
          href="mailto:arthurbarbosa.dev@gmail.com"
        >
          Contact
          <LinkArrow classname="group-hover/mail:opacity-100 opacity-0 transition hidden md:block" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
