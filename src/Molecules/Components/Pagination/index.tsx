import React, {useMemo} from "react";

import {PaginationSize} from "@app/Atoms";
import {Breakpoints} from "@app/Foundations";
import {className, useDetectViewport} from "@app/shared";

import usePagination from "./hooks/usePagination";

import styles from "./Pagination.module.scss";

export interface PaginationProps {
    pagesAmount: number;
    currentPage: number;
    options?: {
        boundaryCount?: number;
        siblingsCount?: number;
        size?: PaginationSize;
    };
    /**
     * The pagination data-testid. Required for testing purposes
     */
    "data-testid": string;
    handleChange: (page: number) => void;
}

const PAGINATION_DEFAULT_OPTIONS_MOBILE = {boundaryCount: 1, siblingCount: 0, size: PaginationSize.MEDIUM};
const PAGINATION_DEFAULT_OPTIONS_TABLET_DESKTOP = {boundaryCount: 2, siblingsCount: 0, size: PaginationSize.LARGE};

export const Pagination = ({currentPage, pagesAmount, options, handleChange, "data-testid": dataTestId}: PaginationProps) => {
    const {viewport} = useDetectViewport();
    const defaultOptions = useMemo(
        () => (viewport === Breakpoints.MOBILE ? PAGINATION_DEFAULT_OPTIONS_MOBILE : PAGINATION_DEFAULT_OPTIONS_TABLET_DESKTOP),
        [viewport],
    );
    const finalOptions = useMemo(() => ({...defaultOptions, ...options}), [options, defaultOptions]);

    const {items} = usePagination({
        page: currentPage,
        count: pagesAmount,
        onChange: handleChange,
        hidePrevButton: currentPage === 1,
        hideNextButton: currentPage === pagesAmount,
        "data-testid": dataTestId,
        ...finalOptions,
    });

    return <section className={className(styles.pagination)}>{items.map((item) => item)}</section>;
};
