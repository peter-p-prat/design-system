import React, {CSSProperties, ReactElement} from "react";

import {
  Logo,
  LogoColor,
  LogoProps,
  LogoSize,
  LogoVariable,
} from "@app/Foundations/Components/Logo";
import {Breakpoints} from "@app/Foundations/theme/breakpoints";
import {className} from "@app/shared/helpers/className";
import {useDetectViewport} from "@app/shared/hooks/useDetectViewport";

import styles from "./Header.module.scss";

export interface HeaderProps {
  /**
   * @description The brand logo config to be displayed in the header. This is the new prop to use.
   * @type {logosMap: LogoProps["logosMap"]; brandName: string; onClick?: () => void}
   */
  brandLogoConfig: {
    logosMap: LogoProps["logosMap"];
    brandName: string;
    onClick?: () => void;
  };
  /**
   * @description The custom class name to be applied to the header.
   * @type string
   */
  customClassName?: string;
  /**
   * @description The custom background color of the header.
   * @type string
   */
  backgroundColor?: string;
  /**
   * @description The right component to be displayed in the header.
   * @type ReactElement<any>
   */
  rightComponent?: ReactElement<any>;
  /**
   * @description The center component to be displayed in the header.
   * @type ReactElement<any>
   */
  centerComponent?: ReactElement<any>;
}
export const Header: React.FC<HeaderProps> = ({
  brandLogoConfig,
  customClassName,
  backgroundColor,
  rightComponent,
  centerComponent,
}) => {
  const {viewport} = useDetectViewport();
  const isMobile = viewport === Breakpoints.MOBILE;

  return (
    <div
      className={className(styles.headerContainer, customClassName)}
      style={
        {
          "--header-background-color": backgroundColor,
        } as CSSProperties
      }
    >
      <div className={styles.headerContent}>
        <div className={styles.headerContentWrapper}>
          <Logo
            variable={LogoVariable.MAIN}
            color={LogoColor.DARK_BG}
            logosMap={brandLogoConfig.logosMap}
            size={isMobile ? LogoSize.XS : LogoSize.S}
            alt={brandLogoConfig.brandName}
            onClick={brandLogoConfig.onClick}
          />
          {centerComponent}
          {rightComponent}
        </div>
      </div>
    </div>
  );
};
