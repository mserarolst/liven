import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { CircularProgress } from "@mui/material";
import theme from "../theme";

const BootstrapButton = styled(Button)({
	boxShadow: "none",
	textTransform: "uppercase",
	fontSize: 16,
	padding: "10px 20px",
	borderRadius: 8,
	lineHeight: 1,
	color: "white",
	border: "1px solid white",
	fontFamily: "Oswald",
	background: theme.color.gradient,
	width: 150,
	"&:hover": {
		// backgroundColor: "white",
		// color: "black",
		// borderColor: theme.color.background,
		// boxShadow: "0px 0px 5px 0px " + theme.color.background,
		// background: theme.color.gradient_inv,
	},
	"&:active": {
		// boxShadow: "none",
		// backgroundColor: theme.color.background,
		// borderColor: theme.color.background,
	},
	"&:focus": {
		// boxShadow: "0 0 0 0.2rem " + theme.color.background,
	},
});

const BootstrapButtonDanger = styled(Button)({
	boxShadow: "none",
	textTransform: "uppercase",
	fontSize: 16,
	padding: "10px 20px",
	borderRadius: 8,
	lineHeight: 1,
	color: "white",
	// border: "1px solid white",
	fontFamily: "Oswald",
	background: theme.color.primary,
	width: 150,
	"&:hover": {
		// backgroundColor: "white",
		color: "black",
		borderColor: theme.color.background,
		boxShadow: "0px 0px 5px 0px " + theme.color.background,
		background: theme.color.secondary,
	},
	"&:active": {
		boxShadow: "none",
		backgroundColor: theme.color.background,
		borderColor: theme.color.background,
	},
	"&:focus": {
		boxShadow: "0 0 0 0.2rem " + theme.color.background,
	},
});

const CustomButton = ({ title, danger, loading, fullWidth, ...rest }) => {
	return danger ? (
		<BootstrapButtonDanger
			style={{ width: fullWidth ? "100%" : "auto" }}
			{...rest}
			variant="contained"
		>
			{loading ? <CircularProgress size={18} /> : title}
		</BootstrapButtonDanger>
	) : (
		<BootstrapButton
			style={{ width: fullWidth ? "100%" : "auto" }}
			{...rest}
			variant="contained"
		>
			{loading ? <CircularProgress size={18} /> : title}
		</BootstrapButton>
	);
};

CustomButton.propTypes = {
	danger: PropTypes.bool,
	loading: PropTypes.bool,
	title: PropTypes.string,
};

export default CustomButton;
