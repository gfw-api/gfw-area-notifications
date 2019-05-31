class NotificationsService {

    static sendAreaCreated(ctx) {
        ctx.body = {
            greeting: 'Great! Lets send them!'
        };
    }

    static sendAreaUpdated(ctx) {
        ctx.body = {
            greeting: 'Updated are they? Lets send them!'
        };
    }

}

module.exports = NotificationsService;
