module.exports = {
    getProducts: (req, res, next) => {
        const db = req.app.get('db');
        db
            .getProducts()
            .then(response => res.status(200).json(response))
            .catch(() => res.status(500).json(err))
    },

    getProductById: (req, res, next) => {
        const db = req.app.get('db');
        db  
            .getProductById([req.params.id])
            .then(response => res.status(500).json(response))
            .catch(() => res.status(500).json(err))
    },
};