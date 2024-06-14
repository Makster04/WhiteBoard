const BST = require('./BST');

// Example usage and test cases
function runTests() {
    const existingProjects = [
        [153, 612],
        [117, 502],
        [186, 637],
        [222, 1138],
        [84, 420],
        [138, 690],
        [142, 536]
    ];

    const testCases = [
        { newUserStories: 153, expected: 612 }, // Exact match
        { newUserStories: 145, expected: 536 }, // Closest lower
        { newUserStories: 160, expected: 612 }, // Closest higher
        { newUserStories: 50, expected: 420 },  // Below all existing
        { newUserStories: 250, expected: 1138 }, // Above all existing
        { newUserStories: 149, expected: 612 },  // Closest in between
        { newUserStories: 100, expected: null }  // Empty BST
    ];

    // Insert existing projects into the BST
    const bst = new BST();
    existingProjects.forEach(([userStories, hours]) => bst.insert(userStories, hours));

    // Run test cases
    testCases.forEach(({ newUserStories, expected }, index) => {
        const result = bst.findClosestHours(newUserStories);
        console.log(`Test Case ${index + 1}: newUserStories = ${newUserStories}`);
        console.log(`Expected: ${expected}, Actual: ${result}`);
        console.log(result === expected ? 'Passed' : 'Failed');
        console.log('-----------------------------');
    });
}

// Run the tests
runTests();
