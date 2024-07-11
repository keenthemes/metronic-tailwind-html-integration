'use strict';

var core = require('@form-validation/core');

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Argentinian VAT number
 *
 * @see https://es.wikipedia.org/wiki/Clave_%C3%9Anica_de_Identificaci%C3%B3n_Tributaria
 * @returns {ValidateResult}
 */
function arVat(value) {
    // Replace `-` with empty
    var v = value.replace('-', '');
    if (/^AR[0-9]{11}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{11}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var weight = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
    var sum = 0;
    for (var i = 0; i < 10; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    sum = 11 - (sum % 11);
    if (sum === 11) {
        sum = 0;
    }
    return {
        meta: {},
        valid: "".concat(sum) === v.substr(10),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Austrian VAT number
 *
 * @returns {ValidateResult}
 */
function atVat(value) {
    var v = value;
    if (/^ATU[0-9]{8}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^U[0-9]{8}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    v = v.substr(1);
    var weight = [1, 2, 1, 2, 1, 2, 1];
    var sum = 0;
    var temp = 0;
    for (var i = 0; i < 7; i++) {
        temp = parseInt(v.charAt(i), 10) * weight[i];
        if (temp > 9) {
            temp = Math.floor(temp / 10) + (temp % 10);
        }
        sum += temp;
    }
    sum = 10 - ((sum + 4) % 10);
    if (sum === 10) {
        sum = 0;
    }
    return {
        meta: {},
        valid: "".concat(sum) === v.substr(7, 1),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Belgian VAT number
 *
 * @returns {ValidateResult}
 */
function beVat(value) {
    var v = value;
    if (/^BE[0]?[0-9]{9}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0]?[0-9]{9}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    if (v.length === 9) {
        v = "0".concat(v);
    }
    if (v.substr(1, 1) === '0') {
        return {
            meta: {},
            valid: false,
        };
    }
    var sum = parseInt(v.substr(0, 8), 10) + parseInt(v.substr(8, 2), 10);
    return {
        meta: {},
        valid: sum % 97 === 0,
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var isValidDate$2 = core.utils.isValidDate;
/**
 * Validate Bulgarian VAT number
 *
 * @returns {ValidateResult}
 */
function bgVat(value) {
    var v = value;
    if (/^BG[0-9]{9,10}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{9,10}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var sum = 0;
    var i = 0;
    // Legal entities
    if (v.length === 9) {
        for (i = 0; i < 8; i++) {
            sum += parseInt(v.charAt(i), 10) * (i + 1);
        }
        sum = sum % 11;
        if (sum === 10) {
            sum = 0;
            for (i = 0; i < 8; i++) {
                sum += parseInt(v.charAt(i), 10) * (i + 3);
            }
            sum = sum % 11;
        }
        sum = sum % 10;
        return {
            meta: {},
            valid: "".concat(sum) === v.substr(8),
        };
    }
    else {
        // Physical persons, foreigners and others
        // Validate Bulgarian national identification numbers
        var isEgn = function (input) {
            // Check the birth date
            var year = parseInt(input.substr(0, 2), 10) + 1900;
            var month = parseInt(input.substr(2, 2), 10);
            var day = parseInt(input.substr(4, 2), 10);
            if (month > 40) {
                year += 100;
                month -= 40;
            }
            else if (month > 20) {
                year -= 100;
                month -= 20;
            }
            if (!isValidDate$2(year, month, day)) {
                return false;
            }
            var weight = [2, 4, 8, 5, 10, 9, 7, 3, 6];
            var s = 0;
            for (var j = 0; j < 9; j++) {
                s += parseInt(input.charAt(j), 10) * weight[j];
            }
            s = (s % 11) % 10;
            return "".concat(s) === input.substr(9, 1);
        };
        // Validate Bulgarian personal number of a foreigner
        var isPnf = function (input) {
            var weight = [21, 19, 17, 13, 11, 9, 7, 3, 1];
            var s = 0;
            for (var j = 0; j < 9; j++) {
                s += parseInt(input.charAt(j), 10) * weight[j];
            }
            s = s % 10;
            return "".concat(s) === input.substr(9, 1);
        };
        // Finally, consider it as a VAT number
        var isVat = function (input) {
            var weight = [4, 3, 2, 7, 6, 5, 4, 3, 2];
            var s = 0;
            for (var j = 0; j < 9; j++) {
                s += parseInt(input.charAt(j), 10) * weight[j];
            }
            s = 11 - (s % 11);
            if (s === 10) {
                return false;
            }
            if (s === 11) {
                s = 0;
            }
            return "".concat(s) === input.substr(9, 1);
        };
        return {
            meta: {},
            valid: isEgn(v) || isPnf(v) || isVat(v),
        };
    }
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Brazilian VAT number (CNPJ)
 *
 * @returns {ValidateResult}
 */
function brVat(value) {
    if (value === '') {
        return {
            meta: {},
            valid: true,
        };
    }
    var cnpj = value.replace(/[^\d]+/g, '');
    if (cnpj === '' || cnpj.length !== 14) {
        return {
            meta: {},
            valid: false,
        };
    }
    // Remove invalids CNPJs
    if (cnpj === '00000000000000' ||
        cnpj === '11111111111111' ||
        cnpj === '22222222222222' ||
        cnpj === '33333333333333' ||
        cnpj === '44444444444444' ||
        cnpj === '55555555555555' ||
        cnpj === '66666666666666' ||
        cnpj === '77777777777777' ||
        cnpj === '88888888888888' ||
        cnpj === '99999999999999') {
        return {
            meta: {},
            valid: false,
        };
    }
    // Validate verification digits
    var length = cnpj.length - 2;
    var numbers = cnpj.substring(0, length);
    var digits = cnpj.substring(length);
    var sum = 0;
    var pos = length - 7;
    var i;
    for (i = length; i >= 1; i--) {
        sum += parseInt(numbers.charAt(length - i), 10) * pos--;
        if (pos < 2) {
            pos = 9;
        }
    }
    var result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (result !== parseInt(digits.charAt(0), 10)) {
        return {
            meta: {},
            valid: false,
        };
    }
    length = length + 1;
    numbers = cnpj.substring(0, length);
    sum = 0;
    pos = length - 7;
    for (i = length; i >= 1; i--) {
        sum += parseInt(numbers.charAt(length - i), 10) * pos--;
        if (pos < 2) {
            pos = 9;
        }
    }
    result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    return {
        meta: {},
        valid: result === parseInt(digits.charAt(1), 10),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Swiss VAT number
 *
 * @returns {ValidateResult}
 */
function chVat(value) {
    var v = value;
    if (/^CHE[0-9]{9}(MWST|TVA|IVA|TPV)?$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^E[0-9]{9}(MWST|TVA|IVA|TPV)?$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    v = v.substr(1);
    var weight = [5, 4, 3, 2, 7, 6, 5, 4];
    var sum = 0;
    for (var i = 0; i < 8; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    sum = 11 - (sum % 11);
    if (sum === 10) {
        return {
            meta: {},
            valid: false,
        };
    }
    if (sum === 11) {
        sum = 0;
    }
    return {
        meta: {},
        valid: "".concat(sum) === v.substr(8, 1),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Cypriot VAT number
 *
 * @returns {ValidateResult}
 */
function cyVat(value) {
    var v = value;
    if (/^CY[0-5|9][0-9]{7}[A-Z]$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-5|9][0-9]{7}[A-Z]$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    // Do not allow to start with "12"
    if (v.substr(0, 2) === '12') {
        return {
            meta: {},
            valid: false,
        };
    }
    // Extract the next digit and multiply by the counter.
    var sum = 0;
    var translation = {
        0: 1,
        1: 0,
        2: 5,
        3: 7,
        4: 9,
        5: 13,
        6: 15,
        7: 17,
        8: 19,
        9: 21,
    };
    for (var i = 0; i < 8; i++) {
        var temp = parseInt(v.charAt(i), 10);
        if (i % 2 === 0) {
            temp = translation["".concat(temp)];
        }
        sum += temp;
    }
    return {
        meta: {},
        valid: "".concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ'[sum % 26]) === v.substr(8, 1),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var isValidDate$1 = core.utils.isValidDate;
/**
 * Validate Czech Republic VAT number
 *
 * @returns {ValidateResult}
 */
function czVat(value) {
    var v = value;
    if (/^CZ[0-9]{8,10}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{8,10}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var sum = 0;
    var i = 0;
    if (v.length === 8) {
        // Do not allow to start with '9'
        if ("".concat(v.charAt(0)) === '9') {
            return {
                meta: {},
                valid: false,
            };
        }
        sum = 0;
        for (i = 0; i < 7; i++) {
            sum += parseInt(v.charAt(i), 10) * (8 - i);
        }
        sum = 11 - (sum % 11);
        if (sum === 10) {
            sum = 0;
        }
        if (sum === 11) {
            sum = 1;
        }
        return {
            meta: {},
            valid: "".concat(sum) === v.substr(7, 1),
        };
    }
    else if (v.length === 9 && "".concat(v.charAt(0)) === '6') {
        sum = 0;
        // Skip the first (which is 6)
        for (i = 0; i < 7; i++) {
            sum += parseInt(v.charAt(i + 1), 10) * (8 - i);
        }
        sum = 11 - (sum % 11);
        if (sum === 10) {
            sum = 0;
        }
        if (sum === 11) {
            sum = 1;
        }
        sum = [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10][sum - 1];
        return {
            meta: {},
            valid: "".concat(sum) === v.substr(8, 1),
        };
    }
    else if (v.length === 9 || v.length === 10) {
        // Validate Czech birth number (Rodné číslo), which is also national identifier
        var year = 1900 + parseInt(v.substr(0, 2), 10);
        var month = (parseInt(v.substr(2, 2), 10) % 50) % 20;
        var day = parseInt(v.substr(4, 2), 10);
        if (v.length === 9) {
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
        if (!isValidDate$1(year, month, day)) {
            return {
                meta: {},
                valid: false,
            };
        }
        // Check that the birth date is not in the future
        if (v.length === 10) {
            var check = parseInt(v.substr(0, 9), 10) % 11;
            if (year < 1985) {
                check = check % 10;
            }
            return {
                meta: {},
                valid: "".concat(check) === v.substr(9, 1),
            };
        }
        return {
            meta: {},
            valid: true,
        };
    }
    return {
        meta: {},
        valid: false,
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var mod11And10$1 = core.algorithms.mod11And10;
/**
 * Validate German VAT number
 *
 * @returns {ValidateResult}
 */
function deVat(value) {
    var v = value;
    if (/^DE[0-9]{9}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[1-9][0-9]{8}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    return {
        meta: {},
        valid: mod11And10$1(v),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Danish VAT number
 *
 * @returns {ValidateResult}
 */
function dkVat(value) {
    var v = value;
    if (/^DK[0-9]{8}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{8}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var sum = 0;
    var weight = [2, 7, 6, 5, 4, 3, 2, 1];
    for (var i = 0; i < 8; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    return {
        meta: {},
        valid: sum % 11 === 0,
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Estonian VAT number
 *
 * @returns {ValidateResult}
 */
function eeVat(value) {
    var v = value;
    if (/^EE[0-9]{9}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{9}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var sum = 0;
    var weight = [3, 7, 1, 3, 7, 1, 3, 7, 1];
    for (var i = 0; i < 9; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    return {
        meta: {},
        valid: sum % 10 === 0,
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Spanish VAT number (NIF - Número de Identificación Fiscal)
 * Can be:
 * i) DNI (Documento nacional de identidad), for Spaniards
 * ii) NIE (Número de Identificación de Extranjeros), for foreigners
 * iii) CIF (Certificado de Identificación Fiscal), for legal entities and others
 *
 * @returns {ValidateResult}
 */
function esVat(value) {
    var v = value;
    if (/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var dni = function (input) {
        var check = parseInt(input.substr(0, 8), 10);
        return "".concat('TRWAGMYFPDXBNJZSQVHLCKE'[check % 23]) === input.substr(8, 1);
    };
    var nie = function (input) {
        var check = ['XYZ'.indexOf(input.charAt(0)), input.substr(1)].join('');
        var cd = 'TRWAGMYFPDXBNJZSQVHLCKE'[parseInt(check, 10) % 23];
        return "".concat(cd) === input.substr(8, 1);
    };
    var cif = function (input) {
        var firstChar = input.charAt(0);
        var check;
        if ('KLM'.indexOf(firstChar) !== -1) {
            // K: Spanish younger than 14 year old
            // L: Spanish living outside Spain without DNI
            // M: Granted the tax to foreigners who have no NIE
            check = parseInt(input.substr(1, 8), 10);
            check = 'TRWAGMYFPDXBNJZSQVHLCKE'[check % 23];
            return "".concat(check) === input.substr(8, 1);
        }
        else if ('ABCDEFGHJNPQRSUVW'.indexOf(firstChar) !== -1) {
            var weight = [2, 1, 2, 1, 2, 1, 2];
            var sum = 0;
            var temp = 0;
            for (var i = 0; i < 7; i++) {
                temp = parseInt(input.charAt(i + 1), 10) * weight[i];
                if (temp > 9) {
                    temp = Math.floor(temp / 10) + (temp % 10);
                }
                sum += temp;
            }
            sum = 10 - (sum % 10);
            if (sum === 10) {
                sum = 0;
            }
            return "".concat(sum) === input.substr(8, 1) || 'JABCDEFGHI'[sum] === input.substr(8, 1);
        }
        return false;
    };
    var first = v.charAt(0);
    if (/^[0-9]$/.test(first)) {
        return {
            meta: {
                type: 'DNI',
            },
            valid: dni(v),
        };
    }
    else if (/^[XYZ]$/.test(first)) {
        return {
            meta: {
                type: 'NIE',
            },
            valid: nie(v),
        };
    }
    else {
        return {
            meta: {
                type: 'CIF',
            },
            valid: cif(v),
        };
    }
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Finnish VAT number
 *
 * @returns {ValidateResult}
 */
function fiVat(value) {
    var v = value;
    if (/^FI[0-9]{8}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{8}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var weight = [7, 9, 10, 5, 8, 4, 2, 1];
    var sum = 0;
    for (var i = 0; i < 8; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    return {
        meta: {},
        valid: sum % 11 === 0,
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var luhn$2 = core.algorithms.luhn;
/**
 * Validate French VAT number (TVA - taxe sur la valeur ajoutée)
 * It's constructed by a SIREN number, prefixed by two characters.
 *
 * @returns {ValidateResult}
 */
function frVat(value) {
    var v = value;
    if (/^FR[0-9A-Z]{2}[0-9]{9}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9A-Z]{2}[0-9]{9}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    if (v.substr(2, 4) !== '000') {
        return {
            meta: {},
            valid: luhn$2(v.substr(2)),
        };
    }
    if (/^[0-9]{2}$/.test(v.substr(0, 2))) {
        // First two characters are digits
        return {
            meta: {},
            valid: v.substr(0, 2) === "".concat(parseInt(v.substr(2) + '12', 10) % 97),
        };
    }
    else {
        // The first characters cann't be O and I
        var alphabet = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ';
        var check = void 0;
        // First one is digit
        if (/^[0-9]$/.test(v.charAt(0))) {
            check = alphabet.indexOf(v.charAt(0)) * 24 + alphabet.indexOf(v.charAt(1)) - 10;
        }
        else {
            check = alphabet.indexOf(v.charAt(0)) * 34 + alphabet.indexOf(v.charAt(1)) - 100;
        }
        return {
            meta: {},
            valid: (parseInt(v.substr(2), 10) + 1 + Math.floor(check / 11)) % 11 === check % 11,
        };
    }
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate United Kingdom VAT number
 *
 * @returns {ValidateResult}
 */
function gbVat(value) {
    var v = value;
    if (/^GB[0-9]{9}$/.test(v) /* Standard */ ||
        /^GB[0-9]{12}$/.test(v) /* Branches */ ||
        /^GBGD[0-9]{3}$/.test(v) /* Government department */ ||
        /^GBHA[0-9]{3}$/.test(v) /* Health authority */ ||
        /^GB(GD|HA)8888[0-9]{5}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{9}$/.test(v) &&
        !/^[0-9]{12}$/.test(v) &&
        !/^GD[0-9]{3}$/.test(v) &&
        !/^HA[0-9]{3}$/.test(v) &&
        !/^(GD|HA)8888[0-9]{5}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var length = v.length;
    if (length === 5) {
        var firstTwo = v.substr(0, 2);
        var lastThree = parseInt(v.substr(2), 10);
        return {
            meta: {},
            valid: ('GD' === firstTwo && lastThree < 500) || ('HA' === firstTwo && lastThree >= 500),
        };
    }
    else if (length === 11 && ('GD8888' === v.substr(0, 6) || 'HA8888' === v.substr(0, 6))) {
        if (('GD' === v.substr(0, 2) && parseInt(v.substr(6, 3), 10) >= 500) ||
            ('HA' === v.substr(0, 2) && parseInt(v.substr(6, 3), 10) < 500)) {
            return {
                meta: {},
                valid: false,
            };
        }
        return {
            meta: {},
            valid: parseInt(v.substr(6, 3), 10) % 97 === parseInt(v.substr(9, 2), 10),
        };
    }
    else if (length === 9 || length === 12) {
        var weight = [8, 7, 6, 5, 4, 3, 2, 10, 1];
        var sum = 0;
        for (var i = 0; i < 9; i++) {
            sum += parseInt(v.charAt(i), 10) * weight[i];
        }
        sum = sum % 97;
        var isValid = parseInt(v.substr(0, 3), 10) >= 100 ? sum === 0 || sum === 42 || sum === 55 : sum === 0;
        return {
            meta: {},
            valid: isValid,
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
 * Validate Greek VAT number
 *
 * @returns {ValidateResult}
 */
function grVat(value) {
    var v = value;
    if (/^(GR|EL)[0-9]{9}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{9}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    if (v.length === 8) {
        v = "0".concat(v);
    }
    var weight = [256, 128, 64, 32, 16, 8, 4, 2];
    var sum = 0;
    for (var i = 0; i < 8; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    sum = (sum % 11) % 10;
    return {
        meta: {},
        valid: "".concat(sum) === v.substr(8, 1),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var mod11And10 = core.algorithms.mod11And10;
/**
 * Validate Croatian VAT number
 *
 * @returns {ValidateResult}
 */
function hrVat(value) {
    var v = value;
    if (/^HR[0-9]{11}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{11}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    return {
        meta: {},
        valid: mod11And10(v),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Hungarian VAT number
 *
 * @returns {ValidateResult}
 */
function huVat(value) {
    var v = value;
    if (/^HU[0-9]{8}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{8}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var weight = [9, 7, 3, 1, 9, 7, 3, 1];
    var sum = 0;
    for (var i = 0; i < 8; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    return {
        meta: {},
        valid: sum % 10 === 0,
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Irish VAT number
 *
 * @returns {ValidateResult}
 */
function ieVat(value) {
    var v = value;
    if (/^IE[0-9][0-9A-Z*+][0-9]{5}[A-Z]{1,2}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9][0-9A-Z*+][0-9]{5}[A-Z]{1,2}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var getCheckDigit = function (inp) {
        var input = inp;
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
    // The first 7 characters are digits
    if (/^[0-9]+$/.test(v.substr(0, 7))) {
        // New system
        return {
            meta: {},
            valid: v.charAt(7) === getCheckDigit("".concat(v.substr(0, 7)).concat(v.substr(8))),
        };
    }
    else if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ+*'.indexOf(v.charAt(1)) !== -1) {
        // Old system
        return {
            meta: {},
            valid: v.charAt(7) === getCheckDigit("".concat(v.substr(2, 5)).concat(v.substr(0, 1))),
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
 * Validate Icelandic VAT (VSK) number
 *
 * @returns {ValidateResult}
 */
function isVat(value) {
    var v = value;
    if (/^IS[0-9]{5,6}$/.test(v)) {
        v = v.substr(2);
    }
    return {
        meta: {},
        valid: /^[0-9]{5,6}$/.test(v),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var luhn$1 = core.algorithms.luhn;
/**
 * Validate Italian VAT number, which consists of 11 digits.
 * - First 7 digits are a company identifier
 * - Next 3 are the province of residence
 * - The last one is a check digit
 *
 * @returns {ValidateResult}
 */
function itVat(value) {
    var v = value;
    if (/^IT[0-9]{11}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{11}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    if (parseInt(v.substr(0, 7), 10) === 0) {
        return {
            meta: {},
            valid: false,
        };
    }
    var lastThree = parseInt(v.substr(7, 3), 10);
    if (lastThree < 1 || (lastThree > 201 && lastThree !== 999 && lastThree !== 888)) {
        return {
            meta: {},
            valid: false,
        };
    }
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
 * Validate Lithuanian VAT number
 * It can be:
 * - 9 digits, for legal entities
 * - 12 digits, for temporarily registered taxpayers
 *
 * @returns {ValidateResult}
 */
function ltVat(value) {
    var v = value;
    if (/^LT([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^([0-9]{7}1[0-9]|[0-9]{10}1[0-9])$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var length = v.length;
    var sum = 0;
    var i;
    for (i = 0; i < length - 1; i++) {
        sum += parseInt(v.charAt(i), 10) * (1 + (i % 9));
    }
    var check = sum % 11;
    if (check === 10) {
        // FIXME: Why we need calculation because `sum` isn't used anymore
        sum = 0;
        for (i = 0; i < length - 1; i++) {
            sum += parseInt(v.charAt(i), 10) * (1 + ((i + 2) % 9));
        }
    }
    check = (check % 11) % 10;
    return {
        meta: {},
        valid: "".concat(check) === v.charAt(length - 1),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Luxembourg VAT number
 *
 * @returns {ValidateResult}
 */
function luVat(value) {
    var v = value;
    if (/^LU[0-9]{8}$/.test(v)) {
        v = v.substring(2);
    }
    if (!/^[0-9]{8}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    return {
        meta: {},
        valid: parseInt(v.substring(0, 6), 10) % 89 === parseInt(v.substring(6, 8), 10),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var isValidDate = core.utils.isValidDate;
/**
 * Validate Latvian VAT number
 *
 * @returns {ValidateResult}
 */
function lvVat(value) {
    var v = value;
    if (/^LV[0-9]{11}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{11}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var first = parseInt(v.charAt(0), 10);
    var length = v.length;
    var sum = 0;
    var weight = [];
    var i;
    if (first > 3) {
        // Legal entity
        sum = 0;
        weight = [9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1];
        for (i = 0; i < length; i++) {
            sum += parseInt(v.charAt(i), 10) * weight[i];
        }
        sum = sum % 11;
        return {
            meta: {},
            valid: sum === 3,
        };
    }
    else {
        // Check birth date
        var day = parseInt(v.substr(0, 2), 10);
        var month = parseInt(v.substr(2, 2), 10);
        var year = parseInt(v.substr(4, 2), 10);
        year = year + 1800 + parseInt(v.charAt(6), 10) * 100;
        if (!isValidDate(year, month, day)) {
            return {
                meta: {},
                valid: false,
            };
        }
        // Check personal code
        sum = 0;
        weight = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9];
        for (i = 0; i < length - 1; i++) {
            sum += parseInt(v.charAt(i), 10) * weight[i];
        }
        sum = ((sum + 1) % 11) % 10;
        return {
            meta: {},
            valid: "".concat(sum) === v.charAt(length - 1),
        };
    }
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Maltese VAT number
 *
 * @returns {ValidateResult}
 */
function mtVat(value) {
    var v = value;
    if (/^MT[0-9]{8}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{8}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var weight = [3, 4, 6, 7, 8, 9, 10, 1];
    var sum = 0;
    for (var i = 0; i < 8; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    return {
        meta: {},
        valid: sum % 37 === 0,
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var mod97And10 = core.algorithms.mod97And10;
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
 * Validate Dutch VAT number
 *
 * @returns {ValidateResult}
 */
function nlVat(value) {
    var v = value;
    if (/^NL[0-9]{9}B[0-9]{2}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{9}B[0-9]{2}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var id = v.substr(0, 9);
    return {
        meta: {},
        valid: nlId(id).valid || mod97And10("NL".concat(v)),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Norwegian VAT number
 *
 * @see http://www.brreg.no/english/coordination/number.html
 * @returns {ValidateResult}
 */
function noVat(value) {
    var v = value;
    if (/^NO[0-9]{9}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{9}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var weight = [3, 2, 7, 6, 5, 4, 3, 2];
    var sum = 0;
    for (var i = 0; i < 8; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    sum = 11 - (sum % 11);
    if (sum === 11) {
        sum = 0;
    }
    return {
        meta: {},
        valid: "".concat(sum) === v.substr(8, 1),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Polish VAT number
 *
 * @returns {ValidateResult}
 */
function plVat(value) {
    var v = value;
    if (/^PL[0-9]{10}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{10}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var weight = [6, 5, 7, 2, 3, 4, 5, 6, 7, -1];
    var sum = 0;
    for (var i = 0; i < 10; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    return {
        meta: {},
        valid: sum % 11 === 0,
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Portuguese VAT number
 *
 * @returns {ValidateResult}
 */
function ptVat(value) {
    var v = value;
    if (/^PT[0-9]{9}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{9}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var weight = [9, 8, 7, 6, 5, 4, 3, 2];
    var sum = 0;
    for (var i = 0; i < 8; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    sum = 11 - (sum % 11);
    if (sum > 9) {
        sum = 0;
    }
    return {
        meta: {},
        valid: "".concat(sum) === v.substr(8, 1),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Romanian VAT number
 *
 * @returns {ValidateResult}
 */
function roVat(value) {
    var v = value;
    if (/^RO[1-9][0-9]{1,9}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[1-9][0-9]{1,9}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var length = v.length;
    var weight = [7, 5, 3, 2, 1, 7, 5, 3, 2].slice(10 - length);
    var sum = 0;
    for (var i = 0; i < length - 1; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    sum = ((10 * sum) % 11) % 10;
    return {
        meta: {},
        valid: "".concat(sum) === v.substr(length - 1, 1),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Serbian VAT number
 *
 * @returns {ValidateResult}
 */
function rsVat(value) {
    var v = value;
    if (/^RS[0-9]{9}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{9}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var sum = 10;
    var temp = 0;
    for (var i = 0; i < 8; i++) {
        temp = (parseInt(v.charAt(i), 10) + sum) % 10;
        if (temp === 0) {
            temp = 10;
        }
        sum = (2 * temp) % 11;
    }
    return {
        meta: {},
        valid: (sum + parseInt(v.substr(8, 1), 10)) % 10 === 1,
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Russian VAT number (Taxpayer Identification Number - INN)
 *
 * @returns {ValidateResult}
 */
function ruVat(value) {
    var v = value;
    if (/^RU([0-9]{10}|[0-9]{12})$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^([0-9]{10}|[0-9]{12})$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var i = 0;
    if (v.length === 10) {
        var weight = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
        var sum = 0;
        for (i = 0; i < 10; i++) {
            sum += parseInt(v.charAt(i), 10) * weight[i];
        }
        sum = sum % 11;
        if (sum > 9) {
            sum = sum % 10;
        }
        return {
            meta: {},
            valid: "".concat(sum) === v.substr(9, 1),
        };
    }
    else if (v.length === 12) {
        var weight1 = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
        var weight2 = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
        var sum1 = 0;
        var sum2 = 0;
        for (i = 0; i < 11; i++) {
            sum1 += parseInt(v.charAt(i), 10) * weight1[i];
            sum2 += parseInt(v.charAt(i), 10) * weight2[i];
        }
        sum1 = sum1 % 11;
        if (sum1 > 9) {
            sum1 = sum1 % 10;
        }
        sum2 = sum2 % 11;
        if (sum2 > 9) {
            sum2 = sum2 % 10;
        }
        return {
            meta: {},
            valid: "".concat(sum1) === v.substr(10, 1) && "".concat(sum2) === v.substr(11, 1),
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
var luhn = core.algorithms.luhn;
/**
 * Validate Swiss VAT number
 *
 * @returns {ValidateResult}
 */
function seVat(value) {
    var v = value;
    if (/^SE[0-9]{10}01$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[0-9]{10}01$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    v = v.substr(0, 10);
    return {
        meta: {},
        valid: luhn(v),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Slovenian VAT number
 *
 * @returns {ValidateResult}
 */
function siVat(value) {
    // The Slovenian VAT numbers don't start with zero
    var res = value.match(/^(SI)?([1-9][0-9]{7})$/);
    if (!res) {
        return {
            meta: {},
            valid: false,
        };
    }
    var v = res[1] ? value.substr(2) : value;
    var weight = [8, 7, 6, 5, 4, 3, 2];
    var sum = 0;
    for (var i = 0; i < 7; i++) {
        sum += parseInt(v.charAt(i), 10) * weight[i];
    }
    sum = 11 - (sum % 11);
    if (sum === 10) {
        sum = 0;
    }
    return {
        meta: {},
        valid: "".concat(sum) === v.substr(7, 1),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Slovak VAT number
 *
 * @returns {ValidateResult}
 */
function skVat(value) {
    var v = value;
    if (/^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    return {
        meta: {},
        valid: parseInt(v, 10) % 11 === 0,
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
/**
 * Validate Venezuelan VAT number (RIF)
 *
 * @returns {ValidateResult}
 */
function veVat(value) {
    var v = value;
    if (/^VE[VEJPG][0-9]{9}$/.test(v)) {
        v = v.substr(2);
    }
    if (!/^[VEJPG][0-9]{9}$/.test(v)) {
        return {
            meta: {},
            valid: false,
        };
    }
    var types = {
        E: 8,
        G: 20,
        J: 12,
        P: 16,
        V: 4,
    };
    var weight = [3, 2, 7, 6, 5, 4, 3, 2];
    var sum = types[v.charAt(0)];
    for (var i = 0; i < 8; i++) {
        sum += parseInt(v.charAt(i + 1), 10) * weight[i];
    }
    sum = 11 - (sum % 11);
    if (sum === 11 || sum === 10) {
        sum = 0;
    }
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
 * Validate South African VAT number
 *
 * @returns {ValidateResult}
 */
function zaVat(value) {
    var v = value;
    if (/^ZA4[0-9]{9}$/.test(v)) {
        v = v.substr(2);
    }
    return {
        meta: {},
        valid: /^4[0-9]{9}$/.test(v),
    };
}

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var format = core.utils.format, removeUndefined = core.utils.removeUndefined;
function vat() {
    // Supported country codes
    var COUNTRY_CODES = [
        'AR',
        'AT',
        'BE',
        'BG',
        'BR',
        'CH',
        'CY',
        'CZ',
        'DE',
        'DK',
        'EE',
        'EL',
        'ES',
        'FI',
        'FR',
        'GB',
        'GR',
        'HR',
        'HU',
        'IE',
        'IS',
        'IT',
        'LT',
        'LU',
        'LV',
        'MT',
        'NL',
        'NO',
        'PL',
        'PT',
        'RO',
        'RU',
        'RS',
        'SE',
        'SK',
        'SI',
        'VE',
        'ZA',
    ];
    return {
        /**
         * Validate an European VAT number
         */
        validate: function (input) {
            var value = input.value;
            if (value === '') {
                return { valid: true };
            }
            var opts = Object.assign({}, { message: '' }, removeUndefined(input.options));
            var country = value.substr(0, 2);
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
                    result = arVat(value);
                    break;
                case 'at':
                    result = atVat(value);
                    break;
                case 'be':
                    result = beVat(value);
                    break;
                case 'bg':
                    result = bgVat(value);
                    break;
                case 'br':
                    result = brVat(value);
                    break;
                case 'ch':
                    result = chVat(value);
                    break;
                case 'cy':
                    result = cyVat(value);
                    break;
                case 'cz':
                    result = czVat(value);
                    break;
                case 'de':
                    result = deVat(value);
                    break;
                case 'dk':
                    result = dkVat(value);
                    break;
                case 'ee':
                    result = eeVat(value);
                    break;
                // EL is traditionally prefix of Greek VAT numbers
                case 'el':
                    result = grVat(value);
                    break;
                case 'es':
                    result = esVat(value);
                    break;
                case 'fi':
                    result = fiVat(value);
                    break;
                case 'fr':
                    result = frVat(value);
                    break;
                case 'gb':
                    result = gbVat(value);
                    break;
                case 'gr':
                    result = grVat(value);
                    break;
                case 'hr':
                    result = hrVat(value);
                    break;
                case 'hu':
                    result = huVat(value);
                    break;
                case 'ie':
                    result = ieVat(value);
                    break;
                case 'is':
                    result = isVat(value);
                    break;
                case 'it':
                    result = itVat(value);
                    break;
                case 'lt':
                    result = ltVat(value);
                    break;
                case 'lu':
                    result = luVat(value);
                    break;
                case 'lv':
                    result = lvVat(value);
                    break;
                case 'mt':
                    result = mtVat(value);
                    break;
                case 'nl':
                    result = nlVat(value);
                    break;
                case 'no':
                    result = noVat(value);
                    break;
                case 'pl':
                    result = plVat(value);
                    break;
                case 'pt':
                    result = ptVat(value);
                    break;
                case 'ro':
                    result = roVat(value);
                    break;
                case 'rs':
                    result = rsVat(value);
                    break;
                case 'ru':
                    result = ruVat(value);
                    break;
                case 'se':
                    result = seVat(value);
                    break;
                case 'si':
                    result = siVat(value);
                    break;
                case 'sk':
                    result = skVat(value);
                    break;
                case 've':
                    result = veVat(value);
                    break;
                case 'za':
                    result = zaVat(value);
                    break;
            }
            var message = format(input.l10n && input.l10n.vat ? opts.message || input.l10n.vat.country : opts.message, input.l10n && input.l10n.vat && input.l10n.vat.countries
                ? input.l10n.vat.countries[country.toUpperCase()]
                : country.toUpperCase());
            return Object.assign({}, { message: message }, result);
        },
    };
}

exports.vat = vat;
