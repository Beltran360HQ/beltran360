"use client";

import { cn } from "@/lib/utils";

import { cardVariants } from "./card.variants";
import type { CardProps } from "./card.types";

const Card = ({
  className,
  variant,
  padding,
  radius,
  shadow,
  hover = false,
  children,
}: CardProps) => {
  return (
    <div
      className={cn(
        cardVariants({
          variant,
          padding,
          radius,
          shadow,
          hover,
        }),
        className
      )}
    >
      {children}
    </div>
  );
};

Card.displayName = "Card";

export { Card };

