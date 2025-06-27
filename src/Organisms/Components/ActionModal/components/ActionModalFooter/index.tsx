import React, {useMemo} from "react";

import {Button, ButtonSizes, ButtonVariants} from "@app/Atoms";
import {Breakpoints} from "@app/Foundations";
import {ModalAction, ActionModalSize} from "@app/Organisms";
import {className, useDetectViewport} from "@app/shared";

import styles from "./ActionModalFooter.module.scss";

export interface ActionModalFooterProps {
  modalSize: ActionModalSize;
  primaryAction: ModalAction;
  secondaryAction?: ModalAction;
}

export const ActionModalFooter = ({
  modalSize,
  primaryAction,
  secondaryAction,
}: ActionModalFooterProps) => {
  const {viewport} = useDetectViewport();
  const size = useMemo(
    () =>
      modalSize === ActionModalSize.SMALL || viewport === Breakpoints.MOBILE
        ? ButtonSizes.LARGE
        : ButtonSizes.EXTRA_LARGE,
    [modalSize, viewport]
  );
  const {
    label: primaryLabel,
    isDisabled: primaryIsDisabled,
    onClick: primaryOnClick,
    customClassName: primaryCustomClassName = "",
    "data-testid": primaryDataTestId,
    ...restPrimary
  } = primaryAction;
  const {
    label: secondaryLabel,
    isDisabled: secondaryIsDisabled,
    onClick: secondaryOnClick,
    customClassName: secondaryCustomClassName = "",
    "data-testid": secondaryDataTestId = "",
    ...restSecondary
  } = secondaryAction || {};

  return (
    <div className={className(styles.actionModalFooter, styles[modalSize])}>
      {secondaryOnClick && (
        <Button
          customClassName={className(
            styles.actionModalFooterSecondaryButton,
            secondaryCustomClassName
          )}
          label={secondaryLabel}
          onClick={secondaryOnClick}
          variant={ButtonVariants.OUTLINED}
          isDisabled={secondaryIsDisabled}
          size={size}
          data-testid={secondaryDataTestId}
          {...restSecondary}
        />
      )}
      <Button
        customClassName={className(
          styles.actionModalFooterPrimaryButton,
          primaryCustomClassName
        )}
        isDisabled={primaryIsDisabled}
        label={primaryLabel}
        onClick={primaryOnClick}
        size={size}
        data-testid={primaryDataTestId}
        {...restPrimary}
      />
    </div>
  );
};
