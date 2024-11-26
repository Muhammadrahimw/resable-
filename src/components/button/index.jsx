import React from "react";

const Button = ({children, onClick, type = "button", className = ""}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className={`px-5 py-2 rounded-md bg-gradient-to-r bg-gray-500 text-white font-semibold hover:shadow-lg hover:from-gray-600 hover:to-blue-700 active:scale-95 transition-all duration-200 ${className}`}>
			button
			{children}
		</button>
	);
};

export default Button;
