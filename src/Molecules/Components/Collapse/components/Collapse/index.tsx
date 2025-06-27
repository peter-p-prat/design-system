import React, {PropsWithChildren} from "react";

import {CollapseProps} from "@app/Molecules/Components/Collapse/type";

import {CollapseSkeleton} from "../CollapseSkeleton";

import styles from "./Collapse.module.scss";

export const Collapse = ({...rest}: PropsWithChildren<CollapseProps>) => {
    return (
        <div className={styles.collapse}>
            <CollapseSkeleton {...rest} />
        </div>
    );
};
