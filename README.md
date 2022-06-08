# Football-Quiz
Quiz piłkarski stworzony w ramach nauki z Java Script. Aplikacja w języku polskim, odpalana na serwerze w express.js (localhost: 8000). Dodatkowo wykonane testy end to end w cypress. Breakpointy ustawione na:
480px (mobile), 
768px (tablets),
992px (laptops) oraz
1200px (large screens) <br />
**Zasady:** <br />
20 pytań <br />
Limit czasowy na odpowiedź <br />
Kliknięcie odpowiedzi oznacza wybór i nie można już zmienić decyzji <br />
Każda poprawna odpowiedź +1 pkt <br />
Błędna odpowiedź, przekroczenie czasu lub nieudzielenie odpowiedzi = 0 pkt <br />
Po udzieleniu błędnej odpowiedzi wyświetla się poprawna odpowiedź <br />
**Instalacja:** <br />
Node  v16.15.0 
Npm 8.11.0 <br />
npm install express ejs <br />
npm install nodemon --save-dev <br />
package.json -> "start": "nodemon app.js" <br />
Start -> node app.js <br />
style.css, js and img w folderze /public <br />
Testy (Cypress): <br />
cd tests ->
npm install cypress <br />
npm run cypress:open <br />
test w folderze integration <br />
<img src="public/img/technologies.png">
