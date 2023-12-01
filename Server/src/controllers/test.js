const list = require("../model/test");
module.exports = {
    get: (req, res) => {
        res.json(list);
    }
}