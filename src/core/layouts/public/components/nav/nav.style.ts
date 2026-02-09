import {createUseStyles} from 'react-jss';
import colors from '../../../../../assets/styles/abstracts/color';




const styles = {
    nav_mainDiv:{
    backgroundColor: colors.light_green,
    },
    nav:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px',
        // padding:"2rem"
    },
    handora_logo:{
        width: '80px',
        height: '80px',
        color: colors.dark_green
    },
    search_div:{
        width:"90%"
    },
    person:{
        display: 'flex',
        gap: '20px',
        alignItems:" anchor-center"
    }
}

export const useNavStyles = createUseStyles(styles);