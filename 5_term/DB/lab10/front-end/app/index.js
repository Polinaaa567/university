console.log('Log:Starting');

(async () => { await true;

    console.log('Importing...');
    let routerModule = await import('./gui/route/RouterFactory.js');
    let router = routerModule.RouterFactory.createInstance();
    
    router.add('ApplicationWithDB', 'app-main');
    router.add('Inform', 'app-inform');
    router.add('Add', 'app-add');

    router.default('ApplicationWithDB');

    router.go();
})();
