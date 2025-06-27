export interface StepperProps {
  /**
   * @description The amount of steps
   * @type number
   */
  size: number;
  /**
   * @description The current step
   * @type number
   */
  currentStep: number;
  /**
   * @description Disables responsive styles
   * @type boolean
   */
  disableResponsiveStyles?: boolean;
}
