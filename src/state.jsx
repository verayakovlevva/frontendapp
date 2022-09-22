const user = {
	name: "Иван",
	lastname: "Иванов",
	email: "ivan@ya.ru",
	id: "1",
	about: "Тут я рассказываю о своей жизни и увлечениях",
	avatar:
		"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=400&q=80",
};

const users = {
	0: { name: "Нина", lastname: "Яблочкова" },
	1: { name: "Ипатий", lastname: "Вольпов" },
	2: { name: "Федор", lastname: "Тютчев" },
	3: { name: "Владислав", lastname: "Тетерин" },
	4: { name: "Константин", lastname: "Петров" },
};

export function getUser() {
	return user;
}

export function getUsers() {
	return users;
}
