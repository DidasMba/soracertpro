/** @format */
"use client";

import React from "react";
import TextField from "../common/TextField";
import FormGroup from "../common/FormGroup";
import { useFormik } from "formik";
import Button from "../common/Button";
import Link from "next/link";
import { signinSchema } from "@/utils/validations/user";
import { useMutation } from "@tanstack/react-query";
import { signinFn } from "@/lib/api/auth";
import { toast } from "react-toastify";
import ErrorMessage from "../common/ErrorMessage";
import { useRouter } from "next/navigation";

const SigninForm = () => {
    const { mutateAsync: signin, data } = useMutation({
        mutationFn: signinFn,
    });

    const router = useRouter();

    const {
        values,
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        touched,
        isSubmitting,
    } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: signinSchema,
        onSubmit: async (value, { resetForm, setSubmitting }) => {
            try {
                const response = await signin({
                    email: value.email,
                    password: value.password,
                });
                if (response?.status === "success") {
                    toast.success("Connexion avec Succes!!!");
                    setSubmitting(false);
                    setTimeout(() => {
                        router.push("/sora/home");
                        resetForm();
                    }, 1000);
                }
            } catch (error) {
                console.log(error);
            }
        },
    });
    return (
        <div className='bg-gray-50 w-full min-h-svh flex items-center px-4 py-2 md:px-6'>
            <form
                onSubmit={handleSubmit}
                className='px-4 bg-white shadow-md md:px-6 max-w-md w-full mx-auto pb-6 pt-2 border border-gray-200 rounded-xl'
            >
                <div className='py-2 border-b border-gray-200 mb-4'>
                    <h3 className='text-customBlue text-base font-bold'>
                        Connectez Vous!
                    </h3>
                </div>
                <div className='flex flex-col gap-4'>
                    <FormGroup col='col-1'>
                        <TextField
                            handleBlur={handleBlur}
                            error={errors.email!}
                            touched={touched.email!}
                            value={values.email}
                            name='email'
                            placeholder='e.g. degaulmbanza@gmail.com'
                            handleChange={handleChange}
                            label='Addresse Email'
                            type='email'
                        />
                    </FormGroup>
                    <FormGroup col='col-1'>
                        <TextField
                            handleBlur={handleBlur}
                            error={errors.password!}
                            touched={touched.password!}
                            value={values.password}
                            name='password'
                            placeholder='e.g. *******'
                            handleChange={handleChange}
                            label='Mot de passe'
                            type='password'
                        />
                    </FormGroup>
                    <div className='mt-4 border-t border-gray-100 pt-2'>
                        <div className='flex items-center gap-3'>
                            <Button
                                isLoading={isSubmitting}
                                type='submit'
                                text='Connecter'
                            />
                            <Link
                                className='text-sm font-medium text-customBlue hover:underline'
                                href='/signup'
                            >
                                S'inscrire
                            </Link>
                        </div>
                    </div>
                    {data?.error_message && (
                        <ErrorMessage text={data?.error_message} />
                    )}
                </div>
            </form>
        </div>
    );
};

export default SigninForm;
