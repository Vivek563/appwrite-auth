import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
     email: Yup.string().email("Invalid email address").required("Email is Required"),
     password: Yup.string().min(6, "Must be at least 6 characters").required("Password is Required"),
});

export const registerValidationSchema = Yup.object({
     first_name: Yup.string().required("Required"),
     last_name: Yup.string().required("Required"),
     email: Yup.string().email("Invalid email address").required("Required"),
     password: Yup.string().min(6, "Must be at least 6 characters").required("Required"),
     confirmPassword: Yup.string()
          .oneOf([Yup.ref("password")], "Passwords must match")
          .required("Required"),
});
