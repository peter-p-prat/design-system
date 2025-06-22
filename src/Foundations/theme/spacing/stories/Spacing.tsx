import React, {CSSProperties} from "react";

import {SpacingsMap} from "../spacingsMap";

import styles from "./Spacing.module.scss";

export interface SpacingsProps {
    spacingsMap: SpacingsMap;
}

const Spacings = ({spacingsMap}: SpacingsProps) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Spacings</h1>
            <ul className={styles.list}>
                <li>4-point grid spacing is used for components and fonts</li>
                <li> Its use applies to vertical and horizontal</li>
            </ul>
            {Object.entries(spacingsMap).map(([spacingGroup, spacingVariations]) => (
                <div key={spacingGroup}>
                    <h2 className={styles.groupTitle}>{spacingGroup}</h2>
                    <div className={styles.spacingVariation}>
                        {spacingVariations.map((variation) => (
                            <div key={`${spacingGroup}_${variation.name}`} className={styles.spacing}>
                                <p className={styles.spacingLabel}>{variation.name}</p>
                                <div
                                    className={styles.spacingSample}
                                    style={
                                        {
                                            "--padding": variation.value,
                                        } as CSSProperties
                                    }
                                />
                                <p className={styles.spacingLabel}>{variation.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Spacings;
