import { Grid, GridCol, Group, Paper, SimpleGrid, Text } from '@mantine/core';

import { SkillCategory } from '../types';
import { category, skills } from '../constant';

import '@/components/paper/skill-paper.scss';

export default function SkillPaper() {
  return (
    <section className="skill-section">
      <Grid
        align="stretch"
        // gutter={{ base: 5, xs: 'md', md: 'xl' }}
        grow={true}
        justify="center"
        // overflow="hidden"
      >
        {category.map((value: SkillCategory, index: number) => {
          return (
            <GridCol span={4} color="red" key={index}>
              <Paper
                classNames={{
                  root: 'paper',
                }}
                shadow="sm"
                p="xl"
                radius="md"
                withBorder={true}
                style={{ height: '200px' }}
              >
                <Text size="xl" fw={700} c="paleBlue">
                  {value}
                </Text>
                {skills[value].map((value: string, index: number) => {
                  return (
                    <Text key={index} size="sm" fw={200} c="blueGray">
                      {value}
                    </Text>
                  );
                })}
              </Paper>
            </GridCol>
          );
        })}
      </Grid>
    </section>
  );
}
