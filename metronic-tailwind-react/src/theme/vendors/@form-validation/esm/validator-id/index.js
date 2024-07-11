import { utils, algorithms } from '../core/index.js';

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Argentinian national identifiers
 *
 * @see https://en.wikipedia.org/wiki/Documento_Nacional_de_Identidad_(Argentina)
 * @returns {ValidateResult}
 */
function arId(value) {
    // Replace dot with empty space
    var v = value.replace(/\./g, '');
    return {
        meta: {},
        valid: /^\d{7,8}$/.test(v),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Unique Master Citizen Number which uses in
 * - Bosnia and Herzegovina (country code: BA)
 * - Macedonia (MK)
 * - Montenegro (ME)
 * - Serbia (RS)
 * - Slovenia (SI)
 *
 * @see http://en.wikipedia.org/wiki/Unique_Master_Citizen_Number
 * @returns {boolean}
 */
function jmbg(value, countryCode) {
    if (!/^\d{13}$/.test(value)) {
        return false;
    }
    var day = parseInt(value.substr(0, 2), 10);
    var month = parseInt(value.substr(2, 2), 10);
    // const year = parseInt(value.substr(4, 3), 10)
    var rr = parseInt(value.substr(7, 2), 10);
    var k = parseInt(value.substr(12, 1), 10);
    // Validate date of birth
    // FIXME: Validate the year of birth
    if (day > 31 || month > 12) {
        return false;
    }
    // Validate checksum
    var sum = 0;
    for (var i = 0; i < 6; i++) {
        sum += (7 - i) * (parseInt(value.charAt(i), 10) + parseInt(value.charAt(i + 6), 10));
    }
    sum = 11 - (sum % 11);
    if (sum === 10 || sum === 11) {
        sum = 0;
    }
    if (sum !== k) {
        return false;
    }
    // Validate political region
    // rr is the political region of birth, which can be in ranges:
    // 10-19: Bosnia and Herzegovina
    // 20-29: Montenegro
    // 30-39: Croatia (not used anymore)
    // 41-49: Macedonia
    // 50-59: Slovenia (only 50 is used)
    // 70-79: Central Serbia
    // 80-89: Serbian province of Vojvodina
    // 90-99: Kosovo
    switch (countryCode.toUpperCase()) {
        case 'BA':
            return 10 <= rr && rr <= 19;
        case 'MK':
            return 41 <= rr && rr <= 49;
        case 'ME':
            return 20 <= rr && rr <= 29;
        case 'RS':
            return 70 <= rr && rr <= 99;
        case 'SI':
            return 50 <= rr && rr <= 59;
        default:
            return true;
    }
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * @returns {ValidateResult}
 */
function baId(value) {
    return {
        meta: {},
        valid: jmbg(value, 'BA'),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var isValidDate$d = utils.isValidDate;
/**
 * Validate Bulgarian national identification number (EGN)
 *
 * @see http://en.wikipedia.org/wiki/Uniform_civil_number
 * @returns {ValidateResult}
 */
function bgId(value) {
    if (!/^\d{10}$/.test(value) && !/^\d{6}\s\d{3}\s\d{1}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var v = value.replace(/\s/g, '');
    // Check the birth date
    var year = parseInt(v.substr(0, 2), 10) + 1900;
    var month = parseInt(v.substr(2, 2), 10);
    var day = parseInt(v.substr(4, 2), 10);
    if (month > 40) {
        year += 100;
        month -= 40;
    }
    else if (month > 20) {
        year -= 100;
        month -= 20;
    }
    if (!isValidDate$d(year, month, day)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var sum = 0;
    var weight = [2, 4, 8, 5, 10, 9, 7, 3, 6];
    for (var i = 0; i < 9; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    sum = (sum % 11) % 10;
    return {
        meta: {},
        valid: "".concat(sum) === v.substr(9, 1),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Brazilian national identification number (CPF)
 *
 * @see http://en.wikipedia.org/wiki/Cadastro_de_Pessoas_F%C3%ADsicas
 * @returns {ValidateResult}
 */
function brId(value) {
    var v = value.replace(/\D/g, '');
    if (!/^\d{11}$/.test(v) || /^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var d1 = 0;
    var i;
    for (i = 0; i < 9; i++) {
        d1 += (10 - i) * parseInt(v.charAt(i), 10);
    }
    d1 = 11 - (d1 % 11);
    if (d1 === 10 || d1 === 11) {
        d1 = 0;
    }
    if ("".concat(d1) !== v.charAt(9)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var d2 = 0;
    for (i = 0; i < 10; i++) {
        d2 += (11 - i) * parseInt(v.charAt(i), 10);
    }
    d2 = 11 - (d2 % 11);
    if (d2 === 10 || d2 === 11) {
        d2 = 0;
    }
    return {
        meta: {},
        valid: "".concat(d2) === v.charAt(10),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Swiss Social Security Number (AHV-Nr/No AVS)
 *
 * @see http://en.wikipedia.org/wiki/National_identification_number#Switzerland
 * @see http://www.bsv.admin.ch/themen/ahv/00011/02185/index.html?lang=de
 * @returns {ValidateResult}
 */
function chId(value) {
    if (!/^756[.]{0,1}[0-9]{4}[.]{0,1}[0-9]{4}[.]{0,1}[0-9]{2}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var v = value.replace(/\D/g, '').substr(3);
    var length = v.length;
    var weight = length === 8 ? [3, 1] : [1, 3];
    var sum = 0;
    for (var i = 0; i < length - 1; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i % 2];
    }
    sum = 10 - (sum % 10);
    return {
        meta: {},
        valid: "".concat(sum) === v.charAt(length - 1),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Chilean national identification number (RUN/RUT)
 *
 * @see http://en.wikipedia.org/wiki/National_identification_number#Chile
 * @see https://palena.sii.cl/cvc/dte/ee_empresas_emisoras.html for samples
 * @returns {ValidateResult}
 */
function clId(value) {
    if (!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var v = value.replace(/-/g, '');
    while (v.length < 9) {
        v = "0".concat(v);
    }
    var weight = [3, 2, 7, 6, 5, 4, 3, 2];
    var sum = 0;
    for (var i = 0; i < 8; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    sum = 11 - (sum % 11);
    var cd = "".concat(sum);
    if (sum === 11) {
        cd = '0';
    }
    else if (sum === 10) {
        cd = 'K';
    }
    return {
        meta: {},
        valid: cd === v.charAt(8).toUpperCase(),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var isValidDate$c = utils.isValidDate;
/**
 * Validate Chinese citizen identification number
 *
 * Rules:
 * - For current 18-digit system (since 1st Oct 1999, defined by GB11643—1999 national standard):
 *     - Digit 0-5: Must be a valid administrative division code of China PR.
 *     - Digit 6-13: Must be a valid YYYYMMDD date of birth. A future date is tolerated.
 *     - Digit 14-16: Order code, any integer.
 *     - Digit 17: An ISO 7064:1983, MOD 11-2 checksum.
 *       Both upper/lower case of X are tolerated.
 * - For deprecated 15-digit system:
 *     - Digit 0-5: Must be a valid administrative division code of China PR.
 *     - Digit 6-11: Must be a valid YYMMDD date of birth, indicating the year of 19XX.
 *     - Digit 12-14: Order code, any integer.
 * Lists of valid administrative division codes of China PR can be seen here:
 * <http://www.stats.gov.cn/tjsj/tjbz/xzqhdm/>
 * Published and maintained by National Bureau of Statistics of China PR.
 * NOTE: Current and deprecated codes MUST BOTH be considered valid.
 * Many Chinese citizens born in once existed administrative divisions!
 *
 * @see http://en.wikipedia.org/wiki/Resident_Identity_Card#Identity_card_number
 * @returns {ValidateResult}
 */
function cnId(value) {
    // Basic format check (18 or 15 digits, considering X in checksum)
    var v = value.trim();
    if (!/^\d{15}$/.test(v) && !/^\d{17}[\dXx]{1}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    // Check China PR Administrative division code
    var adminDivisionCodes = {
        11: {
            0: [0],
            1: [
                [0, 9],
                [11, 17],
            ],
            2: [0, 28, 29],
        },
        12: {
            0: [0],
            1: [[0, 16]],
            2: [0, 21, 23, 25],
        },
        13: {
            0: [0],
            1: [[0, 5], 7, 8, 21, [23, 33], [81, 85]],
            2: [[0, 5], [7, 9], [23, 25], 27, 29, 30, 81, 83],
            3: [
                [0, 4],
                [21, 24],
            ],
            4: [[0, 4], 6, 21, [23, 35], 81],
            5: [[0, 3], [21, 35], 81, 82],
            6: [
                [0, 4],
                [21, 38],
                [81, 84],
            ],
            7: [[0, 3], 5, 6, [21, 33]],
            8: [
                [0, 4],
                [21, 28],
            ],
            9: [
                [0, 3],
                [21, 30],
                [81, 84],
            ],
            10: [[0, 3], [22, 26], 28, 81, 82],
            11: [[0, 2], [21, 28], 81, 82],
        },
        14: {
            0: [0],
            1: [0, 1, [5, 10], [21, 23], 81],
            2: [[0, 3], 11, 12, [21, 27]],
            3: [[0, 3], 11, 21, 22],
            4: [[0, 2], 11, 21, [23, 31], 81],
            5: [[0, 2], 21, 22, 24, 25, 81],
            6: [
                [0, 3],
                [21, 24],
            ],
            7: [[0, 2], [21, 29], 81],
            8: [[0, 2], [21, 30], 81, 82],
            9: [[0, 2], [21, 32], 81],
            10: [[0, 2], [21, 34], 81, 82],
            11: [[0, 2], [21, 30], 81, 82],
            23: [[0, 3], 22, 23, [25, 30], 32, 33],
        },
        15: {
            0: [0],
            1: [
                [0, 5],
                [21, 25],
            ],
            2: [
                [0, 7],
                [21, 23],
            ],
            3: [[0, 4]],
            4: [
                [0, 4],
                [21, 26],
                [28, 30],
            ],
            5: [[0, 2], [21, 26], 81],
            6: [
                [0, 2],
                [21, 27],
            ],
            7: [
                [0, 3],
                [21, 27],
                [81, 85],
            ],
            8: [
                [0, 2],
                [21, 26],
            ],
            9: [[0, 2], [21, 29], 81],
            22: [
                [0, 2],
                [21, 24],
            ],
            25: [
                [0, 2],
                [22, 31],
            ],
            26: [[0, 2], [24, 27], [29, 32], 34],
            28: [0, 1, [22, 27]],
            29: [0, [21, 23]],
        },
        21: {
            0: [0],
            1: [[0, 6], [11, 14], [22, 24], 81],
            2: [[0, 4], [11, 13], 24, [81, 83]],
            3: [[0, 4], 11, 21, 23, 81],
            4: [[0, 4], 11, [21, 23]],
            5: [[0, 5], 21, 22],
            6: [[0, 4], 24, 81, 82],
            7: [[0, 3], 11, 26, 27, 81, 82],
            8: [[0, 4], 11, 81, 82],
            9: [[0, 5], 11, 21, 22],
            10: [[0, 5], 11, 21, 81],
            11: [[0, 3], 21, 22],
            12: [[0, 2], 4, 21, 23, 24, 81, 82],
            13: [[0, 3], 21, 22, 24, 81, 82],
            14: [[0, 4], 21, 22, 81],
        },
        22: {
            0: [0],
            1: [[0, 6], 12, 22, [81, 83]],
            2: [[0, 4], 11, 21, [81, 84]],
            3: [[0, 3], 22, 23, 81, 82],
            4: [[0, 3], 21, 22],
            5: [[0, 3], 21, 23, 24, 81, 82],
            6: [[0, 2], 4, 5, [21, 23], 25, 81],
            7: [[0, 2], [21, 24], 81],
            8: [[0, 2], 21, 22, 81, 82],
            24: [[0, 6], 24, 26],
        },
        23: {
            0: [0],
            1: [[0, 12], 21, [23, 29], [81, 84]],
            2: [[0, 8], 21, [23, 25], 27, [29, 31], 81],
            3: [[0, 7], 21, 81, 82],
            4: [[0, 7], 21, 22],
            5: [[0, 3], 5, 6, [21, 24]],
            6: [
                [0, 6],
                [21, 24],
            ],
            7: [[0, 16], 22, 81],
            8: [[0, 5], 11, 22, 26, 28, 33, 81, 82],
            9: [[0, 4], 21],
            10: [[0, 5], 24, 25, 81, [83, 85]],
            11: [[0, 2], 21, 23, 24, 81, 82],
            12: [
                [0, 2],
                [21, 26],
                [81, 83],
            ],
            27: [
                [0, 4],
                [21, 23],
            ],
        },
        31: {
            0: [0],
            1: [0, 1, [3, 10], [12, 20]],
            2: [0, 30],
        },
        32: {
            0: [0],
            1: [[0, 7], 11, [13, 18], 24, 25],
            2: [[0, 6], 11, 81, 82],
            3: [[0, 5], 11, 12, [21, 24], 81, 82],
            4: [[0, 2], 4, 5, 11, 12, 81, 82],
            5: [
                [0, 9],
                [81, 85],
            ],
            6: [[0, 2], 11, 12, 21, 23, [81, 84]],
            7: [0, 1, 3, 5, 6, [21, 24]],
            8: [[0, 4], 11, 26, [29, 31]],
            9: [[0, 3], [21, 25], 28, 81, 82],
            10: [[0, 3], 11, 12, 23, 81, 84, 88],
            11: [[0, 2], 11, 12, [81, 83]],
            12: [
                [0, 4],
                [81, 84],
            ],
            13: [[0, 2], 11, [21, 24]],
        },
        33: {
            0: [0],
            1: [[0, 6], [8, 10], 22, 27, 82, 83, 85],
            2: [0, 1, [3, 6], 11, 12, 25, 26, [81, 83]],
            3: [[0, 4], 22, 24, [26, 29], 81, 82],
            4: [[0, 2], 11, 21, 24, [81, 83]],
            5: [
                [0, 3],
                [21, 23],
            ],
            6: [[0, 2], 21, 24, [81, 83]],
            7: [[0, 3], 23, 26, 27, [81, 84]],
            8: [[0, 3], 22, 24, 25, 81],
            9: [[0, 3], 21, 22],
            10: [[0, 4], [21, 24], 81, 82],
            11: [[0, 2], [21, 27], 81],
        },
        34: {
            0: [0],
            1: [[0, 4], 11, [21, 24], 81],
            2: [[0, 4], 7, 8, [21, 23], 25],
            3: [[0, 4], 11, [21, 23]],
            4: [[0, 6], 21],
            5: [[0, 4], 6, [21, 23]],
            6: [[0, 4], 21],
            7: [[0, 3], 11, 21],
            8: [[0, 3], 11, [22, 28], 81],
            10: [
                [0, 4],
                [21, 24],
            ],
            11: [[0, 3], 22, [24, 26], 81, 82],
            12: [[0, 4], 21, 22, 25, 26, 82],
            13: [
                [0, 2],
                [21, 24],
            ],
            14: [
                [0, 2],
                [21, 24],
            ],
            15: [
                [0, 3],
                [21, 25],
            ],
            16: [
                [0, 2],
                [21, 23],
            ],
            17: [
                [0, 2],
                [21, 23],
            ],
            18: [[0, 2], [21, 25], 81],
        },
        35: {
            0: [0],
            1: [[0, 5], 11, [21, 25], 28, 81, 82],
            2: [
                [0, 6],
                [11, 13],
            ],
            3: [[0, 5], 22],
            4: [[0, 3], 21, [23, 30], 81],
            5: [[0, 5], 21, [24, 27], [81, 83]],
            6: [[0, 3], [22, 29], 81],
            7: [
                [0, 2],
                [21, 25],
                [81, 84],
            ],
            8: [[0, 2], [21, 25], 81],
            9: [[0, 2], [21, 26], 81, 82],
        },
        36: {
            0: [0],
            1: [[0, 5], 11, [21, 24]],
            2: [[0, 3], 22, 81],
            3: [[0, 2], 13, [21, 23]],
            4: [[0, 3], 21, [23, 30], 81, 82],
            5: [[0, 2], 21],
            6: [[0, 2], 22, 81],
            7: [[0, 2], [21, 35], 81, 82],
            8: [[0, 3], [21, 30], 81],
            9: [
                [0, 2],
                [21, 26],
                [81, 83],
            ],
            10: [
                [0, 2],
                [21, 30],
            ],
            11: [[0, 2], [21, 30], 81],
        },
        37: {
            0: [0],
            1: [[0, 5], 12, 13, [24, 26], 81],
            2: [[0, 3], 5, [11, 14], [81, 85]],
            3: [
                [0, 6],
                [21, 23],
            ],
            4: [[0, 6], 81],
            5: [
                [0, 3],
                [21, 23],
            ],
            6: [[0, 2], [11, 13], 34, [81, 87]],
            7: [[0, 5], 24, 25, [81, 86]],
            8: [[0, 2], 11, [26, 32], [81, 83]],
            9: [[0, 3], 11, 21, 23, 82, 83],
            10: [
                [0, 2],
                [81, 83],
            ],
            11: [[0, 3], 21, 22],
            12: [[0, 3]],
            13: [[0, 2], 11, 12, [21, 29]],
            14: [[0, 2], [21, 28], 81, 82],
            15: [[0, 2], [21, 26], 81],
            16: [
                [0, 2],
                [21, 26],
            ],
            17: [
                [0, 2],
                [21, 28],
            ],
        },
        41: {
            0: [0],
            1: [[0, 6], 8, 22, [81, 85]],
            2: [[0, 5], 11, [21, 25]],
            3: [[0, 7], 11, [22, 29], 81],
            4: [[0, 4], 11, [21, 23], 25, 81, 82],
            5: [[0, 3], 5, 6, 22, 23, 26, 27, 81],
            6: [[0, 3], 11, 21, 22],
            7: [[0, 4], 11, 21, [24, 28], 81, 82],
            8: [[0, 4], 11, [21, 23], 25, [81, 83]],
            9: [[0, 2], 22, 23, [26, 28]],
            10: [[0, 2], [23, 25], 81, 82],
            11: [
                [0, 4],
                [21, 23],
            ],
            12: [[0, 2], 21, 22, 24, 81, 82],
            13: [[0, 3], [21, 30], 81],
            14: [[0, 3], [21, 26], 81],
            15: [
                [0, 3],
                [21, 28],
            ],
            16: [[0, 2], [21, 28], 81],
            17: [
                [0, 2],
                [21, 29],
            ],
            90: [0, 1],
        },
        42: {
            0: [0],
            1: [
                [0, 7],
                [11, 17],
            ],
            2: [[0, 5], 22, 81],
            3: [[0, 3], [21, 25], 81],
            5: [
                [0, 6],
                [25, 29],
                [81, 83],
            ],
            6: [[0, 2], 6, 7, [24, 26], [82, 84]],
            7: [[0, 4]],
            8: [[0, 2], 4, 21, 22, 81],
            9: [[0, 2], [21, 23], 81, 82, 84],
            10: [[0, 3], [22, 24], 81, 83, 87],
            11: [[0, 2], [21, 27], 81, 82],
            12: [[0, 2], [21, 24], 81],
            13: [[0, 3], 21, 81],
            28: [[0, 2], 22, 23, [25, 28]],
            90: [0, [4, 6], 21],
        },
        43: {
            0: [0],
            1: [[0, 5], 11, 12, 21, 22, 24, 81],
            2: [[0, 4], 11, 21, [23, 25], 81],
            3: [[0, 2], 4, 21, 81, 82],
            4: [0, 1, [5, 8], 12, [21, 24], 26, 81, 82],
            5: [[0, 3], 11, [21, 25], [27, 29], 81],
            6: [[0, 3], 11, 21, 23, 24, 26, 81, 82],
            7: [[0, 3], [21, 26], 81],
            8: [[0, 2], 11, 21, 22],
            9: [[0, 3], [21, 23], 81],
            10: [[0, 3], [21, 28], 81],
            11: [
                [0, 3],
                [21, 29],
            ],
            12: [[0, 2], [21, 30], 81],
            13: [[0, 2], 21, 22, 81, 82],
            31: [0, 1, [22, 27], 30],
        },
        44: {
            0: [0],
            1: [[0, 7], [11, 16], 83, 84],
            2: [[0, 5], 21, 22, 24, 29, 32, 33, 81, 82],
            3: [0, 1, [3, 8]],
            4: [[0, 4]],
            5: [0, 1, [6, 15], 23, 82, 83],
            6: [0, 1, [4, 8]],
            7: [0, 1, [3, 5], 81, [83, 85]],
            8: [[0, 4], 11, 23, 25, [81, 83]],
            9: [[0, 3], 23, [81, 83]],
            12: [[0, 3], [23, 26], 83, 84],
            13: [[0, 3], [22, 24], 81],
            14: [[0, 2], [21, 24], 26, 27, 81],
            15: [[0, 2], 21, 23, 81],
            16: [
                [0, 2],
                [21, 25],
            ],
            17: [[0, 2], 21, 23, 81],
            18: [[0, 3], 21, 23, [25, 27], 81, 82],
            19: [0],
            20: [0],
            51: [[0, 3], 21, 22],
            52: [[0, 3], 21, 22, 24, 81],
            53: [[0, 2], [21, 23], 81],
        },
        45: {
            0: [0],
            1: [
                [0, 9],
                [21, 27],
            ],
            2: [
                [0, 5],
                [21, 26],
            ],
            3: [[0, 5], 11, 12, [21, 32]],
            4: [0, 1, [3, 6], 11, [21, 23], 81],
            5: [[0, 3], 12, 21],
            6: [[0, 3], 21, 81],
            7: [[0, 3], 21, 22],
            8: [[0, 4], 21, 81],
            9: [[0, 3], [21, 24], 81],
            10: [
                [0, 2],
                [21, 31],
            ],
            11: [
                [0, 2],
                [21, 23],
            ],
            12: [[0, 2], [21, 29], 81],
            13: [[0, 2], [21, 24], 81],
            14: [[0, 2], [21, 25], 81],
        },
        46: {
            0: [0],
            1: [0, 1, [5, 8]],
            2: [0, 1],
            3: [0, [21, 23]],
            90: [
                [0, 3],
                [5, 7],
                [21, 39],
            ],
        },
        50: {
            0: [0],
            1: [[0, 19]],
            2: [0, [22, 38], [40, 43]],
            3: [0, [81, 84]],
        },
        51: {
            0: [0],
            1: [0, 1, [4, 8], [12, 15], [21, 24], 29, 31, 32, [81, 84]],
            3: [[0, 4], 11, 21, 22],
            4: [[0, 3], 11, 21, 22],
            5: [[0, 4], 21, 22, 24, 25],
            6: [0, 1, 3, 23, 26, [81, 83]],
            7: [0, 1, 3, 4, [22, 27], 81],
            8: [[0, 2], 11, 12, [21, 24]],
            9: [
                [0, 4],
                [21, 23],
            ],
            10: [[0, 2], 11, 24, 25, 28],
            11: [[0, 2], [11, 13], 23, 24, 26, 29, 32, 33, 81],
            13: [[0, 4], [21, 25], 81],
            14: [
                [0, 2],
                [21, 25],
            ],
            15: [
                [0, 3],
                [21, 29],
            ],
            16: [[0, 3], [21, 23], 81],
            17: [[0, 3], [21, 25], 81],
            18: [
                [0, 3],
                [21, 27],
            ],
            19: [
                [0, 3],
                [21, 23],
            ],
            20: [[0, 2], 21, 22, 81],
            32: [0, [21, 33]],
            33: [0, [21, 38]],
            34: [0, 1, [22, 37]],
        },
        52: {
            0: [0],
            1: [[0, 3], [11, 15], [21, 23], 81],
            2: [0, 1, 3, 21, 22],
            3: [[0, 3], [21, 30], 81, 82],
            4: [
                [0, 2],
                [21, 25],
            ],
            5: [
                [0, 2],
                [21, 27],
            ],
            6: [
                [0, 3],
                [21, 28],
            ],
            22: [0, 1, [22, 30]],
            23: [0, 1, [22, 28]],
            24: [0, 1, [22, 28]],
            26: [0, 1, [22, 36]],
            27: [[0, 2], 22, 23, [25, 32]],
        },
        53: {
            0: [0],
            1: [[0, 3], [11, 14], 21, 22, [24, 29], 81],
            3: [[0, 2], [21, 26], 28, 81],
            4: [
                [0, 2],
                [21, 28],
            ],
            5: [
                [0, 2],
                [21, 24],
            ],
            6: [
                [0, 2],
                [21, 30],
            ],
            7: [
                [0, 2],
                [21, 24],
            ],
            8: [
                [0, 2],
                [21, 29],
            ],
            9: [
                [0, 2],
                [21, 27],
            ],
            23: [0, 1, [22, 29], 31],
            25: [
                [0, 4],
                [22, 32],
            ],
            26: [0, 1, [21, 28]],
            27: [0, 1, [22, 30]],
            28: [0, 1, 22, 23],
            29: [0, 1, [22, 32]],
            31: [0, 2, 3, [22, 24]],
            34: [0, [21, 23]],
            33: [0, 21, [23, 25]],
            35: [0, [21, 28]],
        },
        54: {
            0: [0],
            1: [
                [0, 2],
                [21, 27],
            ],
            21: [0, [21, 29], 32, 33],
            22: [0, [21, 29], [31, 33]],
            23: [0, 1, [22, 38]],
            24: [0, [21, 31]],
            25: [0, [21, 27]],
            26: [0, [21, 27]],
        },
        61: {
            0: [0],
            1: [[0, 4], [11, 16], 22, [24, 26]],
            2: [[0, 4], 22],
            3: [
                [0, 4],
                [21, 24],
                [26, 31],
            ],
            4: [[0, 4], [22, 31], 81],
            5: [[0, 2], [21, 28], 81, 82],
            6: [
                [0, 2],
                [21, 32],
            ],
            7: [
                [0, 2],
                [21, 30],
            ],
            8: [
                [0, 2],
                [21, 31],
            ],
            9: [
                [0, 2],
                [21, 29],
            ],
            10: [
                [0, 2],
                [21, 26],
            ],
        },
        62: {
            0: [0],
            1: [[0, 5], 11, [21, 23]],
            2: [0, 1],
            3: [[0, 2], 21],
            4: [
                [0, 3],
                [21, 23],
            ],
            5: [
                [0, 3],
                [21, 25],
            ],
            6: [
                [0, 2],
                [21, 23],
            ],
            7: [
                [0, 2],
                [21, 25],
            ],
            8: [
                [0, 2],
                [21, 26],
            ],
            9: [[0, 2], [21, 24], 81, 82],
            10: [
                [0, 2],
                [21, 27],
            ],
            11: [
                [0, 2],
                [21, 26],
            ],
            12: [
                [0, 2],
                [21, 28],
            ],
            24: [0, 21, [24, 29]],
            26: [0, 21, [23, 30]],
            29: [0, 1, [21, 27]],
            30: [0, 1, [21, 27]],
        },
        63: {
            0: [0],
            1: [
                [0, 5],
                [21, 23],
            ],
            2: [0, 2, [21, 25]],
            21: [0, [21, 23], [26, 28]],
            22: [0, [21, 24]],
            23: [0, [21, 24]],
            25: [0, [21, 25]],
            26: [0, [21, 26]],
            27: [0, 1, [21, 26]],
            28: [
                [0, 2],
                [21, 23],
            ],
        },
        64: {
            0: [0],
            1: [0, 1, [4, 6], 21, 22, 81],
            2: [[0, 3], 5, [21, 23]],
            3: [[0, 3], [21, 24], 81],
            4: [
                [0, 2],
                [21, 25],
            ],
            5: [[0, 2], 21, 22],
        },
        65: {
            0: [0],
            1: [[0, 9], 21],
            2: [[0, 5]],
            21: [0, 1, 22, 23],
            22: [0, 1, 22, 23],
            23: [[0, 3], [23, 25], 27, 28],
            28: [0, 1, [22, 29]],
            29: [0, 1, [22, 29]],
            30: [0, 1, [22, 24]],
            31: [0, 1, [21, 31]],
            32: [0, 1, [21, 27]],
            40: [0, 2, 3, [21, 28]],
            42: [[0, 2], 21, [23, 26]],
            43: [0, 1, [21, 26]],
            90: [[0, 4]],
            27: [[0, 2], 22, 23],
        },
        71: { 0: [0] },
        81: { 0: [0] },
        82: { 0: [0] },
    };
    var provincial = parseInt(v.substr(0, 2), 10);
    var prefectural = parseInt(v.substr(2, 2), 10);
    var county = parseInt(v.substr(4, 2), 10);
    if (!adminDivisionCodes[provincial] || !adminDivisionCodes[provincial][prefectural]) {
        return {
            meta: {},
            valid: false,
        };
    }
    var inRange = false;
    var rangeDef = adminDivisionCodes[provincial][prefectural];
    var i;
    for (i = 0; i < rangeDef.length; i++) {
        if ((Array.isArray(rangeDef[i]) && rangeDef[i][0] <= county && county <= rangeDef[i][1]) ||
            (!Array.isArray(rangeDef[i]) && county === rangeDef[i])) {
            inRange = true;
            break;
        }
    }
    if (!inRange) {
        return {
            meta: {},
            valid: false,
        };
    }
    // Check date of birth
    var dob;
    if (v.length === 18) {
        dob = v.substr(6, 8);
    } /* length == 15 */
    else {
        dob = "19".concat(v.substr(6, 6));
    }
    var year = parseInt(dob.substr(0, 4), 10);
    var month = parseInt(dob.substr(4, 2), 10);
    var day = parseInt(dob.substr(6, 2), 10);
    if (!isValidDate$c(year, month, day)) {
        return {
            meta: {},
            valid: false,
        };
    }
    // Check checksum (18-digit system only)
    if (v.length === 18) {
        var weight = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        var sum = 0;
        for (i = 0; i < 17; i++) {
            sum += parseInt(v.charAt(i), 10) * weight[i];
        }
        sum = (12 - (sum % 11)) % 11;
        var checksum = v.charAt(17).toUpperCase() !== 'X' ? parseInt(v.charAt(17), 10) : 10;
        return {
            meta: {},
            valid: checksum === sum,
        };
    }
    return {
        meta: {},
        valid: true,
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Colombian identification number (NIT)
 * @see https://es.wikipedia.org/wiki/N%C3%BAmero_de_Identificaci%C3%B3n_Tributaria
 * @returns {ValidateResult}
 */
function coId(value) {
    var v = value.replace(/\./g, '').replace('-', '');
    if (!/^\d{8,16}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var length = v.length;
    var weight = [3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67, 71];
    var sum = 0;
    for (var i = length - 2; i >= 0; i--) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    sum = sum % 11;
    if (sum >= 2) {
        sum = 11 - sum;
    }
    return {
        meta: {},
        valid: "".concat(sum) === v.substr(length - 1),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var isValidDate$b = utils.isValidDate;
/**
 * Validate Czech national identification number (RC)
 *
 * @returns {ValidateResult}
 */
function czId(value) {
    if (!/^\d{9,10}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var year = 1900 + parseInt(value.substr(0, 2), 10);
    var month = (parseInt(value.substr(2, 2), 10) % 50) % 20;
    var day = parseInt(value.substr(4, 2), 10);
    if (value.length === 9) {
        if (year >= 1980) {
            year -= 100;
        }
        if (year > 1953) {
            return {
                meta: {},
                valid: false,
            };
        }
    }
    else if (year < 1954) {
        year += 100;
    }
    if (!isValidDate$b(year, month, day)) {
        return {
            meta: {},
            valid: false,
        };
    }
    // Check that the birth date is not in the future
    if (value.length === 10) {
        var check = parseInt(value.substr(0, 9), 10) % 11;
        if (year < 1985) {
            check = check % 10;
        }
        return {
            meta: {},
            valid: "".concat(check) === value.substr(9, 1),
        };
    }
    return {
        meta: {},
        valid: true,
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var isValidDate$a = utils.isValidDate;
/**
 * Validate Danish Personal Identification number (CPR)
 *
 * @see https://en.wikipedia.org/wiki/Personal_identification_number_(Denmark)
 * @returns {ValidateResult}
 */
function dkId(value) {
    if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var v = value.replace(/-/g, '');
    var day = parseInt(v.substr(0, 2), 10);
    var month = parseInt(v.substr(2, 2), 10);
    var year = parseInt(v.substr(4, 2), 10);
    switch (true) {
        case '5678'.indexOf(v.charAt(6)) !== -1 && year >= 58:
            year += 1800;
            break;
        case '0123'.indexOf(v.charAt(6)) !== -1:
        case '49'.indexOf(v.charAt(6)) !== -1 && year >= 37:
            year += 1900;
            break;
        default:
            year += 2000;
            break;
    }
    return {
        meta: {},
        valid: isValidDate$a(year, month, day),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Spanish personal identity code (DNI)
 * Support DNI (for Spanish citizens), NIE (for foreign people) and CIF (for legal entities)
 *
 * @see https://en.wikipedia.org/wiki/National_identification_number#Spain
 * @returns {ValidateResult}
 */
function esId(value) {
    var isDNI = /^[0-9]{8}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(value);
    var isNIE = /^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[A-HJ-NP-TV-Z]$/.test(value);
    var isCIF = /^[A-HNPQS][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-J]$/.test(value);
    if (!isDNI && !isNIE && !isCIF) {
        return {
            meta: {},
            valid: false,
        };
    }
    var v = value.replace(/-/g, '');
    var check;
    var tpe;
    var isValid = true;
    if (isDNI || isNIE) {
        tpe = 'DNI';
        var index = 'XYZ'.indexOf(v.charAt(0));
        if (index !== -1) {
            // It is NIE number
            v = index + v.substr(1) + '';
            tpe = 'NIE';
        }
        check = parseInt(v.substr(0, 8), 10);
        check = 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23];
        return {
            meta: {
                type: tpe,
            },
            valid: check === v.substr(8, 1),
        };
    }
    else {
        check = v.substr(1, 7);
        tpe = 'CIF';
        var letter = v[0];
        var control = v.substr(-1);
        var sum = 0;
        // The digits in the even positions are added to the sum directly.
        // The ones in the odd positions are multiplied by 2 and then added to the sum.
        // If the result of multiplying by 2 is 10 or higher, add the two digits
        // together and add that to the sum instead
        for (var i = 0; i < check.length; i++) {
            if (i % 2 !== 0) {
                sum += parseInt(check[i], 10);
            }
            else {
                var tmp = '' + parseInt(check[i], 10) * 2;
                sum += parseInt(tmp[0], 10);
                if (tmp.length === 2) {
                    sum += parseInt(tmp[1], 10);
                }
            }
        }
        // The control digit is calculated from the last digit of the sum.
        // If that last digit is not 0, subtract it from 10
        var lastDigit = sum - Math.floor(sum / 10) * 10;
        if (lastDigit !== 0) {
            lastDigit = 10 - lastDigit;
        }
        if ('KQS'.indexOf(letter) !== -1) {
            // If the CIF starts with a K, Q or S, the control digit must be a letter
            isValid = control === 'JABCDEFGHI'[lastDigit];
        }
        else if ('ABEH'.indexOf(letter) !== -1) {
            // If it starts with A, B, E or H, it has to be a number
            isValid = control === '' + lastDigit;
        }
        else {
            // In any other case, it doesn't matter
            isValid = control === '' + lastDigit || control === 'JABCDEFGHI'[lastDigit];
        }
        return {
            meta: {
                type: tpe,
            },
            valid: isValid,
        };
    }
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var isValidDate$9 = utils.isValidDate;
/**
 * Validate Finnish Personal Identity Code (HETU)
 *
 * @returns {ValidateResult}
 */
function fiId(value) {
    if (!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var day = parseInt(value.substr(0, 2), 10);
    var month = parseInt(value.substr(2, 2), 10);
    var year = parseInt(value.substr(4, 2), 10);
    var centuries = {
        '+': 1800,
        '-': 1900,
        A: 2000,
    };
    year = centuries[value.charAt(6)] + year;
    if (!isValidDate$9(year, month, day)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var individual = parseInt(value.substr(7, 3), 10);
    if (individual < 2) {
        return {
            meta: {},
            valid: false,
        };
    }
    var n = parseInt(value.substr(0, 6) + value.substr(7, 3) + '', 10);
    return {
        meta: {},
        valid: '0123456789ABCDEFHJKLMNPRSTUVWXY'.charAt(n % 31) === value.charAt(10),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate French identification number (NIR)
 *
 * @see https://en.wikipedia.org/wiki/INSEE_code
 * @see https://fr.wikipedia.org/wiki/Num%C3%A9ro_de_s%C3%A9curit%C3%A9_sociale_en_France
 * @returns {ValidateResult}
 */
function frId(value) {
    var v = value.toUpperCase();
    if (!/^(1|2)\d{2}\d{2}(\d{2}|\d[A-Z]|\d{3})\d{2,3}\d{3}\d{2}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    // The COG group can be 2 digits or 2A or 2B
    var cog = v.substr(5, 2);
    switch (true) {
        case /^\d{2}$/.test(cog):
            v = value;
            break;
        case cog === '2A':
            v = "".concat(value.substr(0, 5), "19").concat(value.substr(7));
            break;
        case cog === '2B':
            v = "".concat(value.substr(0, 5), "18").concat(value.substr(7));
            break;
        default:
            return {
                meta: {},
                valid: false,
            };
    }
    var mod = 97 - (parseInt(v.substr(0, 13), 10) % 97);
    var prefixWithZero = mod < 10 ? "0".concat(mod) : "".concat(mod);
    return {
        meta: {},
        valid: prefixWithZero === v.substr(13),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Hong Kong identity card number (HKID)
 *
 * @see https://en.wikipedia.org/wiki/National_identification_number#Hong_Kong
 * @returns {ValidateResult}
 */
function hkId(value) {
    var v = value.toUpperCase();
    if (!/^[A-MP-Z]{1,2}[0-9]{6}[0-9A]$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var firstChar = v.charAt(0);
    var secondChar = v.charAt(1);
    var sum = 0;
    var digitParts = v;
    if (/^[A-Z]$/.test(secondChar)) {
        sum += 9 * (10 + alphabet.indexOf(firstChar));
        sum += 8 * (10 + alphabet.indexOf(secondChar));
        digitParts = v.substr(2);
    }
    else {
        sum += 9 * 36;
        sum += 8 * (10 + alphabet.indexOf(firstChar));
        digitParts = v.substr(1);
    }
    var length = digitParts.length;
    for (var i = 0; i < length - 1; i++) {
        sum += (7 - i) * parseInt(digitParts.charAt(i), 10);
    }
    var remaining = sum % 11;
    var checkDigit = remaining === 0 ? '0' : 11 - remaining === 10 ? 'A' : "".concat(11 - remaining);
    return {
        meta: {},
        valid: checkDigit === digitParts.charAt(length - 1),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var mod11And10 = algorithms.mod11And10;
/**
 * Validate Croatian personal identification number (OIB)
 *
 * @returns {ValidateResult}
 */
function hrId(value) {
    return {
        meta: {},
        valid: /^[0-9]{11}$/.test(value) && mod11And10(value),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var verhoeff = algorithms.verhoeff;
/**
 * Validate Indian Aadhaar numbers
 * @see https://en.wikipedia.org/wiki/Aadhaar
 * @returns {ValidateResult}
 */
function idId(value) {
    if (!/^[2-9]\d{11}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var converted = value.split('').map(function (item) { return parseInt(item, 10); });
    return {
        meta: {},
        valid: verhoeff(converted),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Irish Personal Public Service Number (PPS)
 *
 * @see https://en.wikipedia.org/wiki/Personal_Public_Service_Number
 * @returns {ValidateResult}
 */
function ieId(value) {
    if (!/^\d{7}[A-W][AHWTX]?$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var getCheckDigit = function (v) {
        var input = v;
        while (input.length < 7) {
            input = "0".concat(input);
        }
        var alphabet = 'WABCDEFGHIJKLMNOPQRSTUV';
        var sum = 0;
        for (var i = 0; i < 7; i++) {
            sum += parseInt(input.charAt(i), 10) * (8 - i);
        }
        sum += 9 * alphabet.indexOf(input.substr(7));
        return alphabet[sum % 23];
    };
    // 2013 format
    var isValid = value.length === 9 && ('A' === value.charAt(8) || 'H' === value.charAt(8))
        ? value.charAt(7) === getCheckDigit(value.substr(0, 7) + value.substr(8) + '')
        : // The old format
            value.charAt(7) === getCheckDigit(value.substr(0, 7));
    return {
        meta: {},
        valid: isValid,
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var luhn$2 = algorithms.luhn;
/**
 * Validate Israeli identity number (Mispar Zehut)
 *
 * @see https://gist.github.com/freak4pc/6802be89d019bca57756a675d761c5a8
 * @see http://halemo.net/info/idcard/
 * @returns {ValidateResult}
 */
function ilId(value) {
    if (!/^\d{1,9}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    return {
        meta: {},
        valid: luhn$2(value),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var isValidDate$8 = utils.isValidDate;
/**
 * Validate Iceland national identification number (Kennitala)
 *
 * @see http://en.wikipedia.org/wiki/Kennitala
 * @returns {ValidateResult}
 */
function isId(value) {
    if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var v = value.replace(/-/g, '');
    var day = parseInt(v.substr(0, 2), 10);
    var month = parseInt(v.substr(2, 2), 10);
    var year = parseInt(v.substr(4, 2), 10);
    var century = parseInt(v.charAt(9), 10);
    year = century === 9 ? 1900 + year : (20 + century) * 100 + year;
    if (!isValidDate$8(year, month, day, true)) {
        return {
            meta: {},
            valid: false,
        };
    }
    // Validate the check digit
    var weight = [3, 2, 7, 6, 5, 4, 3, 2];
    var sum = 0;
    for (var i = 0; i < 8; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    sum = 11 - (sum % 11);
    return {
        meta: {},
        valid: "".concat(sum) === v.charAt(8),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var isValidDate$7 = utils.isValidDate;
/**
 * Validate Korean registration number (RRN)
 *
 * @see https://en.wikipedia.org/wiki/Resident_registration_number
 * @returns {ValidateResult}
 */
function krId(value) {
    var v = value.replace('-', '');
    if (!/^\d{13}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    // Check the date of birth
    var sDigit = v.charAt(6);
    var year = parseInt(v.substr(0, 2), 10);
    var month = parseInt(v.substr(2, 2), 10);
    var day = parseInt(v.substr(4, 2), 10);
    switch (sDigit) {
        case '1':
        case '2':
        case '5':
        case '6':
            year += 1900;
            break;
        case '3':
        case '4':
        case '7':
        case '8':
            year += 2000;
            break;
        default:
            year += 1800;
            break;
    }
    if (!isValidDate$7(year, month, day)) {
        return {
            meta: {},
            valid: false,
        };
    }
    // Calculate the check digit
    var weight = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
    var length = v.length;
    var sum = 0;
    for (var i = 0; i < length - 1; i++) {
        sum += weight[i] * parseInt(v.charAt(i), 10);
    }
    var checkDigit = (11 - (sum % 11)) % 10;
    return {
        meta: {},
        valid: "".concat(checkDigit) === v.charAt(length - 1),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var isValidDate$6 = utils.isValidDate;
/**
 * Validate Lithuanian Personal Code (Asmens kodas)
 *
 * @see http://en.wikipedia.org/wiki/National_identification_number#Lithuania
 * @see http://www.adomas.org/midi2007/pcode.html
 * @returns {ValidateResult}
 */
function ltId(value) {
    if (!/^[0-9]{11}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var gender = parseInt(value.charAt(0), 10);
    var year = parseInt(value.substr(1, 2), 10);
    var month = parseInt(value.substr(3, 2), 10);
    var day = parseInt(value.substr(5, 2), 10);
    var century = gender % 2 === 0 ? 17 + gender / 2 : 17 + (gender + 1) / 2;
    year = century * 100 + year;
    if (!isValidDate$6(year, month, day, true)) {
        return {
            meta: {},
            valid: false,
        };
    }
    // Validate the check digit
    var weight = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
    var sum = 0;
    var i;
    for (i = 0; i < 10; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i];
    }
    sum = sum % 11;
    if (sum !== 10) {
        return {
            meta: {},
            valid: "".concat(sum) === value.charAt(10),
        };
    }
    // Re-calculate the check digit
    sum = 0;
    weight = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
    for (i = 0; i < 10; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i];
    }
    sum = sum % 11;
    if (sum === 10) {
        sum = 0;
    }
    return {
        meta: {},
        valid: "".concat(sum) === value.charAt(10),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var isValidDate$5 = utils.isValidDate;
/**
 * Validate Latvian Personal Code (Personas kods)
 *
 * @see http://laacz.lv/2006/11/25/pk-parbaudes-algoritms/
 * @returns {ValidateResult}
 */
function lvId(value) {
    if (!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var v = value.replace(/\D/g, '');
    // Check birth date
    var day = parseInt(v.substr(0, 2), 10);
    var month = parseInt(v.substr(2, 2), 10);
    var year = parseInt(v.substr(4, 2), 10);
    year = year + 1800 + parseInt(v.charAt(6), 10) * 100;
    if (!isValidDate$5(year, month, day, true)) {
        return {
            meta: {},
            valid: false,
        };
    }
    // Check personal code
    var sum = 0;
    var weight = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9];
    for (var i = 0; i < 10; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    sum = ((sum + 1) % 11) % 10;
    return {
        meta: {},
        valid: "".concat(sum) === v.charAt(10),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * @returns {ValidateResult}
 */
function meId(value) {
    return {
        meta: {},
        valid: jmbg(value, 'ME'),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * @returns {ValidateResult}
 */
function mkId(value) {
    return {
        meta: {},
        valid: jmbg(value, 'MK'),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var isValidDate$4 = utils.isValidDate;
/**
 * Validate Mexican ID number (CURP)
 *
 * @see https://en.wikipedia.org/wiki/Unique_Population_Registry_Code
 * @returns {ValidateResult}
 */
function mxId(value) {
    var v = value.toUpperCase();
    if (!/^[A-Z]{4}\d{6}[A-Z]{6}[0-9A-Z]\d$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    // Check if the combination of initial names belongs to a back list
    // See
    // http://quemamadera.blogspot.com/2008/02/las-palabras-inconvenientes-del-curp.html
    // https://www.reddit.com/r/mexico/comments/bo8cv/hoy_aprendi_que_existe_un_catalogo_de_palabras/
    var blacklistNames = [
        'BACA',
        'BAKA',
        'BUEI',
        'BUEY',
        'CACA',
        'CACO',
        'CAGA',
        'CAGO',
        'CAKA',
        'CAKO',
        'COGE',
        'COGI',
        'COJA',
        'COJE',
        'COJI',
        'COJO',
        'COLA',
        'CULO',
        'FALO',
        'FETO',
        'GETA',
        'GUEI',
        'GUEY',
        'JETA',
        'JOTO',
        'KACA',
        'KACO',
        'KAGA',
        'KAGO',
        'KAKA',
        'KAKO',
        'KOGE',
        'KOGI',
        'KOJA',
        'KOJE',
        'KOJI',
        'KOJO',
        'KOLA',
        'KULO',
        'LILO',
        'LOCA',
        'LOCO',
        'LOKA',
        'LOKO',
        'MAME',
        'MAMO',
        'MEAR',
        'MEAS',
        'MEON',
        'MIAR',
        'MION',
        'MOCO',
        'MOKO',
        'MULA',
        'MULO',
        'NACA',
        'NACO',
        'PEDA',
        'PEDO',
        'PENE',
        'PIPI',
        'PITO',
        'POPO',
        'PUTA',
        'PUTO',
        'QULO',
        'RATA',
        'ROBA',
        'ROBE',
        'ROBO',
        'RUIN',
        'SENO',
        'TETA',
        'VACA',
        'VAGA',
        'VAGO',
        'VAKA',
        'VUEI',
        'VUEY',
        'WUEI',
        'WUEY',
    ];
    var name = v.substr(0, 4);
    if (blacklistNames.indexOf(name) >= 0) {
        return {
            meta: {},
            valid: false,
        };
    }
    // Check the date of birth
    var year = parseInt(v.substr(4, 2), 10);
    var month = parseInt(v.substr(6, 2), 10);
    var day = parseInt(v.substr(6, 2), 10);
    if (/^[0-9]$/.test(v.charAt(16))) {
        year += 1900;
    }
    else {
        year += 2000;
    }
    if (!isValidDate$4(year, month, day)) {
        return {
            meta: {},
            valid: false,
        };
    }
    // Check the gender
    var gender = v.charAt(10);
    if (gender !== 'H' && gender !== 'M') {
        // H for male, M for female
        return {
            meta: {},
            valid: false,
        };
    }
    // Check the state
    var state = v.substr(11, 2);
    var states = [
        'AS',
        'BC',
        'BS',
        'CC',
        'CH',
        'CL',
        'CM',
        'CS',
        'DF',
        'DG',
        'GR',
        'GT',
        'HG',
        'JC',
        'MC',
        'MN',
        'MS',
        'NE',
        'NL',
        'NT',
        'OC',
        'PL',
        'QR',
        'QT',
        'SL',
        'SP',
        'SR',
        'TC',
        'TL',
        'TS',
        'VZ',
        'YN',
        'ZS',
    ];
    if (states.indexOf(state) === -1) {
        return {
            meta: {},
            valid: false,
        };
    }
    // Calculate the check digit
    var alphabet = '0123456789ABCDEFGHIJKLMN&OPQRSTUVWXYZ';
    var sum = 0;
    var length = v.length;
    for (var i = 0; i < length - 1; i++) {
        sum += (18 - i) * alphabet.indexOf(v.charAt(i));
    }
    sum = (10 - (sum % 10)) % 10;
    return {
        meta: {},
        valid: "".concat(sum) === v.charAt(length - 1),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var isValidDate$3 = utils.isValidDate;
/**
 * Validate Malaysian identity card number
 *
 * @see https://en.wikipedia.org/wiki/Malaysian_identity_card
 * @returns {ValidateResult}
 */
function myId(value) {
    if (!/^\d{12}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    // Validate date of birth
    var year = parseInt(value.substr(0, 2), 10);
    var month = parseInt(value.substr(2, 2), 10);
    var day = parseInt(value.substr(4, 2), 10);
    if (!isValidDate$3(year + 1900, month, day) && !isValidDate$3(year + 2000, month, day)) {
        return {
            meta: {},
            valid: false,
        };
    }
    // Validate place of birth
    var placeOfBirth = value.substr(6, 2);
    var notAvailablePlaces = ['17', '18', '19', '20', '69', '70', '73', '80', '81', '94', '95', '96', '97'];
    return {
        meta: {},
        valid: notAvailablePlaces.indexOf(placeOfBirth) === -1,
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Dutch national identification number (BSN)
 *
 * @see https://nl.wikipedia.org/wiki/Burgerservicenummer
 * @returns {ValidateResult}
 */
function nlId(value) {
    if (value.length < 8) {
        return {
            meta: {},
            valid: false,
        };
    }
    var v = value;
    if (v.length === 8) {
        v = "0".concat(v);
    }
    if (!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    v = v.replace(/\./g, '');
    if (parseInt(v, 10) === 0) {
        return {
            meta: {},
            valid: false,
        };
    }
    var sum = 0;
    var length = v.length;
    for (var i = 0; i < length - 1; i++) {
        sum += (9 - i) * parseInt(v.charAt(i), 10);
    }
    sum = sum % 11;
    if (sum === 10) {
        sum = 0;
    }
    return {
        meta: {},
        valid: "".concat(sum) === v.charAt(length - 1),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Norwegian identity number (Fødselsnummer)
 *
 * @see https://no.wikipedia.org/wiki/F%C3%B8dselsnummer
 * @returns {ValidateResult}
 */
function noId(value) {
    if (!/^\d{11}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    // Calculate the first check digit
    var firstCd = function (v) {
        var weight = [3, 7, 6, 1, 8, 9, 4, 5, 2];
        var sum = 0;
        for (var i = 0; i < 9; i++) {
            sum += weight[i] * parseInt(v.charAt(i), 10);
        }
        return 11 - (sum % 11);
    };
    // Calculate the second check digit
    var secondCd = function (v) {
        var weight = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
        var sum = 0;
        for (var i = 0; i < 10; i++) {
            sum += weight[i] * parseInt(v.charAt(i), 10);
        }
        return 11 - (sum % 11);
    };
    return {
        meta: {},
        valid: "".concat(firstCd(value)) === value.substr(-2, 1) && "".concat(secondCd(value)) === value.substr(-1),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Peruvian identity number (CUI)
 *
 * @see https://es.wikipedia.org/wiki/Documento_Nacional_de_Identidad_(Per%C3%BA)
 * @returns {ValidateResult}
 */
function peId(value) {
    if (!/^\d{8}[0-9A-Z]*$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    if (value.length === 8) {
        return {
            meta: {},
            valid: true,
        };
    }
    var weight = [3, 2, 7, 6, 5, 4, 3, 2];
    var sum = 0;
    for (var i = 0; i < 8; i++) {
        sum += weight[i] * parseInt(value.charAt(i), 10);
    }
    var cd = sum % 11;
    var checkDigit = [6, 5, 4, 3, 2, 1, 1, 0, 9, 8, 7][cd];
    var checkChar = 'KJIHGFEDCBA'.charAt(cd);
    return {
        meta: {},
        valid: value.charAt(8) === "".concat(checkDigit) || value.charAt(8) === checkChar,
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Poland citizen number (PESEL)
 *
 * @see http://en.wikipedia.org/wiki/National_identification_number#Poland
 * @see http://en.wikipedia.org/wiki/PESEL
 * @returns {ValidateResult}
 */
function plId(value) {
    if (!/^[0-9]{11}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var sum = 0;
    var length = value.length;
    var weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 7];
    for (var i = 0; i < length - 1; i++) {
        sum += weight[i] * parseInt(value.charAt(i), 10);
    }
    sum = sum % 10;
    if (sum === 0) {
        sum = 10;
    }
    sum = 10 - sum;
    return {
        meta: {},
        valid: "".concat(sum) === value.charAt(length - 1),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var isValidDate$2 = utils.isValidDate;
/**
 * Validate Romanian numerical personal code (CNP)
 *
 * @see http://en.wikipedia.org/wiki/National_identification_number#Romania
 * @returns {ValidateResult}
 */
function roId(value) {
    if (!/^[0-9]{13}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var gender = parseInt(value.charAt(0), 10);
    if (gender === 0 || gender === 7 || gender === 8) {
        return {
            meta: {},
            valid: false,
        };
    }
    // Determine the date of birth
    var year = parseInt(value.substr(1, 2), 10);
    var month = parseInt(value.substr(3, 2), 10);
    var day = parseInt(value.substr(5, 2), 10);
    // The year of date is determined base on the gender
    var centuries = {
        1: 1900,
        2: 1900,
        3: 1800,
        4: 1800,
        5: 2000,
        6: 2000, // Female born after 2000
    };
    if (day > 31 && month > 12) {
        return {
            meta: {},
            valid: false,
        };
    }
    if (gender !== 9) {
        year = centuries[gender + ''] + year;
        if (!isValidDate$2(year, month, day)) {
            return {
                meta: {},
                valid: false,
            };
        }
    }
    // Validate the check digit
    var sum = 0;
    var weight = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9];
    var length = value.length;
    for (var i = 0; i < length - 1; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i];
    }
    sum = sum % 11;
    if (sum === 10) {
        sum = 1;
    }
    return {
        meta: {},
        valid: "".concat(sum) === value.charAt(length - 1),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * @returns {ValidateResult}
 */
function rsId(value) {
    return {
        meta: {},
        valid: jmbg(value, 'RS'),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var luhn$1 = algorithms.luhn;
var isValidDate$1 = utils.isValidDate;
/**
 * Validate Swedish personal identity number (personnummer)
 *
 * @see http://en.wikipedia.org/wiki/Personal_identity_number_(Sweden)
 * @returns {ValidateResult}
 */
function seId(value) {
    if (!/^[0-9]{10}$/.test(value) && !/^[0-9]{6}[-|+][0-9]{4}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var v = value.replace(/[^0-9]/g, '');
    var year = parseInt(v.substr(0, 2), 10) + 1900;
    var month = parseInt(v.substr(2, 2), 10);
    var day = parseInt(v.substr(4, 2), 10);
    if (!isValidDate$1(year, month, day)) {
        return {
            meta: {},
            valid: false,
        };
    }
    // Validate the last check digit
    return {
        meta: {},
        valid: luhn$1(v),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * @returns {ValidateResult}
 */
function siId(value) {
    return {
        meta: {},
        valid: jmbg(value, 'SI'),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate San Marino citizen number
 *
 * @see http://en.wikipedia.org/wiki/National_identification_number#San_Marino
 * @returns {ValidateResult}
 */
function smId(value) {
    return {
        meta: {},
        valid: /^\d{5}$/.test(value),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Thailand citizen number
 *
 * @see http://en.wikipedia.org/wiki/National_identification_number#Thailand
 * @returns {ValidateResult}
 */
function thId(value) {
    if (value.length !== 13) {
        return {
            meta: {},
            valid: false,
        };
    }
    var sum = 0;
    for (var i = 0; i < 12; i++) {
        sum += parseInt(value.charAt(i), 10) * (13 - i);
    }
    return {
        meta: {},
        valid: (11 - (sum % 11)) % 10 === parseInt(value.charAt(12), 10),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Turkish Identification Number
 *
 * @see https://en.wikipedia.org/wiki/Turkish_Identification_Number
 * @returns {ValidateResult}
 */
function trId(value) {
    if (value.length !== 11) {
        return {
            meta: {},
            valid: false,
        };
    }
    var sum = 0;
    for (var i = 0; i < 10; i++) {
        sum += parseInt(value.charAt(i), 10);
    }
    return {
        meta: {},
        valid: sum % 10 === parseInt(value.charAt(10), 10),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Taiwan identity card number
 *
 * @see https://en.wikipedia.org/wiki/National_identification_number#Taiwan
 * @returns {ValidateResult}
 */
function twId(value) {
    var v = value.toUpperCase();
    if (!/^[A-Z][12][0-9]{8}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var length = v.length;
    var alphabet = 'ABCDEFGHJKLMNPQRSTUVXYWZIO';
    var letterIndex = alphabet.indexOf(v.charAt(0)) + 10;
    var letterValue = Math.floor(letterIndex / 10) + (letterIndex % 10) * (length - 1);
    var sum = 0;
    for (var i = 1; i < length - 1; i++) {
        sum += parseInt(v.charAt(i), 10) * (length - 1 - i);
    }
    return {
        meta: {},
        valid: (letterValue + sum + parseInt(v.charAt(length - 1), 10)) % 10 === 0,
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Uruguayan identity document
 *
 * @see https://en.wikipedia.org/wiki/Identity_document#Uruguay
 * @returns {ValidateResult}
 */
function uyId(value) {
    if (!/^\d{8}$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var weight = [2, 9, 8, 7, 6, 3, 4];
    var sum = 0;
    for (var i = 0; i < 7; i++) {
        sum += parseInt(value.charAt(i), 10) * weight[i];
    }
    sum = sum % 10;
    if (sum > 0) {
        sum = 10 - sum;
    }
    return {
        meta: {},
        valid: "".concat(sum) === value.charAt(7),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var luhn = algorithms.luhn;
var isValidDate = utils.isValidDate;
/**
 * Validate South African ID
 *
 * @see http://en.wikipedia.org/wiki/National_identification_number#South_Africa
 * @returns {ValidateResult}
 */
function zaId(value) {
    if (!/^[0-9]{10}[0|1][8|9][0-9]$/.test(value)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var year = parseInt(value.substr(0, 2), 10);
    var currentYear = new Date().getFullYear() % 100;
    var month = parseInt(value.substr(2, 2), 10);
    var day = parseInt(value.substr(4, 2), 10);
    year = year >= currentYear ? year + 1900 : year + 2000;
    if (!isValidDate(year, month, day)) {
        return {
            meta: {},
            valid: false,
        };
    }
    // Validate the last check digit
    return {
        meta: {},
        valid: luhn(value),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var format = utils.format, removeUndefined = utils.removeUndefined;
function id() {
    // Supported country codes
    var COUNTRY_CODES = [
        'AR',
        'BA',
        'BG',
        'BR',
        'CH',
        'CL',
        'CN',
        'CO',
        'CZ',
        'DK',
        'EE',
        'ES',
        'FI',
        'FR',
        'HK',
        'HR',
        'ID',
        'IE',
        'IL',
        'IS',
        'KR',
        'LT',
        'LV',
        'ME',
        'MK',
        'MX',
        'MY',
        'NL',
        'NO',
        'PE',
        'PL',
        'RO',
        'RS',
        'SE',
        'SI',
        'SK',
        'SM',
        'TH',
        'TR',
        'TW',
        'UY',
        'ZA',
    ];
    return {
        /**
         * Validate identification number in different countries
         * @see http://en.wikipedia.org/wiki/National_identification_number
         */
        validate: function (input) {
            if (input.value === '') {
                return { valid: true };
            }
            var opts = Object.assign({}, { message: '' }, removeUndefined(input.options));
            var country = input.value.substr(0, 2);
            if ('function' === typeof opts.country) {
                country = opts.country.call(this);
            }
            else {
                country = opts.country;
            }
            if (COUNTRY_CODES.indexOf(country) === -1) {
                return { valid: true };
            }
            var result = {
                meta: {},
                valid: true,
            };
            switch (country.toLowerCase()) {
                case 'ar':
                    result = arId(input.value);
                    break;
                case 'ba':
                    result = baId(input.value);
                    break;
                case 'bg':
                    result = bgId(input.value);
                    break;
                case 'br':
                    result = brId(input.value);
                    break;
                case 'ch':
                    result = chId(input.value);
                    break;
                case 'cl':
                    result = clId(input.value);
                    break;
                case 'cn':
                    result = cnId(input.value);
                    break;
                case 'co':
                    result = coId(input.value);
                    break;
                case 'cz':
                    result = czId(input.value);
                    break;
                case 'dk':
                    result = dkId(input.value);
                    break;
                // Validate Estonian Personal Identification Code (isikukood)
                // Use the same format as Lithuanian Personal Code
                // See http://et.wikipedia.org/wiki/Isikukood
                case 'ee':
                    result = ltId(input.value);
                    break;
                case 'es':
                    result = esId(input.value);
                    break;
                case 'fi':
                    result = fiId(input.value);
                    break;
                case 'fr':
                    result = frId(input.value);
                    break;
                case 'hk':
                    result = hkId(input.value);
                    break;
                case 'hr':
                    result = hrId(input.value);
                    break;
                case 'id':
                    result = idId(input.value);
                    break;
                case 'ie':
                    result = ieId(input.value);
                    break;
                case 'il':
                    result = ilId(input.value);
                    break;
                case 'is':
                    result = isId(input.value);
                    break;
                case 'kr':
                    result = krId(input.value);
                    break;
                case 'lt':
                    result = ltId(input.value);
                    break;
                case 'lv':
                    result = lvId(input.value);
                    break;
                case 'me':
                    result = meId(input.value);
                    break;
                case 'mk':
                    result = mkId(input.value);
                    break;
                case 'mx':
                    result = mxId(input.value);
                    break;
                case 'my':
                    result = myId(input.value);
                    break;
                case 'nl':
                    result = nlId(input.value);
                    break;
                case 'no':
                    result = noId(input.value);
                    break;
                case 'pe':
                    result = peId(input.value);
                    break;
                case 'pl':
                    result = plId(input.value);
                    break;
                case 'ro':
                    result = roId(input.value);
                    break;
                case 'rs':
                    result = rsId(input.value);
                    break;
                case 'se':
                    result = seId(input.value);
                    break;
                case 'si':
                    result = siId(input.value);
                    break;
                // Validate Slovak national identifier number (RC)
                // Slovakia uses the same format as Czech Republic
                case 'sk':
                    result = czId(input.value);
                    break;
                case 'sm':
                    result = smId(input.value);
                    break;
                case 'th':
                    result = thId(input.value);
                    break;
                case 'tr':
                    result = trId(input.value);
                    break;
                case 'tw':
                    result = twId(input.value);
                    break;
                case 'uy':
                    result = uyId(input.value);
                    break;
                case 'za':
                    result = zaId(input.value);
                    break;
            }
            var message = format(input.l10n && input.l10n.id ? opts.message || input.l10n.id.country : opts.message, input.l10n && input.l10n.id && input.l10n.id.countries
                ? input.l10n.id.countries[country.toUpperCase()]
                : country.toUpperCase());
            return Object.assign({}, { message: message }, result);
        },
    };
}

export { id };
