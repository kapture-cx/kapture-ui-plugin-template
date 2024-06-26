const { ModuleFederationPlugin } = require("webpack").container
const { dependencies } = require("./package.json")

const name = "remote"
const exposes = {
    PluginCore: "./src/App.js",
}
const filename = "remoteEntry.js"
const shared = {
    ...dependencies,
    "@material-ui/core": {
        singleton: true,
        requiredVersion: dependencies["@material-ui/core"],
    },
    react: {
        singleton: true,
        requiredVersion: dependencies["react"],
    },
    "react-dom": {
        singleton: true,
        requiredVersion: dependencies["react-dom"],
    },
    "react-router": {
        singleton: true,
        requiredVersion: dependencies["react-router"],
    },
    "react-router-dom": {
        singleton: true,
        requiredVersion: dependencies["react-router-dom"],
    },
    "react-router-config": {
        singleton: true,
        requiredVersion: dependencies["react-router-config"],
    },
    redux: {
        singleton: true,
        requiredVersion: dependencies["redux"],
    },
    "react-redux": {
        singleton: true,
        requiredVersion: dependencies["react-redux"],
    },
}

const moduleFederationPluginConfig = {
    name,
    filename,
    exposes,
    shared,
}

module.exports = {
    devServer: {
        port: 3003,
    },
    webpack: {
        plugins: {
            add: [new ModuleFederationPlugin(moduleFederationPluginConfig)],
        },
        configure: webpackConfig => ({
            ...webpackConfig,
            output: {
                ...webpackConfig.output,
                publicPath: "auto",
                uniqueName: "kapture-mfe-plugin-" + new Date().getTime(), // This should be unique for every build as it'll avoid issues in versioning of the plugin
            },
        }),
    },
}
