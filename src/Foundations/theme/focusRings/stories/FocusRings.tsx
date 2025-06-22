import React from "react";

import {Divider, DividerType} from "@app/Atoms";

import styles from "./FocusRings.module.scss";

const FocusRingsDemo = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Focus Rings</h1>
            <div>
                <h2 className={styles.groupTitle}>4PX</h2>
                <div className={styles.subGroupWrapper}>
                    <h2 className={styles.subGroupTitle}>100</h2>
                    <div className={styles.focusRingsGroup}>
                        <div className={styles.focusRingDemo}>
                            <p className={styles.focusRingLabel}>primary</p>
                            <div className={styles.primary100} />
                        </div>
                        <div className={styles.focusRingDemo}>
                            <p className={styles.focusRingLabel}>error</p>
                            <div className={styles.error100} />
                        </div>
                        <div className={styles.focusRingDemo}>
                            <p className={styles.focusRingLabel}>gray</p>
                            <div className={styles.gray100} />
                        </div>
                    </div>
                </div>
                <Divider type={DividerType.SOLID} />
                <div className={styles.subGroupWrapper}>
                    <h2 className={styles.subGroupTitle}>500</h2>
                    <div className={styles.focusRingsGroup}>
                        <div className={styles.focusRingDemo}>
                            <p className={styles.focusRingLabel}>primary</p>
                            <div className={styles.primary500} />
                        </div>
                        <div className={styles.focusRingDemo}>
                            <p className={styles.focusRingLabel}>gray</p>
                            <div className={styles.gray500} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FocusRingsDemo;
