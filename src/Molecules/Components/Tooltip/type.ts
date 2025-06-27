import React from "react";

import {IconName} from "@app/Foundations";

export interface TooltipProps {
    body: React.ReactNode;
    icon?: IconName;
    appearance?: TooltipAppearance;
    customClassName?: string;
    position: TooltipPosition;
}

export enum TooltipAppearance {
    LIGHT = "light",
    DARK = "dark",
}

export enum TooltipPosition {
    TOP = "top",
    BOTTOM = "bottom",
    LEFT = "left",
    RIGHT = "right",
    TOP_LEFT = "topLeft",
    TOP_RIGHT = "topRight",
    BOTTOM_LEFT = "bottomLeft",
    BOTTOM_RIGHT = "bottomRight",
}
