import React from "react";

import {Button, ButtonVariants} from "@app/Atoms";

import styles from "./Card.module.scss";

export interface OnlyDemoCardProps {
    img: {src: string; alt: string};
    title: string;
}

export const OnlyDemoCard = ({img, title, children}: React.PropsWithChildren<OnlyDemoCardProps>) => (
    <article className={styles.dataCard}>
        <h2>{title}</h2>
        <img className={styles.dataCardImg} src={img.src} alt={img.alt} />
        {children}
        <Button variant={ButtonVariants.FILLED} label="Card button" />
    </article>
);
