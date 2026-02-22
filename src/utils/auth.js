// Register a new user
export const registerUser = (user) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if email already exists
  const existingUser = users.find(
    (u) => u.email === user.email
  );

  if (existingUser) {
    return { success: false, message: "Email already registered" };
  }

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  return { success: true };
};

// Login user
export const loginUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const foundUser = users.find(
    (user) =>
      user.email === email && user.password === password
  );

  if (!foundUser) {
    return null;
  }

  localStorage.setItem(
    "currentUser",
    JSON.stringify(foundUser)
  );

  return foundUser;
};

// Get currently logged user
export const getCurrentUser = () => {
  const user = localStorage.getItem("currentUser");
  return user ? JSON.parse(user) : null;
};

// Logout user
export const logoutUser = () => {
  localStorage.removeItem("currentUser");
};