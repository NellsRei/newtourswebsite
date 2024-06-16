import Joi from "joi";

export const RegisterSchema = Joi.object(
    {
        username : Joi.string().required(),
        Email : Joi.string().required().email().messages({'string-email': "Please Enter a Valid Email"}),
        Password : Joi.string().required().pattern(
            new RegExp ('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
    )}
)