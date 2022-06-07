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

app.get('/', (req, res, next) => {
   fs.readFile('/file-does-not-exist', (err, data) => {
     if (err) {
       next(err) // Pass errors to Express.
     } else {
       res.send(data)
     }
   })
 })

app.listen(process.env.PORT || port, () => console.info(`Server Football Quiz listening on port ${port}`))