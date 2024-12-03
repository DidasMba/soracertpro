/** @format */
"use client";
import { userSchema } from "@/utils/validations/user";
import { useFormik } from "formik";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import FormGroup from "../common/FormGroup";
import Button from "../common/Button";
import { gender } from "@/utils/constant";
import SelectInput from "../common/SelectInput";
import TextField from "../common/TextField";
import Link from "next/link";

const SignUpForm = () => {
    const [previewUrl, setPreviewUrl] = useState<string>("");
    const [isHovered, setIsHovered] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [errorImage, setErrorImage] = useState<boolean>(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
            setSelectedFile(file);
            setErrorImage(false);
        }
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };
    const {
        values,
        handleBlur,
        handleChange,
        handleSubmit,
        errors,
        touched,
        isSubmitting,
    } = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmPassword: "",
            gender: "",
            username: "",
        },
        validationSchema: userSchema,
        onSubmit: async (value, { resetForm }) => {
            const newValue = {
                firstname: value.firstname,
                lastname: value.lastname,
                email: value.email,
                password: value.password,
                gender: value.gender,
                username: value.username,
                avatar: selectedFile,
            };
            try {
                if (previewUrl.length !== 0) {
                    // const response = await createMemberFn(newValue);
                    // if (response) {
                    //     toast.success("Enregistrer avec success");
                    //     setTimeout(() => {
                    //         router.push("/membership/success");
                    //         resetForm();
                    //         setPreviewUrl(
                    //             "https://avatar.iran.liara.run/username?username=avatar"
                    //         );
                    //         setSelectedFile(null);
                    //     }, 2000);
                    // }
                } else {
                    setErrorImage(true);
                }
            } catch (error) {
                toast.error("Echec de l'enregistrement");
                console.log(error);
            }
        },
    });
    return (
        <div className='bg-gray-50 w-full min-h-svh flex items-center px-4 py-2 md:px-6'>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-4 max-w-xl w-full shadow bg-white mx-auto md:gap-5 border border-gray-200 rounded-xl md:p-6 p-4'
            >
                <div className='py-2 border-b border-gray-100'>
                    <h3 className='font-bold text-customBlue text-base'>
                        Remplissez le formulaire d'inscription ici
                    </h3>
                </div>
                <div className='relative w-32 h-32 md:w-40 md:h-40 mx-auto'>
                    <div
                        className='relative w-full h-full rounded-full border border-gray-100 overflow-hidden cursor-pointer group'
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={handleClick}
                        role='button'
                        tabIndex={0}
                        aria-label='Update profile picture'
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                handleClick();
                            }
                        }}
                    >
                        {previewUrl?.length === 0 ? (
                            <div className='w-full h-full flex justify-center items-center'>
                                <LuUser className='text-black' size={40} />
                            </div>
                        ) : (
                            <img
                                src={
                                    previewUrl?.length !== 0
                                        ? previewUrl
                                        : "https://avatar.iran.liara.run/username?username=avatar"
                                }
                                alt='Profile'
                                className='w-full h-full object-cover'
                            />
                        )}

                        {isHovered && (
                            <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity'>
                                <MdOutlinePhotoCamera
                                    className='text-white'
                                    size={30}
                                />
                            </div>
                        )}
                    </div>
                    <input
                        ref={fileInputRef}
                        type='file'
                        accept='image/*'
                        onChange={handleFileChange}
                        className='hidden'
                        aria-hidden='true'
                    />
                    {errorImage && (
                        <p className='text-red-400 italic text-sm text-center  font-medium'>
                            Profile est obligatoire
                        </p>
                    )}
                </div>
                <FormGroup col='col-2'>
                    <TextField
                        handleBlur={handleBlur}
                        error={errors.firstname!}
                        touched={touched.firstname!}
                        value={values.firstname}
                        name='firstname'
                        placeholder='e.g. Degaul'
                        handleChange={handleChange}
                        label='Nom'
                        type='text'
                    />
                    <TextField
                        handleBlur={handleBlur}
                        error={errors.lastname!}
                        touched={touched.lastname!}
                        value={values.lastname}
                        name='lastname'
                        placeholder='e.g. Mbanza'
                        handleChange={handleChange}
                        label='Post nom'
                        type='text'
                    />
                </FormGroup>
                <FormGroup col='col-2'>
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
                    <TextField
                        handleBlur={handleBlur}
                        error={errors.username!}
                        touched={touched.username!}
                        value={values.username}
                        name='username'
                        placeholder='e.g. degaulb'
                        handleChange={handleChange}
                        label="Nom d'utilisateur"
                        type='text'
                    />
                </FormGroup>
                <FormGroup col='col-1'>
                    <SelectInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name='gender'
                        touched={touched.gender!}
                        error={errors.gender!}
                        value={values.gender}
                        options={gender}
                        label='Votre Genre'
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
                <FormGroup col='col-1'>
                    <TextField
                        handleBlur={handleBlur}
                        error={errors.confirmPassword!}
                        touched={touched.confirmPassword!}
                        value={values.confirmPassword}
                        name='confirmPassword'
                        placeholder='e.g. *******'
                        handleChange={handleChange}
                        label='Confirme mot de passe'
                        type='password'
                    />
                </FormGroup>
                <div className='flex items-center gap-3'>
                    <Button
                        isLoading={isSubmitting}
                        type='submit'
                        text='Enregistrer'
                    />
                    <Link
                        className='text-sm font-medium text-customBlue hover:underline'
                        href='/signin'
                    >
                        Se Connecter
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;
