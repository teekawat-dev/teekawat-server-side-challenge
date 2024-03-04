import 'dotenv/config';

const app = require('.');

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
