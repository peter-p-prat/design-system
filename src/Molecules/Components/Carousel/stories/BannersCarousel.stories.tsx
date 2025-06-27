import React from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {Carousel, CarouselProps} from "@app/Molecules";

import {CarouselDummyBanner} from "./CarouselDummyBanner";
import {
  CAROUSEL_STORY_VIEWPORT_SELECTOR,
  CarouselStoryWrapper,
} from "./CarouselStoryWrapper";
import {argTypes} from ".";

const bannersCarouselMeta = {
  title: "Molecules/Carousel/Banners",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes,
  args: {
    options: {
      slidesToShow: 1,
      gap: 24,
      showDots: true,
      emblaOptions: {dragFree: true},
    },
    breakpoints: {
      tablet: {showButtons: true, emblaOptions: {dragFree: false}},
      desktop: {showButtons: true, emblaOptions: {dragFree: false}},
    },
    responsiveRootElementSelector: CAROUSEL_STORY_VIEWPORT_SELECTOR,
    children: [
      <CarouselDummyBanner key={1} />,
      <CarouselDummyBanner key={2} />,
      <CarouselDummyBanner key={3} />,
      <CarouselDummyBanner key={4} />,
      <CarouselDummyBanner key={5} />,
      <CarouselDummyBanner key={6} />,
      <CarouselDummyBanner key={7} />,
      <CarouselDummyBanner key={8} />,
      <CarouselDummyBanner key={9} />,
    ],
  },
} as Meta<CarouselProps>;

export default bannersCarouselMeta;
type BannersCarouselStory = StoryObj<typeof bannersCarouselMeta>;

export const BannersCarouselMobile: BannersCarouselStory = {
  decorators: [
    (Story, {args}) => {
      return (
        <CarouselStoryWrapper lightMode={args.options?.lightMode} mobile>
          <Story />
        </CarouselStoryWrapper>
      );
    },
  ],
};

export const BannersCarouselTablet: BannersCarouselStory = {
  args: {
    children: [
      <CarouselDummyBanner tablet key={1} />,
      <CarouselDummyBanner tablet key={2} />,
      <CarouselDummyBanner tablet key={3} />,
      <CarouselDummyBanner tablet key={4} />,
      <CarouselDummyBanner tablet key={5} />,
      <CarouselDummyBanner tablet key={6} />,
      <CarouselDummyBanner tablet key={7} />,
      <CarouselDummyBanner tablet key={8} />,
      <CarouselDummyBanner tablet key={9} />,
    ],
  },
  decorators: [
    (Story, {args}) => {
      return (
        <CarouselStoryWrapper lightMode={args.options?.lightMode} tablet>
          <Story />
        </CarouselStoryWrapper>
      );
    },
  ],
};

export const BannersCarouselDesktopLarge: BannersCarouselStory = {
  args: {
    children: [
      <CarouselDummyBanner desktop key={1} />,
      <CarouselDummyBanner desktop key={2} />,
      <CarouselDummyBanner desktop key={3} />,
      <CarouselDummyBanner desktop key={4} />,
      <CarouselDummyBanner desktop key={5} />,
      <CarouselDummyBanner desktop key={6} />,
      <CarouselDummyBanner desktop key={7} />,
      <CarouselDummyBanner desktop key={8} />,
      <CarouselDummyBanner desktop key={9} />,
    ],
  },
  decorators: [
    (Story, {args}) => {
      return (
        <CarouselStoryWrapper lightMode={args.options?.lightMode} desktop>
          <Story />
        </CarouselStoryWrapper>
      );
    },
  ],
};
export const BannersCarouselDesktopMedium: BannersCarouselStory = {
  args: {
    breakpoints: {
      desktop: {
        showButtons: true,
        slidesToShow: 2,
        emblaOptions: {dragFree: false},
      },
    },
    children: [
      <CarouselDummyBanner desktop key={1} />,
      <CarouselDummyBanner desktop key={2} />,
      <CarouselDummyBanner desktop key={3} />,
      <CarouselDummyBanner desktop key={4} />,
      <CarouselDummyBanner desktop key={5} />,
      <CarouselDummyBanner desktop key={6} />,
      <CarouselDummyBanner desktop key={7} />,
      <CarouselDummyBanner desktop key={8} />,
      <CarouselDummyBanner desktop key={9} />,
    ],
  },
  decorators: [
    (Story, {args}) => {
      return (
        <CarouselStoryWrapper lightMode={args.options?.lightMode} desktop>
          <Story />
        </CarouselStoryWrapper>
      );
    },
  ],
};
export const BannersCarouselDesktopSmall: BannersCarouselStory = {
  args: {
    breakpoints: {
      desktop: {
        showButtons: true,
        slidesToShow: 3,
        emblaOptions: {dragFree: false},
      },
    },
    children: [
      <CarouselDummyBanner desktop key={1} />,
      <CarouselDummyBanner desktop key={2} />,
      <CarouselDummyBanner desktop key={3} />,
      <CarouselDummyBanner desktop key={4} />,
      <CarouselDummyBanner desktop key={5} />,
      <CarouselDummyBanner desktop key={6} />,
      <CarouselDummyBanner desktop key={7} />,
      <CarouselDummyBanner desktop key={8} />,
      <CarouselDummyBanner desktop key={9} />,
    ],
  },
  decorators: [
    (Story, {args}) => {
      return (
        <CarouselStoryWrapper lightMode={args.options?.lightMode} desktop>
          <Story />
        </CarouselStoryWrapper>
      );
    },
  ],
};
