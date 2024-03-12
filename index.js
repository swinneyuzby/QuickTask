// index.js

// QuickTask - A versatile task management application designed to streamline your workflow and boost productivity.

// Task management functionality
class QuickTask {
    constructor() {
        this.tasks = [];
    }

    // Method to add a new task
    addTask(taskName, description, priority, deadline) {
        const task = {
            taskName: taskName,
            description: description,
            priority: priority,
            deadline: deadline
        };
        this.tasks.push(task);
    }

    // Method to list all tasks
    listTasks() {
        console.log("All Tasks:");
        this.tasks.forEach((task, index) => {
            console.log(`Task ${index + 1}: ${task.taskName}`);
            console.log(`Description: ${task.description}`);
            console.log(`Priority: ${task.priority}`);
            console.log(`Deadline: ${task.deadline}`);
            console.log("--------------------------");
        });
    }
}

// Example usage:
const quickTaskApp = new QuickTask();

// Adding new tasks
quickTaskApp.addTask("Finish Project Proposal", "Prepare a detailed project proposal including scope, objectives, and timeline.", "High", "2024-03-15");
quickTaskApp.addTask("Grocery Shopping", "Buy groceries for the week.", "Medium", "2024-03-10");
quickTaskApp.addTask("Client Presentation", "Prepare slides for the upcoming client presentation.", "High", "2024-03-20");

// Listing all tasks
quickTaskApp.listTasks();
