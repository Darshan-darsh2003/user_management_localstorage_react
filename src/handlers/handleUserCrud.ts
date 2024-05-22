import { User } from "../models/user";

// Abstract class UserCrud
abstract class UserCrud {
  abstract create(user: User): Promise<void>;
  abstract read(id: string): Promise<User | undefined>;
  abstract update(id: string, updatedUser: Partial<User>): Promise<void>;
  abstract delete(id: string): Promise<void>;
  abstract search(query: string): Promise<User[]>;
}

// Implementation class HandleUserCrud
class HandleUserCrud extends UserCrud {
  localStorageKey: string;

  constructor() {
    super();
    this.localStorageKey = "users";
  }

  // Helper method to get all users from localStorage
  getUsers(): User[] {
    const users = localStorage.getItem(this.localStorageKey);
    return users ? JSON.parse(users) : [];
  }

  // Helper method to save users to localStorage
  saveUsers(users: User[]) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(users));
  }

  // Create a new user
  async create(user: User) {
    const users = this.getUsers();
    user.id = Date.now().toString(); // Assign a unique ID
    users.push(user);
    this.saveUsers(users);
  }

  // Read a user by id
  async read(id: string): Promise<User | undefined> {
    const users = this.getUsers();
    return users.find((user) => user.id === id);
  }

  // Update an existing user by id
  async update(id: string, updatedUser: Partial<User>): Promise<void> {
    let users = this.getUsers();
    users = users.map((user) =>
      user.id === id ? { ...user, ...updatedUser } : user
    );
    this.saveUsers(users);
  }

  // Delete a user by id
  async delete(id: string): Promise<void> {
    let users = this.getUsers();
    users = users.filter((user) => user.id !== id);
    this.saveUsers(users);
  }

  // Search users by a query
  async search(query: string): Promise<User[]> {
    const users = this.getUsers();
    return users.filter((user) =>
      Object.values(user).some(
        (value) => typeof value === "string" && value.includes(query)
      )
    );
  }
}

export default HandleUserCrud;
