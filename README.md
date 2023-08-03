# TodoApp

TodoApp is a simple React application that allows you to create a list of tasks (todos) and delete them as you complete them.

## How to Run the App

1. Clone the repository to your local machine.
2. Make sure you have Node.js and npm installed.
3. Open a terminal and navigate to the project's root directory.
4. Run `npm install` to install the required dependencies.
5. Run `npm start` to start the development server.
6. Open your web browser and go to `http://localhost:3000` to use the TodoApp.

## How to Use

- When you open the TodoApp, you will see a text input field to add your tasks (todos).
- Type the task you want to add in the input field and click the "+" button or press Enter to add the task to the list.
- The added tasks will appear as a list below the input field.
- To remove a task from the list, click on the close icon (X) next to the task you want to delete.

## Components

1. `App.js`: This is the main component that renders the TodoApp. It manages the state of the tasks and provides functionalities to add and delete tasks.

2. `TodoLists.js`: This component represents an individual task item in the TodoApp. It receives the task text as a prop and displays it along with a close icon (X). When the close icon is clicked, the task is deleted from the list.

## Contributing

If you find any issues with the TodoApp or have suggestions for improvement, feel free to create a new issue or submit a pull request. We welcome contributions from the community!

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute the code as you like.

## Acknowledgments

- The TodoApp was created as a simple exercise to demonstrate React state management and event handling.
- The close icon used in the TodoLists component is provided by the `AiOutlineCloseCircle` icon from the `react-icons/ai` library.

Enjoy using the TodoApp! If you have any questions or need further assistance, feel free to reach out to us. Happy task organizing!
