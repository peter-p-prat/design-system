import React, {PropsWithChildren} from "react";

import {className} from "@app/shared";

import styles from "./NotificationMessageStoryWrapper.module.scss";

export const NotificationMessageStoryWrapper = ({children}: PropsWithChildren) => {
    return (
        <div className={className(styles.notificationMessageStoryWrapper)}>
            <div className={className(styles.headerFooter)} />
            {children}
            <div className={className(styles.body)}>
                This is a text that covers all the page with the intention to replicate how the dashboard would be This is a text that
                <br /> covers all the page with <br /> the intention to replicate <br /> how the dashboard would be This is a text that
                <br /> covers all the page with <br /> the intention to replicate <br /> how the dashboard would be This is a text that
                <br /> covers all the page with the intention to replicate how the dashboard would be This is a text that covers all the
                page with the intention to replicate how the dashboard would be This is a text that covers all the page with the intention
                to replicate how the dashboard would be This is a text that covers all the page with <br /> the intention to replicate
                <br /> how the dashboard would be
            </div>
            <div className={className(styles.headerFooter)} />
        </div>
    );
};
