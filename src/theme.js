import {
    cyan500, pinkA400,
    grey300, white, darkBlack, fullBlack
} from 'material-ui/styles/colors';

import {fade} from 'material-ui/utils/colorManipulator';

export default {
    palette: {
        primary1Color: cyan500,
        accent1Color: pinkA400,
        textColor: darkBlack,
        alternateTextColor: white,
        canvasColor: white,
        borderColor: grey300,
        disabledColor: fade(darkBlack, 0.3),
        pickerHeaderColor: cyan500,
        clockCircleColor: fade(darkBlack, 0.07),
        shadowColor: fullBlack
    },
}
