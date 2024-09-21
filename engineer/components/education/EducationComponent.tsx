import React from 'react';

import {
  Space,
  Timeline,
  TimelineItem,
  Title,
  Text,
  Grid,
  GridCol,
  List,
  ListItem,
  Stack,
  Container,
} from '@mantine/core';

import { educationData } from '../constant';
import { Education } from '../types';

import '@/components/education/education.scss';

export default function EducationComponent() {
  return (
    <section className="education-section">
      <Title
        classNames={{
          root: 'title',
        }}
        order={3}
      >
        Education
      </Title>

      <Space h="md" />

      <Container
        classNames={{
          root: 'timeline-container',
        }}
      >
        <Timeline bulletSize={24} lineWidth={2}>
          {educationData.map((value: Education, index) => {
            return (
              <TimelineItem key={index}>
                <Grid
                  classNames={{
                    inner: 'grid-inner',
                    col: 'grid-col',
                  }}
                  grow={true}
                >
                  <GridCol span={8}>
                    <Title order={5}>{value.title}</Title>

                    <Text c="dimmed" size="sm">
                      {value.organization}
                    </Text>

                    {value.description &&
                      value.description?.map((value, index) => {
                        return (
                          <List key={index}>
                            <ListItem>{value}</ListItem>
                          </List>
                        );
                      })}
                  </GridCol>

                  <GridCol span={4}>
                    <Stack gap={0}>
                      <Text>{value.status}</Text>
                      <Text>{value.period}</Text>
                    </Stack>
                  </GridCol>
                </Grid>
              </TimelineItem>
            );
          })}
        </Timeline>
      </Container>

      <Space h="md" />
    </section>
  );
}
