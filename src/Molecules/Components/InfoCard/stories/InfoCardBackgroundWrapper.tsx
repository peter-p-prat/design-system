import React from "react";

import styles from "./InfoCardBackgroundWrapper.module.scss";

export interface InfoCardBackgroundWrapperProps {
  children: React.ReactNode;
}

export const InfoCardBackgroundWrapper = ({
  children,
}: InfoCardBackgroundWrapperProps) => {
  return (
    <section className={styles.infoCardBackgroundWrapper}>{children}</section>
  );
};
