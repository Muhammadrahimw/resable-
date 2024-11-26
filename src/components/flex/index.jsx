import React from "react";

const Flex = ({
	children,
	direction = "row",
	align = "center",
	justify = "start",
	className = "",
}) => {
	return (
		<div
			className={`flex flex-${direction} items-${align} justify-${justify} gap-4 ${className}`}>
			{children}
		</div>
	);
};

export default Flex;
