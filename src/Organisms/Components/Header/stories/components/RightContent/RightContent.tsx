import React from "react";

import {
  Button,
  ButtonAppearances,
  ButtonShapes,
  ButtonSizes,
  ButtonVariants,
} from "@app/Atoms";
import {Dropdown} from "@app/Molecules";
import {Breakpoints, IconsNames} from "@app/Foundations";
import {useDetectViewport} from "@app/shared";

const LANGUAGE_OPTIONS = [
  {label: "English", triggerLabel: "EN", value: "EN"},
  {label: "Español", triggerLabel: "ES", value: "ES"},
  {label: "Português", triggerLabel: "PT", value: "PT"},
];

const DEFAULT_LANGUAGE = LANGUAGE_OPTIONS[0];

export const RightContent = () => {
  const {viewport} = useDetectViewport();
  const isDesktop = viewport === Breakpoints.DESKTOP;

  if (!isDesktop) {
    return (
      <section>
        <Button
          size={ButtonSizes.MEDIUM}
          leadingIcon={IconsNames.MENU_01}
          shape={ButtonShapes.SQUARE}
          variant={ButtonVariants.FILLED}
          data-testid="header-right-menu-button"
        />
      </section>
    );
  }

  return (
    <section style={{display: "flex", gap: "16px"}}>
      <Button
        appearance={ButtonAppearances.LIGHT}
        variant={ButtonVariants.GHOST}
        label="Join now"
        data-testid="header-right-join-now-button"
      />
      <Button
        variant={ButtonVariants.FILLED}
        label="Login now"
        leadingIcon={IconsNames.USER_PLUS_01}
        data-testid="header-right-log-in-button"
      />
      <Dropdown
        light
        desktopDropdownWidth={160}
        placeholder={DEFAULT_LANGUAGE?.triggerLabel}
        defaultValue={[DEFAULT_LANGUAGE!]}
        value={[DEFAULT_LANGUAGE!]}
        options={LANGUAGE_OPTIONS}
        data-testid="dropdown-language-selector"
      />
    </section>
  );
};
