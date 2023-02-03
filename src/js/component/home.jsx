import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<div className="todo w-100 container-fluid bg-secondary  justify-content-center">
				<div className="semaforo container col p-5 bg-black rounded-5">
					<div className="luz bg-danger rounded-circle selected">
					</div>
					<div className="luz bg-warning rounded-circle">
					</div>
					<div className="luz bg-success rounded-circle">
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
