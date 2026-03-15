const { db } = require("../services/db.service");

const Personalization = db.define("personalization", {
    'steamId': {
        type: db.Sequelize.TEXT,
        allowNull: false,
        defaultValue: null
    },
    'type': {
        type: db.Sequelize.ENUM('avatar', 'nickname'),
        allowNull: true,
        defaultValue: null
    },
    'content': {
        type: db.Sequelize.TEXT,
        allowNull: false,
        defaultValue: null
    }
}, {
    'createdAt': 'created',
    'indexes': [
        {
            'fields': [
                'steamId',
                'type'
            ]
        },
    ]
});

module.exports = Personalization