import React from "react";

import {Icon, IconProps} from "@app/Foundations";
import {isReactNode} from "@app/shared/helpers/isReactNode";

import {DropdownIcon, ImageIconConfig} from "../../type";

interface DropdownIconComponentProps extends Omit<IconProps, "name"> {
    icon: DropdownIcon;
    customClassName?: string;
    size?: number | string;
}

const isImageIcon = (icon: DropdownIcon): icon is ImageIconConfig => {
    return !!icon && typeof icon === "object" && "url" in icon;
};

export const DropdownIconComponent = ({icon, customClassName = "", size = "auto", ...rest}: DropdownIconComponentProps) => {
    if (!icon) return null;

    const imageStyle = typeof size === "number" ? {height: `${String(size)}px`} : undefined;

    if (isReactNode(icon)) {
        return icon;
    }

    if (isImageIcon(icon)) {
        return <img src={icon.url} alt={icon.alt || "Icon"} className={customClassName} style={imageStyle} />;
    }

    return <Icon {...rest} customClassName={customClassName} name={icon} size={size} />;
};
