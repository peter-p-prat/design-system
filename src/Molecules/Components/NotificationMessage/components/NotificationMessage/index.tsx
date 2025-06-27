import React, {CSSProperties} from "react";

import {NotificationMessageProps} from "@app/Molecules";
import {className} from "@app/shared";

import styles from "./NotificationMessage.module.scss";

export const NotificationMessage = ({messages, width}: NotificationMessageProps) => {
    return (
        <section className={className(styles.notificationMessage)}>
            <div className={styles.container}>
                <ul
                    className={styles.list}
                    style={{"--width": width === undefined ? undefined : `${String(width)}px`} as CSSProperties}
                    data-testid="notification-messages-list"
                >
                    {messages.map((message, key) => {
                        return (
                            // eslint-disable-next-line react/no-array-index-key
                            <li key={key} className={styles.messageContainer} data-testid="notification-message">
                                {message}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};
