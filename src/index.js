module.exports = function toReadable (number) {
    if (number === 0) return 'zero';    //check 0

    let numberStr = number.toString();
    if (numberStr.length === 2) {   //if 2 signs
        numberStr = '0' + numberStr;
    } else if (numberStr.length === 1) {   //if 1 sign
        numberStr = '00' + numberStr;
    }
    let result = '';

    if (numberStr[0] !== '0') {
        switch (numberStr[0]) {
            case '1':
                result += 'one hundred';
                break;
            case '2': 
                result += 'two hundred';
                break;
            case '3':
                result += 'three hundred';
                break;
            case '4': 
                result += 'four hundred';
                break;
            case '5': 
                result += 'five hundred';
                break;
            case '6': 
                result += 'six hundred';
                break;
            case '7': 
                result += 'seven hundred';
                break;
            case '8': 
                result += 'eight hundred';
                break;
            case '9': 
                result += 'nine hundred';
                break;
        }
    }
    if (number > 99 && numberStr[1] !== '0') {    //check if needed space
        result += ' ';
    }

    if (numberStr[1] === '1') { //check from 10 to 19 and from x10 to x19
        switch (numberStr[2]) {
            case '0':
                result += 'ten';
                return result;
            case '1':
                result += 'eleven';
                return result;
            case '2': 
                result += 'twelve';
                return result;
            case '3':
                result += 'thirteen';
                return result;
            case '4':
                result += 'fourteen';
                return result;
            case '5':
                result += 'fifteen';
                return result;
            case '6':
                result += 'sixteen';
                return result;
            case '7':
                result += 'seventeen';
                return result;
            case '8':
                result += 'eighteen';
                return result;
            case '9':
                result += 'nineteen';
                return result;
        }
    }
    if (numberStr[1] !== '1' && numberStr[1] !== '0') {
        switch (numberStr[1]) {
            case '2': 
                result += 'twenty';
                break;
            case '3':
                result += 'thirty';
                break;
            case '4':
                result += 'forty';
                break;
            case '5':
                result += 'fifty';
                break;
            case '6':
                result += 'sixty'
                break;
            case '7': 
                result += 'seventy'
                break;
            case '8':
                result += 'eighty';
                break;
            case '9':
                result += 'ninety';
                break;
        }
    }
    if (number > 9 && numberStr[2] !== '0') {   //check if needed space
        result += ' ';
    }

    if (numberStr[2] !== '0') {
        switch (numberStr[2]) {
            case '1':
                result += 'one';
                break;
            case '2': 
                result += 'two';
                break;
            case '3':
                result += 'three';
                break;
            case '4': 
                result += 'four';
                break;
            case '5': 
                result += 'five';
                break;
            case '6': 
                result += 'six';
                break;
            case '7': 
                result += 'seven';
                break;
            case '8': 
                result += 'eight';
                break;
            case '9': 
                result += 'nine';
                break;
        }
    }

    return result;
}
