import React, {useState} from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {IconsNames} from "@app/Foundations";
import {
  Message,
  MessageType,
  NotificationMessage,
  NotificationMessageProps,
} from "@app/Molecules";
import {NotificationMessageStoryWrapper} from "@app/Molecules/Components/NotificationMessage/stories/NotificationMessageStoryWrapper/NotificationMessageStoryWrapper";

const meta = {
  title: "Molecules/NotificationMessage",
  component: NotificationMessage,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    messages: {
      table: {
        type: {
          summary: "React.ReactElement[]",
        },
        defaultValue: {summary: "undefined"},
      },
      description:
        "An array of Messages that will be displayed to the top of the screen. Note that NotificationMessages are only displayed on desktop",
    },
  },
  args: {
    isOpen: true,
  },
} as Meta<React.PropsWithChildren<NotificationMessageProps>>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story, {args}) => {
      const [isMessage1Open, setIsMessage1Open] = useState<boolean>(true);
      const [isMessage2Open, setIsMessage2Open] = useState<boolean>(true);
      const [isMessage3Open, setIsMessage3Open] = useState<boolean>(true);

      const closeMessage = (callback: (isOpen: boolean) => void) => {
        callback(false);
      };

      const messages = [
        <Message
          key="1"
          isOpen={isMessage1Open}
          title="Message"
          icon={IconsNames.CHECK}
          body="This is a normal message giving information"
          handleClose={() => {
            closeMessage(setIsMessage1Open);
          }}
        />,
        <Message
          key="2"
          isOpen={isMessage2Open}
          title="Message"
          icon={IconsNames.CHECK}
          type={MessageType.SUCCESS}
          handleClose={() => {
            closeMessage(setIsMessage2Open);
          }}
        />,
        <Message
          key="3"
          isOpen={isMessage3Open}
          title="Message"
          icon={IconsNames.CHECK}
          type={MessageType.WARNING}
          body="This is a warning message notifying that there is an error that needs to be seen"
          handleClose={() => {
            closeMessage(setIsMessage3Open);
          }}
        />,
      ];

      return (
        <NotificationMessageStoryWrapper>
          <Story args={{...args, messages}} />
        </NotificationMessageStoryWrapper>
      );
    },
  ],
};
