import React, {CSSProperties, PropsWithChildren, useMemo, useState} from "react";

import {Icon, IconsNames} from "@app/Foundations";
import {CollapseSkeletonProps, CollapseSkeletonSizes} from "@app/Molecules/Components/Collapse/type";
import {className, conditionalClass, onKeyDownA11y, styleByKey} from "@app/shared";

import {iconSizes} from "./type";

import styles from "./CollapseSkeleton.module.scss";

export const CollapseSkeleton = ({
    isDefaultOpen,
    isOpen,
    title,
    icon,
    iconColor,
    enableLineSeparator,
    disableContentPadding,
    onCollapse,
    children,
    size = CollapseSkeletonSizes.DEFAULT,
    disableTriggerHoverColor,
    customClassName = "",
    "data-testid": dataTestId,
}: PropsWithChildren<CollapseSkeletonProps>) => {
    const [internalIsOpen, setInternalIsOpen] = useState<boolean>(isDefaultOpen ?? false);

    const exposedIsOpen = useMemo(() => isOpen ?? internalIsOpen, [internalIsOpen, isOpen]);

    const toggleCollapse = () => {
        setInternalIsOpen(!exposedIsOpen);
        onCollapse?.(!exposedIsOpen);
    };

    return (
        <div
            className={className(styles.collapseSkeleton, customClassName)}
            style={{"--icon-color": iconColor} as CSSProperties}
            data-testid={dataTestId}
        >
            <div
                className={className(
                    styles.trigger,
                    styleByKey(styles, size),
                    conditionalClass(
                        [styles.isOpen, !!exposedIsOpen],
                        [styles.withoutHoverColor, !!disableTriggerHoverColor],
                        [styles.enableLineSeparator, !!enableLineSeparator],
                    ),
                )}
                onClick={toggleCollapse}
                onKeyDown={onKeyDownA11y(() => toggleCollapse)}
                tabIndex={0}
                role="button"
                data-testid={`${dataTestId}-trigger`}
            >
                {title}
                <Icon
                    name={icon ?? IconsNames.CHEVRON_DOWN}
                    size={iconSizes[size]}
                    customClassName={className(styles.triggerIcon, conditionalClass([styles.isOpen, !!exposedIsOpen]))}
                />
            </div>
            <div
                className={className(
                    styles.contentContainer,
                    conditionalClass([styles.isOpen, !!exposedIsOpen], [styles.disableContentPadding, !!disableContentPadding]),
                )}
            >
                <div className={styles.content} data-testid={`${dataTestId}-content`}>
                    {children}
                </div>
            </div>
        </div>
    );
};
