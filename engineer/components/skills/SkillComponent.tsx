import {
  Badge,
  Container,
  Flex,
  Grid,
  GridCol,
  Paper,
  Space,
  Title,
} from '@mantine/core';

import { SkillCategory } from '@/components/types';
import { skillCategory, skills } from '@/components/constant';

import '@/components/skills/skill.scss';

export default function SkillComponent() {
  return (
    <section id="skills" className="skill-section">
      <Title order={3}>Skills</Title>

      <Space h="md" />

      <Grid
        classNames={{
          root: 'skill-grid',
        }}
        gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}
        justify="center"
      >
        {skillCategory.map((value: SkillCategory, index: number) => {
          return (
            <GridCol
              classNames={{
                col: 'column',
              }}
              span={4}
              key={index}
            >
              <Paper
                classNames={{
                  root: 'skill-paper',
                }}
                shadow="sm"
                p="xl"
                radius="md"
                withBorder={true}
              >
                <Title classNames={{ root: 'text' }} order={4}>
                  {value}
                </Title>

                <Flex
                  align="center"
                  columnGap="lg"
                  rowGap="lg"
                  direction="row"
                  gap="md"
                  justify="flex-start"
                  key={index}
                >
                  <Container className="skill-badge-container">
                    {skills[value].map((value: string, index: number) => {
                      return (
                        <Badge
                          classNames={{
                            root: 'skill-badge',
                          }}
                          key={index}
                          size="lg"
                          variant="light"
                        >
                          {value}
                        </Badge>
                      );
                    })}
                  </Container>
                </Flex>
              </Paper>
            </GridCol>
          );
        })}
      </Grid>
    </section>
  );
}
