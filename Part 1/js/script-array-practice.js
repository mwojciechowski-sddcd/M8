// M8 Array Practice - Steps 1 through 17
// Each step uses its own block so variables can be reused independently.

// STEP 1
{
    const movies = ["Twilight", "The Hunger Games", "Harry Potter", "The Batman", "The Lord of the Rings"];
    console.log("STEP 1:", movies[1]);
}

// STEP 2
{
    const movies = new Array(5);
    movies[0] = "Twilight";
    movies[1] = "The Hunger Games";
    movies[2] = "Harry Potter";
    movies[3] = "The Batman";
    movies[4] = "The Lord of the Rings";
    console.log("STEP 2:", movies[0]);
}

// STEP 3
{
    const movies = new Array(5);
    movies[0] = "Twilight";
    movies[1] = "The Hunger Games";
    movies[2] = "Harry Potter";
    movies[3] = "The Batman";
    movies[4] = "The Lord of the Rings";
    movies.splice(2, 0, "Divergent");
    console.log("STEP 3:", movies.length);
}

// STEP 4
{
    const movies = ["Twilight", "The Hunger Games", "Harry Potter", "The Batman", "The Lord of the Rings"];
    delete movies[0]; // delete leaves an empty slot in the array.
    console.log("STEP 4:", movies);
}

// STEP 5
{
    const movies = ["Twilight", "The Hunger Games", "Harry Potter", "The Batman", "The Lord of the Rings", "Divergent", "The Maze Runner"];
    console.log("STEP 5:");
    for (const index in movies) {
        console.log(movies[index]);
    }
}

// STEP 6
{
    const movies = ["Twilight", "The Hunger Games", "Harry Potter", "The Batman", "The Lord of the Rings", "Divergent", "The Maze Runner"];
    console.log("STEP 6:");
    for (const movie of movies) {
        console.log(movie);
    }
}

// STEP 7
{
    const movies = ["Twilight", "The Hunger Games", "Harry Potter", "The Batman", "The Lord of the Rings", "Divergent", "The Maze Runner"];
    console.log("STEP 7:");
    for (const movie of movies.sort()) {
        console.log(movie);
    }
}

// STEP 8
{
    const movies = ["Twilight", "The Hunger Games", "Harry Potter", "The Batman", "The Lord of the Rings", "Divergent", "The Maze Runner"];
    const leastFavMovies = ["Sucker Punch", "The Last Airbender", "Cats"];
    console.log("STEP 8:\n");
    console.log("Movies I like:\n");
    for (const movie of movies) console.log(movie);
    console.log("\nMovies I regret watching:\n");
    for (const movie of leastFavMovies) console.log(movie);
}

// STEP 9
{
    const favoriteMovies = ["Twilight", "The Hunger Games", "Harry Potter", "The Batman", "The Lord of the Rings", "Divergent", "The Maze Runner"];
    const leastFavMovies = ["Sucker Punch", "The Last Airbender", "Cats"];
    const movies = favoriteMovies.concat(leastFavMovies);
    movies.sort().reverse();
    console.log("STEP 9:", movies);
}

// STEP 10
{
    const favoriteMovies = ["Twilight", "The Hunger Games", "Harry Potter", "The Batman", "The Lord of the Rings", "Divergent", "The Maze Runner"];
    const leastFavMovies = ["Sucker Punch", "The Last Airbender", "Cats"];
    const movies = favoriteMovies.concat(leastFavMovies);
    movies.sort().reverse();
    console.log("STEP 10:", movies.pop());
}

// STEP 11
{
    const favoriteMovies = ["Twilight", "The Hunger Games", "Harry Potter", "The Batman", "The Lord of the Rings", "Divergent", "The Maze Runner"];
    const leastFavMovies = ["Sucker Punch", "The Last Airbender", "Cats"];
    const movies = favoriteMovies.concat(leastFavMovies);
    movies.sort().reverse();
    console.log("STEP 11:", movies.shift());
}

// STEP 12
{
    const favoriteMovies = ["Twilight", "The Hunger Games", "Harry Potter", "The Batman", "The Lord of the Rings", "Divergent", "The Maze Runner"];
    const leastFavMovies = ["Sucker Punch", "The Last Airbender", "Cats"];
    const movies = favoriteMovies.concat(leastFavMovies);
    const replacements = ["New Moon", "Eclipse", "Breaking Dawn"];
    const dislikedIndices = movies.reduce((indices, movie, index) => {
        if (leastFavMovies.includes(movie)) indices.push(index);
        return indices;
    }, []);
    console.log("STEP 12 - disliked movie indices:", dislikedIndices);
    dislikedIndices.forEach((index, i) => { movies[index] = replacements[i]; });
    console.log("STEP 12 - updated movies:", movies);
}

// STEP 13
{
    const movies = [["Twilight", 1], ["The Hunger Games", 2], ["Harry Potter", 3], ["The Batman", 4], ["The Lord of the Rings", 5]];
    console.log("STEP 13:");
    for (const movie of movies) {
        console.log(movie.filter(item => typeof item === "string"));
    }
}

// STEP 14
{
    const employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];
    const showEmployee = function(employeeNames) {
        console.log("Employees:\n");
        for (const employee of employeeNames) {
            console.log(employee.toUpperCase());
        }
    };
    console.log("STEP 14:");
    showEmployee(employees);
}

// STEP 15
{
    function filterValues(values) {
        return values.filter(Boolean);
    }
    console.log("STEP 15:", filterValues([58, '', 'abcd', true, null, false, 0]));
}

// STEP 16
{
    function getRandomItem(items) {
        return items[Math.floor(Math.random() * items.length)];
    }
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log("STEP 16:", getRandomItem(numbers));
}

// STEP 17
{
    function getLargestNumber(numbers) {
        return Math.max(...numbers);
    }
    const numbers = [12, 45, 7, 99, 23, 56, 81];
    console.log("STEP 17:", getLargestNumber(numbers));
}
