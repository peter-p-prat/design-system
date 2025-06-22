import type {Preview} from "@storybook/react-vite";
import {INITIAL_VIEWPORTS, ViewportMap} from "storybook/viewport";

import "./storybook.scss";

const customViewports: ViewportMap = {
    mobile: {
        name: "Mobile",
        styles: {
            height: "700px",
            width: "375px",
        },
        type: "mobile",
    },
    tablet: {
        name: "Tablet",
        styles: {
            height: "896px",
            width: "768px",
        },
        type: "tablet",
    },
    desktop: {
        name: "Desktop",
        styles: {
            height: "900px",
            width: "1220px",
        },
        type: "desktop",
    },
};

const preview: Preview = {
    parameters: {
        actions: {argTypesRegex: "^on[A-Z].*"},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
            expanded: true,
        },
        deepControls: {enabled: true},
        viewport: {
            viewports: {...customViewports, ...INITIAL_VIEWPORTS},
            defaultViewport: "desktop",
        },
        addonPanelInRight: true,
    },
};

export default preview;
