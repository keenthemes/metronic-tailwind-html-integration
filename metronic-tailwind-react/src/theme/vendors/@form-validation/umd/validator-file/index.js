(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.FormValidation = global.FormValidation || {}, global.FormValidation.validators = global.FormValidation.validators || {}, global.FormValidation.validators.file = factory()));
})(this, (function () { 'use strict';

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */
    // Get the file name without extension
    var getFileName = function (fileName) {
        return fileName.indexOf('.') === -1 ? fileName : fileName.split('.').slice(0, -1).join('.');
    };

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */
    function file() {
        return {
            validate: function (input) {
                if (input.value === '') {
                    return { valid: true };
                }
                var extension;
                var name;
                var extensions = input.options.extension
                    ? input.options.extension
                        .toLowerCase()
                        .split(',')
                        .map(function (item) { return item.trim(); })
                    : [];
                var types = input.options.type
                    ? input.options.type
                        .toLowerCase()
                        .split(',')
                        .map(function (item) { return item.trim(); })
                    : [];
                var html5 = window['File'] && window['FileList'] && window['FileReader'];
                if (html5) {
                    // Get FileList instance
                    var files = input.element.files;
                    var total = files.length;
                    var allSize = 0;
                    // Check the maxFiles
                    if (input.options.maxFiles && total > parseInt("".concat(input.options.maxFiles), 10)) {
                        return {
                            meta: { error: 'INVALID_MAX_FILES' },
                            valid: false,
                        };
                    }
                    // Check the minFiles
                    if (input.options.minFiles && total < parseInt("".concat(input.options.minFiles), 10)) {
                        return {
                            meta: { error: 'INVALID_MIN_FILES' },
                            valid: false,
                        };
                    }
                    var metaData = {};
                    for (var i = 0; i < total; i++) {
                        allSize += files[i].size;
                        extension = files[i].name.substr(files[i].name.lastIndexOf('.') + 1);
                        metaData = {
                            ext: extension,
                            file: files[i],
                            size: files[i].size,
                            type: files[i].type,
                        };
                        // Check the minSize
                        if (input.options.minSize && files[i].size < parseInt("".concat(input.options.minSize), 10)) {
                            return {
                                meta: Object.assign({}, { error: 'INVALID_MIN_SIZE' }, metaData),
                                valid: false,
                            };
                        }
                        // Check the maxSize
                        if (input.options.maxSize && files[i].size > parseInt("".concat(input.options.maxSize), 10)) {
                            return {
                                meta: Object.assign({}, { error: 'INVALID_MAX_SIZE' }, metaData),
                                valid: false,
                            };
                        }
                        // Check file extension
                        if (extensions.length > 0 && extensions.indexOf(extension.toLowerCase()) === -1) {
                            return {
                                meta: Object.assign({}, { error: 'INVALID_EXTENSION' }, metaData),
                                valid: false,
                            };
                        }
                        // Check file type
                        if (types.length > 0 && files[i].type && types.indexOf(files[i].type.toLowerCase()) === -1) {
                            return {
                                meta: Object.assign({}, { error: 'INVALID_TYPE' }, metaData),
                                valid: false,
                            };
                        }
                        // Check file name
                        if (input.options.validateFileName && !input.options.validateFileName(getFileName(files[i].name))) {
                            return {
                                meta: Object.assign({}, { error: 'INVALID_NAME' }, metaData),
                                valid: false,
                            };
                        }
                    }
                    // Check the maxTotalSize
                    if (input.options.maxTotalSize && allSize > parseInt("".concat(input.options.maxTotalSize), 10)) {
                        return {
                            meta: Object.assign({}, {
                                error: 'INVALID_MAX_TOTAL_SIZE',
                                totalSize: allSize,
                            }, metaData),
                            valid: false,
                        };
                    }
                    // Check the minTotalSize
                    if (input.options.minTotalSize && allSize < parseInt("".concat(input.options.minTotalSize), 10)) {
                        return {
                            meta: Object.assign({}, {
                                error: 'INVALID_MIN_TOTAL_SIZE',
                                totalSize: allSize,
                            }, metaData),
                            valid: false,
                        };
                    }
                }
                else {
                    // Check file extension
                    extension = input.value.substr(input.value.lastIndexOf('.') + 1);
                    if (extensions.length > 0 && extensions.indexOf(extension.toLowerCase()) === -1) {
                        return {
                            meta: {
                                error: 'INVALID_EXTENSION',
                                ext: extension,
                            },
                            valid: false,
                        };
                    }
                    // Check file name
                    name = getFileName(input.value);
                    if (input.options.validateFileName && !input.options.validateFileName(name)) {
                        return {
                            meta: {
                                error: 'INVALID_NAME',
                                name: name,
                            },
                            valid: false,
                        };
                    }
                }
                return { valid: true };
            },
        };
    }

    return file;

}));
