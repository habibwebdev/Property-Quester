import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(
  (theme) => ({
    myNavbar: {
      backgroundColor: '#203040',
      '& a': {
        color: '#ffffff',
        // marginLeft: 10,
      },
    },
    brand: {
      display: 'flex',
      alignItems: 'center',
    },
    brandTitle: {
      //   fontWeight: 'bold',
      fontSize: '1.7rem',
    },
    myNavbarLinks: {
      '& a': {
        padding: '10px 20px',
      },
    },
    pZero: {
      padding: '0',
    },
    mZero: {
      margin: '0',
    },
    grow: {
      flexGrow: 1,
    },
    main: {
      minHeight: '80vh',
    },
    footer: {
      marginTop: 10,
      textAlign: 'center',
    },
    section: {
      marginTop: 10,
      marginBottom: 10,
    },
    toolbar: {
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textWhite: {
      color: '#ffffff',
    },
  }),
  { index: 1 }
)

export default useStyles
