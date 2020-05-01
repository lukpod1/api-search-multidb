const readline = require("readline");
const { performance, PerformanceObserver } = require('perf_hooks');
const { api } = require("./api.js");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Choose a database: Type - (mongodb - MongoDB) (mysql - MySQL) (postgres - Postgres) (mssql - SQL Server):", (database) => {
    rl.question("Choose the type of search: (1 - Sequencial) (2 - Binary) ", (search) => {
        rl.question("Enter a 4-digit number:", async (number) => {
            
            const response = await api.get("/get-numbers", { params: { db: database } });

            const arr = []
            response.data.forEach(value => {
                arr.push(value)
            })

            if (search == "1") {
                let start = performance.now()
                sequentialSearch(arr, number);
                let time = performance.now() - start
                console.log(`time: ${time}ms`);
            } else {
                let start = performance.now()
                binarySearch(arr, number);
                let time = performance.now() - start
                console.log(`time: ${time}ms`);
            }
            

            rl.close();
        })
    });
});

rl.on("close", () => {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});

//sequentialSearch
const sequentialSearch = (arr, item) => {
    let pos = 0;
    let found = false;

    while (pos < arr.length && !found) {
        arr[pos] === item ? found = true : pos = pos + 1;
    }

    return console.log(found);
}

//binarySearch
const binarySearch = (arr, item) => {
    let first = 0;
    let last = arr.length - 1;
    let found = false;
    arr = arr.sort();
    while (first <= last && !found) {
        middleList = Math.ceil((first + last) / 2);
        if (arr[middleList] == item) {
            found = true;
        }
        else {
            if (item < arr[middleList]) {
                last = middleList - 1;
            }
            else {
                first = middleList + 1;
            }
        }
    }
    return console.log(`binarySearch found: ${found}`);
}