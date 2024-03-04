import Joi from 'joi';

export const ProfileValidate = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  name: Joi.string().required(),
  dob: Joi.string().required(),
  gender: Joi.string().required(),
  address: Joi.string().required(),
  subscribe: Joi.boolean().required(),
});

export const updateProfileValidate = Joi.object({
  name: Joi.string().required(),
  dob: Joi.string().required(),
  gender: Joi.string().required(),
  address: Joi.string().required(),
  subscribe: Joi.boolean().required(),
});

export const changePasswordValidate = Joi.object({
  currentPassword: Joi.string().required(),
  newPassword: Joi.string().required(),
});
