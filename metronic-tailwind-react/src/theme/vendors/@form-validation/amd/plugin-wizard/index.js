define(['exports', '@form-validation/core', '@form-validation/plugin-excluded'], (function (exports, core, pluginExcluded) { 'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * FormValidation (https://formvalidation.io)
     * The best validation library for JavaScript
     * (c) 2013 - 2023 Nguyen Huu Phuoc <me@phuoc.ng>
     */
    var classSet = core.utils.classSet;
    var Wizard = /** @class */ (function (_super) {
        __extends(Wizard, _super);
        function Wizard(opts) {
            var _this = _super.call(this, opts) || this;
            _this.currentStep = 0;
            _this.numSteps = 0;
            _this.stepIndexes = [];
            _this.opts = Object.assign({}, {
                activeStepClass: 'fv-plugins-wizard--active',
                onStepActive: function () { },
                onStepInvalid: function () { },
                onStepValid: function () { },
                onValid: function () { },
                stepClass: 'fv-plugins-wizard--step',
            }, opts);
            _this.prevStepHandler = _this.onClickPrev.bind(_this);
            _this.nextStepHandler = _this.onClickNext.bind(_this);
            return _this;
        }
        Wizard.prototype.install = function () {
            var _a;
            var _this = this;
            this.core.registerPlugin(Wizard.EXCLUDED_PLUGIN, this.opts.isFieldExcluded ? new pluginExcluded.Excluded({ excluded: this.opts.isFieldExcluded }) : new pluginExcluded.Excluded());
            var form = this.core.getFormElement();
            this.steps = [].slice.call(form.querySelectorAll(this.opts.stepSelector));
            this.numSteps = this.steps.length;
            this.steps.forEach(function (s) {
                var _a;
                classSet(s, (_a = {},
                    _a[_this.opts.stepClass] = true,
                    _a));
            });
            classSet(this.steps[0], (_a = {},
                _a[this.opts.activeStepClass] = true,
                _a));
            this.stepIndexes = Array(this.numSteps)
                .fill(0)
                .map(function (_, i) { return i; });
            this.prevButton =
                typeof this.opts.prevButton === 'string'
                    ? this.opts.prevButton.substring(0, 1) === '#'
                        ? document.getElementById(this.opts.prevButton.substring(1))
                        : form.querySelector(this.opts.prevButton)
                    : this.opts.prevButton;
            this.nextButton =
                typeof this.opts.nextButton === 'string'
                    ? this.opts.nextButton.substring(0, 1) === '#'
                        ? document.getElementById(this.opts.nextButton.substring(1))
                        : form.querySelector(this.opts.nextButton)
                    : this.opts.nextButton;
            this.prevButton.addEventListener('click', this.prevStepHandler);
            this.nextButton.addEventListener('click', this.nextStepHandler);
        };
        Wizard.prototype.uninstall = function () {
            this.core.deregisterPlugin(Wizard.EXCLUDED_PLUGIN);
            this.prevButton.removeEventListener('click', this.prevStepHandler);
            this.nextButton.removeEventListener('click', this.nextStepHandler);
            this.stepIndexes.length = 0;
        };
        /**
         * Get the current step index
         */
        Wizard.prototype.getCurrentStep = function () {
            return this.currentStep;
        };
        /**
         * Jump to the previous step
         */
        Wizard.prototype.goToPrevStep = function () {
            var _this = this;
            if (!this.isEnabled) {
                return;
            }
            var prevStep = this.currentStep - 1;
            if (prevStep < 0) {
                return;
            }
            // Find the closest previous step which isn't skipped
            var prevUnskipStep = this.opts.isStepSkipped
                ? this.stepIndexes
                    .slice(0, this.currentStep)
                    .reverse()
                    .find(function (value, _) {
                    return !_this.opts.isStepSkipped({
                        currentStep: _this.currentStep,
                        numSteps: _this.numSteps,
                        targetStep: value,
                    });
                })
                : prevStep;
            // Activate the previous step
            this.goToStep(prevUnskipStep);
            this.onStepActive();
        };
        /**
         * Jump to the next step.
         * It's useful when users want to go to the next step automatically
         * when a checkbox/radio button is chosen
         */
        Wizard.prototype.goToNextStep = function () {
            var _this = this;
            if (!this.isEnabled) {
                return;
            }
            // When click the Next button, we will validate the current step
            this.core.validate().then(function (status) {
                if (status === 'Valid') {
                    var nextStep = _this.currentStep + 1;
                    if (nextStep >= _this.numSteps) {
                        // The last step are valid
                        _this.currentStep = _this.numSteps - 1;
                    }
                    else {
                        // Find the next step that isn't skipped
                        var nextUnskipStep = _this.opts.isStepSkipped
                            ? _this.stepIndexes.slice(nextStep, _this.numSteps).find(function (value, _) {
                                return !_this.opts.isStepSkipped({
                                    currentStep: _this.currentStep,
                                    numSteps: _this.numSteps,
                                    targetStep: value,
                                });
                            })
                            : nextStep;
                        nextStep = nextUnskipStep;
                        // Activate the next step
                        _this.goToStep(nextStep);
                    }
                    _this.onStepActive();
                    _this.onStepValid();
                    if (nextStep === _this.numSteps) {
                        _this.onValid();
                    }
                }
                else if (status === 'Invalid') {
                    _this.onStepInvalid();
                }
            });
        };
        Wizard.prototype.goToStep = function (index) {
            var _a, _b;
            if (!this.isEnabled) {
                return;
            }
            classSet(this.steps[this.currentStep], (_a = {},
                _a[this.opts.activeStepClass] = false,
                _a));
            classSet(this.steps[index], (_b = {},
                _b[this.opts.activeStepClass] = true,
                _b));
            this.currentStep = index;
        };
        Wizard.prototype.onEnabled = function () {
            this.core.enablePlugin(Wizard.EXCLUDED_PLUGIN);
        };
        Wizard.prototype.onDisabled = function () {
            this.core.disablePlugin(Wizard.EXCLUDED_PLUGIN);
        };
        Wizard.prototype.onClickPrev = function () {
            this.goToPrevStep();
        };
        Wizard.prototype.onClickNext = function () {
            this.goToNextStep();
        };
        Wizard.prototype.onStepActive = function () {
            var e = {
                numSteps: this.numSteps,
                step: this.currentStep,
            };
            this.core.emit('plugins.wizard.step.active', e);
            this.opts.onStepActive(e);
        };
        Wizard.prototype.onStepValid = function () {
            var e = {
                numSteps: this.numSteps,
                step: this.currentStep,
            };
            this.core.emit('plugins.wizard.step.valid', e);
            this.opts.onStepValid(e);
        };
        Wizard.prototype.onStepInvalid = function () {
            var e = {
                numSteps: this.numSteps,
                step: this.currentStep,
            };
            this.core.emit('plugins.wizard.step.invalid', e);
            this.opts.onStepInvalid(e);
        };
        Wizard.prototype.onValid = function () {
            var e = {
                numSteps: this.numSteps,
            };
            this.core.emit('plugins.wizard.valid', e);
            this.opts.onValid(e);
        };
        Wizard.EXCLUDED_PLUGIN = '___wizardExcluded';
        return Wizard;
    }(core.Plugin));

    exports.Wizard = Wizard;

}));
