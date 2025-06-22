import React, {ReactNode} from "react";

import {className, conditionalClass} from "@app/shared";

import {DropdownIcon} from "../../type";
import {DropdownIconComponent} from "../DropdownIcon";

import styles from "./DropdownLabel.module.scss";

interface Props {
    label: ReactNode;
    icon?: DropdownIcon;
    customClassName?: string;
}

export const DropdownLabel = ({label, icon, customClassName = ""}: Props) => {
    return (
        <section className={className(styles.dropdownLabel, conditionalClass([styles.onlyIcon, !label]), customClassName)}>
            {icon && <DropdownIconComponent icon={icon} customClassName={styles.icon} size={20} />}
            {label && <div className={styles.text}>{label}</div>}
        </section>
    );
};
