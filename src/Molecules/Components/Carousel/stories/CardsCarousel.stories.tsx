import React from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {Carousel, CarouselProps, InfoCard} from "@app/Molecules";

import {
  CAROUSEL_STORY_VIEWPORT_SELECTOR,
  CarouselStoryWrapper,
} from "./CarouselStoryWrapper";
import {argTypes} from ".";

import NikeIcon from "./assets/nike.png";

const cardsCarouselMeta = {
  title: "Molecules/Carousel/Cards",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes,
  args: {
    options: {
      slidesToShow: 2,
      gap: 12,
      overflowVisible: true,
      emblaOptions: {dragFree: true},
    },
    breakpoints: {
      tablet: {slidesToShow: 4},
      desktop: {
        slidesToShow: 5,
        gap: 24,
        showButtons: true,
        overflowVisible: false,
        emblaOptions: {dragFree: false},
      },
    },
    responsiveRootElementSelector: CAROUSEL_STORY_VIEWPORT_SELECTOR,
    children: [
      <InfoCard imageSrc={NikeIcon} key={1} data-testid="info-card-1" />,
      <InfoCard imageSrc={NikeIcon} key={2} data-testid="info-card-2" />,
      <InfoCard imageSrc={NikeIcon} key={3} data-testid="info-card-3" />,
      <InfoCard imageSrc={NikeIcon} key={4} data-testid="info-card-4" />,
      <InfoCard imageSrc={NikeIcon} key={5} data-testid="info-card-5" />,
      <InfoCard imageSrc={NikeIcon} key={6} data-testid="info-card-6" />,
      <InfoCard imageSrc={NikeIcon} key={7} data-testid="info-card-7" />,
      <InfoCard imageSrc={NikeIcon} key={8} data-testid="info-card-8" />,
      <InfoCard imageSrc={NikeIcon} key={9} data-testid="info-card-9" />,
    ],
  },
} as Meta<CarouselProps>;

export default cardsCarouselMeta;
type CardsCarouselStory = StoryObj<typeof cardsCarouselMeta>;

export const CardsCarouselMobile: CardsCarouselStory = {
  decorators: [
    (Story) => {
      return (
        <CarouselStoryWrapper mobile>
          <Story />
        </CarouselStoryWrapper>
      );
    },
  ],
};

export const CardsCarouselTablet: CardsCarouselStory = {
  decorators: [
    (Story) => {
      return (
        <CarouselStoryWrapper tablet>
          <Story />
        </CarouselStoryWrapper>
      );
    },
  ],
};
export const CardsCarouselDesktop: CardsCarouselStory = {
  decorators: [
    (Story) => {
      return (
        <CarouselStoryWrapper desktop>
          <Story />
        </CarouselStoryWrapper>
      );
    },
  ],
};
