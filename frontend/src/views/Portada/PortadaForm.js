import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {
	Box,
	Checkbox,
	FormControlLabel,
	Grid,
	Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomButton from "../../components/CustomButton";
import CustomTextField from "../../components/CustomTextField";

const PortadaForm = () => {
	const [error, setError] = useState("");
	let navigate = useNavigate();

	const schema = Yup.object().shape({
		name: Yup.string().max(255).required("El nom és obligatòri"),
		telefon: Yup.string().max(255).required("El telèfon és obligatòri"),
		email: Yup.string()
			.email("Ha de ser un email vàlid")
			.max(255)
			.required("L'email és obligatòri"),
		password: Yup.string()
			.max(255)
			.required("La contrasenya és obligatòria"),
		password_confirm: Yup.string().oneOf(
			[Yup.ref("password"), null],
			"La contrasenya ha de coincidir"
		),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const registre = async (values) => {
		console.log(values);

		// const message = await registreJugador(values);
		// if (message === "error") {
		// 	setError("Usuari o contrasenya incorrectes");
		// } else {
		// 	navigate("/admin/");
		// }
	};

	return (
        <Box
            sx={{width: '100%'}}
        >
            <form onSubmit={handleSubmit(registre)}>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <CustomTextField
                            name="name"
                            label="Name"
                            type="text"
                            errors={errors.name}
                            register={register}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <CustomTextField
                            name="surname"
                            label="Surname"
                            type="text"
                            errors={errors.surname}
                            register={register}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <CustomTextField
                            name="company"
                            label="Company name"
                            type="text"
                            errors={errors.company}
                            register={register}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <CustomTextField
                            name="email"
                            label="E-mail"
                            type="email"
                            errors={errors.email}
                            register={register}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item md={12} xs={12}>
                        <CustomTextField
                            name="help"
                            label="Write here and let us know how can we help you and we will get in touch as soon as possible."
                            type="text"
                            errors={errors.help}
                            register={register}
                        />
                    </Grid>
                </Grid>

                <Typography variant="body1" style={{ color: "red" }}>
                    {error}
                </Typography>

                <Box my={2}>
                    <div style={{maxWidth: '35%', float:'right'}}>
                        <CustomButton fullWidth type="submit" title="SUBMIT" />
                    </div>
                </Box>
            </form>
        </Box>
	);
};

export default PortadaForm;
