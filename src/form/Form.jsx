import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Form = () => {
	const schema = yup.object().shape({
		fullName: yup.string().required("Full name is a required field"),
		email: yup.string().email().required("Email is a required field"),
		age: yup
			.number("Age is not a number")
			.positive("Age is a negative value")
			.integer("Age is not a whole number")
			.min(18, "You must be at least 18")
			.required("Age is a required field"),
		password: yup
			.string()
			.min(4, "Password is too short")
			.max(20, "Password is too long")
			.required("Password is a required field"),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref("password"), null], "Passwords don't match")
			.required("Confirm password is a required field"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input type="text" placeholder="Full Name..." {...register("fullName")} />
			<br />
			{errors.fullName?.message}
			<br />
			<input type="text" placeholder="Email..." {...register("email")} />
			<br />
			{errors.email?.message}
			<br />
			<input
				type="number"
				placeholder="Age..."
				defaultValue={0}
				{...register("age")}
			/>
			<br />
			{errors.age?.message}
			<br />
			<input
				type="password"
				placeholder="Password..."
				{...register("password")}
			/>
			<br />
			{errors.password?.message}
			<br />
			<input
				type="password"
				placeholder="Confirm Password..."
				{...register("confirmPassword")}
			/>
			<br />
			{errors.confirmPassword?.message}
			<br />
			<input type="submit" value="Submit" />
		</form>
	);
};
