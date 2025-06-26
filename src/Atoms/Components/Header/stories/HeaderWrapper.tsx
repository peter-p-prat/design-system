import React from "react";

import styles from "./HeaderWrapper.module.scss";

export interface HeaderWrapperProps {
  children: React.ReactNode;
}

export const HeaderV2Wrapper: React.FC<
  React.PropsWithChildren<HeaderWrapperProps>
> = ({children}) => {
  return <section className={styles.headerWrapper}>{children}</section>;
};
