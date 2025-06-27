import React, {useEffect, useState} from "react";

import {Button} from "@app/Atoms";
import {Stepper} from "@app/Molecules/Components/Stepper";

import {StepperProps} from "../type";

import styles from "./StepperWrapper.module.scss";

export const StepperWrapper = ({
  size,
  currentStep,
  disableResponsiveStyles,
}: StepperProps) => {
  const [currentStepInternalState, setCurrentStep] =
    useState<number>(currentStep);

  const onNext = () => {
    if (currentStepInternalState === size - 1) return;
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const onBack = () => {
    if (currentStepInternalState === 0) return;
    setCurrentStep((prevStep) => prevStep - 1);
  };

  useEffect(() => {
    setCurrentStep(currentStep);
  }, [currentStep]);

  return (
    <div className={styles.stepperWrapper}>
      <Stepper
        size={size}
        currentStep={currentStepInternalState}
        disableResponsiveStyles={disableResponsiveStyles}
      />
      <div className={styles.stepperWrapperControls}>
        <p className={styles.stepperWrapperControlsLabel}>
          Change the current step with the controls below
        </p>
        <Button label="Back" onClick={onBack} data-testid="back-button" />
        <Button label="Next" onClick={onNext} data-testid="next-button" />
      </div>
    </div>
  );
};
