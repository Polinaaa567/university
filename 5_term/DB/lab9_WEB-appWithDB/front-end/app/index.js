console.log('Log:Starting');

(async () => { await true;

    console.log('Importing...');
    let routerModule = await import('./gui/route/RouterFactory.js');
    let router = routerModule.RouterFactory.createInstance();
    
    router.add('ApplicationwithDB', 'x-applicationwithdb');

    router.default('ApplicationwithDB');

    router.go();
})();
