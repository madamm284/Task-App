📝 Simple Task Manager (Vanilla JavaScript)

A lightweight task manager built with Vanilla JavaScript, allowing users to add, display, and remove tasks dynamically.

🚀 Features

➕ Add new tasks

📋 Display tasks in a list

❌ Remove the last task

⚠️ Input validation (prevents empty tasks)

🛠️ How It Works

Tasks are stored in a simple JavaScript array:

const tasks = [];

Add Task

Takes user input

Trims whitespace

Adds to the array if not empty

Display Tasks

Clears the existing list

Re-renders all tasks dynamically using createElement

Remove Task

Removes the last task using .pop()

Updates UI instantly

🧠 Key Concepts Used

DOM Manipulation (querySelector, createElement)

Event Listeners

Arrays (push, pop, forEach)

Conditional Logic

Functions & Code Structure

📌 Example Usage

Enter a task in the input field

Click Add Task → task appears in the list

Click Remove Task → last task is removed

💡 Future Improvements

Remove specific task (not just last)

Add task editing

Save tasks to localStorage

Add animations/styling

📂 Tech Stack

HTML

CSS

JavaScript (Vanilla)# Task-App
