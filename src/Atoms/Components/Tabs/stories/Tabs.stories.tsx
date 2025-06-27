import React from "react";
import type {StoryObj} from "@storybook/react-vite";

import {SecondaryTabLineShape, Tabs, TabsSize, TabsType} from "@app/Atoms";
import {IconsNames} from "@app/Foundations";

const meta = {
  title: "Atoms/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
    viewport: {
      defaultViewport: "tablet",
    },
  },
  argTypes: {
    tabs: {
      control: {type: "object"},
      description: "The list of tabs to be displayed",
    },
    tabsSize: {
      options: Object.values(TabsSize),
      control: {type: "inline-radio"},
      table: {
        type: {
          summary: "TabsSize",
        },
        defaultValue: {summary: "TabsSize.DEFAULT"},
      },
      description: "The tabs size. Optional.",
      defaultValue: TabsSize.DEFAULT,
    },
    onClick: {
      table: {
        type: {
          summary: "function",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "The tab callback function. It will send the tab value as a parameter",
    },
    type: {
      options: Object.values(TabsType),
      control: {type: "inline-radio"},
      table: {
        type: {
          summary: "TabsType",
        },
        defaultValue: {summary: "TabsType.PRIMARY"},
      },
      description: "The type of the tabs component",
      defaultValue: TabsType.PRIMARY,
    },
    disableSelectedBackground: {
      control: {type: "boolean"},
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: {summary: "false"},
      },
      description:
        "Disables the selected tab background (only for secondary tabs)",
    },
    selectedTabIndicatorShape: {
      options: Object.values(SecondaryTabLineShape),
      control: {type: "inline-radio"},
      table: {
        type: {
          summary: "SecondaryTabLineShape",
        },
        defaultValue: {summary: "SecondaryTabLineShape.SQUARED"},
      },
      description:
        "The shape of the selected tab indicator (only for secondary tabs)",
      defaultValue: SecondaryTabLineShape.SQUARED,
    },
  },
  args: {
    tabs: [],
    onClick: undefined,
    "data-testid": "tabs",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: TabsType.PRIMARY,
  },
  decorators: [
    (Story, {args}) => {
      const [activeTab, setActiveTab] = React.useState("/build");

      return (
        <Tabs
          type={args.type}
          onClick={setActiveTab}
          tabsSize={args.tabsSize}
          tabs={[
            {
              label: "Build",
              value: "/build",
              active: activeTab === "/build",
            },
            {
              label: "Enjoy",
              value: "/enjoy",
              active: activeTab === "/enjoy",
            },
            {
              label: "Nothing else",
              value: "/nothing-else",
              active: activeTab === "/nothing-else",
            },
          ]}
          data-testid={args["data-testid"]}
        />
      );
    },
  ],
};

export const Secondary: Story = {
  args: {
    type: TabsType.SECONDARY,
    disableSelectedBackground: true,
    selectedTabIndicatorShape: SecondaryTabLineShape.ROUNDED,
  },
  decorators: [
    (Story, {args}) => {
      enum TabsValue {
        BUILD = "build",
        ENJOY = "enjoy",
      }
      const [activeTab, setActiveTab] = React.useState(TabsValue.BUILD);

      return (
        <Tabs
          {...args}
          onClick={(tabValue) => {
            setActiveTab(tabValue as TabsValue);
          }}
          tabs={[
            {
              label: "Build",
              value: TabsValue.BUILD,
              icon: IconsNames.CODE_02,
              active: activeTab === TabsValue.BUILD,
            },
            {
              label: "Enjoy",
              value: TabsValue.ENJOY,
              icon: IconsNames.FACE_HAPPY,
              active: activeTab === TabsValue.ENJOY,
            },
          ]}
          data-testid={args["data-testid"]}
        />
      );
    },
  ],
};

export const Tertiary: Story = {
  args: {
    type: TabsType.TERTIARY,
  },
  decorators: [
    (Story, {args}) => {
      const [activeTab, setActiveTab] = React.useState("/dashboard");

      return (
        <>
          <p style={{fontFamily: "satoshi"}}>
            {" "}
            The tertiary tabs component is only visible in mobile and tablet
            devices.
          </p>
          <Tabs
            type={args.type}
            onClick={setActiveTab}
            tabs={[
              {
                label: "Home",
                value: "/dashboard",
                icon: IconsNames.HOME_02,
                active: activeTab === "/dashboard",
              },
              {
                label: "Build",
                value: "/build",
                icon: IconsNames.CODE_02,
                active: activeTab === "/build",
              },
              {
                label: "Enjoy",
                value: "/enjoy",
                icon: IconsNames.FACE_HAPPY,
                active: activeTab === "/enjoy",
              },
              {
                label: "Nothing else",
                value: "/nothing-else",
                icon: IconsNames.SWITCH_HORIZONTAL_01,
                active: activeTab === "/nothing-else",
              },
            ]}
            data-testid={args["data-testid"]}
          />
        </>
      );
    },
  ],
};
