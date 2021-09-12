import React, { FC, ReactNode } from "react";
import { Container } from "@components/ui";
import Link from "next/link";
import s from "./Navbar.module.css";
import { Usernav } from "@components/common";
interface Props {}

const Navbar: FC<Props> = (props) => {
  return (
    <Container>
      <div className={s.root}>
        <div className="flex flex-1 items-center">
          <Link href="/">
            <a className={s.logo}>
              <h1>NEXT_STORE</h1>
            </a>
          </Link>
          <nav className="ml-6 space-x-6">
            <Link href="/">
              <a className={s.link}>All</a>
            </Link>
            <Link href="/">
              <a className={s.link}>Clothes</a>
            </Link>
            <Link href="/">
              <a className={s.link}>Accesories</a>
            </Link>
            <Link href="/">
              <a className={s.link}>Shoes</a>
            </Link>
          </nav>
          <div className={"flex flex-1 justify-end items-center space-x-8"}>
            <Usernav />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
