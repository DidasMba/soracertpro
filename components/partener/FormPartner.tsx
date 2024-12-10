/** @format */

"use client";

import React, { useState, useRef } from "react";
import FormGroup from "../common/FormGroup";
import { useFormik } from "formik";
import TextField from "../common/TextField";
import Button from "../common/Button";
import { membershipSchema } from "@/utils/validations/membership";
import { useMutation } from "@tanstack/react-query";
import { createMember } from "@/lib/api/membership";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const FormPartner = () => {
    const { mutateAsync: createMemberFn } = useMutation({
        mutationFn: createMember,
    });
    const router = useRouter();
    const [previewUrl, setPreviewUrl] = useState<string>("");
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

    const handleUploadClick = () => {
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
            description: "",
            username: "",
        },
        validationSchema: membershipSchema,
        onSubmit: async (value, { resetForm }) => {
            const newValue = {
                ...value,
                avatar: selectedFile,
            };
            try {
                if (selectedFile) {
                    const response = await createMemberFn(newValue);
                    if (response) {
                        toast.success("Enregistrer avec succès");
                        setTimeout(() => {
                            router.push("/membership/success");
                            resetForm();
                            setPreviewUrl("");
                            setSelectedFile(null);
                        }, 2000);
                    }
                } else {
                    setErrorImage(true);
                }
            } catch (error) {
                toast.error("Échec de l'enregistrement");
                console.log(error);
            }
        },
    });

    return (
        <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-4 md:gap-5 border border-gray-200 rounded-xl md:p-6 p-4'
        >
            <FormGroup col='col-2'>
                <TextField
                    handleBlur={handleBlur}
                    error={errors.firstname!}
                    touched={touched.firstname!}
                    value={values.firstname}
                    name='firstname'
                    placeholder='ex: Degaul'
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
                    placeholder='ex: Banza'
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
                    placeholder='ex: degaulbanza@gmail.com'
                    handleChange={handleChange}
                    label='Adresse Email'
                    type='email'
                />
                <TextField
                    handleBlur={handleBlur}
                    error={errors.username!}
                    touched={touched.username!}
                    value={values.username}
                    name='username'
                    placeholder='ex: Nom de la compagnie'
                    handleChange={handleChange}
                    label='Nom de la compagnie'
                    type='text'
                />
            </FormGroup>
            <FormGroup col='col-1'>
                <TextField
                    handleBlur={handleBlur}
                    error={errors.description!}
                    touched={touched.description!}
                    value={values.description}
                    name='description'
                    placeholder='Décrivez votre compagnie'
                    handleChange={handleChange}
                    label='Description'
                    type='text'
                />
            </FormGroup>
            {/* Bouton et prévisualisation */}
            <div className='flex flex-col items-start gap-4 w-fit p-4 border border-gray-200 rounded-md bg-white'>
    {/* Bouton Upload Logo */}
    <button
        type='button'
        onClick={handleUploadClick}
        className='w-auto px-3 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 flex items-center justify-center'
    >
        Upload Logo
    </button>
    
    {/* Carré de prévisualisation */}
    <div className='w-24 h-24 border border-gray-300 rounded-md flex items-center justify-center bg-gray-50'>
        {previewUrl ? (
            <img
                src={previewUrl}
                alt='Logo Preview'
                className='w-full h-full object-cover'
            />
        ) : (
            <span className='text-gray-400 text-sm'>Aucun logo</span>
        )}
    </div>
    
    {/* Input caché */}
    <input
        ref={fileInputRef}
        type='file'
        accept='image/*'
        onChange={handleFileChange}
        className='hidden'
    />
    {errorImage && (
        <p className='text-red-500 text-sm'>Le logo est obligatoire.</p>
    )}
</div>

            <div className='flex justify-end items-end'>
                <Button
                    isLoading={isSubmitting}
                    type='submit'
                    text='Enregistrer'
                />
            </div>
        </form>
    );
};

export default FormPartner;

