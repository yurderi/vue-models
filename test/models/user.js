module.exports = {
    fields: [
        { name: 'id', type: 'integer' },
        { name: 'username', type: 'string', filterable: true },
        { name: 'password', type: 'string' },
        { name: 'created', type: 'string' },
        { name: 'changed', type: 'string' }
    ],
    proxy: {
        list: 'backend/user/list',
        detail: 'backend/user/detail',
        save: 'backend/user/save',
        remove: 'backend/user/remove'
    }
}