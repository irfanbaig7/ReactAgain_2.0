// client/src/localStorage.js
const LS_KEY = 'users-list';

// Get all users
export function localStorageGetUsers() {
  const data = window.localStorage.getItem(LS_KEY);
  return data ? JSON.parse(data) : [];
}

// Save all users (for internal usage)
export function localStorageSetUsers(users) {
  window.localStorage.setItem(LS_KEY, JSON.stringify(users));
}

// Add new user
export function localStorageAddUser(user) {
  const users = localStorageGetUsers();
  const newUser = { ...user, id: Date.now() }; // simple unique id
  users.unshift(newUser); // add at beginning
  localStorageSetUsers(users);
  return newUser;
}

// Delete user
export function localStorageDeleteUser(id) {
  let users = localStorageGetUsers();
  users = users.filter(user => user.id !== id);
  localStorageSetUsers(users);
}

// Edit user
export function localStorageEditUser(id, newData) {
  const users = localStorageGetUsers();
  const updated = users.map(u => u.id === id ? { ...u, ...newData } : u);
  localStorageSetUsers(updated);
}
