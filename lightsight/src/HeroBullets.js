import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import classes from './HeroBullets.module.css';
import image from './gene-structure-svgrepo-com.svg';
import { useMantineTheme } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export function HeroBullets() {

  const theme = useMantineTheme();
  const navigate = useNavigate();
  const handleClick = () => {navigate('/contact')}
  return (
    <Container size="lg">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            All your <span className={classes.highlight}>Payments</span> data <br />  in one location.
          </Title>
          <Text c="dimmed" mt="md">
            No code integration, processing and harmonization of payments data from all your payments services providers (PSPs) into on single location.
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
              <b>Target Industries</b> – we support organizations of all sizes that receive or send payments via payments services providers (PSPs).
            </List.Item>
          </List>
        
          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control} onClick={handleClick}>
              Contact Us
            </Button>
          </Group>
        </div>
        <Image src={image.src} className={classes.image} />
      </div>
    </Container>
  );
}