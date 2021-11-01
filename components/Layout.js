import React, { useContext, useState, useEffect } from 'react'
import Head from 'next/head'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import {
  AppBar,
  CssBaseline,
  IconButton,
  ThemeProvider,
  createTheme,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Link,
  Button,
  Container,
} from '@material-ui/core'
import useStyles from '../utils/styles'

export default function Layout({ title, children, description }) {
  const [mounted, setMounted] = useState(false)
  const [myNavbar, setMyNavbar] = useState('')
  const router = useRouter()

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
    palette: {
      //   type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  })
  const classes = useStyles()

  useEffect(() => {
    setMounted(true)
    setMyNavbar(classes.myNavbar)
  }, [])

  const [anchorEl, setAnchorEl] = useState(null)
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const loginMenuCloseHandler = (e, redirect) => {
    setAnchorEl(null)
    if (redirect) {
      router.push(redirect)
    }
  }

  const logoutClickHandler = () => {
    setAnchorEl(null)
  }

  return (
    mounted &&
    myNavbar && (
      <div>
        <Head>
          <title>{title ? `${title} - Next Amazona` : 'Next Amazona'}</title>
          {description && (
            <meta name="description" content={description}></meta>
          )}
        </Head>

        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar position="static" className={myNavbar}>
            <Container className={classes.pZero}>
              <Toolbar className={classes.toolbar}>
                <div className={classes.brand}>
                  <NextLink href="/" passHref>
                    <Link className={classes.mZero} underline="none">
                      <Typography className={classes.brandTitle}>
                        Dubai Properties
                      </Typography>
                    </Link>
                  </NextLink>
                </div>
                <div className={classes.myNavbarLinks}>
                  <NextLink href="/" passHref>
                    <Link underline="none">
                      <Typography component="span">
                        <Button disableElevation className={classes.textWhite}>
                          Home
                        </Button>
                      </Typography>
                    </Link>
                  </NextLink>

                  <NextLink href="/about-us" passHref>
                    <Link underline="none">
                      <Typography component="span">
                        <Button disableElevation className={classes.textWhite}>
                          About Us
                        </Button>
                      </Typography>
                    </Link>
                  </NextLink>

                  <NextLink href="/search" passHref>
                    <Link underline="none">
                      <Typography component="span">
                        <Button disableElevation className={classes.textWhite}>
                          Search
                        </Button>
                      </Typography>
                    </Link>
                  </NextLink>

                  <NextLink href="/contact-us" passHref>
                    <Link underline="none">
                      <Typography component="span">
                        <Button disableElevation className={classes.textWhite}>
                          Contact Us
                        </Button>
                      </Typography>
                    </Link>
                  </NextLink>
                </div>
              </Toolbar>
            </Container>
          </AppBar>
          <Container className={classes.main}>{children}</Container>
          <footer className={classes.footer}>
            <Typography>All right reserved. Property Quester.</Typography>
          </footer>
        </ThemeProvider>
      </div>
    )
  )
}
