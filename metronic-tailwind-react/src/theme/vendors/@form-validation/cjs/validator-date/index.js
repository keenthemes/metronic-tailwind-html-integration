'use strict';

var core = require('@form-validation/core');

/**
 * FormValidation (https://formvalidation.io)
 * The best validation library for JavaScript
 * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
 */
var format = core.utils.format, isValidDate = core.utils.isValidDate, removeUndefined = core.utils.removeUndefined;
/**
 * Return a date object after parsing the date string
 *
 * @param {string} input The date to parse
 * @param {string[]} inputFormat The date format
 * The format can be:
 * - date: Consist of DD, MM, YYYY parts which are separated by the separator option
 * - date and time: The time can consist of h, m, s parts which are separated by :
 * @param {string} separator The separator used to separate the date, month, and year
 * @return {Date}
 * @private
 */
var parseDate = function (input, inputFormat, separator) {
    // Ensure that the format must consist of year, month and day patterns
    var yearIndex = inputFormat.indexOf('YYYY');
    var monthIndex = inputFormat.indexOf('MM');
    var dayIndex = inputFormat.indexOf('DD');
    if (yearIndex === -1 || monthIndex === -1 || dayIndex === -1) {
        return null;
    }
    var sections = input.split(' ');
    var dateSection = sections[0].split(separator);
    if (dateSection.length < 3) {
        return null;
    }
    var d = new Date(parseInt(dateSection[yearIndex], 10), parseInt(dateSection[monthIndex], 10) - 1, parseInt(dateSection[dayIndex], 10));
    var amPmSection = sections.length > 2 ? sections[2] : null;
    if (sections.length > 1) {
        var timeSection = sections[1].split(':');
        var h = timeSection.length > 0 ? parseInt(timeSection[0], 10) : 0;
        d.setHours(amPmSection && amPmSection.toUpperCase() === 'PM' && h < 12 ? h + 12 : h);
        d.setMinutes(timeSection.length > 1 ? parseInt(timeSection[1], 10) : 0);
        d.setSeconds(timeSection.length > 2 ? parseInt(timeSection[2], 10) : 0);
    }
    return d;
};
/**
 * Format date
 *
 * @param {Date} input The date object to format
 * @param {string} inputFormat The date format
 * The format can consist of the following tokens:
 *      d       Day of the month without leading zeros (1 through 31)
 *      dd      Day of the month with leading zeros (01 through 31)
 *      m       Month without leading zeros (1 through 12)
 *      mm      Month with leading zeros (01 through 12)
 *      yy      Last two digits of year (for example: 14)
 *      yyyy    Full four digits of year (for example: 2014)
 *      h       Hours without leading zeros (1 through 12)
 *      hh      Hours with leading zeros (01 through 12)
 *      H       Hours without leading zeros (0 through 23)
 *      HH      Hours with leading zeros (00 through 23)
 *      M       Minutes without leading zeros (0 through 59)
 *      MM      Minutes with leading zeros (00 through 59)
 *      s       Seconds without leading zeros (0 through 59)
 *      ss      Seconds with leading zeros (00 through 59)
 * @return {string}
 * @private
 */
