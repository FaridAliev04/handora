
import fonts from '../abstracts/fonts';
import sizes from '../abstracts/sizes';

const commonStyles = {
    '@global': {
        html: {
            fontSize: sizes.base,
        },
        body: {
            margin: 0,
            fontFamily: `${fonts.font} !important`,
        },
        img: {maxWidth: '100%',},
        ul: {listStyleType: 'none', padding: 0, margin: 0,},
        ".swiper-vertical":{height:"20rem"},
        ":where(.css-dev-only-do-not-override-1v5z42l).ant-slider-horizontal":{
        position: "relative",
        bottom: "2rem",
        ".ant-select-selector":{
        padding:"1rem 1rem !important"
    }
    }
    },
};

export default commonStyles;