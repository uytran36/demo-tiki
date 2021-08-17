const ghData = require("../models/NVGH");


const loginNVGH = async(req, res, next) => {
    try {
        const data = req.body;
        const login = await ghData.checkLogin(data)
        res.send(login)
    } catch (error) {
        res.status(400).send(error.message);
      }
}

module.exports = {
    loginNVGH
}