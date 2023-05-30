const path = require("path");
const buble = require("@rollup/plugin-buble");
const { babel } = require("@rollup/plugin-babel");
const { nodeResolve } = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const vue = require("rollup-plugin-vue");
const css = require("rollup-plugin-css-only");
const replace = require("@rollup/plugin-replace");

const resloveFile = function (filePath) {
    return path.join(__dirname, filePath);
};

const babelOptions = {
    "presets": ["@babel/preset-env"],
};

module.exports = [
    {
        input: resloveFile("src/main.js"),
        output: {
            file: resloveFile("dist/index.js"),
            filename: "umd",
            name: "App",
        },

        plugins: [
            vue({ css: false }),
            nodeResolve(),
            commonjs(),
            replace({
                preventAssignment: true,
                "process.browser": true,
                "process.env.NODE_ENV": JSON.stringify("production")
            }),
            babel(babelOptions),
            buble(),
        ]
    }
];