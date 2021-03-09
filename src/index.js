module.exports = function toReadable(number) {
    if (number === 0) return 'zero';
    let result = '';
    let snum = String(number);
    let dig = { '0': '', '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine' };
    if (snum.length === 3) {
        result += dig[snum[0]] + " hundred";
        snum = snum.slice(1);
    }

    if (snum.length === 2) {
        if (snum[0] === '1') {
            let dec = { '10': 'ten', '11': 'eleven', '12': 'twelve', '13': 'thirteen', '14': 'fourteen', '15': 'fifteen', '16': 'sixteen', '17': 'seventeen', '18': 'eighteen', '19': 'nineteen' };
            result += ' ' + dec[snum];
            return result.trim();
        }
        let decs = { '0': '', '2': 'twenty', '3': 'thirty', '4': 'forty', '5': 'fifty', '6': 'sixty', '7': 'seventy', '8': 'eighty', '9': 'ninety' };
        result += ' ' + decs[snum[0]]
        result = result.trim();
        snum = snum.slice(1);
    }

    if (snum.length === 1) {
        result += ' ' + dig[snum];
    }
    return result.trim();
}
