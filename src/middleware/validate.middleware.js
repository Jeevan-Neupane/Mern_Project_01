const validate = (validateSchema) => async (req, res, next) => {

    try {
        const parseBody = await validateSchema.parseAsync(req.body);
        console.log("Req Body",parseBody);
        req.body = parseBody;
        next();
    } catch (error) {

        res.status(400).json({
            msg: error.issues,
            validation: "Failed"
        })

    }
}


export default validate;