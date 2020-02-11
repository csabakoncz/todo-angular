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
        },
        '@angular/core': {
            'defaultExtension': 'js',
            'main': 'core'
        },
        '@angular/compiler': {
            'defaultExtension': 'js',
            'main': 'compiler'
        },
        '@angular/platform-browser': {
            'defaultExtension': 'js',
            'main': 'platform-browser'
        },
        '@angular/platform-browser-dynamic': {
            'defaultExtension': 'js',
            'main': 'platform-browser-dynamic'
        },
        '@angular/common': {
            'defaultExtension': 'js',
            'main': 'common'
        },
        '@angular/forms': {
            'defaultExtension': 'js',
            'main': 'forms'
        },
        '@angular/router': {
            'defaultExtension': 'js',
            'main': 'router'
        },
        rxjs: {
            main: 'index.js',
            defaultExtension: 'js'
        },
        "rxjs/operators": {
            main: 'index.js',
            defaultExtension: 'js'
        }
    },
    map: {
        "@angular/platform-browser-dynamic": "../node_modules/@angular/platform-browser-dynamic/esm2015",
        "@angular/platform-browser": "../node_modules/@angular/platform-browser/esm2015",
        "@angular/compiler": "../node_modules/@angular/compiler/esm2015",
        "@angular/core": "../node_modules/@angular/core/esm2015",
        "@angular/common": "../node_modules/@angular/common/esm2015",
        "@angular/forms": "../node_modules/@angular/forms/esm2015",
        "@angular/router": "../node_modules/@angular/router/esm2015",
        "redux": "../node_modules/redux/dist/redux.js",
        "redux-logger": "../node_modules/redux-logger/dist/redux-logger.js",
        "redux-thunk": "../node_modules/redux-thunk/es/index.js",
        "rxjs": "../node_modules/rxjs/_esm2015",
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
