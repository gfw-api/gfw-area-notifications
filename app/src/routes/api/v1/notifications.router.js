const Router = require('koa-router');

const NotificationsService = require('services/notificationsService');

const router = new Router({
    prefix: '/area-notifications',
});

class NotificationsRouter {

    static getNotificationsCreate(ctx) {
        NotificationsService.sendAreaCreated(ctx);
    }

    static getNotificationsUpdated(ctx) {
        NotificationsService.sendAreaUpdated(ctx);
    }

}

router.get('/created', NotificationsRouter.getNotificationsCreate);
router.get('/updated', NotificationsRouter.getNotificationsUpdated);

module.exports = router;
