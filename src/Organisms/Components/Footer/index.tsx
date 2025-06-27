import React, {CSSProperties, useMemo} from "react";

import {Button, ButtonAppearances, ButtonVariants, Divider} from "@app/Atoms";
import {
  Dropdown,
  DropdownModes,
  DropdownOption,
  DropdownProps,
  DropdownSelectOption,
} from "@app/Molecules";
import {
  colorsPalette,
  Logo,
  LogoColor,
  LogoProps,
  LogoSize,
  LogoVariable,
} from "@app/Foundations";
import {className} from "@app/shared";

import aicpaSocImg from "./assets/aicpa-soc.png";
import pciDssCompliant from "./assets/pci-dss-compliant.png";
import mainLogoWhite from "./assets/main-white.svg";
import soc2Img from "./assets/soc2.png";

import styles from "./Footer.module.scss";

interface FooterLink {
  label: string;
  onClick: () => void;
}

export interface ConfigDropdown {
  label: string;
  options: DropdownSelectOption[];
  value: DropdownOption[];
  placeholder?: DropdownProps["placeholder"];
  dropdownProps?: Partial<DropdownProps>;
}

interface FooterBrandConfig {
  legend: string;
  brandLogoConfig: {logosMap: LogoProps["logosMap"]; brandName: string};
}

export interface FooterConfig {
  brand: FooterBrandConfig;
  firstColumnLinks: FooterLink[];
  secondColumnLinks: FooterLink[];
  configDropdowns: [ConfigDropdown] | [ConfigDropdown, ConfigDropdown];
  copyright: string;
}

export interface FooterProps {
  customClassName?: string;
  backgroundColor?: string;
  config: FooterConfig;
}

export const Footer = ({
  customClassName = "",
  backgroundColor,
  config,
}: React.PropsWithChildren<FooterProps>) => {
  const {
    brand,
    firstColumnLinks,
    secondColumnLinks,
    configDropdowns,
    copyright,
  } = config;
  const {brandLogoConfig, legend} = brand;
  const paletteWhiteColor = useMemo(
    () => colorsPalette.neutral?.find((color) => color.name === "white")?.value,
    []
  );
  const dividerColor = useMemo(
    () => `${paletteWhiteColor!}10`,
    [paletteWhiteColor]
  );

  return (
    <article
      className={className(styles.footerContainer, customClassName)}
      style={
        {
          "--footer-background-color": backgroundColor,
        } as CSSProperties
      }
    >
      <div className={styles.footerContent}>
        <div className={styles.firstGroup}>
          <div className={styles.brand}>
            <Logo
              variable={LogoVariable.MAIN}
              color={LogoColor.DARK_BG}
              logosMap={brandLogoConfig.logosMap}
              size={LogoSize.S}
              alt={brandLogoConfig.brandName}
            />
            <p className={styles.brandLegend}>{legend}</p>
          </div>
          <div className={styles.links}>
            {firstColumnLinks.map((link, index) => (
              <Button
                key={link.label}
                variant={ButtonVariants.GHOST}
                appearance={ButtonAppearances.LIGHT}
                onClick={link.onClick}
                label={link.label}
                data-testid={`footer-first-column-link-${String(index)}`}
              />
            ))}
          </div>
          <div className={styles.links}>
            {secondColumnLinks.map((link, index) => (
              <Button
                key={link.label}
                variant={ButtonVariants.GHOST}
                appearance={ButtonAppearances.LIGHT}
                onClick={link.onClick}
                label={link.label}
                data-testid={`footer-second-column-link-${String(index)}`}
              />
            ))}
          </div>
        </div>
        <div className={styles.secondGroup}>
          <div className={styles.configs}>
            {configDropdowns.map((dropdown, index) => (
              <div className={styles.configWrapper} key={dropdown.label}>
                <Dropdown
                  {...dropdown.dropdownProps}
                  mode={DropdownModes.SELECT}
                  light
                  formLabel={
                    <p className={styles.configLabel}>{dropdown.label}</p>
                  }
                  showInputBorder
                  placeholder={dropdown.placeholder}
                  value={dropdown.value}
                  mobileTitle={dropdown.label}
                  label={dropdown.label}
                  options={dropdown.options}
                  data-testid={
                    dropdown.dropdownProps?.["data-testid"] ??
                    `footer-dropdown-${String(index)}`
                  }
                />
              </div>
            ))}
          </div>
          <div className={styles.certificates}>
            <p className={styles.security}>Security</p>
            <img
              className={styles.aicpa}
              alt="AICPA SOC Certificate"
              src={aicpaSocImg}
            />
            <img
              className={styles.soc2}
              alt="SOC 2 Certificate"
              src={soc2Img}
            />
            <img
              className={styles.pci}
              alt="PCI DSS COMPLIANT Certificate"
              src={pciDssCompliant}
            />
          </div>
        </div>
      </div>
      <Divider gap="gap-0" color={dividerColor} />
      <div className={styles.copyrightsSection}>
        <span>{copyright}</span>
        <span className={styles.poweredBy}>
          Powered By{" "}
          <Logo
            variable={LogoVariable.MAIN}
            color={LogoColor.WHITE}
            logosMap={{main_white: mainLogoWhite}}
            size={LogoSize.XS}
            alt={brandLogoConfig.brandName}
          />
        </span>
      </div>
    </article>
  );
};
