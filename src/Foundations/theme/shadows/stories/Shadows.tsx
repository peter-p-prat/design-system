import React, {CSSProperties} from "react";

import {ShadowsMap} from "../shadowsMap";

import styles from "./Shadows.module.scss";

export interface ShadowsProps {
    shadowsMap: ShadowsMap;
}

const Shadows = ({shadowsMap}: ShadowsProps) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Shadows</h1>
            {Object.entries(shadowsMap).map(([shadowGroup, shadowVariations]) => (
                <div key={shadowGroup}>
                    <div className={styles.shadowVariation}>
                        {shadowVariations.map((variation) => (
                            <div key={`${shadowGroup}_${variation.name}`} className={styles.shadow}>
                                <p className={styles.shadowLabel}>{variation.name}</p>
                                <div
                                    className={styles.shadowSample}
                                    style={
                                        {
                                            "--shadow": variation.value,
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

export default Shadows;
