import React, {CSSProperties, useMemo, useRef} from "react";

import {className, conditionalClass, useDetectScroll, useDisableScroll, useOnClickOutside} from "@app/shared";

import useModalMode from "../../hooks/useModalMode";
import {ActionButtonInternalProps, CallToActionButtonProps, DropdownAlignments, DropdownProps} from "../../type";
import {DropdownActionButton} from "../DropdownActionButton";
import {DropdownOptionComponent} from "../DropdownOptionComponent";

import styles from "./DropdownList.module.scss";

interface Props {
    opened: boolean;
    mobileTitle?: React.ReactNode;
    searchInput?: React.ReactNode;
    options?: React.ReactNode[];
    customListClassName?: string;
    submitActionButton?: ActionButtonInternalProps;
    cancelActionButton?: ActionButtonInternalProps;
    callToActionButton?: CallToActionButtonProps;
    alignment: DropdownProps["alignment"];
    openToTop: DropdownProps["openToTop"];
    desktopDropdownWidth: DropdownProps["desktopDropdownWidth"];
    desktopDropdownMaxHeight: DropdownProps["desktopDropdownMaxHeight"];
    onToggleDropdown: (setIsOpen?: boolean) => void;
    dropdownListInfoTooltip?: React.ReactNode;
    disableCloseWhenClickOutside?: boolean;
    disableMobileModalMode?: boolean;
    dropdownTestId: string;
    withoutGap?: boolean;
    withoutMarginBottom?: boolean;
    withoutMarginRight?: boolean;
    centerOpenAnimation: boolean;
}

export const DropdownList = ({
    opened,
    mobileTitle,
    searchInput,
    options,
    customListClassName = "",
    submitActionButton,
    cancelActionButton,
    callToActionButton,
    onToggleDropdown,
    alignment = DropdownAlignments.RIGHT,
    openToTop = false,
    desktopDropdownWidth = "100%",
    desktopDropdownMaxHeight = "348px",
    dropdownListInfoTooltip,
    disableCloseWhenClickOutside,
    disableMobileModalMode,
    dropdownTestId,
    withoutGap,
    withoutMarginBottom,
    withoutMarginRight,
    centerOpenAnimation,
}: Props) => {
    const dropdownListContainerRef = useRef<HTMLDivElement>(null);
    const itemsListRef = useRef<HTMLDivElement>(null);
    const desktopWidth = useMemo(
        () => (typeof desktopDropdownWidth === "number" ? `${String(desktopDropdownWidth)}px` : desktopDropdownWidth),
        [desktopDropdownWidth],
    );
    const desktopMaxHeight = useMemo(
        () => (typeof desktopDropdownMaxHeight === "number" ? `${String(desktopDropdownMaxHeight)}px` : desktopDropdownMaxHeight),
        [desktopDropdownMaxHeight],
    );
    const {modalMode, desktopMode} = useModalMode({disableMobileModalMode});
    const hasActions = useMemo(
        () => !!submitActionButton || !!cancelActionButton || !!callToActionButton,
        [submitActionButton, cancelActionButton, callToActionButton],
    );

    useDisableScroll({condition: modalMode && opened});
    useOnClickOutside(dropdownListContainerRef, () => {
        if (modalMode && !disableCloseWhenClickOutside) onToggleDropdown(false);
    });

    const {isScrolledFromTop} = useDetectScroll({ref: itemsListRef});

    return (
        <div
            className={className(
                styles.backdrop,
                styles[alignment],
                conditionalClass([styles.opened, !!opened], [styles.openToTop, !!openToTop], [styles.desktopMode, !!desktopMode]),
            )}
        >
            <div
                ref={dropdownListContainerRef}
                className={className(
                    styles.dropdownListAndTooltipWrapper,
                    styles[alignment],
                    conditionalClass([styles.opened, !!opened], [styles.openToTop, !!openToTop], [styles.desktopMode, !!desktopMode]),
                    conditionalClass([styles.centerOpenAnimation, !!centerOpenAnimation]),
                )}
                style={
                    {
                        "--desktop-width": desktopWidth,
                        "--desktop-max-height": desktopMaxHeight,
                    } as CSSProperties
                }
            >
                <div className={className(styles.dropdownList, customListClassName, conditionalClass([styles.desktopMode, !!desktopMode]))}>
                    {modalMode && (!!mobileTitle || !!searchInput) && (
                        <div className={className(styles.mobileTitle, conditionalClass([styles.isScrolled, !!isScrolledFromTop]))}>
                            {mobileTitle && <span className={styles.label}>{mobileTitle}</span>}
                            {!!searchInput && searchInput}
                        </div>
                    )}
                    {desktopMode && searchInput}
                    <div
                        ref={itemsListRef}
                        className={className(
                            styles.itemsContainer,
                            conditionalClass(
                                [styles.withoutGap, !!withoutGap],
                                [styles.withoutMarginBottom, !!withoutMarginBottom],
                                [styles.withoutMarginRight, !!withoutMarginRight],
                                [styles.desktopMode, !!desktopMode],
                            ),
                        )}
                    >
                        {options}
                    </div>
                    {hasActions && (
                        <div
                            className={className(
                                styles.actionsFooter,
                                conditionalClass([styles.callToActionWrapper, !!callToActionButton]),
                            )}
                        >
                            {!callToActionButton && cancelActionButton && (
                                <DropdownActionButton
                                    key={cancelActionButton.label}
                                    action={cancelActionButton}
                                    testId={`${dropdownTestId}-cancel-btn`}
                                />
                            )}
                            {!callToActionButton && submitActionButton && (
                                <DropdownActionButton
                                    key={submitActionButton.label}
                                    action={submitActionButton}
                                    testId={`${dropdownTestId}-submit-btn`}
                                    disabled={submitActionButton.disabled}
                                />
                            )}
                            {callToActionButton && (
                                <DropdownOptionComponent
                                    option={{
                                        label: callToActionButton.label,
                                        value: callToActionButton.label,
                                        icon: callToActionButton.icon,
                                    }}
                                    isDisabled={() => !!callToActionButton.disabled}
                                    onClick={callToActionButton.onClick}
                                    testId={`${dropdownTestId}-cta-btn`}
                                    isCallToActionButton
                                />
                            )}
                        </div>
                    )}
                </div>
                {dropdownListInfoTooltip && (
                    <div
                        className={className(
                            styles.dropdownListTooltip,
                            conditionalClass([styles.openToTop, !!openToTop], [styles.desktopMode, !!desktopMode]),
                        )}
                    >
                        {dropdownListInfoTooltip}
                    </div>
                )}
            </div>
        </div>
    );
};
