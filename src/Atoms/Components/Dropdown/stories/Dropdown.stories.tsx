import React, {useState} from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {
  Dropdown,
  DropdownAlignments,
  DropdownFormTriggerSizes,
  DropdownModes,
  DropdownOption,
  DropdownProps,
} from "@app/Atoms";
import {
  icons,
  IconsNames,
  Logo,
  LogoColor,
  LogoSize,
  LogoVariable,
  SymbolPosition,
} from "@app/Foundations";
import {logosMap} from "@app/Foundations/Components/Logo/stories/logosMap";

import {DropdownStoryCustomTrigger} from "./components/DropdownStoryCustomTrigger";
import {DropdownWrapper} from "./DropdownWrapper";

const DEFAULT_OPTIONS: DropdownOption[] = [
  {label: "Option 1", value: "option1", icon: IconsNames.CALENDAR},
  {label: "Option 2", value: "option2", icon: IconsNames.ACTIVITY},
  {label: "Option 3", value: "option3", icon: IconsNames.YOUTUBE},
  {label: "Option 4", value: "option4", icon: IconsNames.WORLD},
];

const DEFAULT_SELECTION_OPTIONS: DropdownOption[] = [
  {
    label: "Selected",
    value: "optionSelected",
    icon: IconsNames.ACTIVITY,
  },
  {
    label: "Not Selected",
    value: "optionNotSelected",
    icon: IconsNames.TAG_02,
  },
  {
    label: "Disabled",
    value: "optionDisabled",
    icon: IconsNames.ALERT_CIRCLE,
  },
  {
    label: "Disabled & Selected",
    value: "optionDisabledSelected",
    icon: IconsNames.AWARD_01,
  },
];

