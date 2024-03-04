import { v4 as uuidv4 } from 'uuid';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { errorResponse, successResponse } from './../utils/responseApi';
import {
  ProfileValidate,
  changePasswordValidate,
  updateProfileValidate,
} from './../validator/registration.validator';
import { ProfileService } from '../services/profile.service';
import { comparePassword, hashPassword } from '../utils/passwordEncription';

class profileController {
  async getProfiles(req: Request, res: Response) {
    const profiles = await ProfileService.getProfiles();
    return res
      .status(201)
      .send(successResponse('successfully created', profiles, res.statusCode));
  }

  async createProfile(req: Request, res: Response) {
    const profiles = await ProfileService.getProfiles();
    const emailExists = profiles.find(
      (profile) => profile.email === req.body.email
    );
    if (emailExists) {
      return res
        .status(400)
        .send(errorResponse('Email already exist!', res.statusCode));
    }
    const password = await hashPassword(req.body.password);
    let data = {
      email: req.body.email,
      password,
      name: req.body.name,
      dob: req.body.dob,
      gender: req.body.gender,
      address: req.body.address,
      subscribe: req.body.subscribe,
    };
    const { error, value } = ProfileValidate.validate(data);
    if (error) {
      return res.status(400).send(errorResponse(error.message, res.statusCode));
    }
    const post = await ProfileService.createProfile({ ...value, id: uuidv4() });
    return res
      .status(201)
      .send(successResponse('successfully created', post, res.statusCode));
  }

  async updateProfile(req: Request, res: Response) {
    const profiles = await ProfileService.getProfiles();
    const profileExists = profiles.find(
      (profile) => profile.id === req.params.id
    );
    if (!profileExists) {
      return res
        .status(400)
        .send(errorResponse('Profile not found', res.statusCode));
    }
    const data = {
      name: req.body.name,
      dob: req.body.dob,
      gender: req.body.gender,
      address: req.body.address,
      subscribe: req.body.subscribe,
    };
    const { error, value } = updateProfileValidate.validate(data);
    if (error) {
      return res.status(400).send(errorResponse(error.message, res.statusCode));
    }
    const put = await ProfileService.updateProfile(req.params.id, value);
    res
      .status(201)
      .send(successResponse('created successfully ', put, res.statusCode));
  }

  async deleteProfile(req: Request, res: Response) {
    const id = req.params.id;
    const deleted = await ProfileService.deleteProfile(id);
    res
      .status(201)
      .send(successResponse('created successfully', deleted, res.statusCode));
  }

  async signIn(req, res) {
    const { email, password } = req.body;
    const data = await ProfileService.getProfileData();
    const emailExists = data.find((profile) => profile.email === email);
    if (!emailExists) {
      return res
        .status(400)
        .send(errorResponse('email not found', res.statusCode));
    }
    const passwordValid = await comparePassword(password, emailExists.password);
    if (!passwordValid) {
      return res
        .status(400)
        .send(errorResponse('Incorrect email and password', res.statusCode));
    }
    const token = jwt.sign({ id: emailExists.id }, 'faketoken_user1', {
      expiresIn: '1hr',
    });

    res.status(200).send({
      id: emailExists.id,
      name: emailExists.name,
      email: emailExists.email,
      accessToken: token,
    });
  }

  async changePassword(req, res) {
    const data = {
      currentPassword: req.body.currentPassword,
      newPassword: req.body.newPassword,
    };
    const profileId = req.params.id;
    const profiles = await ProfileService.getProfileData();
    const profile = profiles.find((profile) => profile.id === profileId);

    const { error, value } = changePasswordValidate.validate(data);
    if (error) {
      return res.status(400).send(errorResponse(error.message, res.statusCode));
    }

    const passwordValid = await comparePassword(
      value.currentPassword,
      profile.password
    );

    if (!passwordValid) {
      return res.status(404).json('Incorrect old password combination');
    }
    const password = await hashPassword(req.body.newPassword);
    profile.password = password;
    const put = await ProfileService.updateProfile(req.params.id, profile);
    res
      .status(201)
      .send(successResponse('deleted successfully', put, res.statusCode));
  }
}

export const ProfileController = new profileController();
