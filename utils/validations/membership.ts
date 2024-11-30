/** @format */

import * as Yup from "yup";

export const membershipSchema = Yup.object().shape({
    firstname: Yup.string().required("Nom est obligatoire"),

    lastname: Yup.string().required("Postnom de famille est obligatoire"),

    email: Yup.string()
        .email("Format d’email invalide")
        .required("L’email est obligatoire"),
    password: Yup.string()
        .min(8, "Le mot de passe doit contenir au moins 8 caractères")
        .required("Le mot de passe est obligatoire"),

    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Les mots de passe doivent correspondre")
        .required("La confirmation du mot de passe est obligatoire"),

    gender: Yup.string()
        .oneOf(["MALE", "FEMALE"], "Le genre doit être MALE ou FEMALE")
        .required("Le genre est obligatoire"),

    username: Yup.string().optional(),
});
