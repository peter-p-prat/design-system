import React from "react";

import {Button, ButtonAppearances, ButtonVariants} from "@app/Atoms";
import {Breakpoints} from "@app/Foundations";
import {useDetectViewport} from "@app/shared";

export const Children = () => {
    const {viewport} = useDetectViewport();
    const isDesktop = viewport === Breakpoints.DESKTOP;

    if (!isDesktop) return null;

    return (
        <div style={{display: "flex", gap: "40px"}}>
            <Button appearance={ButtonAppearances.LIGHT} variant={ButtonVariants.GHOST} label="Redeem" data-testid="redeem-button" />
            <Button
                appearance={ButtonAppearances.LIGHT}
                variant={ButtonVariants.GHOST}
                label="Shop & Earn"
                data-testid="shop-and-earn-button"
            />
        </div>
    );
};
