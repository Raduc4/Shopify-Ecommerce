import React from "react";
import Link from "next/link";

import { Container } from "@components/ui";

import s from "./Hero.module.css";
interface Props {
  headline: string;
  description: string;
}

const Hero: React.FC<Props> = ({ headline, description }) => {
  return (
    <div className="bg-black">
      <Container>
        <div className={s.root}>
          <h2 className={s.headline}>{headline}</h2>
          <div>
            <p className={s.description}>{description}</p>
            <Link href="/">
              <a className={s.link}>Read It here</a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