var formatDate = function (input, inputFormat) {
    var dateFormat = inputFormat
        .replace(/Y/g, 'y')
        .replace(/M/g, 'm')
        .replace(/D/g, 'd')
        .replace(/:m/g, ':M')
        .replace(/:mm/g, ':MM')
        .replace(/:S/, ':s')
        .replace(/:SS/, ':ss');
    var d = input.getDate();
    var dd = d < 10 ? "0".concat(d) : d;
    var m = input.getMonth() + 1;
    var mm = m < 10 ? "0".concat(m) : m;
    var yy = "".concat(input.getFullYear()).substr(2);
    var yyyy = input.getFullYear();
    var h = input.getHours() % 12 || 12;
    var hh = h < 10 ? "0".concat(h) : h;
    var H = input.getHours();
    var HH = H < 10 ? "0".concat(H) : H;
    var M = input.getMinutes();
    var MM = M < 10 ? "0".concat(M) : M;
    var s = input.getSeconds();
    var ss = s < 10 ? "0".concat(s) : s;
    var replacer = {
        H: "".concat(H),
        HH: "".concat(HH),
        M: "".concat(M),
        MM: "".concat(MM),
        d: "".concat(d),
        dd: "".concat(dd),
        h: "".concat(h),
        hh: "".concat(hh),
        m: "".concat(m),
        mm: "".concat(mm),
        s: "".concat(s),
        ss: "".concat(ss),
        yy: "".concat(yy),
        yyyy: "".concat(yyyy),
    };
    return dateFormat.replace(/d{1,4}|m{1,4}|yy(?:yy)?|([HhMs])\1?|"[^"]*"|'[^']*'/g, function (match) {
        return replacer[match] ? replacer[match] : match.slice(1, match.length - 1);
    });
};
var date = function () {
    return {
        validate: function (input) {
            if (input.value === '') {
                return {
                    meta: {
                        date: null,
                    },
                    valid: true,
                };
            }
            var opts = Object.assign({}, {
                // Force the format to `YYYY-MM-DD` as the default browser behaviour when using type="date" attribute
                format: input.element && input.element.getAttribute('type') === 'date' ? 'YYYY-MM-DD' : 'MM/DD/YYYY',
                message: '',
            }, removeUndefined(input.options));
            var message = input.l10n ? input.l10n.date.default : opts.message;
            var invalidResult = {
                message: "".concat(message),
                meta: {
                    date: null,
                },
                valid: false,
            };
            var formats = opts.format.split(' ');
            var timeFormat = formats.length > 1 ? formats[1] : null;
            var amOrPm = formats.length > 2 ? formats[2] : null;
            var sections = input.value.split(' ');
            var dateSection = sections[0];
            var timeSection = sections.length > 1 ? sections[1] : null;
            var amPmSection = sections.length > 2 ? sections[2] : null;
            if (formats.length !== sections.length) {
                return invalidResult;
            }
            // Determine the separator
            var separator = opts.separator ||
                (dateSection.indexOf('/') !== -1
                    ? '/'
                    : dateSection.indexOf('-') !== -1
                        ? '-'
                        : dateSection.indexOf('.') !== -1
                            ? '.'
                            : '/');
            if (separator === null || dateSection.indexOf(separator) === -1) {
                return invalidResult;
            }
            // Determine the date
            var dateStr = dateSection.split(separator);
            var dateFormat = formats[0].split(separator);
            if (dateStr.length !== dateFormat.length) {
                return invalidResult;
            }
            var yearStr = dateStr[dateFormat.indexOf('YYYY')];
            var monthStr = dateStr[dateFormat.indexOf('MM')];
            var dayStr = dateStr[dateFormat.indexOf('DD')];
            if (!/^\d+$/.test(yearStr) ||
                !/^\d+$/.test(monthStr) ||
                !/^\d+$/.test(dayStr) ||
                yearStr.length > 4 ||
                monthStr.length > 2 ||
                dayStr.length > 2) {
                return invalidResult;
            }
            var year = parseInt(yearStr, 10);
            var month = parseInt(monthStr, 10);
            var day = parseInt(dayStr, 10);
            if (!isValidDate(year, month, day)) {
                return invalidResult;
            }
            // Determine the time
            var d = new Date(year, month - 1, day);
            if (timeFormat) {
                var hms = timeSection.split(':');
                if (timeFormat.split(':').length !== hms.length) {
                    return invalidResult;
                }
                var h = hms.length > 0 ? (hms[0].length <= 2 && /^\d+$/.test(hms[0]) ? parseInt(hms[0], 10) : -1) : 0;
                var m = hms.length > 1 ? (hms[1].length <= 2 && /^\d+$/.test(hms[1]) ? parseInt(hms[1], 10) : -1) : 0;
                var s = hms.length > 2 ? (hms[2].length <= 2 && /^\d+$/.test(hms[2]) ? parseInt(hms[2], 10) : -1) : 0;
                if (h === -1 || m === -1 || s === -1) {
                    return invalidResult;
                }
                // Validate seconds
                if (s < 0 || s > 60) {
                    return invalidResult;
                }
                // Validate hours
                if (h < 0 || h >= 24 || (amOrPm && h > 12)) {
                    return invalidResult;
                }
                // Validate minutes
                if (m < 0 || m > 59) {
                    return invalidResult;
                }
                d.setHours(amPmSection && amPmSection.toUpperCase() === 'PM' && h < 12 ? h + 12 : h);
                d.setMinutes(m);
                d.setSeconds(s);
            }
            // Validate day, month, and year
            var minOption = typeof opts.min === 'function' ? opts.min() : opts.min;
            var min = minOption instanceof Date
                ? minOption
                : minOption
                    ? parseDate(minOption, dateFormat, separator)
                    : d;
            var maxOption = typeof opts.max === 'function' ? opts.max() : opts.max;
            var max = maxOption instanceof Date
                ? maxOption
                : maxOption
                    ? parseDate(maxOption, dateFormat, separator)
                    : d;
            // In order to avoid displaying a date string like "Mon Dec 08 2014 19:14:12 GMT+0000 (WET)"
            var minOptionStr = minOption instanceof Date ? formatDate(min, opts.format) : minOption;
            var maxOptionStr = maxOption instanceof Date ? formatDate(max, opts.format) : maxOption;
            switch (true) {
                case !!minOptionStr && !maxOptionStr:
                    return {
                        message: format(input.l10n ? input.l10n.date.min : message, minOptionStr),
                        meta: {
                            date: d,
                        },
                        valid: d.getTime() >= min.getTime(),
                    };
                case !!maxOptionStr && !minOptionStr:
                    return {
                        message: format(input.l10n ? input.l10n.date.max : message, maxOptionStr),
                        meta: {
                            date: d,
                        },
                        valid: d.getTime() <= max.getTime(),
                    };
                case !!maxOptionStr && !!minOptionStr:
                    return {
                        message: format(input.l10n ? input.l10n.date.range : message, [minOptionStr, maxOptionStr]),
                        meta: {
                            date: d,
                        },
                        valid: d.getTime() <= max.getTime() && d.getTime() >= min.getTime(),
                    };
                default:
                    return {
                        message: "".concat(message),
                        meta: {
                            date: d,
                        },
                        valid: true,
                    };
            }
        },
    };
};

exports.date = date;
