export const copyTextToClipboard = (text: string): Promise<void> => {
    return navigator.clipboard.writeText(text);
};
