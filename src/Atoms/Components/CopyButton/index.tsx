import React, {useState} from "react";

import {IconButton} from "@app/Atoms";
import {CopyButtonProps} from "@app/Atoms/Components/CopyButton/type";
import {IconsNames} from "@app/Foundations";
import {getColorFromPalette} from "@app/shared";
import {copyTextToClipboard} from "@app/shared/helpers/copyTextToClipboard";

const TIME_TO_SHOW_COPIED_ICON = 500;

export const CopyButton = ({
    textToCopy,
    iconName,
    size,
    ariaLabel,
    timeToShowCopiedIcon,
    customClassName,
    color,
    "data-testid": dataTestId,
}: CopyButtonProps) => {
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const handleCopyText = async () => {
        setIsCopied(true);
        await copyTextToClipboard(textToCopy);
        setTimeout(() => {
            setIsCopied(false);
        }, timeToShowCopiedIcon ?? TIME_TO_SHOW_COPIED_ICON);
    };

    return (
        <div className={customClassName} data-testid={dataTestId}>
            <IconButton
                size={size ?? 16}
                icon={isCopied ? IconsNames.CHECK : iconName}
                ariaLabel={ariaLabel ?? "copy-button"}
                onClick={() => void handleCopyText()}
                color={color ?? getColorFromPalette("gray", "300")}
                data-testid={`${dataTestId}-icon-button`}
            />
        </div>
    );
};
