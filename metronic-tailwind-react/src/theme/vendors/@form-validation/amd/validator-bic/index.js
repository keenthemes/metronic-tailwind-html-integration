define(['exports'], (function (exports) { 'use strict';

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */
    /**
     * Validate an Business Identifier Code (BIC), also known as ISO 9362, SWIFT-BIC, SWIFT ID or SWIFT code
     * For more information see http://en.wikipedia.org/wiki/ISO_9362
     *
     * @todo The 5 and 6 characters are an ISO 3166-1 country code, this could also be validated
     */
    function bic() {
        return {
            validate: function (input) {
                return {
                    valid: input.value === '' || /^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(input.value),
                };
            },
        };
    }

    exports.bic = bic;

}));
