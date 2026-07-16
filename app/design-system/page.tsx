import {
  Badge,
  Button,
  Card,
  Container,
  FormField,
  Heading,
  Input,
  Section,
  Stack,
  Text,
} from "@/components/ui";

import { ShowcaseSection } from "./_components/showcase-section";

export default function DesignSystemPage() {
  return (
    <Section spacing="xl">
      <Container size="xl">
        <Stack gap="xl">
          <Heading
            as="h1"
            variant="display"
          >
            Beltran360 Design System
          </Heading>

          <ShowcaseSection
            title="Typography"
            description="Foundation typography components."
          >
            <Stack gap="md">
              <Heading as="h2">Heading H2</Heading>

              <Text>
                Texto principal del sistema.
              </Text>

              <Text variant="muted">
                Texto secundario o descriptivo.
              </Text>
            </Stack>
          </ShowcaseSection>

          <ShowcaseSection
            title="Buttons"
            description="Foundation button component."
          >
            <Stack
              direction="row"
              gap="md"
            >
              <Button>
                Primary
              </Button>

              <Button variant="secondary">
                Secondary
              </Button>

              <Button variant="outline">
                Outline
              </Button>
            </Stack>
          </ShowcaseSection>

          <ShowcaseSection
  title="Input"
  description="Foundation input component."
>
  <Stack gap="lg">
    <Input
      placeholder="Michael Beltrán"
    />

    <Input
      placeholder="correo@empresa.com"
    />

    <Input
      placeholder="900123456-7"
    />
  </Stack>
</ShowcaseSection>

          <ShowcaseSection
            title="FormField"
            description="Composite form component."
          >
            <FormField
              label="Razón social"
              description="Nombre registrado de la empresa."
              required
            >
              <Input placeholder="Beltran360 SAS" />
            </FormField>
          </ShowcaseSection>

          <ShowcaseSection
            title="Card"
            description="Foundation card component."
          >
            <Card>
              <Stack gap="sm">
                <Heading as="h3">
                  Card
                </Heading>

                <Text>
                  Este es un ejemplo del componente Card.
                </Text>
              </Stack>
            </Card>
          </ShowcaseSection>

        <ShowcaseSection
  title="Badge"
  description="Foundation badge component."
>
  <Stack
    direction="row"
    gap="sm"
  >
    <Badge>
      Default
    </Badge>

    <Badge variant="success">
      Success
    </Badge>

    <Badge variant="warning">
      Warning
    </Badge>

    <Badge variant="danger">
      Error
    </Badge>
  </Stack>
</ShowcaseSection>
        </Stack>
      </Container>
    </Section>
  );
}