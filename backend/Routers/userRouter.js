import express from 'express';
import { loginControllers, registerControllers, setAvatarController } from '../controllers/userController.js';

const router = express.Router();

router.route("/api/auth/register").post(registerControllers);
router.route("/api/auth/login").post(loginControllers);
router.route("/api/auth/setAvatar/:id").post(setAvatarController);

export default router;
