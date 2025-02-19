import { ComponentProps, ReactNode } from "react";

interface IconButtonProps extends ComponentProps<"button"> {}

export function IconButton(props: IconButtonProps) {
	return (
		<button
			className="p-1.5 bg-gray-500  text-blue rounde-md cursor-pointer transition-color duration-300 hover:bg-blue hover:text-gray-900"
			{...props}
		/>
	);
}
