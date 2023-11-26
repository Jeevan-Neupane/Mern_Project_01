const validate = (validateSchema) => async (req, res, next) => {

    try {
        const parseBody = await validateSchema.parseAsync(req.body);
        console.log("Req Body", parseBody);
        req.body = parseBody;
        next();
    } catch (error) {



        const status = 400;
        console.log(error.errors);

        const errors = {
            status,
            message: error.errors,
            extraDetails: "Error while validation"
        }

        next(errors);
    }
}


export default validate;