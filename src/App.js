import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import Messages from "./Messages";
import Settings from "./Settings";
import Friends from "./Friends";
import Advise from "./Advise";
import Shop from "./Shop";
//import "./App.css";

function App(props) {
	return (
		<BrowserRouter>
			<div className="container mt-5">
				<div className="row">
					<div className="col-sm-3">
						<div className="nav flex flex-column nav-pills" aria-orientation="vertical">
							<NavLink to="profile" className="nav-link">
								Профиль
							</NavLink>
							<NavLink to="messages" className="nav-link">
								Сообщения
							</NavLink>
							<NavLink to="settings" className="nav-link">
								Настройки
							</NavLink>
							<NavLink to="friends" className="nav-link">
								Друзья
							</NavLink>
							<NavLink to="advise" className="nav-link">
								Советы
							</NavLink>
							<NavLink to="shop" className="nav-link">
								Магазин
							</NavLink>
						</div>
					</div>
					<div className="col-sm-9">
						<Routes>
							<Route
								path="/profile/*"
								element={<Profile function={props.function.key_getUser} />}
							/>
							<Route path="/messages" element={<Messages />} />
							<Route path="/settings" element={<Settings />} />
							<Route path="/friends" element={<Friends function={props.function.key_getUsers} />} />
							<Route path="/advise" element={<Advise />} />
							<Route path="/shop" element={<Shop />} />
						</Routes>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
