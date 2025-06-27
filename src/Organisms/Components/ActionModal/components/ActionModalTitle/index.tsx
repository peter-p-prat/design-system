import React from "react";

import {ActionModalSize} from "@app/Organisms";
import {className, conditionalClass} from "@app/shared";

import styles from "./ActionModalTitle.module.scss";

interface ActionModalTitleProps {
  title?: string | React.ReactNode;
  size?: ActionModalSize;
  fullScreen?: boolean;
}

export const ActionModalTitle = ({
  title,
  size = ActionModalSize.MEDIUM,
  fullScreen = false,
}: ActionModalTitleProps) => {
  if (!title) return null;

  return typeof title === "string" ? (
    <div
      className={className(
        styles.title,
        styles[size],
        conditionalClass([styles.fullScreen, !!fullScreen])
      )}
    >
      {title}
    </div>
  ) : (
    title
  );
};
