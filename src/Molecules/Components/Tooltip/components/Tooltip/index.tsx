import React, {PropsWithChildren, useState} from "react";

import {Icon} from "@app/Foundations";
import {hideTooltip} from "@app/Molecules/Components/Tooltip/components/Tooltip/handleTooltip";
import {TooltipAppearance, TooltipProps} from "@app/Molecules/Components/Tooltip/type";
import {className, useDebounce} from "@app/shared";

import styles from "./Tooltip.module.scss";

const HIDE_DELAY = 1_500;

export const Tooltip = ({
    body,
    appearance = TooltipAppearance.LIGHT,
    position,
    icon,
    children,
    customClassName = "",
}: PropsWithChildren<TooltipProps>) => {
    const [active, setActive] = useState<boolean>(false);
    const {debouncedFunction: debounceHide, resetDebounce} = useDebounce(() => {
        hideTooltip(setActive);
    }, HIDE_DELAY);

    const showTooltip = () => {
        resetDebounce();
        setActive(true);
    };

    return (
        <div className={className(styles.tooltip)} onMouseEnter={showTooltip} onMouseLeave={debounceHide}>
            {children}
            {active && (
                <div className={className(styles.tooltipContainer, customClassName, styles[appearance], styles[position])}>
                    {icon && <Icon name={icon} customClassName={styles.icon} size={16} />}
                    {body}
                </div>
            )}
        </div>
    );
};
