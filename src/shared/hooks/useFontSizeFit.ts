import {useEffect, useRef} from "react";

const defaultFontSizes = ["18px", "16px", "14px", "12px", "10px"];

export const useFontSizeFit = (dependencies: React.DependencyList, fontSizes: string[] = defaultFontSizes) => {
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const adjustFontSize = () => {
            if (textRef.current) {
                for (const size of fontSizes) {
                    textRef.current.style.fontSize = size;
                    if (textRef.current.scrollWidth <= textRef.current.clientWidth) {
                        break;
                    }
                }
            }
        };

        adjustFontSize();
    }, [dependencies, fontSizes]);

    return {textRef};
};
