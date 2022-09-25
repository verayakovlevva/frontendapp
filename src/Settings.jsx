import { useState } from "react";

function Settings() {
	const [count, setCount] = useState(0);
	return (
		<div className="row">
			<div className="col-md-7">
				<h1>Количество кликов: {count}</h1>
			</div>
			<div className="col-md-5">
				<button
					className="btn btn-warning"
					onClick={() => {
						setCount(count + 1);
					}}
				>
					Кликай
				</button>
			</div>
		</div>
	);
}
export default Settings;
