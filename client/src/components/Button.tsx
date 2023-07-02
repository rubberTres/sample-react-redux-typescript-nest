import { PropsWithChildren } from "react";
import Loader from "components/Loader";
import classNames from "classnames";

export enum ButtonColor {
	SUCCESS = "success",
	DANGER = "danger",
	PRIMARY = "primary"
}

type Props = {
	onClick?: () => void
	color?: ButtonColor
	type?: "submit" | "button"
	loading?: boolean
	className?: string
}

function Button(props: PropsWithChildren<Props>) {

	const {
		onClick,
		children,
		color= "primary",
		type= "button",
		loading = false,
		className= "",
	} = props;

	return (
		<button
			className={ classNames(`button button--${ color }`, { [ className ]: className }) }
			onClick={ onClick }
			type={ type }
		>
			{ loading ? <Loader small/> : children }
		</button>
	);
}

export default Button;