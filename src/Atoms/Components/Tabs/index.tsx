import React from "react";

import {PrimaryTabs} from "./PrimaryTabs";
import {SecondaryTabs} from "./SecondaryTabs";
import {TertiaryTabs} from "./TertiaryTabs";
import {TabsProps, TabsType} from "./type";

export const Tabs = ({type, ...rest}: TabsProps) => {
    const tabsComponent = {
        [TabsType.PRIMARY]: <PrimaryTabs type={type as TabsType.PRIMARY} {...rest} />,
        [TabsType.SECONDARY]: <SecondaryTabs type={type as TabsType.SECONDARY} {...rest} />,
        [TabsType.TERTIARY]: <TertiaryTabs type={type as TabsType.TERTIARY} {...rest} />,
    };

    return tabsComponent[type];
};

export * from "./type";
