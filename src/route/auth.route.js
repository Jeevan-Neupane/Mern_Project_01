import exress from "express";
import { getAuth, register, login } from "../controllers/auth.controller.js";
import signupSchema from "../validators/auth-validators.js";
import validate from "../middleware/validate.middleware.js";

const router = exress.Router();


router.get('/', getAuth)



router.post('/register', validate(signupSchema), register);

router.post('/login', login)






export default router;

