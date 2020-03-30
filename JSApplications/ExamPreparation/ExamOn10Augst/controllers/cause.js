import extend from '../utils/context.js';
import models from '../models/index.js';
import docModifier from '../utils/doc-modifier.js';

export default {
    get: {
        dashboard(context) {
            models.cause.getAll().then((response) => {
                const causes = response.docs.map(docModifier);

                context.causes = causes;

                extend(context).then(function () {
                    this.partial('../views/cause/dashboard.hbs');
                });
            });
        },
        create(context) {
            extend(context).then(function () {
                this.partial('../views/cause/create.hbs');
            });
        },
        details(context) {
            const { causeId } = context.params;

            models.cause.get(causeId).then((response) => {
                const cause = docModifier(response);
                context.cause = cause;
                extend(context).then(function () {
                    this.partial('./views/cause/details.hbs');
                });

            }).catch((e) => console.error(e));
        }
    },
    post: {
        create(context) {
            const data = {
                ...context.params,
                uid: localStorage.getItem('userId'),
                collectedFunds: 0,
                donors: []
            };

            models.cause.create(data).then((response) => {
                console.log(response);
                context.redirect('#/cause/dashboard');

            }).catch((e) => console.error(e));
        }
    }
}