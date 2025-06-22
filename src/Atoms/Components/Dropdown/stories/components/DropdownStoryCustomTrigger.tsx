import React from "react";

import {Icon, IconsNames} from "@app/Foundations";
import {className, conditionalClass} from "@app/shared";

import styles from "./DropdownStoryCustomTrigger.module.scss";

export const DropdownStoryCustomTrigger = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <button
            type="button"
            className={className(styles.customTrigger, conditionalClass([styles.isOpen, !!isOpen]))}
            onClick={() => {
                setIsOpen(!isOpen);
            }}
            aria-label="Toggle Dropdown"
        >
            <Icon name={IconsNames.USER_03} />
            <Icon name={isOpen ? IconsNames.CHEVRON_UP : IconsNames.CHEVRON_DOWN} />
        </button>
    );
};
