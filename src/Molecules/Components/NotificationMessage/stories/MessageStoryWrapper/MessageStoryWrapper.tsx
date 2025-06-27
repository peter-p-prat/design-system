import React, {PropsWithChildren} from "react";

import {Breakpoints} from "@app/Foundations";
import {className, useDetectViewport} from "@app/shared";

import styles from "./MessageStoryWrapper.module.scss";

interface MessageStoryWrapperProps {
    message: React.ReactNode;
}

export const MessageStoryWrapper = ({message, children}: PropsWithChildren<MessageStoryWrapperProps>) => {
    const {viewport} = useDetectViewport();

    if (viewport === Breakpoints.DESKTOP) {
        return (
            <section className={className(styles.warning)}>
                <div className={className(styles.warningContainer)}>
                    <h1 className={className(styles.warningTitle)}>SPECIAL CASE MESSAGE ONLY WORKS FOR MOBILE AND TABLET!</h1>
                    <p className={className(styles.warningMessage)}>
                        Please change the device at the top of your screen to tablet or mobile
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className={className(styles.messageStoryWrapper)}>
            <div className={className(styles.headerFooter)} />
            <div className={className(styles.body)}>
                {message}
                <div className={className(styles.container)}>
                    <div>
                        This is a text that covers all the page with the intention to replicate how the dashboard would be This is a text
                        that
                        <br /> covers all the page with <br /> the intention to replicate <br /> how the dashboard would be This is a text
                        that
                        <br /> covers all the page with <br /> the intention to replicate <br /> how the dashboard would be This is a text
                        that
                        <br /> covers all the page with the intention to replicate how the dashboard would be
                    </div>
                    <div className={className(styles.message)}>{children}</div>
                    <div>
                        This is a text that covers all the page with the intention to replicate how the dashboard would be This is a text
                        that
                        <br /> covers all the page with <br /> the intention to replicate <br /> how the dashboard would be This is a text
                        that
                        <br /> covers all the page with <br /> the intention to replicate <br /> how the dashboard would be This is a text
                        that
                        <br /> covers all the page with the intention to replicate how the dashboard would be
                    </div>
                </div>
            </div>
            <div className={className(styles.headerFooter)} />
        </section>
    );
};
