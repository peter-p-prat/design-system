import React from "react";

import {className} from "@app/shared";

import {BlursMap} from "../blursMap";

import styles from "./Blurs.module.scss";

export interface BlursProps {
    blursMap: BlursMap;
}

const Blurs = ({blursMap}: BlursProps) => {
    return (
        <div>
            <h1 className={styles.title}>Blurs</h1>
            <div className={styles.blurVariationWrapper}>
                {Object.entries(blursMap).map(([blurGroup, blurVariations]) => (
                    <React.Fragment key={blurGroup}>
                        <div className={styles.blurVariation}>
                            <h2 className={styles.groupTitle}>{blurGroup}</h2>
                            {blurVariations.map((variation) => (
                                <div key={`${blurGroup}_${variation.name}`} className={styles.blur}>
                                    <div className={className(styles.blurSample, styles[variation.name], styles[blurGroup])}>
                                        <p className={styles.blurLabel}>{variation.name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Blurs;
