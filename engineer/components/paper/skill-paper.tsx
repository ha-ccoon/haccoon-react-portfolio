import {
  Badge,
  Flex,
  Grid,
  GridCol,
  Paper,
  Space,
  Text,
  Title,
} from '@mantine/core';

import { SkillCategory } from '../types';
import { skillCategory, skills } from '../constant';

import '@/components/paper/skill-paper.scss';

export default function SkillPaper() {
  return (
    <section className="skill-section">
      <Title order={3}>Skills</Title>
      <Space h="md" />
      <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }} justify="center">
        {skillCategory.map((value: SkillCategory, index: number) => {
          return (
            <GridCol
              classNames={{
                col: 'skill-grid-column',
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
                  <div className="skill-badge-div">
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
                  </div>
                </Flex>
              </Paper>
            </GridCol>
          );
        })}
      </Grid>
    </section>
  );
}
