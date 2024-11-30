/** @format */

"use client";

import React, { useState, useRef } from "react";
import FormGroup from "../common/FormGroup";
import { useFormik } from "formik";
import TextField from "../common/TextField";
import SelectInput from "../common/SelectInput";
import { gender } from "@/utils/constant";
import Button from "../common/Button";
import { membershipSchema } from "@/utils/validations/membership";
import { useMutation } from "@tanstack/react-query";
import { createMember } from "@/lib/api/membership";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const FormMemberShip = () => {
    const { mutateAsync: createMemberFn } = useMutation({
        mutationFn: createMember,
    });
    const router = useRouter();
    const [previewUrl, setPreviewUrl] = useState<string>(
        "https://avatar.iran.liara.run/username?username=avatar"
    );
    const [isHovered, setIsHovered] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
            setSelectedFile(file);
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
        validationSchema: membershipSchema,
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
                const response = await createMemberFn(newValue);
                if (response) {
                    toast.success("Enregistrer avec success");
                    setTimeout(() => {
                        router.push("/membership/success");
                        resetForm();
                        setPreviewUrl(
                            "https://avatar.iran.liara.run/username?username=avatar"
                        );
                        setSelectedFile(null);
                    }, 2000);
                }
            } catch (error) {
                toast.error("Echec de l'enregistrement");
                console.log(error);
            }
        },
    });
    return (
        <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-4 md:gap-5 border border-gray-200 rounded-xl md:p-6 p-4'
        >
            <div className='relative w-40 h-40 mx-auto'>
                <div
                    className='relative w-full h-full rounded-full overflow-hidden cursor-pointer group'
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
                    <img
                        src={previewUrl}
                        alt='Profile'
                        className='w-full h-full object-cover'
                    />
                    {isHovered && (
                        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity'>
                            <svg
                                className='w-8 h-8 text-white'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                                />
                            </svg>
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
            <div className='flex items-start'>
                <Button
                    isLoading={isSubmitting}
                    type='submit'
                    text='Enregistrer'
                />
            </div>
        </form>
    );
};

export default FormMemberShip;
