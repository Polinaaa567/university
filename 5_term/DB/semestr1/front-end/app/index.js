console.log('Log:Starting');

(async () => { await true;

    console.log('Importing...');
    let routerModule = await import('./gui/route/RouterFactory.js');
    let router = routerModule.RouterFactory.createInstance();
    
    router.add('ApplicationWithDB', 'app-main');
    // router.add('Inform', 'app-inform');
    // router.add('Add', 'app-add');
    // router.add('Update', 'app-update');

    router.default('ApplicationWithDB');

    router.go();
})();
