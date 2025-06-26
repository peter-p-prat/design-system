import React from "react";

export const isReactNode = (
    element: Record<string, any> | string | number | bigint | boolean | undefined | null,
): element is React.ReactNode => {
    return React.isValidElement(element);
};
