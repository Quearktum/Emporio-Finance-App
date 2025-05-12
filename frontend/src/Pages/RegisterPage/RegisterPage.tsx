import React from "react";
import { useAuth } from "../../Context/useAuth";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

type Props = {};

type RegisterFormsInputs = {
  email: string;
  userName: string;
  password: string;
};

const validation = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  userName: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const RegisterPage = (props: Props) => {
  const { registerUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormsInputs>({ resolver: yupResolver(validation) });

  const handleLogin = (form: RegisterFormsInputs) => {
    registerUser(form.email, form.userName, form.password);
  };
  return (
    <section className="bg-gray-50 dark:bg-stone-100">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mb-20 sm:max-w-md xl:p-0 bg-white">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
              Sign up to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(handleLogin)}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="bg-gray-50 border border-stone-900 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Email"
                  {...register("email")}
                />
                {errors.email ? <p>{errors.email.message}</p> : ""}
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="bg-gray-50 border border-stone-900 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Username"
                  {...register("userName")}
                />
                {errors.userName ? <p>{errors.userName.message}</p> : ""}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-stone-900 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  {...register("password")}
                />
                {errors.password ? <p>{errors.password.message}</p> : ""}
              </div>
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  className="text-sm font-medium text-stone-500 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-emporioPrimary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-stone-500 dark:text-gray-400">
                ALready have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-emporioPrimary hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
