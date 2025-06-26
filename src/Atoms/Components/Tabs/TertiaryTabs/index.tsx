import React from "react";

import {Icon} from "@app/Foundations";
import {className, conditionalClass} from "@app/shared";

import {InternalTabsProps, TabsType} from "../type";

import styles from "./TertiaryTabs.module.scss";

export interface TertiaryTabsProps extends InternalTabsProps {
    type: TabsType.TERTIARY;
}

export const TertiaryTabs = ({tabs, onClick, "data-testid": dataTestId}: TertiaryTabsProps) => {
    return (
        <div className={styles.tertiaryTabs} style={{"--tabs-amount": tabs.length} as React.CSSProperties} data-testid={dataTestId}>
            {tabs.map((tab) => (
                <button
                    key={tab.value}
                    onClick={() => {
                        onClick(tab.value);
                    }}
                    className={className(styles.tab, conditionalClass([styles.active, !!tab.active]))}
                    aria-label={tab.label}
                    type="button"
                    data-testid={`${dataTestId}-tab-${tab.value}`}
                >
                    {tab.icon && <Icon name={tab.icon} />}
                    {tab.label}
                </button>
            ))}
        </div>
    );
};
