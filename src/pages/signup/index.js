import React from "react";
import { AuthLayout, Input, Button } from "../../components";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

const apiUrl = "http://localhost:3000/users";

const password =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[!#%])[A-Za-z0-9!#%]{8,20}$/;

const validation = yup.object({
  username: yup.string().required(),
  password: yup
    .string()
    .matches(
      password,
      "password must contain at least one uppercase and lowercase letter, one number and one of these special characters(! # %)"
    )
    .required(),
  repeatPassword: yup
    .string()
    .matches(
      password,
      "password must contain at least one uppercase and lowercase letter, one number and one of these special characters(! # %)"
    )
    .required("")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const Signup = () => {
  const { values, handleSubmit, handleChange, errors } = useFormik({
    initialValues: { username: "", password: "" },
    onSubmit: () => {
      postApi.mutate(values);
    },
    validationSchema: validation,
  });

  const postApi = useMutation(async (values) => {
    const res = await axios.post(apiUrl, values);
    toast.success("account created!");
    return res;
  });

  return (
    <AuthLayout isltr={false} image={"./img/Tablet login-amico.svg"}>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <img className="w-24" src="./img/undraw_female_avatar_w3jk.svg" />
        <h2 className="text-5xl font-semibold my-4 text-[#333]">SignUp</h2>

        <Input
          label={"Username"}
          name={"username"}
          type={"text"}
          style={"one"}
          icon={"./img/user.svg"}
          value={values.username}
          error={errors.username}
          onChange={handleChange("username")}
        />
        <Input
          label={"Password"}
          name={"password"}
          type={"password"}
          style={"two"}
          icon={"./img/lock.svg"}
          value={values.password}
          error={errors.password}
          onChange={handleChange("password")}
        />
        <Input
          label={"Confirm Password"}
          name={"password"}
          type={"password"}
          style={"two"}
          icon={"./img/lock.svg"}
          value={values.repeatPassword}
          error={errors.repeatPassword}
          onChange={handleChange("repeatPassword")}
        />

        <Button type="submit" label="Signup" />
      </form>
    </AuthLayout>
  );
};