const meta = {
  title: "Atoms/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    desktopDropdownWidth: {
      control: {type: "text"},
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {summary: "Label"},
      },
      description:
        "The Dropdown width for desktop devices. Can be defined as a number (representing pixels) or a string, in which case it will be used as is",
    },
    openToTop: {
      control: {type: "boolean"},
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "Defines if the Dropdown opens to the top instead of the bottom",
    },
    alignment: {
      options: Object.values(DropdownAlignments),
      control: {type: "inline-radio"},
      table: {
        type: {
          summary: "DropdownAlignments",
        },
        defaultValue: {summary: "DropdownAlignments.RIGHT"},
      },
      description:
        "Defines the alignment of the Dropdown options. The default value RIGHT aligns the options to the right of the label, while LEFT aligns them to the left of the label",
      defaultValue: DropdownAlignments.RIGHT,
    },
    formLabel: {
      control: {type: "text"},
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {summary: "Label"},
      },
      description:
        "The Dropdown label to be shown on top of the dropdown trigger, with the same styles of the input label. It also can receive a ReactNode",
    },
    label: {
      control: {type: "text"},
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {summary: "Label"},
      },
      description: "The Dropdown label",
    },
    onChange: {
      table: {
        type: {
          summary: "function",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "Triggers when the value on the Dropdown changes. Passes an DropdownOption in the callback",
    },
    value: {
      control: {type: "object"},
      table: {
        type: {
          summary: "DropdownOption",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "The value to use in the Dropdown. Internally the Dropdown controls its own value, that you can get with onChange, but if we use this value property you transform it into a controlled component and must set this value property externally",
    },
    options: {
      control: {type: "object"},
      table: {
        type: {
          summary: "DropdownOption[]",
        },
        defaultValue: {
          summary: `[]`,
        },
      },
      description:
        "The options to use in the Dropdown, they change to DropdownMenuOption, with an onClick function, when MODE is MENU",
    },
    mode: {
      options: Object.values(DropdownModes),
      control: {type: "inline-radio"},
      table: {
        type: {
          summary: "DropdownModes",
        },
        defaultValue: {summary: "DropdownModes.SELECT"},
      },
      description:
        "The mode to use in the Dropdown; The default value SELECT acts as a selectable component that allows each option to be selected and showed instead of the label when selected; MENU mode does select the option internally, but does not show it on the label and also the options can have an onClick function to trigger different functionalities when selected ",
      defaultValue: DropdownModes.SELECT,
    },
    formTrigger: {
      control: {type: "inline-radio"},
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {summary: "false"},
      },
      description:
        "Defines if the dropdown trigger should have the same shape and styles as an input field",
      defaultValue: false,
    },
    formTriggerSize: {
      options: Object.values(DropdownFormTriggerSizes),
      control: {type: "inline-radio"},
      table: {
        type: {
          summary: "DropdownFormTriggerSizes",
        },
        defaultValue: {summary: "DropdownFormTriggerSizes.SMALL"},
      },
      description:
        "If formTrigger is true, it defines the size of the form trigger",
      defaultValue: DropdownFormTriggerSizes.SMALL,
    },
    mobileTitle: {
      control: {type: "text"},
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "The title to be shown on top of the dropdown options modal when the dropdown is opened on mobile devices",
    },
    customListClassName: {
      control: {type: "text"},
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "Custom classname to be forwarded to the dropdown list element. To be used to define dropdown width (for desktop) in each use case",
    },
    customLabelClassName: {
      control: {type: "text"},
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "Custom classname to be forwarded to the dropdown label element. Can be used to give special styles to the label",
    },
    placeholder: {
      control: {type: "text"},
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "The Dropdown placeholder, shown when no value is selected yet. The Dropdown Label property has more priority than this (and the Selected Value more than the Label) to be shown on the Trigger Component (SelectedValue >> Label >> Placeholder)",
    },
    defaultOpen: {
      control: {type: "boolean"},
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {summary: "undefined"},
      },
      description: "Controls whether to start with the Dropdown opened",
    },
    defaultValue: {
      control: {type: "object"},
      table: {
        type: {
          summary: "DropdownOption",
        },
        defaultValue: {summary: "undefined"},
      },
      description: "The default option value to start in the Dropdown",
    },
    disableCloseAfterSelection: {
      control: {type: "boolean"},
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "Controls whether to disable the default feature of closing the dropdown when selecting an option",
    },
    disableCloseWhenClickOutside: {
      control: {type: "boolean"},
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "Controls whether to disable the default feature of closing the dropdown when clicking outside of the Dropdown",
    },
    labelIcon: {
      options: Object.keys(icons),
      control: {type: "select"},
      table: {
        type: {
          summary: "IconsNames",
        },
        defaultValue: {summary: "undefined"},
      },
      description: "The icon to include at start of the label",
    },
    triggerIcon: {
      options: Object.keys(icons),
      control: {type: "select"},
      table: {
        type: {
          summary: "IconsNames",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "The icon to replace the default chevron down on the trigger",
    },
    light: {
      control: {type: "boolean"},
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "With this option enabled, the dropdown turns into a light version, with a white font color and a light border color, to be used on dark backgrounds",
    },
    disableTransparency: {
      control: {type: "boolean"},
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "With this option enabled, the Dropdown defines a background in its main container (white), disabling the default transparent",
    },
    showInputBorder: {
      control: {type: "boolean"},
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "With this option enabled the Dropdown looks more like an input, showing the borders even when not selected",
    },
    hideSelectedInputBorder: {
      control: {type: "boolean"},
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "With this option enabled the Dropdown hides the border when an option is selected",
    },
    useRadioButtons: {
      control: {type: "boolean"},
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "Enabling this make the options show radio buttons at the beginning",
    },
    open: {
      control: {type: "boolean"},
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "Controls externally if the dropdown is open. The dropdown controls itself to close and open, unless you explicitly pass open, onOpen and onClose",
    },
    onOpen: {
      table: {
        type: {
          summary: "function",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "Triggers when the dropdown is opened. The dropdown controls itself to close and open, unless you explicitly pass open, onOpen and onClose",
    },
    onClose: {
      table: {
        type: {
          summary: "function",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "Triggers when the dropdown is closed. The dropdown controls itself to close and open, unless you explicitly pass open, onOpen and onClose",
    },
    getOptionDisabled: {
      table: {
        type: {
          summary: "function",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "This function is passed to each option and uses the return value (boolean) to decide if the option is disabled. By default, nothing is disabled",
    },
    getOptionSelected: {
      table: {
        type: {
          summary: "function",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "This function is passed to each option and uses the return value (boolean) to decide if the option is selected. By default, the option that has the property value equal to the value the Dropdown has as selected is the one marked as selected",
    },
    enableSearchInput: {
      control: {type: "boolean"},
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "Controls if the dropdown has a search input included inside the options",
    },
    onSearchFilter: {
      table: {
        type: {
          summary: "function",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "This function is used when the SearchInput updates to filter each option, receiving a boolean for each to show it or not. By default, it checks the option's label and value for matches with the search text, as a substring, case insensitive",
    },
    searchInputProps: {
      control: {type: "object"},
      table: {
        type: {
          summary: "Partial<SearchInputProps>",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "The search input options, inherited from the SearchInput component, that we can override one by one as needed. By default the dropdown implements its own logic for searching, with a search within the label or the value of the option by text substrings (case insensitive), and does not debounce the search (debounceTime: 0 on SearchInput)",
    },
    cancelActionButton: {
      control: {type: "object"},
      table: {
        type: {
          summary: "ActionButtonProps",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "Optional 'cancel' button that positions itself at the end of the options the Dropdown shows. It closes the dropdown when is clicked. Receives the label and the onClick function",
    },
    submitActionButton: {
      control: {type: "object"},
      table: {
        type: {
          summary: "ActionButtonProps",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "Optional 'submit' button that positions itself at the end of the options the Dropdown shows. It sends the current value in a callback to be excecuted when is clicked, while also closing the dropdown options (does not prevent the options from closing the dropdown on selection, that's what the disableCloseAfterSelection prop is for). Receives the label and the onClick function",
    },
    callToActionButton: {
      control: {type: "object"},
      table: {
        type: {
          summary: "CallToActionButtonProps",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "Optional 'call to action' button that positions itself at the end of the options the Dropdown shows. If passed, cancelActionButton and submitActionButton will be ignored",
    },
    dropdownListInfoTooltip: {
      control: {type: "text"},
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "If passed, it renders an info tooltip next to the dropdown list containing the passed node module",
    },
    iconColor: {
      control: {type: "color"},
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {summary: "undefined"},
      },
      description: "The color to apply to the trigger icon",
    },
  },
  args: {
    mobileTitle: "Title",
    onOpen: undefined,
    onClose: undefined,
    onSearchFilter: undefined,
    "data-testid": "dropdown",
  },
} satisfies Meta<DropdownProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    options: DEFAULT_SELECTION_OPTIONS,
    getOptionDisabled: (option) =>
      ["optionDisabled", "optionDisabledSelected"].includes(
        option?.value ?? ""
      ),
    getOptionSelected: (option, dropdownValue) =>
      dropdownValue?.some(
        (selectedOption) => selectedOption.value === option?.value
      ) ||
      ["optionSelected", "optionDisabledSelected"].includes(
        option?.value ?? ""
      ),
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper
          withBackground={args.disableTransparency}
          light={args.light}
        >
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const Placeholder: Story = {
  args: {
    placeholder: "Placeholder",
    disableCloseWhenClickOutside: true,
    options: DEFAULT_OPTIONS,
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper
          withBackground={args.disableTransparency}
          light={args.light}
        >
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const LongText: Story = {
  args: {
    label: "Label",
    defaultOpen: true,
    options: [
      ...DEFAULT_OPTIONS,
      {
        label:
          "Option With Super long text Option With Super long text Option With Super long text",
        value: "optionLong",
        icon: IconsNames.VIDEO_RECORDER_OFF,
      },
    ],
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper
          withBackground={args.disableTransparency}
          light={args.light}
        >
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const WithInitialBorders: Story = {
  args: {
    label: "Label",
    showInputBorder: true,
    options: DEFAULT_OPTIONS,
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper
          withBackground={args.disableTransparency}
          light={args.light}
        >
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const OnlyIcon: Story = {
  args: {
    showInputBorder: true,
    options: DEFAULT_OPTIONS,
    desktopDropdownWidth: 200,
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper
          withBackground={args.disableTransparency}
          light={args.light}
        >
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const WithRadioButtons: Story = {
  args: {
    label: "Label",
    useRadioButtons: true,
    options: DEFAULT_OPTIONS,
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper
          withBackground={args.disableTransparency}
          light={args.light}
        >
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const PreventSelectionClosing: Story = {
  args: {
    label: "Label",
    useRadioButtons: true,
    disableCloseAfterSelection: true,
    options: DEFAULT_OPTIONS,
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper
          withBackground={args.disableTransparency}
          light={args.light}
        >
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const PreventOutsideClickClosing: Story = {
  args: {
    label: "Label",
    useRadioButtons: true,
    disableCloseWhenClickOutside: true,
    options: DEFAULT_OPTIONS,
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper
          withBackground={args.disableTransparency}
          light={args.light}
        >
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const UsedAsMenu: Story = {
  args: {
    label: "Abrir sitio",
    mode: DropdownModes.MENU,
    options: [
      {
        label: "Google",
        value: "google",
        icon: IconsNames.SEARCH,
        onClick: () => {
          window.open("https://google.com", "_blank");
        },
      },
      {
        label: "Gmail",
        value: "gmail",
        icon: IconsNames.MAIL_01,
        onClick: () => {
          window.open("https://gmail.com", "_blank");
        },
      },
      {
        label: "Youtube",
        value: "youtube",
        icon: IconsNames.YOUTUBE,
        onClick: () => {
          window.open("https://youtube.com", "_blank");
        },
      },
    ],
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper
          withBackground={args.disableTransparency}
          light={args.light}
        >
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const UsedAsMenuWithCallToAction: Story = {
  args: {
    label: "Abrir sitio",
    mode: DropdownModes.MENU,
    options: [
      {
        label: "Google",
        value: "google",
        icon: IconsNames.SEARCH,
        onClick: () => {
          window.open("https://google.com", "_blank");
        },
      },
      {
        label: "Gmail",
        value: "gmail",
        icon: IconsNames.MAIL_01,
        onClick: () => {
          window.open("https://gmail.com", "_blank");
        },
      },
      {
        label: "Youtube",
        value: "youtube",
        icon: IconsNames.YOUTUBE,
        onClick: () => {
          window.open("https://youtube.com", "_blank");
        },
      },
    ],
    callToActionButton: {
      icon: IconsNames.LOG_OUT_01,
      label: "Log Out",
      onClick: () => {
        window.open("https://youtube.com", "_blank");
      },
      preventCloseOnClick: true,
      disabled: true,
    },
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper
          withBackground={args.disableTransparency}
          light={args.light}
        >
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const WithCustomTrigger: Story = {
  args: {
    mode: DropdownModes.MENU,
    customTrigger: <DropdownStoryCustomTrigger />,
    desktopDropdownWidth: 308,
    options: [
      {
        label: "Google",
        value: "google",
        icon: IconsNames.SEARCH,
        onClick: () => {
          window.open("https://google.com", "_blank");
        },
      },
      {
        label: "Gmail",
        value: "gmail",
        icon: IconsNames.MAIL_01,
        onClick: () => {
          window.open("https://gmail.com", "_blank");
        },
      },
      {
        label: "Youtube",
        value: "youtube",
        icon: IconsNames.YOUTUBE,
        onClick: () => {
          window.open("https://youtube.com", "_blank");
        },
      },
    ],
    callToActionButton: {
      icon: IconsNames.LOG_OUT_01,
      label: "Log Out",
      onClick: () => {
        window.open("https://youtube.com", "_blank");
      },
      preventCloseOnClick: true,
      disabled: true,
    },
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper
          withBackground={args.disableTransparency}
          light={args.light}
        >
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const UseAsControlledComponent: Story = {
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState<DropdownOption>(
      args.options[1] as DropdownOption
    );

    const handleChange = ([option]: DropdownOption[]) => {
      if (!option) return;
      setSelectedOption(option);
    };

    return (
      <DropdownWrapper
        withBackground={args.disableTransparency}
        light={args.light}
      >
        <Dropdown {...args} value={[selectedOption]} onChange={handleChange} />
        <p>
          Here we are using and internal variable to change and update the value
        </p>
        <p>CurrentValue: {selectedOption?.label}</p>
      </DropdownWrapper>
    );
  },
  args: {
    label: "Options",
    options: DEFAULT_OPTIONS,
  },
};

export const WithDisabledTransparency: Story = {
  args: {
    label: "Label",
    disableTransparency: true,
    options: DEFAULT_OPTIONS,
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper
          withBackground={args.disableTransparency}
          light={args.light}
        >
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const AlignedRight: Story = {
  args: {
    label: "Label",
    alignment: DropdownAlignments.RIGHT,
    desktopDropdownWidth: 300,
    options: DEFAULT_OPTIONS,
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper
          withBackground={args.disableTransparency}
          light={args.light}
        >
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const AlignedLeft: Story = {
  args: {
    label: "Label",
    alignment: DropdownAlignments.LEFT,
    desktopDropdownWidth: 300,
    options: DEFAULT_OPTIONS,
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper
          withBackground={args.disableTransparency}
          light={args.light}
        >
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const OpenToTop: Story = {
  args: {
    label: "Label",
    openToTop: true,
    options: DEFAULT_OPTIONS,
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper
          withBackground={args.disableTransparency}
          light={args.light}
        >
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const WithSearch: Story = {
  args: {
    label: "Label",
    enableSearchInput: true,
    desktopDropdownWidth: 300,
    options: [
      {
        label: "Option",
        value: "option",
        icon: IconsNames.ACTIVITY,
      },
      {
        label: "Another option",
        value: "anotherOption",
        icon: IconsNames.TAG_02,
      },
      {
        label: "Example Option",
        value: "exampleOption",
        icon: IconsNames.ALERT_CIRCLE,
      },
      {
        label: "Another Example Option",
        value: "anotherExampleOption",
        icon: IconsNames.AWARD_01,
      },
      {
        label: "Scrolled Option",
        value: "scrolledOption",
        icon: IconsNames.ARROW_CIRCLE_DOWN,
      },
      {
        label: "Scrolled Option 2",
        value: "scrolledOption2",
        icon: IconsNames.ARROW_CIRCLE_DOWN,
      },
      {
        label: "Scrolled Option 3",
        value: "scrolledOption3",
        icon: IconsNames.ARROW_CIRCLE_DOWN,
      },
    ],
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper
          withBackground={args.disableTransparency}
          light={args.light}
        >
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const WithSubmitActionButton: Story = {
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState<
      DropdownOption | undefined
    >();

    const handleActionSubmit = (value?: DropdownOption[]) => {
      const [valueOption] = value ?? [];
      setSelectedOption(valueOption);
    };

    return (
      <DropdownWrapper
        withBackground={args.disableTransparency}
        light={args.light}
      >
        <Dropdown
          {...args}
          submitActionButton={{
            label: "Action",
            onClick: handleActionSubmit,
          }}
        />
        {selectedOption && <p>Action value: {selectedOption.label}</p>}
      </DropdownWrapper>
    );
  },
  args: {
    label: "Label",
    disableCloseAfterSelection: true,
    options: DEFAULT_OPTIONS,
  },
};

export const WithCancelAndSubmitActionButton: Story = {
  render: (args) => {
    const [selectedOption, setSelectedOption] = useState<
      DropdownOption | undefined
    >();

    const handleActionSubmit = (value?: DropdownOption[]) => {
      const [valueOption] = value ?? [];
      setSelectedOption(valueOption);
    };

    return (
      <DropdownWrapper
        withBackground={args.disableTransparency}
        light={args.light}
      >
        <Dropdown
          {...args}
          cancelActionButton={{
            label: "Cancel",
          }}
          submitActionButton={{
            label: "Action",
            onClick: handleActionSubmit,
          }}
        />
        {selectedOption && <p>Action value: {selectedOption.label}</p>}
      </DropdownWrapper>
    );
  },
  args: {
    label: "Label",
    disableCloseAfterSelection: true,
    options: DEFAULT_OPTIONS,
  },
};

export const Multiselect: Story = {
  render: (args) => {
    const [selectedOptions, setSelectedOptions] = useState<
      DropdownOption[] | undefined
    >();

    const handleActionSubmit = (value?: DropdownOption[]) => {
      setSelectedOptions(value);
    };

    return (
      <DropdownWrapper
        withBackground={args.disableTransparency}
        light={args.light}
      >
        <Dropdown
          {...args}
          label={`${String(selectedOptions?.length ?? 0)} options selected`}
          cancelActionButton={{
            label: "Cancel",
          }}
          submitActionButton={{
            label: "Action",
            onClick: handleActionSubmit,
          }}
        />
        {selectedOptions?.map((option) => (
          <p key={option.value}>Action value: {option.label}</p>
        ))}
      </DropdownWrapper>
    );
  },
  args: {
    multiselect: true,
    options: DEFAULT_OPTIONS,
    desktopDropdownWidth: 300,
  },
};

export const WithFormLabel: Story = {
  args: {
    options: DEFAULT_SELECTION_OPTIONS,
    formLabel: "Label",
    label: "Label",
    showInputBorder: true,
    disableTransparency: true,
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper
          withBackground={args.disableTransparency}
          light={args.light}
        >
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const WithFormTrigger: Story = {
  args: {
    options: DEFAULT_SELECTION_OPTIONS,
    formLabel: "Label",
    label: "Label",
    formTrigger: true,
    formTriggerSize: DropdownFormTriggerSizes.SMALL,
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper
          withBackground={args.disableTransparency}
          light={args.light}
        >
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const WithInfoTooltip: Story = {
  args: {
    options: DEFAULT_SELECTION_OPTIONS,
    formLabel: "Label",
    label: "Label",
    formTrigger: true,
    formTriggerSize: DropdownFormTriggerSizes.SMALL,
    dropdownListInfoTooltip: "This is an info tooltip",
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper
          withBackground={args.disableTransparency}
          light={args.light}
        >
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const WithDisabledMobileMode: Story = {
  args: {
    options: DEFAULT_SELECTION_OPTIONS,
    formLabel: "Label",
    label: "Label",
    disableMobileModalMode: true,
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper
          withBackground={args.disableTransparency}
          light={args.light}
        >
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const UsingCustomIcons: Story = {
  args: {
    label: "Seleccionar una opción",
    labelIcon: IconsNames.ALERT_CIRCLE,
    useRadioButtons: true,
    options: [
      {
        label: "Primera opción",
        value: "first-option",
        icon: {
          url: "https://play-lh.googleusercontent.com/pCSbX-pDFM4hn6wEbo9C0_3tllj1ar2M_hoIFttociCEZQp2ecpkRHP-Q4a8HB-6rFp0",
          alt: "Primera opción",
        },
      },
      {
        label: "Segunda opción",
        value: "second-option",
        icon: {
          url: "https://lh3.googleusercontent.com/A_0pJXhl3-9CCJ-MPadLvxCzwDKsHT4JCb2f-5sPJMq75Hpbz_VJeVnVRMf7m7cNvXxC",
          alt: "Segunda opción",
        },
      },
      {
        label: "Tercera opción",
        value: "third-option",
        icon: {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdsa33myPmeFAeZ_iX0OCUZvVWy7uZlrm5Jw&s",
          alt: "Tercera opción",
        },
      },
      {
        label: "Random image short",
        value: "random-short",
        icon: {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnXmrMO5izDA5R6AuphXDXbBgm7RyC-k0oPA&s",
          alt: "Random-short",
        },
      },
      {
        label: "Random image long",
        value: "random-long",
        icon: {
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqmAHWa0tpE-RpomsXzKBPDm2irnlq9obhFg&s",
          alt: "Random-long",
        },
      },
    ],
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper
          withBackground={args.disableTransparency}
          light={args.light}
        >
          <Story />
          <p>WARNING: A veces las imagenes no cargan bien</p>
        </DropdownWrapper>
      );
    },
  ],
};

export const UsingComponentAsIcon: Story = {
  args: {
    label: "Seleccionar una opción",
    labelIcon: IconsNames.ALERT_CIRCLE,
    useRadioButtons: true,
    options: [
      {
        label: "Primera opción",
        value: "first-option",
        icon: (
          <Logo
            variable={LogoVariable.SYMBOL}
            color={LogoColor.LIGHT_BG}
            logosMap={logosMap}
            position={SymbolPosition.CENTER}
            size={LogoSize.XS}
            alt="Primera opción"
          />
        ),
      },
      {
        label: "Segunda opción",
        value: "second-option",
        icon: (
          <Logo
            variable={LogoVariable.SYMBOL}
            color={LogoColor.LIGHT_BG}
            logosMap={logosMap}
            position={SymbolPosition.CENTER}
            size={LogoSize.XS}
            alt="Segunda opción"
          />
        ),
      },
    ],
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper
          withBackground={args.disableTransparency}
          light={args.light}
        >
          <Story />
          <p>WARNING: A veces las imagenes no cargan bien</p>
        </DropdownWrapper>
      );
    },
  ],
};
