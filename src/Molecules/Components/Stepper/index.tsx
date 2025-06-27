import React from "react";

import {Icon, IconsNames} from "@app/Foundations";
import {StepperProps} from "@app/Molecules/Components/Stepper/type";
import {className, conditionalClass} from "@app/shared";
import {generateArray} from "@app/shared/helpers/generateArray";

import styles from "./Stepper.module.scss";

export const Stepper = ({
  size,
  currentStep,
  disableResponsiveStyles,
}: StepperProps) => {
  return (
    <div className={styles.stepper}>
      {generateArray(size).map((_, pageNumber) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={pageNumber} className={styles.stepperContainer}>
          <span
            className={className(
              styles.stepperPageNumber,
              conditionalClass(
                [styles.current, currentStep === pageNumber],
                [styles.past, currentStep > pageNumber],
                [styles.disableResponsiveStyles, !!disableResponsiveStyles]
              )
            )}
          >
            {currentStep > pageNumber ? (
              <Icon
                customClassName={className(styles.checkIcon)}
                name={IconsNames.CHECK}
                size={16}
                title={`Check_${pageNumber.toString()}`}
              />
            ) : (
              pageNumber + 1
            )}
          </span>
          {pageNumber < size - 1 && (
            <span className={className(styles.separator)} />
          )}
        </div>
      ))}
    </div>
  );
};
