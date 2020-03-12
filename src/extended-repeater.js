module.exports = function repeater( string, options ) {
    if (options.separator === undefined) {
        options.separator = '+';
    } 
    if (options.additionSeparator === undefined) {
        options.additionSeparator = '+';
    } 
    if (options.repeatTimes === undefined) {
        options.repeatTimes = 1;
    } 
    if (options.additionRepeatTimes === undefined) {
        options.additionRepeatTimes = 0;
    } 
    let сhief  = '';
    for (let i = 0; i < options.repeatTimes; i++) {
        let str = string;
        for (let k = 0; k < options.additionRepeatTimes - 1; k++) {
            if (options.addition != undefined || options.addition === null)
                str += options.addition + options.additionSeparator;
        }
        if (options.addition != undefined || options.addition === null) {
            str += options.addition;
        }
            
        if (i === options.repeatTimes - 1) {
            сhief += str;
        }
        else {
            сhief += str + options.separator
        } 
    }

    return сhief;
};