import { Grid, GridCol, Group, Paper, Text } from '@mantine/core';

import { SkillCategory } from '../types';
import { category, skills } from '../constant';

import '@/components/paper/skill-paper.scss';

export default function SkillPaper() {
  return (
    <section className="skill-section">
      {category.map((value: SkillCategory, index: number) => {
        return (
          <Paper
            classNames={{
              root: 'paper',
            }}
            key={index}
            shadow="sm"
            radius="md"
            withBorder={true}
          >
            <Grid grow={true}>
              <GridCol span={1}>
                <Text size="xl" fw={700} c="paleBlue">
                  {value}
                </Text>
              </GridCol>
              <GridCol className="skill-grid-column" span={6}>
                {skills[value].map((value: string, index: number) => {
                  return (
                    <Text key={index} size="sm" fw={200} c="blueGray">
                      {value}
                    </Text>
                  );
                })}
              </GridCol>
            </Grid>
          </Paper>
        );
      })}
    </section>
  );
}
