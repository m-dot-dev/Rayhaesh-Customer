import {
  Badge,
  Button,
  Container,
  Group,
  List,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  createStyles,
} from '@mantine/core'
import { IconCircleCheck } from '@tabler/icons'
import React from 'react'

const Subscription = () => {
  const useStyles = createStyles((theme) => ({
    titleText: {
      color: theme.white,
      fontSize: 28,
      fontWeight: 700,
      marginTop: 10,
      marginBottom: 10,
    },
    secondaryText: {
      color: theme.white,
      fontSize: 22,
      fontWeight: 600,
    },
    listItemText: {
      color: theme.white,
      fontSize: 18,
      fontStyle: 'italic',
    },
  }))
  const { classes } = useStyles()

  return (
    <Container size={420} my={40}>
      <Paper
        withBorder
        shadow="md"
        p={30}
        mt={30}
        radius="lg"
        style={{
          background: 'rgb(228, 152, 70)',
          backgroundImage:
            'linear-gradient(270deg, rgba(228,152,70,1) 0%, rgba(215,115,32,1) 35%, rgba(200,101,35,1) 45%, rgba(205,47,47,1) 85%)',
        }}
        sx={{
          '&:hover': {
            transform: 'scale(1.02)',
            transition: 'all 0.5s ease-in-out',
            cursor: 'pointer',
          },
        }}
      >
        <Group position="right">
          <Badge variant="filled" color="red" size="lg">
            Most Popular
          </Badge>
        </Group>
        <Group>
          <Text className={classes.titleText}>PKR 3000/Month</Text>
        </Group>

        <Text className={classes.secondaryText}>TRA REMS</Text>

        <Stack>
          <List
            spacing="xs"
            size="sm"
            center
            icon={
              <ThemeIcon color="green" size={24} radius="xl">
                <IconCircleCheck size={16} />
              </ThemeIcon>
            }
            mt={20}
          >
            <List.Item className={classes.listItemText}>HASHAAM</List.Item>
            <List.Item className={classes.listItemText}>ABDULLAH</List.Item>
            <List.Item className={classes.listItemText}>WAQAS</List.Item>
            <List.Item className={classes.listItemText}>HARIS</List.Item>
            <List.Item className={classes.listItemText}>TRA</List.Item>
          </List>
        </Stack>
        <Group
          style={{
            marginTop: 20,
          }}
          position="center"
        >
          <Button variant="filled" color="red" radius="xl" size="sm" uppercase>
            Choose Plan
          </Button>
        </Group>
      </Paper>
    </Container>
  )
}

export default Subscription
