import express from 'express';

import { authMiddleware } from './../middlewares/auth';
import { ProfileController } from '../controllers/profile.controller';

const router = express.Router();

router.post('/sign-up', ProfileController.createProfile);

router.get('/', authMiddleware, ProfileController.getProfiles);

router.put('/:id', authMiddleware, ProfileController.updateProfile);

router.delete('/:id', authMiddleware, ProfileController.deleteProfile);

export default router;
