import React from "react";

import {Icon} from "@app/Foundations";
import {className, conditionalClass, styleByKey} from "@app/shared";

import {InternalTabsProps, SecondaryTabLineShape, TabsSize, TabsType} from "../type";

import styles from "./SecondaryTabs.module.scss";

export interface SecondaryTabsProps extends InternalTabsProps {
    type: TabsType.SECONDARY;
    /**
     * Defines the shape of the moving tab indicator below the selected tab
     */
    selectedTabIndicatorShape?: SecondaryTabLineShape;
    /**
     * Disables the style for the background when the tab is selected
     */
    disableSelectedBackground?: boolean;
}

export const SecondaryTabs = ({
    tabs,
    onClick,
    tabsSize = TabsSize.DEFAULT,
    selectedTabIndicatorShape = SecondaryTabLineShape.SQUARED,
    disableSelectedBackground = false,
    "data-testid": dataTestId,
}: SecondaryTabsProps) => {
    const activeTabIndex = tabs.findIndex((tab) => tab.active);

    return (
        <div
            className={className(
                styles.secondaryTabs,
                styleByKey(styles, selectedTabIndicatorShape),
                conditionalClass([styles.disableSelectedBackground, !!disableSelectedBackground]),
            )}
            style={{"--tabs-amount": tabs.length, "--active": activeTabIndex} as React.CSSProperties}
            role="tablist"
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
                    role="tab"
                    aria-selected={!!tab.active}
                    aria-controls={`panel-${tab.value}`}
                    tabIndex={tab.active ? 0 : -1}
                    type="button"
                    data-testid={`${dataTestId}-tab-${tab.value}`}
                >
                    {tab.icon && <Icon name={tab.icon} size={16} />}
                    {tab.label}
                </button>
            ))}
            <span className={className(styles.selectedTabIndicator, styleByKey(styles, selectedTabIndicatorShape))} />
        </div>
    );
};
