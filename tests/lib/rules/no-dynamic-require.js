/**
 * @fileoverview Tests for `no-dynamic-require` rule
 * @author Casey Visco <cvisco@gmail.com>
 */

"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslint = require("eslint"),
    ESLintTester = require("eslint-tester"),
    fixtures = require("../../fixtures");


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ERROR = {
    message: "Dynamic `require` calls are not allowed.",
    type: "CallExpression"
};


var eslintTester = new ESLintTester(eslint.linter);

eslintTester.addRuleTest("lib/rules/no-dynamic-require", {

    valid: [
        fixtures.AMD_REQUIRE,
        fixtures.AMD_EMPTY_REQUIRE,
        fixtures.CJS_WITH_RETURN,
        fixtures.CJS_WITH_EXPORTS,
        fixtures.CJS_WITH_MODULE_EXPORTS,
        fixtures.NAMED_CJS_DEFINE,
        fixtures.CONDITIONAL_AMD_REQUIRE,
        fixtures.CONDITIONAL_CJS_REQUIRE
    ],

    invalid: [
        { code: fixtures.DYNAMIC_MIXED_AMD_REQUIRE, errors: [ERROR] },
        { code: fixtures.DYNAMIC_TERNARY_AMD_REQUIRE, errors: [ERROR] },
        { code: fixtures.DYNAMIC_VARIABLE_AMD_REQUIRE, errors: [ERROR] },
        { code: fixtures.DYNAMIC_TERNARY_CJS_REQUIRE, errors: [ERROR] },
        { code: fixtures.DYNAMIC_VARIABLE_CJS_REQUIRE, errors: [ERROR] }
    ]

});