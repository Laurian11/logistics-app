import mysql from 'mysql2/promise';

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',      // MySQL server host (XAMPP default is localhost)
  user: 'root',           // MySQL username (XAMPP default is root)
  password: '',           // MySQL password (XAMPP default is empty)
  database: 'logistics_db',     // Database name (replace with your database name)
  waitForConnections: true,
  connectionLimit: 10,    // Maximum number of connections in the pool
  queueLimit: 0,          // Unlimited queueing for connection requests
});

// Export the pool for use in other files
export default pool;