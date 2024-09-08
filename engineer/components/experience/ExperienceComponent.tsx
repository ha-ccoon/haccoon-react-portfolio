import React from 'react';

import {
  Divider,
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
  return (
    <section className="experience-section">
      <Title order={3}>Experience</Title>

      <Space h="xl" />

      <div>
        {experienceData.map((value, experienceIdx) => {
          return (
            <div key={experienceIdx}>
              <div className="experience-title-div">
                <Title
                  classNames={{
                    root: 'company',
                  }}
                  order={4}
                >
                  {value.company}
                </Title>
                <Text>{value.companyDescription}</Text>
              </div>

              <div style={{ flexGrow: 1 }}>
                <Divider orientation="vertical" />
              </div>
              <Paper>
                <Grid
                  classNames={{
                    root: 'experience-grid',
                    col: 'col',
                  }}
                  grow={true}
                >
                  {value.positions.map((value) => {
                    return [
                      <GridCol span={4}>
                        <Stack gap={0}>
                          <Title order={5}>{value.position}</Title>
                          <Text
                            classNames={{
                              root: 'period',
                            }}
                          >
                            {value.period}
                          </Text>
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
                <div className="experience-divider">
                  <Divider my="md" />
                </div>
              </Paper>
              {/* flexGrow: 1, 부모 요소의 남은 공간을 최대로 사용 */}
            </div>
          );
        })}
      </div>
      <Space h="md" />
    </section>
  );
}
