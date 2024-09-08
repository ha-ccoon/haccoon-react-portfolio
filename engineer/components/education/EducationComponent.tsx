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
} from '@mantine/core';
import React from 'react';
import { educationData } from '../constant';
import { Education } from '../types';

export default function EducationComponent() {
  return (
    <section>
      <Title order={3}>Education</Title>

      <Timeline bulletSize={24} lineWidth={2}>
        {educationData.map((value: Education, index) => {
          return (
            <TimelineItem key={index}>
              <Grid>
                <GridCol span={6}>
                  <Title order={5}>{value.title}</Title>
                  <Text c="dimmed" size="sm">
                    {value.organization}
                  </Text>
                  {value.description &&
                    value.description?.map((value) => {
                      return (
                        <List>
                          <ListItem>{value}</ListItem>
                        </List>
                      );
                    })}
                </GridCol>
                <GridCol span={2}>
                  <Stack gap={0}>
                    <Text>{value.status}</Text>
                    <Text>{value.period}</Text>
                  </Stack>
                </GridCol>
              </Grid>

              {/* <Text size="xs" mt={4}>
                2 hours ago
              </Text> */}
            </TimelineItem>
          );
        })}
      </Timeline>

      <Space h="md" />
    </section>
  );
}
