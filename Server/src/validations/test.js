const yup = require("yup");

const profile = yup.object().shape({
    name: yup.string().required(),
    age : yup.number().required()
})
 module.exports = profile;
