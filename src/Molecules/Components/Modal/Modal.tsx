import React, {PropsWithChildren, useLayoutEffect, useRef, useState} from "react";

import {className, conditionalClass, styleByKey, useDisableScroll, useOnClickOutside} from "@app/shared";
import useKeyPress, {ETargetKey} from "@app/shared/hooks/useKeyPress";

import {ModalPosition, ModalProps} from "./type";

import styles from "./Modal.module.scss";

export const Modal = ({
    isOpen,
    disableBackdropBlur,
    position = ModalPosition.CENTER,
    smoothTransition = true,
    children,
    handleClose,
    enableOutsideClicks,
    disableClosingOnBackdropClick,
    disableClosingOnEscape,
    underHeader,
    "data-testid": dataTestId,
}: PropsWithChildren<ModalProps>) => {
    const backdropRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const [isScrollRequired, setIsScrollRequired] = useState<boolean>(false);
    useDisableScroll({condition: isOpen});

    const handleOnClickOutside = () => {
        if (!disableClosingOnBackdropClick && isOpen) {
            handleClose?.();
        }
    };
    useOnClickOutside(modalRef, handleOnClickOutside);

    const handleOnEscClose = () => {
        if (!disableClosingOnEscape && isOpen) {
            handleClose?.();
        }
    };

    useKeyPress(ETargetKey.ESCAPE, {keyDownHandler: handleOnEscClose});

    useLayoutEffect(() => {
        const checkScrollRequired = () => {
            if (isOpen && modalRef.current && backdropRef.current) {
                setIsScrollRequired(modalRef.current.clientHeight >= backdropRef.current.clientHeight);
            }
        };

        checkScrollRequired();

        const resizeObserver = new ResizeObserver(checkScrollRequired);
        const elementsToObserve = [modalRef.current, backdropRef.current].filter(Boolean);
        elementsToObserve.forEach((element) => {
            if (element) {
                resizeObserver.observe(element);
            }
        });

        return () => {
            resizeObserver.disconnect();
        };
    }, [isOpen]);

    if (!smoothTransition && !isOpen) {
        return null;
    }

    return (
        <section
            className={className(
                styles.backdrop,
                conditionalClass(
                    [styles.open, !!isOpen],
                    [styles.animated, !!smoothTransition],
                    [styles.scrollable, isScrollRequired],
                    [styles.disableBackdropBlur, !!disableBackdropBlur],
                    [styles.enableOutsideClicks, !!enableOutsideClicks],
                    [styles.underHeader, !!underHeader],
                ),
            )}
            ref={backdropRef}
            data-testid={dataTestId}
        >
            <div
                className={className(styles.container, styleByKey(styles, position), conditionalClass([styles.open, !!isOpen]))}
                ref={modalRef}
            >
                {children}
            </div>
        </section>
    );
};

export * from "./type";
