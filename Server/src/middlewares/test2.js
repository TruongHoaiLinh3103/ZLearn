const postProfile = (Scheme) => async (req, res, next) =>{
    const body = req.body;
    try {
        await Scheme.validate(body);
        next();
    } catch (error) {
        res.status(404).json({error : "ERROR!"})
    }
}
module.exports = postProfile;