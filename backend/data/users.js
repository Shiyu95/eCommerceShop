import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'adminn@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'johnn@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'janee@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
