require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middlewares/errorHandler');
const notFound = require('./middlewares/notFound');

const app = express();

app.use(cors());
app.use(express.json());

// simple request logger (debug)
app.use((req, res, next) => {
  console.log(`REQ ${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('ToDo API is running');
});

app.use('/api/tasks', taskRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Server failed to start due to DB error', error);
    process.exit(1);
  });