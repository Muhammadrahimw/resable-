import {useState} from "react";
import Input from "./components/input";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Input />
		</>
	);
}

export default App;
