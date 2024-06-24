"use client"

import { closeNav } from "@/app/layouts/Nav/Animations/animationNav";
import { useState } from "react";

export default function Menu() {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <menu>
     <li><span className="li1">Projects</span></li>
      <li><span className="li2">Contact</span></li>
      <a href="#about"><li><span className="li3">About</span></li></a>
    </menu>
  );
}
