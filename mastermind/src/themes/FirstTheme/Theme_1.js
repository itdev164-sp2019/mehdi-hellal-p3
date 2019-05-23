const theme ={
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    lineHeight: {
        solid: 1,
        title: 1.25,
        copy: 1.5
    },
    letterSpacing: {
        normal: 'normal',
        tracked: '0.1em',
        tight: '-0.05em',
        mega: '0.25em'
    },
    borders: [
        0,
        '1px solid',
        '2px solid',
        '3px solid',
        '4px solid',
        '8px solid',
        '16px solid',
        '32px solid',
        
    ],
    colors: {
        primary:{
            light: 'hsl(208, 13%, 35%)',
            main: 'hsl(208, 13%, 25%)',
            dark: 'hsl(208, 13%, 15%)',
            contrastText: '#ffffff'
        },

        text:{
            primary: 'hsl(208, 13%, 35%)',
            secondary: 'hsl(208, 13%, 45%)',
            disabled: 'hsl(208, 13%, 75%)',
            hint: 'hsl(208, 13%, 75%)'
        }
    }
}

const defaults ={
    button: {
        padding: `${theme.space[2] / 16}em ${(theme.space[3] +4) / 16}em`,
        border: theme.borders[2],
        textTransform: 'uppercase',
        letterSpacing: theme.letterSpacing.tracked,
        background: 'white'
    },
    footer :{
        border: theme.borders[0],
        height: '100%',
        width: '100%',
        textAlign: 'right',
        background:'#ff9232',
        margin: `0 auto`,
        display: `inline-block`,
        padding: `1.45rem 1.0875rem`,
        
       
             
    },
    main:{
        border: theme.borders[0],
        height: '100%',
        width: '100%',
        backgroundColor: `#a85502`,
        
    },
    header:{
    height: '100%',
    width: '100%',
    marginBottom: `1.45rem`,
    margin: `0 auto`,
    
    padding: `1.45rem 1.0875rem`,
    }


}

const variants = {
    button:{
        primary:{
            ...defaults.button,
            color: theme.colors.primary.main,
            borderColor: theme.colors.primary.main,
           // background: 'white'
           margin: `10px`
        },
        contrast:{
            ...defaults.button,
            color: theme.colors.primary.contrastText,
            borderColor: theme.colors.primary.contrastText
        }
    },
    footer:{
        primary:{
            ...defaults.footer,
            color: theme.colors.primary.main,
            //borderColor: theme.colors.primary.main,
            //background: 'white'
        },
        contrast:{
            ...defaults.footer,
            color: theme.colors.primary.contrastText,
            borderColor: theme.colors.primary.contrastText
        }
    },

    header:{
        primary:{
            ...defaults.header,
            color: theme.colors.primary.main,
            borderColor: theme.colors.primary.main,
            background: '#ff9232',
            textAlign:'center'
        },
        contrast:{
            ...defaults.button,
            color: theme.colors.primary.contrastText,
            borderColor: theme.colors.primary.contrastText
        }
    },

    main:{
        primary:{
            ...defaults.main,
            color: theme.colors.primary.main,
            borderColor: theme.colors.primary.main,
           // background: 'white'
        },
        contrast:{
            ...defaults.main,
            color: theme.colors.primary.contrastText,
            borderColor: theme.colors.primary.contrastText
        }
    },



    

}

const Theme_1 ={...theme, defaults, variants }
export { Theme_1}