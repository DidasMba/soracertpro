/** @format */

"use client";

import React, { useState, useRef } from "react";
import FormGroup from "../common/FormGroup";
import { useFormik } from "formik";
import TextField from "../common/TextField";
import Button from "../common/Button";
import { useMutation } from "@tanstack/react-query";
import { createParner } from "@/lib/api/partnership";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { partnerSchema } from "@/utils/validations/partnership";
import { PiImage } from "react-icons/pi";

const FormPartner = () => {
    const { mutateAsync: createPatnerFn } = useMutation({
        mutationFn: createParner,
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
            company: "",
        },
        validationSchema: partnerSchema,
        onSubmit: async (value, { resetForm }) => {
            const newValue = {
                ...value,
                logo: selectedFile,
            };
            try {
                if (selectedFile) {
                    const response = await createPatnerFn(newValue);
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
                    error={errors.company!}
                    touched={touched.company!}
                    value={values.company}
                    name='company'
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
            <div className='flex flex-col gap-2 items-start w-full'>
                {/* Bouton Upload Logo */}
                <button
                    type='button'
                    onClick={handleUploadClick}
                    className='px-6 py-2 w-auto bg-gray-300 rounded text-sm font-medium flex gap-2'
                >
                    <PiImage className='text-customBlue' size={20} />{" "}
                    Télécharger le logo
                </button>

                {/* Carré de prévisualisation */}
                <div className='w-52 h-32 border  border-gray-300 rounded-md flex items-center justify-center bg-gray-50'>
                    {previewUrl ? (
                        <img
                            src={previewUrl}
                            alt='Logo Preview'
                            className='w-full h-full object-contain'
                        />
                    ) : (
                        <span className='text-gray-400 text-sm'>
                            Aucun logo
                        </span>
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
                    <p className='text-red-500 text-sm'>
                        Le logo est obligatoire.
                    </p>
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
