import React, {CSSProperties} from "react";

import {ColorPalette} from "../colorsPalette";

import styles from "./Colors.module.scss";

export interface ColorsProps {
    colorsPalette: ColorPalette;
}

const Colors = ({colorsPalette}: ColorsProps) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Colors</h1>
            {Object.entries(colorsPalette).map(([colorGroup, colorVariations]) => (
                <div key={colorGroup}>
                    <h2 className={styles.groupTitle}>{colorGroup}</h2>
                    <div className={styles.colorVariation}>
                        {colorVariations.map((variation) => (
                            <div key={`${colorGroup}_${variation.name}`} className={styles.color}>
                                <p className={styles.colorLabel}>{`${colorGroup}-${variation.name}`}</p>
                                <div
                                    className={styles.colorSample}
                                    style={
                                        {
                                            "--background-color": variation.value,
                                            "--color": colorGroup,
                                            "--value": variation.name,
                                        } as CSSProperties
                                    }
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Colors;
