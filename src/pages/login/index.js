import React from "react";
import { AuthLayout, Input, Button } from "../../components";
import "./login.css";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

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
});

export default function Login() {
  const { values, handleSubmit, handleChange, errors } = useFormik({
    initialValues: { username: "", password: "" },
    onSubmit: (value) => {
      const data = {
        username: value.username,
        password: value.password,
      };
      postApi(data);
    },
    validationSchema: validation,
  });

  const postApi = async (data) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/users?username=${data.username}&password=${data.password}`
      );

      const users = res.data;
      if (users.length > 0) {
        console.log("User logged in successfully");
        toast.success("you are logged in.");
      } else {
        console.log("Username or password is incorrect");
        toast.error("username or password is incorrect!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCallApi = () => postApi();

  return (
    <AuthLayout
      isltr={true}
      title="welcome"
      image="./img/Tablet login-pana.svg"
    >
      <div>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <img className="w-24" src="./img/undraw_female_avatar_w3jk.svg" />
          <h2
            className="text-5xl font-semibold my-4 text-[#333]"
            title="Welcome"
          >
            Welcome
          </h2>

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

          <Button onClick={handleCallApi} type="submit" label="Login" />
        </form>
      </div>
    </AuthLayout>
  );
}
