console.log('Log:Starting');

(async () => { await true;

    console.log('Importing...');
    let routerModule = await import('./gui/route/RouterFactory.js');
    let router = routerModule.RouterFactory.createInstance();
    
    router.add('authentication', 'x-authentication');
    router.add('calculation', 'xx-calculation');

    router.default('authentication');

    router.go();
})();