/*
 * Copyright 2015-2016 Carsten Klein
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


module.exports = {
    "parser": "babel-eslint",
    "ecmaFeatures": {
		"arrowFunctions" : 1,
		"binaryLiterals" : 1,
		"blockBindings" : 1,
		"classes" : 1,
		"defaultParams" : 1,
		"destructuring" : 1,
		"forOf" : 1,
		"generators" : 1,
		"modules" : 1,
		"objectLiteralComputedProperties" : 1,
		"objectLiteralDuplicateProperties" : 1,
		"objectLiteralShorthandMethods" : 1,
		"objectLiteralShorthandProperties" : 1,
		"octalLiterals" : 1,
		"regexUFlag" : 1,
		"regexYFlag" : 1,
		"restParams" : 1,
		"spread" : 1,
		"superInFunctions" : 1,
		"templateStrings" : 1,
		"unicodeCodePointEscapes" : 1,
		"globalReturn" : 0,
		"jsx" : 0
	},
    "rules": {

	/* Common Rules */

        "no-continue": 0,
        "no-div-regex": 0,
        "no-ternary": 0,
        /* since we use esdoc, we cannot use this */
        "valid-jsdoc": 0,

		/* Warnings */

        "no-empty": 1,
        "no-extra-parens": 1,
        "no-floating-decimal": 1,
        "no-implicit-coercion": 1,
        "no-nested-ternary": 1,

		/* Errors */

        "no-array-constructor": 2,
        "no-caller": 2,
        "no-catch-shadow": 2,
        "no-class-assign": 2,
        "no-cond-assign": 2,
        "no-const-assign": 2,
        "no-constant-condition": 2,
        "no-debugger": 2,
        "no-delete-var": 2,
        "no-dupe-class-members": 2,
        "no-dupe-keys": 2,
        "no-dupe-args": 2,
        "no-duplicate-case": 2,
        "no-else-return": 2,
        "no-empty-character-class": 2,
        "no-eq-null": 2,
        "no-ex-assign": 2,
        "no-extra-bind": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-semi": 2,
        "no-func-assign": 2,
        "no-inline-comments": 2,
        "no-inner-declarations": [2, "both"],
        "no-invalid-regexp": 2,
        "no-irregular-whitespace": 2,
        "no-iterator": 2,
        "no-label-var": 2,
        "no-lone-blocks": 2,
        "no-lonely-if": 2,
        "no-loop-func": 2,
        "no-mixed-requires": [2, false],
        "no-mixed-spaces-and-tabs": 2,
        "linebreak-style": [2, "unix"],
        "no-multi-spaces": 2,
        "no-multi-str": 2,
        "no-param-reassign": 2,
        "comma-dangle": [2, "never"],
        "camelcase": 2,
        "valid-typeof": 2,
        "no-this-before-super": 2,
        "no-throw-literal": 2,
        "func-names": 2,
        "brace-style": [2, "allman"],
        "max-len": [2, 80, 4, {"ignoreComments": true, "ignoreUrls": true}],
        "no-trailing-spaces": 2,
        "no-unused-expressions": 2,
        "no-var": 2,
        "no-redeclare": 2,

	/* Project Specific Rules */

        "no-control-regex": 0,
        "no-extend-native": 0,

		/* Warnings */

        "max-params": [1, 5],
        "complexity": [1, 9],
        "max-depth": [1, 4],
        "no-bitwise": 1,

		/* Errors */

        "no-console": 2,
        "no-alert": 2,
        "no-invalid-this": 2,
        "no-labels": 2,
        "no-native-reassign": 2,
        "no-multiple-empty-lines": [2, {"max": 2}],
        "no-implied-eval": 2,
        "no-fallthrough": 2,
        "no-eval": 2,

	/* TODO */

        "no-new": 0,
        "no-new-object": 0,
        "no-new-require": 0,
        "no-new-wrappers": 0,
        "no-octal-escape": 0,
        "no-path-concat": 0,
        "no-plusplus": 0,
        "no-process-env": 0,
        "no-process-exit": 0,
        "no-proto": 0,
        "no-restricted-modules": 0,
        "no-restricted-syntax": 0,
        "no-return-assign": 0,
        "no-script-url": 0,
        "no-self-compare": 0,
        "no-sequences": 0,
        "no-shadow": 0,
        "no-shadow-restricted-names": 0,
        "no-spaced-func": 0,
        "no-sync": 0,
        "no-undef-init": 0,
        "no-undefined": 0,
        "no-unexpected-multiline": 0,
        "no-underscore-dangle": 0,
        "no-unneeded-ternary": 0,
        "no-use-before-define": 0,
        "no-useless-call": 0,
        "no-useless-concat": 0,
        "no-void": 0,
        "no-warning-comments": [0, { "terms": ["todo", "fixme", "xxx"], "location": "start" }],
        "no-with": 0,
        "array-bracket-spacing": [0, "never"],
        "arrow-parens": 0,
        "arrow-spacing": 0,
        "accessor-pairs": 0,
        "block-scoped-var": 0,
        "block-spacing": 0,
        "callback-return": 0,
        "comma-spacing": 0,
        "comma-style": 0,
        "computed-property-spacing": [0, "never"],
        "consistent-return": 0,
        "consistent-this": [0, "that"],
        "constructor-super": 0,
        "curly": [0, "all"],
        "default-case": 0,
        "dot-location": 0,
        "dot-notation": [0, { "allowKeywords": true }],
        "eol-last": 0,
        "eqeqeq": 0,
        "func-style": [0, "declaration"],
        "generator-star-spacing": 0,
        "global-require": 0,
        "guard-for-in": 0,
        "handle-callback-err": 0,
        "id-length": 0,
        "indent": 0,
        "init-declarations": 0,
        "key-spacing": [0, { "beforeColon": false, "afterColon": true }],
        "lines-around-comment": 0,
        "max-nested-callbacks": [0, 2],
        "max-statements": [0, 10],
        "new-cap": 0,
        "new-parens": 0,
        "newline-after-var": 0,
        "object-curly-spacing": [0, "never"],
        "object-shorthand": 0,
        "one-var": [0, "always"],
        "operator-assignment": [0, "always"],
        "operator-linebreak": 0,
        "padded-blocks": 0,
        "prefer-arrow-callback": 0,
        "prefer-const": 0,
        "prefer-spread": 0,
        "prefer-reflect": 0,
        "prefer-template": 0,
        "quote-props": 0,
        "quotes": [0, "double"],
        "radix": 0,
        "id-match": 0,
        "require-jsdoc": 0,
        "require-yield": 0,
        "semi": 0,
        "semi-spacing": [0, {"before": false, "after": true}],
        "sort-vars": 0,
        "space-after-keywords": [0, "always"],
        "space-before-keywords": [0, "always"],
        "space-before-blocks": [0, "always"],
        "space-before-function-paren": [0, "always"],
        "space-in-parens": [0, "never"],
        "space-infix-ops": 0,
        "space-return-throw-case": 0,
        "space-unary-ops": [0, { "words": true, "nonwords": false }],
        "spaced-comment": 0,
        "strict": 0,
        "vars-on-top": 0,
        "wrap-iife": 0,
        "wrap-regex": 0,
        "yoda": [0, "never"],

		/* Errors */

        "no-undef": 2,
        "no-negated-in-lhs": 2,
        "no-new-func": 2,
        "no-obj-calls": 2,
        "no-octal": 2,
        "no-regex-spaces": 2,
        "no-sparse-arrays": 2,
        "no-unreachable": 2,
        "no-unused-vars": [2, {"vars": "all", "args": "after-used"}],
        "use-isnan": 2
    }
}

