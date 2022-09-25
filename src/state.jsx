const user = {
	name: "Иван",
	lastname: "Иванов",
	email: "ivan@ya.ru",
	id: "1",
	about: "Тут я рассказываю о своей жизни и увлечениях",
	avatar:
		"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=400&q=80",
};

let users = {};
// const users = {
// 	0: { name: "Нина", lastname: "Яблочкова", id: 4 },
// 	1: { name: "Ипатий", lastname: "Вольпов", id: 6 },
// 	2: { name: "Федор", lastname: "Тютчев", id: 5 },
// 	3: { name: "Владислав", lastname: "Тетерин", id: 14 },
// 	4: { name: "Константин", lastname: "Петров", id: 19 },
// };

export function getUser(userId) {
	for(let i = 0; i < users.length; i++) {
		if (users[i].id == userId) return users[i];
	}
	return user;
}

export async function getUsers() {
	let response = await fetch("http://0755.napli.ru/getUsers");
	users = await response.json();
	return users;
}
