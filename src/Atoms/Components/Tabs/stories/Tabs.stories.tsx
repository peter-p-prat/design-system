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
            description: "The tab callback function. It will send the tab value as a parameter",
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
            description: "Disables the selected tab background (only for secondary tabs)",
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
            description: "The shape of the selected tab indicator (only for secondary tabs)",
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
        (Story) => {
            const {props} = Story();
            const [activeTab, setActiveTab] = React.useState("/redemptions");

            return (
                <Tabs
                    type={props.type}
                    onClick={setActiveTab}
                    tabsSize={props.tabsSize}
                    tabs={[
                        {
                            label: "Redeem",
                            value: "/redemptions",
                            active: activeTab === "/redemptions",
                        },
                        {
                            label: "Earn",
                            value: "/earn",
                            active: activeTab === "/earn",
                        },
                        {
                            label: "Something else",
                            value: "/something-else",
                            active: activeTab === "/something-else",
                        },
                    ]}
                    data-testid={props["data-testid"]}
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
        (Story) => {
            const {props} = Story();

            enum TabsValue {
                SHOP_AND_EARN = "shop&earn",
                RE_CARD = "re.card",
            }
            const [activeTab, setActiveTab] = React.useState(TabsValue.SHOP_AND_EARN);

            return (
                <Tabs
                    {...props}
                    onClick={(tabValue) => {
                        setActiveTab(tabValue as TabsValue);
                    }}
                    tabs={[
                        {
                            label: "Shop & Earn",
                            value: TabsValue.SHOP_AND_EARN,
                            icon: IconsNames.SHOPPING_BAG_02,
                            active: activeTab === TabsValue.SHOP_AND_EARN,
                        },
                        {
                            label: "Re.Card",
                            value: TabsValue.RE_CARD,
                            icon: IconsNames.CREDIT_CARD_02,
                            active: activeTab === TabsValue.RE_CARD,
                        },
                    ]}
                    data-testid={props["data-testid"]}
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
        (Story) => {
            const {props} = Story();
            const [activeTab, setActiveTab] = React.useState("/dashboard");

            return (
                <>
                    <p style={{fontFamily: "satoshi"}}> The tertiary tabs component is only visible in mobile and tablet devices.</p>
                    <Tabs
                        type={props.type}
                        onClick={setActiveTab}
                        tabs={[
                            {
                                label: "Home",
                                value: "/dashboard",
                                icon: IconsNames.HOME_02,
                                active: activeTab === "/dashboard",
                            },
                            {
                                label: "Redeem",
                                value: "/redeem",
                                icon: IconsNames.SHOPPING_CART_01,
                                active: activeTab === "/redeem",
                            },
                            {
                                label: "Shop & Earn",
                                value: "/earn",
                                icon: IconsNames.COINS_HAND,
                                active: activeTab === "/earn",
                            },
                            {
                                label: "Transactions",
                                value: "/history",
                                icon: IconsNames.SWITCH_HORIZONTAL_01,
                                active: activeTab === "/history",
                            },
                        ]}
                        data-testid={props["data-testid"]}
                    />
                </>
            );
        },
    ],
};
