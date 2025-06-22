import React from "react";

export enum IconsNames {
    USER_03 = "user03",
}

export const icons: Record<IconsNames, React.JSX.Element> = Object.freeze({
    user03: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 20">
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 10h-4l-3 9L8 1l-3 9H1"
            />
        </svg>
    ),
});

export type IconName = keyof typeof icons;
