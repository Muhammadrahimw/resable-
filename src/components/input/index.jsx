import React from "react";

const Input = ({type = "text", placeholder = "", className = ""}) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			className={`px-4 py-2 border-2 border-gray-300 focus:border-blue-500 rounded-md shadow-sm transition-[0.2s]`}
		/>
	);
};

export default Input;
