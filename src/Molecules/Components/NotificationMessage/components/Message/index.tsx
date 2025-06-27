import React from "react";

import {Button, ButtonVariants, IconButton} from "@app/Atoms";
import {Breakpoints, Icon, IconsNames} from "@app/Foundations";
import {iconCloseColor, MessageIconPosition, MessageProps, MessageType, MessageWidthSize} from "@app/Molecules";
import {className, conditionalClass, styleByKey, useDetectViewport} from "@app/shared";

import styles from "./Message.module.scss";

export const Message = ({
    title,
    icon,
    isOpen,
    body,
    snapToBottom = false,
    iconPosition = MessageIconPosition.LEFT,
    type = MessageType.WHITE,
    rightButton,
    leftButton,
    widthSize = MessageWidthSize.FULL_WIDTH,
    handleClose,
    "data-testid": dataTestId,
}: MessageProps) => {
    const {viewport} = useDetectViewport();

    if (!isOpen) return null;

    return (
        <section
            className={className(
                styles.message,
                styleByKey(styles, iconPosition),
                styleByKey(styles, type),
                styleByKey(styles, widthSize),
                conditionalClass([styles.snapToBottom, snapToBottom && viewport !== Breakpoints.DESKTOP]),
            )}
            data-testid={dataTestId}
        >
            <div className={className(styles.headerContainer)}>
                <Icon name={icon} size={20} />
                {handleClose && (
                    <div className={className(styles.columnClose)}>
                        <IconButton
                            size={20}
                            icon={IconsNames.X_CLOSE}
                            ariaLabel="X"
                            color={iconCloseColor[type]}
                            onClick={handleClose}
                            data-testid="header-close-message-button"
                        />
                    </div>
                )}
            </div>
            <div className={className(styles.container)}>
                <h4 className={className(styles.title)}>{title}</h4>
                {body && <p className={className(styles.body)}>{body}</p>}
                {(rightButton || leftButton) && (
                    <div className={className(styles.footer)}>
                        {leftButton && (
                            <div className={className(styles.leftButton)}>
                                <Button
                                    label={leftButton.label}
                                    leadingIcon={leftButton.icon}
                                    isDisabled={leftButton.isDisabled}
                                    customClassName={leftButton.customClassName}
                                    variant={ButtonVariants.GHOST_V2}
                                    onClick={leftButton.onClick}
                                    data-testid="left-button"
                                />
                            </div>
                        )}
                        {rightButton && (
                            <Button
                                label={rightButton.label}
                                trailingIcon={rightButton.icon}
                                isDisabled={rightButton.isDisabled}
                                customClassName={rightButton.customClassName}
                                variant={ButtonVariants.GHOST_V2}
                                onClick={rightButton.onClick}
                                data-testid="right-button"
                            />
                        )}
                    </div>
                )}
            </div>
            {handleClose && (
                <div className={className(styles.rowClose)}>
                    <IconButton
                        size={20}
                        icon={IconsNames.X_CLOSE}
                        ariaLabel="X"
                        color={iconCloseColor[type]}
                        onClick={handleClose}
                        data-testid="close-message-button"
                    />
                </div>
            )}
        </section>
    );
};
