//log configuration by pako88-wdio
// const getLogger = require('@wdio/logger').default;
// const log = getLogger('hooks');
const path = require( 'path' );

exports.config = {
    runner: 'local',
    port: 4723,
    path: '/wd/hub',
    sync: true,
    specs: [
        './build/tests/**/*.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 1,
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'warn',
    coloredLogs: true,
    // Set specific log levels per logger
    // loggers:
    // - webdriver, webdriverio
    // - @wdio/applitools-service, @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
    // - @wdio/mocha-framework, @wdio/jasmine-framework
    // - @wdio/local-runner, @wdio/lambda-runner
    // - @wdio/sumologic-reporter
    // - @wdio/cli, @wdio/config, @wdio/sync, @wdio/utils
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    // logLevels: {
    //     webdriver: 'info',
    //     '@wdio/applitools-service': 'info'
    // },
    //outputDir: './logs',!!
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    // Default timeout for all waitFor* commands.
    waitforTimeout: 55000,
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 90000,
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services: [],
    capabilities: [
        {
            platformName: 'Android',
            noReset: false,
            fullReset: true,
            autoGrantPermissions: true,
            clearDeviceLogsOnStart: true,
            maxInstances: 1,//tests can run on only one device at a time
            deviceName: "Nexus 6P",
            platformVersion: "8.1",
            app: path.resolve( `./apk/app-debug.apk` ),
            automationName: 'UiAutomator2'
        }
    ],
    // ====================
    // Appium Configuration
    // ====================
    //services: ['appium'],
    // appium: {
    //     command: 'appium',
    //     // For options see
    //     // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
    //     // If you need a logs from appium server, make log equal true.
    //     log: false,
    //     args: {
    //         // For arguments see
    //         // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
    //     }
    // },

    // Framework you want to run your steps with.
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'mocha',
    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,
    reporters: ['spec'],
    //See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        //compilers:'tsconfig-paths/register'
        //compilers: ['ts:ts-node/register'],
        //requires: ['./test/helpers/common.js']
        require: ['ts-node/register']
    },
    // cucumberOpts: {
    //     //requireModule: ['@babel/register'],
    //     require: ['./test/stepDefinitions/given.js', './test/stepDefinitions/when.js', './test/stepDefinitions/then.js'],   // <string[]> (file/dir) require files before executing features
    //     backtrace: true,    // <boolean> show full backtrace for errors
    //     //compiler: ['js:babel-core/register'], // <string[]> filetype:compiler used for processing required features
    //     //compiler: [], // <string[]> filetype:compiler used for processing required features
    //     compiler: ['ts:ts-node/register'],
    //     // failAmbiguousDefinitions: true,       // <boolean< Treat ambiguous definitions as errors
    //     // dryRun: false,      // <boolean> invoke formatters without executing steps
    //     // failFast: false,    // <boolean> abort the run on first failure
    //     // ignoreUndefinedDefinitions: false,    // <boolean> Enable this config to treat undefined definitions as warnings
    //     // name: [],           // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    //     // format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    //     // colors: true,       // <boolean> disable colors in formatter output
    //     // snippets: false,    // <boolean> hide step definition snippets for pending steps
    //     // source: false,      // <boolean> hide source uris
    //     // profile: [],        // <string[]> (name) specify the profile to use
    //     // strict: true,       // <boolean> fail if there are any undefined or pending steps
    //     // tagExpression: 'not @Pending',      // <string> (expression) only execute the features or scenarios with tags matching the expression, see https://docs.cucumber.io/tag-expressions/
    //     timeout: 40000,    // <number> timeout for step definitions
    //     // tagsInTitle: false,                 // <boolean> add cucumber tags to feature or scenario name
    //     // snippetSyntax: undefined,           // <string> specify a custom snippet syntax
   // },

    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the tests process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
    onPrepare: function () {
        console.log('<<< NATIVE APP TESTS STARTED >>>\n');
    },
    /**
     * Gets executed just before initialising the webdriver session and tests framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // beforeSession: function (config, capabilities, steps) {
    // },
    /**
     * Gets executed before tests execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
    // before: function (capabilities, steps) {
    // },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
    beforeSuite: function (suite) {
        //log.debug(`Suite "${suite.fullTitle}" from file "${suite.file}" starts`);
        console.log(`Suite "${suite.fullTitle}" from file "${suite.file}" starts`);
    },
    /**
     * Function to be executed before a tests (in Mocha/Jasmine) starts.
     */
    beforeTest: function (test, context) {
        console.log(`Test "${test.title}" starts`);
    },
    /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
    // beforeHook: function (tests, context) {
    // },
    /**
     * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
     * afterEach in Mocha)
     */
    // afterHook: function (tests, context, { error, result, duration, passed, retries }) {
    // },

    // //This code is responsible for taking the screenshot in case of error and attaching it to the report
    // afterStep(uri, feature, scenario) {
    //     if (scenario.error) {
    //         driver.takeScreenshot();
    //     }
    // },
    /**
     * Function to be executed after a tests (in Mocha/Jasmine).
     */
    afterTest: function(test, context, { error, result, duration, passed, retries }) {
        console.log(`Test "${test.title}" finished`);
    },
    /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
    afterSuite: function (suite) {
        console.log(`Suite "${suite.fullTitle}" from file "${suite.file}" finished`);
    },
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the tests.
     * @param {Number} result 0 - tests pass, 1 - tests fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, steps) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, steps) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the tests run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing tests results
     */
    onComplete: function () {
        console.log('\n<<< TESTING FINISHED >>>\n');
    }
    /**
     * Gets executed when a refresh happens.
     * @param {String} oldSessionId session ID of the old session
     * @param {String} newSessionId session ID of the new session
     */
    //onReload: function(oldSessionId, newSessionId) {
    //}
};
