// Create a hash table using javascript.
// Use chaining to avoid collisions.


const hashStringToInt = (string, size) => {
    let hash = 17;

    for (let i = 0; i < string.length; i++) {
        hash = (13 * hash * string.charCodeAt(i)) % size;
    }

    return hash;
}


class HashTable {
    // keep sizes as prime numbers - creates good table 'spread' (avoids collisions)
    table = new Array(21);

    setItem = (key, value) => {
        const index = hashStringToInt(key, this.table.length);
        if (this.table[index]) {
            this.table[index].push([key, value]);
        } else {
            this.table[index] = [[key, value]];
        }
    }
    getItem = (key) => {
        const index = hashStringToInt(key, this.table.length);
        if (!this.table[index]) {
            return null;
        }
        return this.table[index].find(x => x[0] === key)[1];
    }
}

const table = new HashTable();
table.setItem('firstName', 'bob');
table.setItem('lastName', 'tim');
table.setItem('age', 22);
console.log(table.table);
console.log(table.getItem('firstName'));
console.log(table.getItem('lastName'));
console.log(table.getItem('age'));
