import React, {useEffect, useRef, useState} from "react";

import useModalMode from "@app/Molecules/Components/Dropdown/hooks/useModalMode";
import {
  className,
  conditionalClass,
  onKeyDownA11y,
  styleByKey,
  useOnClickOutside,
} from "@app/shared";

import {PopoverAlignments, PopoverProps} from "./type";

import styles from "./Popover.module.scss";

export const Popover = ({
  anchor,
  content,
  disableCloseWhenClickOutside,
  disableMobileModalMode,
  isOpen,
  onClose,
  onOpen,
  customAnchorClassName,
  customPopoverClassName,
  alignment = PopoverAlignments.RIGHT,
  openToTop,
  applyShadow = true,
  "data-testid": dataTestId,
}: PopoverProps) => {
  const [isOpenInnerState, setIsOpenInnerState] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const popoverElementRef = useRef<HTMLDivElement>(null);
  const {desktopMode, modalMode} = useModalMode({disableMobileModalMode});

  const handleClose = () => {
    onClose?.();
    setIsOpenInnerState(false);
  };

  const handleOpen = () => {
    onOpen?.();
    setIsOpenInnerState(true);
  };

  const handleClickAnchor = () => {
    if (isOpenInnerState) {
      handleClose();
    } else {
      handleOpen();
    }
  };

  useOnClickOutside(popoverRef, () => {
    if (!disableCloseWhenClickOutside) {
      handleClose();
    }
  });

  useOnClickOutside(popoverElementRef, () => {
    if (modalMode && !disableCloseWhenClickOutside) handleClose();
  });

  useEffect(() => {
    setIsOpenInnerState(!!isOpen);
  }, [isOpen]);

  return (
    <div
      ref={popoverRef}
      className={className(
        styles.popoverWrapper,
        customAnchorClassName,
        conditionalClass([styles.opened, !!isOpenInnerState])
      )}
    >
      <div
        data-testid={`${dataTestId}-anchor`}
        className={styles.anchor}
        onClick={handleClickAnchor}
        onKeyDown={onKeyDownA11y(() => {
          handleClickAnchor();
        })}
        tabIndex={0}
        role="button"
      >
        {anchor}
      </div>
      <div
        className={className(
          styles.backdrop,
          conditionalClass(
            [styles.opened, !!isOpenInnerState],
            [styles.openToTop, !!openToTop],
            [styles.desktopMode, !!desktopMode]
          )
        )}
      >
        <div
          ref={popoverElementRef}
          data-testid={`${dataTestId}-content-element`}
          className={className(
            styles.content,
            customPopoverClassName,
            styleByKey(styles, alignment),
            conditionalClass(
              [styles.opened, !!isOpenInnerState],
              [styles.openToTop, !!openToTop],
              [styles.desktopMode, desktopMode],
              [styles.applyShadow, !!applyShadow]
            )
          )}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export * from "./type";
