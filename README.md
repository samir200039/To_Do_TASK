Objective:Build a full-stack Todo application using ReactJS (frontend), ExpressJS (backend),
PostgreSQL (database), and Prisma (ORM).
Requirements:
1. Frontend: ReactJS
- Use `create-react-app` to set up the project.
- Features:
- User registration and login.
- Add, edit, delete, and categorize todos.
- Mark todos as complete/incomplete.
- State management for authentication and todos.
- Use React Router for navigation.
- API calls to the backend.
2. Backend: ExpressJS
- Set up an Express server.
- User authentication using JWT.
- CRUD operations for todos.
- Prisma for database interactions with PostgreSQL.
3. Database: PostgreSQL
- Use PostgreSQL for persistent data storage.
- Configure Prisma for schema definitions and interactions.
Steps:
Backend
1. Express Server Setup: - Install: `express`, `prisma`, `@prisma/client`, `body-parser`,
`jsonwebtoken`, `bcrypt`, `cors`.
- Create server and configure it to listen on a specified port.
2. PostgreSQL and Prisma Setup: - Install PostgreSQL and create a database.
- Initialize Prisma: `npx prisma init`.
- Configure Prisma schema for users and todos.
- Run migrations: `npx prisma migrate dev`.
3. API Endpoints:
- `POST /register` - User registration.
- `POST /login` - User login and JWT generation.
- `GET /todos` - Get todos for authenticated user.
- `POST /todos` - Create new todo.
- `PUT /todos/:id` - Update a todo.
- `DELETE /todos/:id` - Delete a todo.
4. CORS Setup:
- Enable CORS for frontend-backend communication.
Frontend
1. React Application Setup: - Use `create-react-app`.
2. Components:
- `Register`, `Login`, `TodoList`, `TodoItem`, `TodoForm`, `CategoryFilter`.
3. State Management:
- Use `useState` and `useContext` for authentication and todos.
4. Routing: - Use React Router for navigation.
5. API Integration:
- Implement functions for API calls to the backend.
6. UI:
- Create a responsive UI, optionally using Material-UI or Bootstrap
