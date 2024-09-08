import React from 'react';

import {
  Grid,
  GridCol,
  List,
  ListItem,
  Paper,
  Space,
  Spoiler,
  Stack,
  Text,
  Title,
} from '@mantine/core';

import { experienceData } from '../constant';

import '@/components/experience/experience.scss';

export default function ExperienceComponent() {
  const companyTitles = experienceData.map;

  return (
    <section className="experience-section">
      <Title order={2}>Experience</Title>
      <Space h="xl" />

      <div className="experience-title-div">
        {experienceData.map((value, experienceIdx) => {
          return (
            <div key={experienceIdx}>
              <Title order={4}>{value.company}</Title>
              <Text>{value.companyDescription}</Text>

              <div>
                <Paper>
                  <Grid
                    classNames={{
                      root: 'experience-grid',
                      col: 'col',
                    }}
                    grow={true}
                  >
                    {value.positions.map((value, positionIdx) => {
                      return [
                        <GridCol span={4}>
                          <Stack>
                            <Title order={5}>{value.position}</Title>
                            <Text>{value.period}</Text>
                          </Stack>
                        </GridCol>,
                        <GridCol span={8}>
                          {value.descriptions.map((value, descriptionIdx) => {
                            return (
                              <List key={descriptionIdx}>
                                <ListItem>{value.main}</ListItem>
                                <List withPadding={true}>
                                  {value.secondary && (
                                    <ListItem>{value.secondary}</ListItem>
                                  )}
                                </List>
                              </List>
                            );
                          })}
                        </GridCol>,
                      ];
                    })}
                  </Grid>
                </Paper>
              </div>
            </div>
          );
        })}
      </div>
      <Space h="md" />
    </section>
  );
}
