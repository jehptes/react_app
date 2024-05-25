import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './HeroBullets.module.css';

export function HeroBullets() {
  return (
    <Container size="md" style={{ backgroundColor: '#092022' }}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            All your <span className={classes.highlight}>Payments</span> data <br />  in one location.
          </Title>
          <Text c="dimmed" mt="md">
            No code integration, processing and harmonization of all your payments services providers (PSPs) into on single location.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl" color='green'>
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={2.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Payments data</b> – Transactions, Fees, etc 
            </List.Item>
            <List.Item>
              <b>Payment Gateways</b> – Stripe, Paypal, Eupago, etc
            </List.Item>
            <List.Item>
              <b>More</b> – focus ring will appear only when user navigates with
              keyboard
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Get started
            </Button>
            <Button variant="default" radius="xl" size="md" className={classes.control}>
              Source code
            </Button>
          </Group>
        </div>
      </div>
    </Container>
  );
}