const debounce = (fn, delay) => {
    let timeoutId; // Keep track of the timeout ID

    return function(...args) {
        // Clear the previous timeout if this function is called again
        if (timeoutId) clearTimeout(timeoutId);
        
        // Set a new timeout for the function to execute after the specified delay
        timeoutId = setTimeout(() => {
            fn(...args); // Call the actual function with the arguments
        }, delay);
    };
};

// Example usage:
const textInput = 'text';
const logInput = (input) => console.log('Input:', input);

const debouncedLog = debounce(logInput, 1000);

// Simulate calling the function several times:
debouncedLog(textInput); // The log will only appear once, after 1000ms
