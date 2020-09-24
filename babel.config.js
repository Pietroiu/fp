module.exports = function (api) {

    api.cache(false);

    const presets = [
        ["@babel/preset-env",{
            "useBuiltIns": "usage",
            "corejs": 3,
            "debug": true,
            "targets":"> 0.25%, not dead, ie >= 9, last 5 versions"
        }]
    ];

    return {
        presets,
        exclude: /node_modules/
    };

}