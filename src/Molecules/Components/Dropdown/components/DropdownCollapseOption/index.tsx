import React from "react";

import {DividerV2, DividerV2Type} from "@app/Atoms";

import {
  DropdownCollapsibleInternalOptionValue,
  DropdownCollapsibleOptionModes,
  DropdownCollapsibleOptionsGroup,
} from "../../type";
import {DropdownOptionComponent} from "../DropdownOptionComponent";

import styles from "./DropdownCollapseOption.module.scss";

interface Props {
  groupId: string;
  optionsGroup: DropdownCollapsibleOptionsGroup;
  handleCollapse: (groupId: string) => void;
  handleClickOption: (
    clickedGroupOption: DropdownCollapsibleInternalOptionValue
  ) => void;
  isOptionSelected: (
    groupOption: DropdownCollapsibleInternalOptionValue
  ) => boolean;
  dropdownTestId: string;
  openedGroup: string;
  isLastGroup: boolean;
}

export const DropdownCollapseOption = ({
  groupId,
  optionsGroup,
  handleCollapse,
  handleClickOption,
  isOptionSelected,
  dropdownTestId,
  openedGroup,
  isLastGroup,
}: Props) => {
  return (
    <>
      <div className={styles.dropdownCollapsibleGroup}>
        {optionsGroup.options.map((option, i) => (
          <div key={option.value} className={styles.dropdownCollapsibleOption}>
            <DropdownOptionComponent
              optionNumber={i}
              option={option}
              multiselect={
                optionsGroup.mode ===
                DropdownCollapsibleOptionModes.MULTI_SELECT
              }
              useRadioButtons={
                optionsGroup.mode === DropdownCollapsibleOptionModes.RADIO
              }
              onClick={() => {
                handleClickOption({groupId, option, mode: optionsGroup.mode});
              }}
              isSelected={() => isOptionSelected({groupId, option})}
              isDisabled={false}
              testId={`${dropdownTestId}-group-${groupId}-option-${String(i)}`}
            />
          </div>
        ))}
      </div>
      {!isLastGroup && (
        <DividerV2
          limitsGap="gap-4"
          sidesGap="gap-0"
          type={DividerV2Type.SOLID}
        />
      )}
    </>
  );
};
