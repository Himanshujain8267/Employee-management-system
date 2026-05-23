
# Employee Management System

>A modern employee management system built with React, Vite, and Tailwind CSS.

## Features

- **Authentication:** Simple login form for user access.
- **Admin Dashboard:**
	- Create new tasks for employees
	- View all tasks with status and assignment
- **Employee Dashboard:**
	- View assigned tasks
	- Task status overview (new, completed, accepted, failed)
- **Task Management:**
	- Create, assign, and categorize tasks
	- Task list with colored status indicators
- **Modern UI:**
	- Responsive, dark-themed interface
	- Built with Tailwind CSS

## Tech Stack

- React 19
- Vite
- Tailwind CSS 4
- ESLint

## Getting Started

1. **Install dependencies:**
	 ```bash
	 npm install
	 ```
2. **Run the development server:**
	 ```bash
	 npm run dev
	 ```
3. **Build for production:**
	 ```bash
	 npm run build
	 ```

## Project Structure

- `src/components/Auth/` — Login form
- `src/components/Dashboard/` — Admin and Employee dashboards
- `src/components/Others/` — Header, CreateTask, AllTask
- `src/components/TaskList/` — Task list and status widgets
- `src/context/` — React context for auth and tasks
- `src/utils/` — Local storage utilities

## Screenshots

> Add screenshots of the Admin and Employee dashboards here

---

This project is for learning and demonstration purposes. Feel free to fork and extend!
