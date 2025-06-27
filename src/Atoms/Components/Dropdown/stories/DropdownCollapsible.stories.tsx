import React, {useState} from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {
  DropdownAlignments,
  DropdownCollapsible,
  DropdownCollapsibleOptionModes,
  DropdownCollapsibleProps,
  DropdownCollapsibleValue,
  DropdownFormTriggerSizes,
  DropdownOption,
  isCustomTrigger,
} from "@app/Atoms";
import {
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

const DEFAULT_MULTISELECT_OPTIONS: DropdownOption[] = [
  {
    label: "Clothes",
    value: "CLOTHES",
  },
  {
    label: "Shoes",
    value: "SHOES",
  },
];

const DEFAULT_RADIO_OPTIONS: DropdownOption[] = [
  {
    label: "Newer first",
    value: "ASC",
  },
  {
    label: "Older first",
    value: "DESC",
  },
];

const DEFAULT_OPTIONS = {
  date: {
    label: "Date",
    options: DEFAULT_RADIO_OPTIONS,
    mode: DropdownCollapsibleOptionModes.RADIO,
  },
  transactions: {
    label: "Transaction",
    options: DEFAULT_MULTISELECT_OPTIONS,
    mode: DropdownCollapsibleOptionModes.MULTI_SELECT,
  },
};

const meta = {
  title: "Atoms/DropdownCollapsible",
  component: DropdownCollapsible,
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
          summary: "DropdownCollapsibleValue",
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
          summary: "DropdownCollapsibleOptionsGroup[]",
        },
        defaultValue: {
          summary: `[]`,
        },
      },
      description:
        "The options to use in the Dropdown. Each group has an id, a label, a mode (DropdownCollapsibleOptionModes) and an array of options (DropdownOption)",
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
          summary: "DropdownCollapsibleValue",
        },
        defaultValue: {summary: "undefined"},
      },
      description: "The default value when the Dropdown initializes",
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
    trigger: {
      control: {type: "object"},
      table: {
        type: {
          summary: "DropdownCollapsibleTriggerConfigs",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "Trigger configs to customize the trigger. It receives a leading icon (optional), a label (optional), a placeholder (optional), a custom trigger icon and color (optional) and if the trigger border should be shown. Optionally, a node can be passed to be rendered as the trigger",
    },
  },
  args: {
    options: DEFAULT_OPTIONS,
    onOpen: undefined,
    onClose: undefined,
    "data-testid": "dropdown-collapsible",
  },
} satisfies Meta<DropdownCollapsibleProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: {label: "Label"},
    options: DEFAULT_OPTIONS,
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper light={args.light}>
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const Placeholder: Story = {
  args: {
    trigger: {placeholder: "Placeholder"},
    disableCloseWhenClickOutside: true,
    options: DEFAULT_OPTIONS,
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper light={args.light}>
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const WithInitialBorders: Story = {
  args: {
    trigger: {label: "Label", showBorder: true},
    options: DEFAULT_OPTIONS,
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper light={args.light}>
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const OnlyIcon: Story = {
  args: {
    trigger: {showBorder: true},
    options: DEFAULT_OPTIONS,
    desktopDropdownWidth: 200,
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper light={args.light}>
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const PreventOutsideClickClosing: Story = {
  args: {
    trigger: {label: "Label"},
    disableCloseWhenClickOutside: true,
    options: DEFAULT_OPTIONS,
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper light={args.light}>
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const UsedAsMenuWithCallToAction: Story = {
  args: {
    trigger: {label: "Abrir sitio"},
    callToActionButton: {
      icon: IconsNames.LOG_OUT_01,
      label: "Log Out",
      onClick: () => {
        window.open("https://youtube.com", "_blank");
      },
      preventCloseOnClick: true,
    },
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper light={args.light}>
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const WithCustomTrigger: Story = {
  args: {
    trigger: <DropdownStoryCustomTrigger />,
    desktopDropdownWidth: 308,
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
    (Story) => {
      return (
        <DropdownWrapper light>
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const UseAsControlledComponent: Story = {
  render: (args) => {
    const [dropdownValue, setDropdownValue] =
      useState<DropdownCollapsibleValue>();

    const handleChange = (currentValue: DropdownCollapsibleValue) => {
      setDropdownValue(currentValue);
    };

    return (
      <DropdownWrapper
        withBackground={
          !isCustomTrigger(args.trigger) && args.trigger.disableTransparency
        }
        light={args.light}
      >
        <DropdownCollapsible
          {...args}
          value={dropdownValue}
          onChange={handleChange}
        />
        <p>
          Here we are using and internal variable to change and update the value
        </p>
        <p>
          Current Value:
          {dropdownValue &&
            Object.entries(dropdownValue)?.map(([id, group]) => (
              <>
                <p>{id}</p>
                <ul>
                  {group.selectedOptions.map((value) => (
                    <li key={value}>{value}</li>
                  ))}
                </ul>
              </>
            ))}
        </p>
      </DropdownWrapper>
    );
  },
  args: {
    trigger: {label: "Options"},
    options: DEFAULT_OPTIONS,
  },
};

export const WithDisabledTransparency: Story = {
  args: {
    trigger: {label: "Label", disableTransparency: true},

    options: DEFAULT_OPTIONS,
    desktopDropdownWidth: 300,
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper light={args.light}>
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const AlignedRight: Story = {
  args: {
    trigger: {label: "Label"},
    alignment: DropdownAlignments.RIGHT,
    desktopDropdownWidth: 300,
    options: DEFAULT_OPTIONS,
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper light={args.light}>
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const AlignedLeft: Story = {
  args: {
    trigger: {label: "Label"},
    alignment: DropdownAlignments.LEFT,
    desktopDropdownWidth: 300,
    options: DEFAULT_OPTIONS,
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper light={args.light}>
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const OpenToTop: Story = {
  args: {
    trigger: {label: "Label"},
    openToTop: true,
    options: DEFAULT_OPTIONS,
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper light={args.light}>
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const WithSubmitActionButton: Story = {
  render: (args) => {
    const [dropdownValue, setDropdownValue] =
      useState<DropdownCollapsibleValue>();

    const handleChange = (
      currentValue: DropdownCollapsibleValue | undefined
    ) => {
      setDropdownValue(currentValue);
    };

    return (
      <DropdownWrapper
        withBackground={
          !isCustomTrigger(args.trigger) && args.trigger.disableTransparency
        }
        light={args.light}
      >
        <DropdownCollapsible
          {...args}
          submitActionButton={{
            label: "Action",
            onClick: handleChange,
          }}
        />
        {!!dropdownValue && (
          <p>
            Current Value:
            {Object.entries(dropdownValue)?.map(([id, group]) => (
              <>
                <p>{id}</p>
                <ul>
                  {group.selectedOptions.map((value) => (
                    <li key={value}>{value}</li>
                  ))}
                </ul>
              </>
            ))}
          </p>
        )}
      </DropdownWrapper>
    );
  },
  args: {
    trigger: {label: "Label"},
    options: DEFAULT_OPTIONS,
  },
};

export const WithCancelAndSubmitActionButton: Story = {
  render: (args) => {
    const [dropdownValue, setDropdownValue] =
      useState<DropdownCollapsibleValue>();

    const handleChange = (
      currentValue: DropdownCollapsibleValue | undefined
    ) => {
      setDropdownValue(currentValue);
    };

    return (
      <DropdownWrapper
        withBackground={
          !isCustomTrigger(args.trigger) && args.trigger.disableTransparency
        }
        light={args.light}
      >
        <DropdownCollapsible
          {...args}
          submitActionButton={{
            label: "Action",
            onClick: handleChange,
          }}
          cancelActionButton={{
            label: "Cancel",
          }}
        />
        {!!dropdownValue && (
          <p>
            Current Value:
            {Object.entries(dropdownValue)?.map(([id, group]) => (
              <>
                <p>{id}</p>
                <ul>
                  {group.selectedOptions.map((value) => (
                    <li key={value}>{value}</li>
                  ))}
                </ul>
              </>
            ))}
          </p>
        )}
      </DropdownWrapper>
    );
  },
  args: {
    trigger: {label: "Label"},
    options: DEFAULT_OPTIONS,
  },
};

export const WithFormLabel: Story = {
  args: {
    options: DEFAULT_OPTIONS,
    formLabel: "Label",
    trigger: {label: "Label", showBorder: true, disableTransparency: true},
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper light={args.light}>
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const WithFormTrigger: Story = {
  args: {
    options: DEFAULT_OPTIONS,
    formLabel: "Label",
    trigger: {
      label: "Label",
      formTrigger: true,
      formTriggerSize: DropdownFormTriggerSizes.SMALL,
    },
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper light={args.light}>
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const WithInfoTooltip: Story = {
  args: {
    options: DEFAULT_OPTIONS,
    formLabel: "Label",
    trigger: {label: "Label"},
    dropdownListInfoTooltip: "This is an info tooltip",
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper light={args.light}>
          <Story />
        </DropdownWrapper>
      );
    },
  ],
};

export const UsingCustomIcons: Story = {
  args: {
    trigger: {label: "Seleccionar una opción"},
    options: {
      a: {
        label: "Group A",
        mode: DropdownCollapsibleOptionModes.RADIO,
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
              alt: "MyUs",
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
      b: {
        label: "Group B",
        mode: DropdownCollapsibleOptionModes.MULTI_SELECT,
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
    },
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper {...args}>
          <Story />
          <p>WARNING: A veces las imagenes no cargan bien</p>
        </DropdownWrapper>
      );
    },
  ],
};

export const UsingComponentAsIcon: Story = {
  args: {
    trigger: {label: "Seleccionar una opción"},
    desktopDropdownWidth: 250,
    options: {
      a: {
        label: "Group A",
        mode: DropdownCollapsibleOptionModes.RADIO,
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
      b: {
        label: "Group B",
        mode: DropdownCollapsibleOptionModes.MULTI_SELECT,
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
    },
  },
  decorators: [
    (Story, {args}) => {
      return (
        <DropdownWrapper light={args.light}>
          <Story />
          <p>WARNING: A veces las imagenes no cargan bien</p>
        </DropdownWrapper>
      );
    },
  ],
};
