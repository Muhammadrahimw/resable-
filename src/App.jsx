import {useState} from "react";
import Input from "./components/input";
import Button from "./components/button";
import Flex from "./components/flex";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="ctr">
			<Input />
			<Button />
			<Flex />
		</div>
	);
}

export default App;
