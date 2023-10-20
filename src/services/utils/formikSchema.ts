import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const signupSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Please enter your username"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter email"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters long")
    .matches(passwordRules, {
      message:
        "Password should contain 1 upper case letter, 1 lower case letter, 1 numeric digit.",
    })
    .required("Please enter password"),
});
export const loginSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters long")
    .required("Please enter your Username"),
  password: yup.string().required("Please enter password"),
});

export const passwordSchema = yup.object().shape({
  oldPassword: yup.string().required("Please enter old password"),
  newPassword: yup
    .string()
    .min(5, "Password must be at least 5 characters long")
    .matches(passwordRules, {
      message:
        "Password should contain 1 upper case letter, 1 lower case letter, 1 numeric digit.",
    })
    .required("Please enter new password"),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your new password"),
});

export const tournamentSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters long")
    .required("Name is required"),
  game: yup.string().required("Game is required"),
  type: yup.string().required("Type is required"),
  cost: yup.string().required("Cost is required"),
  startTime: yup.string().required("Start Time is required").length(16, ('Must be 16 characters --> Example 2023-02-16,15:20')),
  startAfter: yup.string().required("Start After is required").length(5, ('Must be 5 characters --> Example 20:50')),
  active_start: yup.string().required("Active Start is required").length(5, ('Must be 5 characters --> Example 20:50')),
  active_end: yup.string().required("Active End is required").length(5, ('Must be 5 characters --> Example 20:50')),
  capacity: yup.string().required("Capacity is required"),
});
