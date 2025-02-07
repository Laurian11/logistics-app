import pool from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const [rows] = await pool.query('SELECT * FROM trips');
    res.status(200).json(rows);
  } else if (req.method === 'POST') {
    const { driver_id, start_location, end_location } = req.body;
    await pool.query(
      'INSERT INTO trips (driver_id, start_location, end_location) VALUES (?, ?, ?)',
      [driver_id, start_location, end_location]
    );
    res.status(201).json({ message: 'Trip created successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}