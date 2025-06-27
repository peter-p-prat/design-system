import React, {PropsWithChildren} from "react";

import {Button, ButtonVariants, IconButton} from "@app/Atoms";
import {Breakpoints, IconsNames} from "@app/Foundations";
import {ActionModalProps, ActionModalSize} from "@app/Organisms";
import {
  className,
  conditionalClass,
  getColorFromPalette,
  useDetectViewport,
} from "@app/shared";

import styles from "./ActionModalLayout.module.scss";

export type ActionModalLayoutProps = Pick<
  ActionModalProps,
  | "size"
  | "hasCloseButton"
  | "backButton"
  | "fullScreen"
  | "customClassName"
  | "handleClose"
>;

export const ActionModalLayout = ({
  size = ActionModalSize.MEDIUM,
  hasCloseButton,
  fullScreen = false,
  handleClose,
  backButton,
  customClassName,
  children,
}: PropsWithChildren<ActionModalLayoutProps>) => {
  const {viewport} = useDetectViewport();
  const isMobile = viewport === Breakpoints.MOBILE;

  return (
    <div
      className={className(
        styles.actionModalLayout,
        styles[size],
        conditionalClass([styles.fullScreen, fullScreen]),
        customClassName
      )}
    >
      <div className={className(styles.container)}>
        {hasCloseButton && handleClose && (
          <div className={className(styles.closeContainer)}>
            <IconButton
              icon={IconsNames.X_CLOSE}
              ariaLabel="X"
              color={getColorFromPalette("gray", "300")}
              onClick={handleClose}
              data-testid="close-modal-button"
            />
          </div>
        )}
        {fullScreen && backButton && (
          <div className={className(styles.backButtonContainer)}>
            {isMobile ? (
              <IconButton
                icon={IconsNames.ARROW_LEFT}
                ariaLabel={backButton.label}
                onClick={backButton.onClick}
                data-testid="back-modal-button"
              />
            ) : (
              <Button
                leadingIcon={IconsNames.ARROW_LEFT}
                variant={ButtonVariants.GHOST_V2}
                label={backButton.label}
                onClick={backButton.onClick}
                data-testid="back-modal-button"
              />
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};
