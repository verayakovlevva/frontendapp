import styles from "./Profile.module.css";


const Profile = (props) => {
  let user = props.function();
	return (
		<div className="row">
			<div className="col-sm-3">
				<img
					src={user.avatar}
					alt=""
					width={"100%"}
				/>
			</div>
			<div className="col-sm-9">
				<h1 style={{backgroundColor: "lightblue"}}>{user.name} {user.lastname}</h1>
				<h2 className={styles.aboutMe}>{user.about}</h2>
				<p>Email: {user.email}</p>
				<p>Id: {user.id}</p>
				<p className={styles.paragraph}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam esse aliquid excepturi
					voluptatum velit vero totam magni quae consequuntur sunt adipisci deserunt, ut nisi
					eligendi modi quia vel minus qui.
				</p>
			</div>
		</div>
	);
};
export default Profile;
