import React from "react";

import {Icon} from "@app/Foundations";
import {className, conditionalClass, styleByKey} from "@app/shared";

import {InternalTabsProps, TabsSize, TabsType} from "../type";

import styles from "./PrimaryTabs.module.scss";

export interface PrimaryTabsProps extends InternalTabsProps {
    type: TabsType.PRIMARY;
}

export const PrimaryTabs = ({tabs, onClick, tabsSize = TabsSize.DEFAULT, "data-testid": dataTestId}: PrimaryTabsProps) => {
    const activeTabIndex = tabs.findIndex((tab) => tab.active);

    return (
        <div
            className={styles.primaryTabs}
            style={{"--tabs-amount": tabs.length, "--active": activeTabIndex} as React.CSSProperties}
            data-testid={dataTestId}
        >
            {tabs.map((tab) => (
                <button
                    key={tab.value}
                    onClick={() => {
                        onClick(tab.value);
                    }}
                    className={className(styles.tab, styleByKey(styles, tabsSize), conditionalClass([styles.active, !!tab.active]))}
                    aria-label={tab.label}
                    type="button"
                    data-testid={`${dataTestId}-tab-${tab.value}`}
                >
                    {tab.icon && <Icon name={tab.icon} size={16} />}
                    {tab.label}
                </button>
            ))}
        </div>
    );
};
