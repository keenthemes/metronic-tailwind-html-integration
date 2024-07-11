(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@form-validation/core')) :
    typeof define === 'function' && define.amd ? define(['@form-validation/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.FormValidation = global.FormValidation || {}, global.FormValidation.validators = global.FormValidation.validators || {}, global.FormValidation.validators.iban = factory(global.FormValidation)));
})(this, (function (core) { 'use strict';

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */
    var format = core.utils.format, removeUndefined = core.utils.removeUndefined;
    function iban() {
        // http://www.swift.com/dsp/resources/documents/IBAN_Registry.pdf
        // http://en.wikipedia.org/wiki/International_Bank_Account_Number#IBAN_formats_by_country
        var IBAN_PATTERNS = {
            AD: 'AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}',
            AE: 'AE[0-9]{2}[0-9]{3}[0-9]{16}',
            AL: 'AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}',
            AO: 'AO[0-9]{2}[0-9]{21}',
            AT: 'AT[0-9]{2}[0-9]{5}[0-9]{11}',
            AZ: 'AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}',
            BA: 'BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}',
            BE: 'BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}',
            BF: 'BF[0-9]{2}[0-9]{23}',
            BG: 'BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}',
            BH: 'BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}',
            BI: 'BI[0-9]{2}[0-9]{12}',
            BJ: 'BJ[0-9]{2}[A-Z]{1}[0-9]{23}',
            BR: 'BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]',
            CH: 'CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}',
            CI: 'CI[0-9]{2}[A-Z]{1}[0-9]{23}',
            CM: 'CM[0-9]{2}[0-9]{23}',
            CR: 'CR[0-9]{2}[0-9][0-9]{3}[0-9]{14}',
            CV: 'CV[0-9]{2}[0-9]{21}',
            CY: 'CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}',
            CZ: 'CZ[0-9]{2}[0-9]{20}',
            DE: 'DE[0-9]{2}[0-9]{8}[0-9]{10}',
            DK: 'DK[0-9]{2}[0-9]{14}',
            DO: 'DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}',
            DZ: 'DZ[0-9]{2}[0-9]{20}',
            EE: 'EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}',
            ES: 'ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}',
            FI: 'FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}',
            FO: 'FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}',
            FR: 'FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}',
            GB: 'GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}',
            GE: 'GE[0-9]{2}[A-Z]{2}[0-9]{16}',
            GI: 'GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}',
            GL: 'GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}',
            GR: 'GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}',
            GT: 'GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}',
            HR: 'HR[0-9]{2}[0-9]{7}[0-9]{10}',
            HU: 'HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}',
            IE: 'IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}',
            IL: 'IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}',
            IR: 'IR[0-9]{2}[0-9]{22}',
            IS: 'IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}',
            IT: 'IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}',
            JO: 'JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}',
            KW: 'KW[0-9]{2}[A-Z]{4}[0-9]{22}',
            KZ: 'KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}',
            LB: 'LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}',
            LI: 'LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}',
            LT: 'LT[0-9]{2}[0-9]{5}[0-9]{11}',
            LU: 'LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}',
            LV: 'LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}',
            MC: 'MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}',
            MD: 'MD[0-9]{2}[A-Z0-9]{20}',
            ME: 'ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',
            MG: 'MG[0-9]{2}[0-9]{23}',
            MK: 'MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}',
            ML: 'ML[0-9]{2}[A-Z]{1}[0-9]{23}',
            MR: 'MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}',
            MT: 'MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}',
            MU: 'MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}',
            MZ: 'MZ[0-9]{2}[0-9]{21}',
            NL: 'NL[0-9]{2}[A-Z]{4}[0-9]{10}',
            NO: 'NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}',
            PK: 'PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}',
            PL: 'PL[0-9]{2}[0-9]{8}[0-9]{16}',
            PS: 'PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}',
            PT: 'PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}',
            QA: 'QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}',
            RO: 'RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}',
            RS: 'RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',
            SA: 'SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}',
            SE: 'SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}',
            SI: 'SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}',
            SK: 'SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}',
            SM: 'SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}',
            SN: 'SN[0-9]{2}[A-Z]{1}[0-9]{23}',
            TL: 'TL38[0-9]{3}[0-9]{14}[0-9]{2}',
            TN: 'TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}',
            TR: 'TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}',
            VG: 'VG[0-9]{2}[A-Z]{4}[0-9]{16}',
            XK: 'XK[0-9]{2}[0-9]{4}[0-9]{10}[0-9]{2}', // Republic of Kosovo
        };
        // List of SEPA country codes
        var SEPA_COUNTRIES = [
            'AT',
            'BE',
            'BG',
            'CH',
            'CY',
            'CZ',
            'DE',
            'DK',
            'EE',
            'ES',
            'FI',
            'FR',
            'GB',
            'GI',
            'GR',
            'HR',
            'HU',
            'IE',
            'IS',
            'IT',
            'LI',
            'LT',
            'LU',
            'LV',
            'MC',
            'MT',
            'NL',
            'NO',
            'PL',
            'PT',
            'RO',
            'SE',
            'SI',
            'SK',
            'SM',
        ];
        return {
            /**
             * Validate an International Bank Account Number (IBAN)
             * To test it, take the sample IBAN from
             * http://www.nordea.com/Our+services/
             * International+products+and+services/Cash+Management/IBAN+countries/908462.html
             */
            validate: function (input) {
                if (input.value === '') {
                    return { valid: true };
                }
                var opts = Object.assign({}, { message: '' }, removeUndefined(input.options));
                var v = input.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
                // TODO: `country` can be a dynamic option
                var country = opts.country || v.substr(0, 2);
                if (!IBAN_PATTERNS[country]) {
                    return {
                        message: opts.message,
                        valid: false,
                    };
                }
                // Check whether or not the sepa option is enabled
                if (opts.sepa !== undefined) {
                    var isSepaCountry = SEPA_COUNTRIES.indexOf(country) !== -1;
                    if (((opts.sepa === 'true' || opts.sepa === true) && !isSepaCountry) ||
                        ((opts.sepa === 'false' || opts.sepa === false) && isSepaCountry)) {
                        return {
                            message: opts.message,
                            valid: false,
                        };
                    }
                }
                var msg = format(input.l10n ? opts.message || input.l10n.iban.country : opts.message, input.l10n ? input.l10n.iban.countries[country] : country);
                if (!new RegExp("^".concat(IBAN_PATTERNS[country], "$")).test(input.value)) {
                    return {
                        message: msg,
                        valid: false,
                    };
                }
                v = "".concat(v.substr(4)).concat(v.substr(0, 4));
                v = v
                    .split('')
                    .map(function (n) {
                    var code = n.charCodeAt(0);
                    return code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)
                        ? // Replace A, B, C, ..., Z with 10, 11, ..., 35
                            code - 'A'.charCodeAt(0) + 10
                        : n;
                })
                    .join('');
                var temp = parseInt(v.substr(0, 1), 10);
                var length = v.length;
                for (var i = 1; i < length; ++i) {
                    temp = (temp * 10 + parseInt(v.substr(i, 1), 10)) % 97;
                }
                return {
                    message: msg,
                    valid: temp === 1,
                };
            },
        };
    }

    return iban;

}));
