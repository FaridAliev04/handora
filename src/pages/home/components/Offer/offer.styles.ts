import { createUseStyles } from 'react-jss';
import fonts from '../../../../assets/styles/abstracts/fonts';

const styles = {
    main_div: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        padding: '40px 20px',
        minHeight: '600px', 
        '& *': { 
        fontFamily: `${fonts.font} !important`,
    },
    },
    image_wrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
        borderRadius: '24px', 
        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover', 
        }
    },
    form_container: {
        position: 'relative',
        zIndex: 2,
        marginLeft: 'auto', 
        marginRight: '5%',
        width: '100%',
        maxWidth: '450px',
        
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        
        padding: '40px',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
    },
    title: {
        fontSize: '28px',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '24px',
        fontFamily: 'sans-serif'
    }
};

export const useOfferStyle = createUseStyles(styles);