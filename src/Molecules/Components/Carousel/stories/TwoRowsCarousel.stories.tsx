import React from "react";
import type {Meta, StoryObj} from "@storybook/react-vite";

import {Carousel, CarouselProps} from "@app/Molecules";

import {
  CarouselDummyCategory,
  CarouselDummyCategoryColumn,
} from "./CarouselDummyCategory";
import {
  CAROUSEL_STORY_VIEWPORT_SELECTOR,
  CarouselStoryWrapper,
} from "./CarouselStoryWrapper";
import {argTypes} from ".";

const twoRowsCarouselMeta = {
  title: "Molecules/Carousel/TwoRows",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes,
  args: {
    options: {
      slidesToShow: 2,
      gap: 0,
      overflowVisible: true,
      outlined: true,
      emblaOptions: {dragFree: true},
    },
    breakpoints: {
      tablet: {slidesToShow: 5},
      desktop: {
        slidesToShow: 8,
        showButtons: true,
        overflowVisible: false,
        emblaOptions: {slidesToScroll: 1, dragFree: false},
      },
    },
    responsiveRootElementSelector: CAROUSEL_STORY_VIEWPORT_SELECTOR,
    children: [
      <CarouselDummyCategoryColumn key={1}>
        <CarouselDummyCategory />
        <CarouselDummyCategory />
      </CarouselDummyCategoryColumn>,
      <CarouselDummyCategoryColumn key={2}>
        <CarouselDummyCategory />
        <CarouselDummyCategory />
      </CarouselDummyCategoryColumn>,
      <CarouselDummyCategoryColumn key={3}>
        <CarouselDummyCategory />
        <CarouselDummyCategory />
      </CarouselDummyCategoryColumn>,
      <CarouselDummyCategoryColumn key={4}>
        <CarouselDummyCategory />
        <CarouselDummyCategory />
      </CarouselDummyCategoryColumn>,
      <CarouselDummyCategoryColumn key={5}>
        <CarouselDummyCategory />
        <CarouselDummyCategory />
      </CarouselDummyCategoryColumn>,
      <CarouselDummyCategoryColumn key={6}>
        <CarouselDummyCategory />
        <CarouselDummyCategory />
      </CarouselDummyCategoryColumn>,
      <CarouselDummyCategoryColumn key={7}>
        <CarouselDummyCategory />
        <CarouselDummyCategory />
      </CarouselDummyCategoryColumn>,
      <CarouselDummyCategoryColumn key={8}>
        <CarouselDummyCategory />
        <CarouselDummyCategory />
      </CarouselDummyCategoryColumn>,
      <CarouselDummyCategoryColumn key={9}>
        <CarouselDummyCategory />
        <CarouselDummyCategory />
      </CarouselDummyCategoryColumn>,
    ],
  },
} as Meta<CarouselProps>;

export default twoRowsCarouselMeta;
type CardsCarouselStory = StoryObj<typeof twoRowsCarouselMeta>;

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
