import {
  createStyles,
  Header,
  Group,
  Button,
  Text,
  Divider,
  Menu,
  Burger,
  Drawer,
  ScrollArea,
  Box,
} from '@mantine/core'
import RemsLogo from '../../assets/images/Logo.png'
import { useNavigate } from 'react-router-dom'
import { Avatar } from '@mantine/core'
import { Link } from 'react-router-dom'

import { useDisclosure } from '@mantine/hooks'
import {
  IconLogout,
  IconSettings,
  IconHome,
  IconShoppingBag,
  IconCash,
  IconExchange,
  IconHome2,
  IconNews,
} from '@tabler/icons'
import { useState } from 'react'

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: 'black',
    fontWeight: 400,
    fontSize: '1.2rem',
    fontFamily: 'Poppins',

    [theme.fn.smallerThan('sm')]: {
      height: 42,
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.red[6]
          : theme.colors.red[0],
    }),
  },

  imageContainer: {
    width: '250px',
    height: '60px',

    [theme.fn.smallerThan('xs')]: {
      width: '160px',
      height: '40px',
    },
  },

  mobileLink: {
    display: 'flex',
    alignItems: 'center',
    width: '80%',
    textDecoration: 'none',
    color: 'black',
    fontWeight: 500,
    fontSize: '1.2rem',
    fontFamily: 'Poppins',

    [theme.fn.smallerThan('sm')]: {
      height: 42,
      display: 'flex',
      alignItems: 'center',
      width: '85%',
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.red[6]
          : theme.colors.red[0],
    }),
  },

  hiddenMobile: {
    [theme.fn.smallerThan('xl')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('xl')]: {
      display: 'none',
    },
  },
}))

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(true)
  const navigate = useNavigate()

  const [
    drawerOpened,
    { toggle: toggleDrawer, close: closeDrawer },
  ] = useDisclosure(false)
  const { classes, theme } = useStyles()

  return (
    <>
      <Header
        height={95}
        px="md"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 20,
        }}
      >
        <Group position="apart" sx={{ height: '100%' }}>
          <Box
            sx={{
              '&:hover': {
                cursor: 'pointer',
              },
            }}
            onClick={() => {
              navigate('/')
            }}
          >
            <img
              src={RemsLogo}
              alt="TRA Rems Logo"
              className={classes.imageContainer}
            />
          </Box>
          <Group
            sx={{ height: '100%' }}
            spacing={7}
            className={classes.hiddenMobile}
          >
            <Button
              variant="outline"
              sx={{ borderColor: '#D92228' }}
              className={classes.link}
              onClick={() => {
                navigate('/')
              }}
            >
              Home
            </Button>

            <Button
              variant="outline"
              sx={{ borderColor: '#D92228' }}
              className={classes.link}
              onClick={() => {
                navigate('/properties')
              }}
            >
              Buy
            </Button>

            <Button
              variant="outline"
              sx={{ borderColor: '#D92228' }}
              className={classes.link}
              onClick={() => {
                navigate('/')
              }}
            >
              Sell
            </Button>

            <Button
              variant="outline"
              sx={{ borderColor: '#D92228' }}
              className={classes.link}
              onClick={() => {
                navigate('/exchange')
              }}
            >
              Exchange
            </Button>

            <Button
              variant="outline"
              sx={{ borderColor: '#D92228' }}
              className={classes.link}
              onClick={() => {
                navigate('/rent')
              }}
            >
              Rent
            </Button>

            <Button
              variant="outline"
              sx={{ borderColor: '#D92228' }}
              className={classes.link}
              onClick={() => {
                navigate('/blogs')
              }}
            >
              News & Insights
            </Button>
          </Group>

          <Group className={classes.hiddenMobile}>
            {loggedIn ? (
              <>
                <Link to={'/login'}>
                  <Button
                    variant="outline"
                    sx={{
                      color: '#D92228',
                      borderColor: '#D92228',
                      fontFamily: 'poppins',
                    }}
                    size="md"
                  >
                    Log in
                  </Button>
                </Link>
                <Link to={'/register'}>
                  <Button
                    variant="outline"
                    sx={{
                      color: '#D92228',
                      borderColor: '#D92228',
                      fontFamily: 'poppins',
                    }}
                    size="md"
                  >
                    Sign up
                  </Button>
                </Link>
                <Link to={'/subscription'}>
                  <Button
                    style={{
                      color: 'white',
                      backgroundColor: '#D92228',
                      fontFamily: 'poppins',
                    }}
                    size="md"
                  >
                    Subscription
                  </Button>
                </Link>
              </>
            ) : (
              <Menu
                transition="pop-top-right"
                position="top-end"
                width={200}
                withinPortal
                sx={{
                  '&:hover': {
                    cursor: 'pointer',
                  },
                }}
              >
                <Menu.Target>
                  <Avatar src={null} alt="" size={40} color="red" />
                </Menu.Target>

                <Menu.Dropdown style={{ borderColor: '#D92228' }}>
                  <Menu.Item
                    icon={
                      <IconSettings size={20} style={{ color: 'blueviolet' }} />
                    }
                  >
                    <Text style={{ fontFamily: 'poppins' }}>Settings</Text>
                  </Menu.Item>
                  <Menu.Item
                    icon={<IconLogout size={20} style={{ color: '#D92228' }} />}
                  >
                    <Text
                      style={{
                        fontFamily: 'poppins',
                      }}
                    >
                      Logout
                    </Text>
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            )}
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
            color="#D92228"
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="320px"
        padding="md"
        className={classes.hiddenDesktop}
        zIndex={1000000}
        styles={{
          closeButton: {
            color: 'white',
            backgroundColor: '#D92228',
            borderRadius: 20,
          },
        }}
      >
        <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />
          <Group
            spacing="lg"
            style={{
              justifyContent: 'center',
            }}
          >
            <Button
              sx={{
                color: 'white',
                backgroundColor: '#D92228',
                fontFamily: 'poppins',
              }}
              className={classes.mobileLink}
              size="md"
              leftIcon={<IconHome />}
              onClick={() => {
                navigate('/')
                closeDrawer()
              }}
            >
              Home
            </Button>

            <Button
              sx={{
                color: 'white',
                backgroundColor: '#D92228',
                fontFamily: 'poppins',
              }}
              className={classes.mobileLink}
              size="md"
              leftIcon={<IconShoppingBag />}
              onClick={() => {
                navigate('/buy')
                closeDrawer()
              }}
            >
              Buy
            </Button>

            <Button
              sx={{
                color: 'white',
                backgroundColor: '#D92228',
                fontFamily: 'poppins',
              }}
              className={classes.mobileLink}
              size="md"
              leftIcon={<IconCash />}
              onClick={() => {
                navigate('/')
                closeDrawer()
              }}
            >
              Sell
            </Button>

            <Button
              sx={{
                color: 'white',
                backgroundColor: '#D92228',
                fontFamily: 'poppins',
              }}
              className={classes.mobileLink}
              size="md"
              leftIcon={<IconExchange />}
              onClick={() => {
                navigate('/exchange')
                closeDrawer()
              }}
            >
              Exchange
            </Button>

            <Button
              sx={{
                color: 'white',
                backgroundColor: '#D92228',
                fontFamily: 'poppins',
              }}
              className={classes.mobileLink}
              size="md"
              leftIcon={<IconHome2 />}
              onClick={() => {
                navigate('/rent')
                closeDrawer()
              }}
            >
              Rent
            </Button>

            <Button
              sx={{
                color: 'white',
                backgroundColor: '#D92228',
                fontFamily: 'poppins',
              }}
              className={classes.mobileLink}
              size="md"
              leftIcon={<IconNews />}
              onClick={() => {
                navigate('/blogs')
                closeDrawer()
              }}
            >
              News & Insights
            </Button>
          </Group>

          <Divider
            my="sm"
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />

          {loggedIn ? (
            <Group position="center" grow px={'2rem'}>
              <Button
                variant="outline"
                style={{ color: '#D92228', borderColor: '#D92228' }}
              >
                Log in
              </Button>
              <Button
                variant="filled"
                style={{
                  backgroundColor: '#D92228',
                  color: 'white',
                }}
              >
                Sign up
              </Button>
            </Group>
          ) : (
            <Group position="center" grow pb="xl" px="md">
              <Button variant="default">Sign Out</Button>
            </Group>
          )}
        </ScrollArea>
      </Drawer>
    </>
  )
}
