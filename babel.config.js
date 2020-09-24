module.exports = function (api) {
    api.cache(false);

    const presets = [
        ["@babel/preset-env",{
            "useBuiltIns": "usage",
            "corejs": 3,
            "debug": true,
            "modules": 'auto',
            "targets":"> 0.25%, not dead, ie >= 9"
        }]
    ];

    const plugins = [];

    return {
        presets,
        plugins,
        exclude: /node_modules/
    };
}