import React from "react";

import {Button} from "@app/Atoms";
import {Icon, IconsNames} from "@app/Foundations";
import {className} from "@app/shared";

import styles from "./ModalChildren.module.scss";

interface ModalChildrenProps {
    handleClick?: () => void;
}

export const ModalChildren = ({handleClick}: ModalChildrenProps) => {
    return (
        <div className={className(styles.modalChildren)}>
            <div className={className(styles.header)}>
                <h1>This is a custom children</h1>
                <span>This is a paragraph</span>
            </div>
            <div className={className(styles.body)}>
                <Icon name={IconsNames.ALERT_CIRCLE} size={56} />
                <span>This is a another paragraph</span>
                <Button label="Close modal" onClick={handleClick ?? (() => {})} data-testid="close-modal-button" />
            </div>
        </div>
    );
};
