import React, {PropsWithChildren, useEffect, useState} from "react";

import {className, conditionalClass} from "@app/shared";

import styles from "./ActionModal.module.scss";
import {ActionModalProps, ActionModalSize} from "./type";
import {Modal, ModalPosition} from "@app/Molecules";
import {
  ActionModalLayout,
  ActionModalFooter,
  ActionModalTitle,
} from "./components";

export const ActionModal = ({
  isOpen,
  title,
  size = ActionModalSize.MEDIUM,
  icon,
  hasCloseButton,
  position = ModalPosition.CENTER,
  primaryAction,
  secondaryAction,
  children,
  handleClose,
  disableBackdropBlur,
  disableClosingOnBackdropClick,
  disableClosingOnEscape,
  fullScreen,
  customClassName,
  backButton,
  "data-testid": dataTestId,
}: PropsWithChildren<ActionModalProps>) => {
  const [internalIsOpen, setInternalIsOpen] = useState<boolean>(isOpen);

  const onClose = () => {
    setInternalIsOpen(false);
    handleClose?.();
  };

  useEffect(() => {
    setInternalIsOpen(isOpen);
  }, [isOpen]);

  return (
    <Modal
      isOpen={internalIsOpen}
      position={fullScreen ? ModalPosition.BOTTOM : position}
      disableBackdropBlur={fullScreen || disableBackdropBlur}
      disableClosingOnBackdropClick={
        fullScreen || disableClosingOnBackdropClick
      }
      enableOutsideClicks={fullScreen}
      underHeader={fullScreen}
      disableClosingOnEscape={disableClosingOnEscape}
      handleClose={onClose}
      data-testid={dataTestId}
    >
      <ActionModalLayout
        hasCloseButton={hasCloseButton}
        size={size}
        fullScreen={fullScreen}
        handleClose={onClose}
        customClassName={customClassName}
        backButton={backButton}
      >
        <div
          className={className(
            styles.actionModal,
            styles[size],
            conditionalClass([styles.fullScreen, !!fullScreen])
          )}
        >
          {icon && <span className={className(styles.icon)}>{icon}</span>}
          <ActionModalTitle title={title} size={size} fullScreen={fullScreen} />
          {children && <div className={className(styles.body)}>{children}</div>}
          {primaryAction && (
            <ActionModalFooter
              modalSize={size}
              primaryAction={primaryAction}
              secondaryAction={secondaryAction}
            />
          )}
        </div>
      </ActionModalLayout>
    </Modal>
  );
};
