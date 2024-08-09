document.addEventListener("DOMContentLoaded", () => {
    // 🪲 Bug: Incorrect ID used for attaching the event listener
    document.getElementById("solveRoom1").addEventListener("click", () => {
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
                // 🪲 Bug: Incorrect element ID, it was supposed to be room1Result not resultRoom1
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });

    document.getElementById("solveRoom2").addEventListener("click", () => {
        const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'async']);
        // 🪲 Bug: What's missing from JS concepts? common would be async
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        // 🪲 Bug: Incorrect function call
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });

    // 🪲 Bug: Asynchronous function ?
    document.getElementById("solveRoom3").addEventListener("click", () => {
        fetch('directions.json') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch directions');
            }
            return response.json();
        })
        .then(directions => {
                return navigateLabyrinth(directions);})
        .then(message => {
            document.getElementById("room3Result").innerHTML = message;
        })
        // 🪲 Bug: Incorrect method
        .catch(error => {
            console.error('Error:', error);
            document.getElementById("room3Result").innerHTML = 'An error occurred while navigating the labyrinth.';
            });
        });
    });
;

function findMostRecentBook(books) {
    // 🪲 Bug: Logic error < was the wrong direction > 
    return books.reduce((mostRecent, book) => new Date(book.published) > new Date(mostRecent.published) ? book : mostRecent);
}

function findIntersection(setA, setB) {
    // 🪲 Bug: Incorrect logic. Needed to filter the two arrays to find common ground
    const intersection = new Set([...setA].filter(item => setB.has(item)));
    return intersection;//there s probably a shorter way
}

async function navigateLabyrinth(directions){
for (let direction of directions){
        // don't i need to fetch something like the directions from the directions.json file?
        // found fetch() , then(), and catch() the errors , done on line 24
        // 🪲 Bug: No delay , needs a await
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log (`${direction.step}`)// i need to correct console log that shows 'Navigating EscapeVanilla.js: Enter the labyrinth.'
    ;}}
