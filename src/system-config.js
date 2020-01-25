window._systemConfig = {
    meta: {
        typescript: {
            exports: 'ts'
        },
        "*.html": {
            "loader": "text"
        }
    },
    packages: {
        app: {
            "defaultExtension": "ts",
        },
        '../node_modules/core-js': {
            "defaultExtension": "js",
        }
    },
    map: {
        "@angular/platform-browser-dynamic": "../node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js",
        "@angular/platform-browser": "../node_modules/@angular/platform-browser/bundles/platform-browser.umd.js",
        "@angular/compiler": "../node_modules/@angular/compiler/bundles/compiler.umd.js",
        "@angular/core": "../node_modules/@angular/core/bundles/core.umd.js",
        "@angular/common": "../node_modules/@angular/common/bundles/common.umd.js",
        "@angular/forms": "../node_modules/@angular/forms/bundles/forms.umd.js",
        "redux": "../node_modules/redux/dist/redux.js",
        "rxjs": "../node_modules/rxjs/bundles/rxjs.umd.js",
        "rxjs/operators": "rxjs-operators-shim.js",
        "symbol-observable": "../node_modules/symbol-observable/lib/index.js",
        "zone": "../node_modules/zone.js/dist/zone.js",
        ts: "../node_modules/plugin-typescript/lib/plugin.js",
        typescript: "../node_modules/typescript/lib/typescript.js",
        'text': 'https://cdn.jsdelivr.net/npm/systemjs-plugin-text@0.0.11/text.js'
    },
    transpiler: 'ts',
    typescriptOptions: {
      emitDecoratorMetadata: true,
      experimentalDecorators: true
    }
};
