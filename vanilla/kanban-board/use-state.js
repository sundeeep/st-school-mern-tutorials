// Custom useState implementation
function useState(initialState) {
    // State variable to store the current state
    let state = initialState;
    
    // Array to store all subscribers/listeners
    const subscribers = [];

    // State setter function
    function setState(newState) {
        // If newState is a function, call it with the current state
        if (typeof newState === 'function') {
            state = newState(state);
        } else {
            // Otherwise, directly set the new state
            state = newState;
        }

        // Notify all subscribers about the state change
        subscribers.forEach(subscriber => subscriber(state));
    }

    // Function to allow components to subscribe to state changes
    function subscribe(callback) {
        subscribers.push(callback);
        
        // Return an unsubscribe function
        return () => {
            const index = subscribers.indexOf(callback);
            if (index > -1) {
                subscribers.splice(index, 1);
            }
        };
    }

    // Return the current state and setState function
    return [
        // Getter for state that returns the current state
        () => state, 
        // Setter function
        setState,
        // Optional: expose subscribe method for advanced use cases
        subscribe
    ];
}

// Example usage
function TodoApp() {
    // Create state for todos
    const [getTodos, setTodos, subscribeTodos] = useState([]);

    // Example of setting state
    setTodos(['First todo']);
    
    // Example of updating state with a function
    setTodos(currentTodos => [...currentTodos, 'New todo']);

    // Example of subscribing to state changes
    const unsubscribe = subscribeTodos((newTodos) => {
        console.log('Todos updated:', newTodos);
    });

    // Later, you can unsubscribe if needed
    // unsubscribe();

    return {
        getTodos,
        setTodos
    };
}

// Demonstration
const todoApp = TodoApp();
console.log(todoApp.getTodos()); // []
todoApp.setTodos(['First todo']);
console.log(todoApp.getTodos()); // ['First todo']