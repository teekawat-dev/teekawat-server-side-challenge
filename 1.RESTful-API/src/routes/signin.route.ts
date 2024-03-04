import express from 'express';

import { ProfileController } from '../controllers/profile.controller';

const router = express.Router();

router.post('/sign-up', ProfileController.createProfile);

router.post('/sign-in', ProfileController.signIn);

router.put('/change-password/:id', ProfileController.changePassword);

export default router;
