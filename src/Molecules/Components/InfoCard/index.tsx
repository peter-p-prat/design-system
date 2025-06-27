import React from "react";

import {Card, Chip, ChipProps, Loader, LoaderSizes} from "@app/Atoms";
import {className, conditionalClass} from "@app/shared";

import styles from "./InfoCard.module.scss";

export interface InfoCardProps {
  /**
   * @description The img url
   */
  imageSrc: string;
  /**
   * @description The info to be displayed in card
   */
  info?: string | React.ReactNode;
  /**
   * @description A chip displayed after the info component
   */
  chip?: ChipProps;
  /**
   * @description The alt text of the img.
   */
  alt?: string;
  /**
   * @description The action to be triggered when the card is clicked
   */
  onClick?: () => void;
  /**
   * @description Shows a loading to indicate that the values are loading
   */
  loading?: boolean;
  /**
   * @description Defines if the card should be disabled. It prevents the action to be dispatched.
   */
  disabled?: boolean;
  /**
   * The card data-testid.
   */
  "data-testid": string;
}

export const InfoCard = ({
  imageSrc,
  info,
  chip,
  alt,
  loading,
  disabled,
  onClick,
  "data-testid": dataTestId,
}: InfoCardProps) => {
  return (
    <Card
      onClick={() => {
        if (!disabled) onClick?.();
      }}
      data-testid={dataTestId}
    >
      <section
        className={className(
          styles.infoCard,
          conditionalClass(
            [styles.withInfo, !!info],
            [styles.onlyImage, !info],
            [styles.disabled, !!disabled]
          )
        )}
      >
        {loading && (
          <>
            <div className={styles.loadingOverlay} />
            <div className={styles.loaderWrapper}>
              <Loader size={LoaderSizes.MEDIUM} isLoading />
            </div>
          </>
        )}
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            width={150}
            height={70}
            src={imageSrc}
            alt={alt}
          />
        </div>
        {info && (
          <div className={styles.textBorderContainer}>
            <div className={styles.textContainer}>
              {info}
              {chip && <Chip {...chip} data-testid={`${dataTestId}-chip`} />}
            </div>
          </div>
        )}
      </section>
    </Card>
  );
};
