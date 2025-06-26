export enum LogoVariable {
    SYMBOL = "symbol",
    MAIN = "main",
}

export enum LogoSize {
    XL = "xl",
    L = "l",
    M = "m",
    S = "s",
    XS = "xs",
    XXS = "xxs",
}

export enum SymbolPosition {
    LEFT = "left",
    CENTER = "center",
    RIGHT = "right",
}

export enum LogoColor {
    LIGHT_BG = "light_bg",
    DARK_BG = "dark_bg",
    WHITE = "white",
}

interface CommonLogoProps {
    /**
     * @description The size of the logo
     * @type LogoSize
     */
    size: LogoSize;
    /**
     * @description The variable of the logo
     * @type LogoVariable
     */
    variable: LogoVariable;
    /**
     * @description The whole logo config object. To be used to get the right image
     * @type Record<string, string>
     */
    logosMap: Record<string, string>;
    /**
     * @description The color of the logo
     * @type LogoColor
     */
    color: LogoColor;
    /**
     * @description The alt text of the logo image
     * @type string
     */
    alt: string;
    /**
     * @description The click handler of the logo image
     * @type () => void
     */
    onClick?: () => void;
}

interface SymbolProps extends CommonLogoProps {
    variable: LogoVariable.SYMBOL;
    /**
     * @description The position of the symbol. Only used for the SYMBOL variable.
     * @type SymbolPosition
     */
    position: SymbolPosition;
}

interface MainProps extends CommonLogoProps {
    variable: LogoVariable.MAIN;
    /**
     * @description The position of the symbol. This is not used for the MAIN variable.
     * @type never
     */
    position?: never;
}

export type LogoProps = SymbolProps | MainProps;
