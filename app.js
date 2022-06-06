const express = require('express');
const app = express();
const port = 8000;

// Static Files
app.use(express.static('public'));
app.use('', express.static(__dirname + 'public/style.css'))
app.use('', express.static(__dirname + 'public/quiz.js'))
app.use('/img', express.static(__dirname + 'public/img'))

app.get('', (req, res) => {
   res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => console.info(`Server Football Quiz listening on port ${port}`))