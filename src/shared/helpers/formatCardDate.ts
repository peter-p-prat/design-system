import {checkSingleDigit} from "@app/shared/helpers/checkSingleDigit";

// Receives a string date returned from Re.Card object and returns a date in the format of card expiration MM/yy
export const formatCardDate = (dateStr: string | null): string => {
    if (!dateStr) return "";

    const date = new Date(dateStr);

    if (Number.isNaN(date.getTime())) return "";

    const month = checkSingleDigit(date.getMonth() + 1);
    const year = date.getFullYear().toString().slice(-2);
    return `${month}/${year}`;
};
