import type { ReactNode } from "react";

import {
  Card,
  Heading,
  Stack,
  Text,
} from "@/components/ui";

interface ShowcaseSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function ShowcaseSection({
  title,
  description,
  children,
}: ShowcaseSectionProps) {
  return (
    <Card>
      <Stack gap="lg">
        <Stack gap="xs">
          <Heading
            as="h2"
            variant="h3"
          >
            {title}
          </Heading>

          {description && (
            <Text variant="muted">
              {description}
            </Text>
          )}
        </Stack>

        {children}
      </Stack>
    </Card>
  );
}