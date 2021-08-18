const { db } = require('./db');

/* Here, you can write functions which interact with your database
   don't forget to export them!
*/

async function example(parameter1) {
    const [rows] = await db.query('SELECT * FROM SomeTable WHERE SomeParameter = ?', [parameter1]);
    return rows;
}

module.exports = {
    example,
}