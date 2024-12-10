/** @format */

import * as Yup from "yup";

export const partnerSchema = Yup.object().shape({
    firstname: Yup.string().required("Nom est obligatoire"),

    lastname: Yup.string().required("Postnom de famille est obligatoire"),

    email: Yup.string()
        .email("Format d’email invalide")
        .required("L’email est obligatoire"),
    company: Yup.string()
        
        .required("La companie est obligatoire"),

    description: Yup.string().required(),
});
