import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Stack } from "@/components/ui/stack";

export default function DesignSystemPage() {
  return (
    <Section spacing="xl">
      <Container size="xl">
        <Stack gap="xl">

          <Stack gap="sm">
            <Heading
              as="h1"
              variant="display"
            >
              Beltran360 Design System
            </Heading>

            <Heading
              as="h2"
              variant="h4"
              weight="medium"
            >
              Foundation UI Components
            </Heading>
          </Stack>

          <Card>
            <Stack gap="lg">

              <Heading
                as="h2"
                variant="h3"
              >
                Buttons
              </Heading>

              <Stack
                direction="row"
                gap="md"
                wrap
              >
                <Button>Primary</Button>

                <Button variant="secondary">
                  Secondary
                </Button>

                <Button variant="outline">
                  Outline
                </Button>

                <Button variant="ghost">
                  Ghost
                </Button>

                <Button variant="danger">
                  Danger
                </Button>
              </Stack>

            </Stack>
          </Card>

          <Card>
            <Stack gap="lg">

              <Heading
                as="h2"
                variant="h3"
              >
                Badges
              </Heading>

              <Stack
                direction="row"
                gap="md"
                wrap
              >
                <Badge>Default</Badge>

                <Badge variant="success">
                  Success
                </Badge>

                <Badge variant="warning">
                  Warning
                </Badge>

                <Badge variant="danger">
                  Danger
                </Badge>
              </Stack>

            </Stack>
          </Card>

          <Card>
            <Stack gap="lg">

              <Heading
                as="h2"
                variant="h3"
              >
                Typography
              </Heading>

              <Stack gap="sm">

                <Heading variant="h1">
                  Heading H1
                </Heading>

                <Heading variant="h2">
                  Heading H2
                </Heading>

                <Heading variant="h3">
                  Heading H3
                </Heading>

                <Heading variant="h4">
                  Heading H4
                </Heading>

              </Stack>

            </Stack>
          </Card>

        </Stack>
      </Container>
    </Section>
  );
}
