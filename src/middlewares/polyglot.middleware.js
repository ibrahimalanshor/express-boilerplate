const Polyglot = require('node-polyglot')

const messages = {
    'id': {
        'greet': {
            'hello': 'halo %{name}'
        }
    }
}

module.exports = (req, res, next) => {
    req.polyglot = new Polyglot
    req.polyglot.extend(messages[req.locale.language])

    next()
}