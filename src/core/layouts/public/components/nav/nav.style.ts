import {createUseStyles} from 'react-jss';
import colors from '../../../../../assets/styles/abstracts/color';
import { backgroundImage } from 'flowbite-react/plugin/tailwindcss/theme';




const styles = {
    nav_mainDiv:{
    backgroundColor: colors.light_green,
    },
    nav:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px',
    },
    handora_logo:{
        width: '80px',
        height: '80px',
        cursor:'pointer'
    },
    search_div:{
        width:"90%"
    },
    person:{
        display: 'flex',
        gap: '20px',
        alignItems:" anchor-center"
    },
    login_button:{
        background:"red"
    }
}

export const useNavStyles = createUseStyles(styles);