import exress from "express";
import { getAuth, register, login } from "../controllers/auth.controller.js";
import validate from "../middleware/validate.middleware.js";
// import { signupSchema } from "../validation/auth.validate.js";


const router = exress.Router();


router.get('/', getAuth)



router.post('/register', register);

router.post('/login', login)






export default router;

