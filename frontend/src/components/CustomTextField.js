import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, TextField } from "@mui/material";
import theme from "../theme";

export default function CustomTextField({
	errors,
	label,
	name,
	type,
	register,
	size,
	...rest
}) {
	return (
		<Box mt={3}>
			<TextField
				error={Boolean(errors)}
				helperText={errors?.message}
				fullWidth
				label={label}
				name={name}
				type={type}
                color="secondary"
				variant="standard"
				{...register(name)}
				{...rest}
			/>
		</Box>
	);
}
