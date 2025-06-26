import React from "react";

import {
  className,
  conditionalClass,
  onKeyDownA11y,
  styleByKey,
} from "@app/shared";

import {LogoProps} from "./type";

import styles from "./Logo.module.scss";

export const Logo = ({
  alt,
  size,
  variable,
  logosMap,
  position,
  color,
  onClick,
}: LogoProps) => {
  const logoKey = `${variable}_${color}`;
  const image = logosMap[logoKey];

  return (
    <div
      className={className(
        styles.logo,
        styleByKey(styles, size),
        styleByKey(styles, variable),
        conditionalClass([styles.clickable, !!onClick])
      )}
      onClick={onClick}
      onKeyDown={onKeyDownA11y(() => onClick?.())}
      tabIndex={-1}
      role={onClick ? "button" : "figure"}
    >
      <div
        className={className(styles.container, styleByKey(styles, position))}
      >
        <img src={image} alt={alt} className={styles.image} />
      </div>
    </div>
  );
};
