import {createUseStyles} from 'react-jss';
import commonStyles from './base/common';
import typography from './base/typography';

const useGlobalStyles = createUseStyles({
    ...commonStyles,
    ...typography
});

export default useGlobalStyles;