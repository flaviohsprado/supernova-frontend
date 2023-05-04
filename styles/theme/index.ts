import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    textStyles: {
        datatableHeader: {
            fontSize: 'md',
            fontWeight: 'semibold',
            color: 'gray.500',
            FontFace: 'Roboto',
        },
        h1: {
            // you can also use responsive styles
            fontSize: ['48px', '72px'],
            fontWeight: 'bold',
            lineHeight: '110%',
            letterSpacing: '-2%',
        },
        h2: {
            fontSize: ['36px', '48px'],
            fontWeight: 'semibold',
            lineHeight: '110%',
            letterSpacing: '-1%',
        },
    },
    colors: {
        primary: {
            main: '#f50057',
            light: '#f5518b',
            dark: '#9c0238',
        },
        secondary: {
            main: '#1f1f1f',
            light: '#2b2b2b',
            dark: '#0a0a0a',
        },
        error: {
            main: '#fc3728',
            light: '#ff5b4f',
            dark: '#7d2e28',
        },
        warning: {
            main: '#eb9a23',
            light: '#edb25a',
            dark: '#6e4b17',
        },
        info: {
            main: '#26a4de',
            light: '#5cb3db',
            dark: '#1d5b78',
        },
        success: {
            main: '#3eb844',
            light: '#8aed8e',
            dark: '#1c661e',
        },
    },
})

export default theme
