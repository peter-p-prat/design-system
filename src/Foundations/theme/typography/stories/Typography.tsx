import React from "react";

import {TypographyMap} from "../typographyMap";

import styles from "./Typography.module.scss";

export interface TypographyProps {
    typographyMap: TypographyMap;
}

const headingFontWeights = ["regular", "medium", "semi-bold", "bold", "extra-bold"];
const textFontWeights = headingFontWeights.filter((weight) => weight !== "semi-bold");

const Typography = ({typographyMap}: TypographyProps) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Typography Variants</h1>
            <div className={styles.fontsDemo}>
                <div className={styles.plusJakartaDemo}>
                    <span className={styles.fontsDemoName}>Plus Jakarta</span>
                    <p className={styles.fontsDemoSample}>Ag</p>
                </div>
                <div className={styles.satoshiDemo}>
                    <span className={styles.fontsDemoName}>Satoshi</span>
                    <p className={styles.fontsDemoSample}>Ag</p>
                </div>
            </div>
            {Object.entries(typographyMap).map(([typoGroup, typoVariations]) => {
                const weights = typoGroup === "headings" ? headingFontWeights : textFontWeights;
                return (
                    <div key={typoGroup}>
                        <h2 className={styles.subtitle}>{typoGroup}</h2>
                        {weights.map((fontWeight) => {
                            return (
                                <>
                                    <p className={styles.groupTitle}>Weight: {fontWeight}</p>
                                    <div key={fontWeight} className={styles.typographyGroup}>
                                        {typoVariations.map((variation) => {
                                            const typeAndVariation = `${typoGroup}-${variation.name}`;
                                            return (
                                                <div key={`${typoGroup}_${variation.name}`} className={styles.typographyData}>
                                                    <div className={styles.typographySample}>
                                                        <p className={styles[`${typeAndVariation}-${fontWeight}`]}>
                                                            Display {variation.name}
                                                        </p>
                                                        <span className={styles.typographyLabel}>
                                                            Name: {variation.name}
                                                            <br />
                                                            Size: {variation.value}
                                                        </span>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default Typography;
