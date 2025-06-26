import React from "react";

import {Icon, IconsNames} from "@app/Foundations";
import {className, conditionalClass} from "@app/shared";

import styles from "./PopoverStoryAnchor.module.scss";

interface Props {
    isOpen: boolean;
}

export const PopoverStoryAnchor: React.FC<Props> = ({isOpen}) => {
    return (
        <button className={className(styles.popoverStoryAnchor, conditionalClass([styles.isOpen, !!isOpen]))}>
            <Icon size={20} name={isOpen ? IconsNames.CHEVRON_UP : IconsNames.CHEVRON_DOWN} />
        </button>
    );
};
