# Proyecto final Escalab

Este repositorio contiene el proyecto final del curso de Angular. El proyecto esta basado en la versión *12.3.1* del juego **League Of Legends**.

### Descripción
El proyecto contiene un login con Auth0, logueandose con Google. Una vez logueado, se muestra el menú *Inicio*, listando los campeones del juego, skins por campeón en un modal y nombre de skins. A su vez, al presionar *Items*, muestra una tabla paginada con posibilidad de cambiar la cantidad de paginado. Por último, en el menú *Champions* se muestra un 'Input' para realizar la búsqueda por nombre del campeón con su respectiva validación.

### Pre-requisitios
* Angular 13.x
* Node 16.x
* npm 8.x

### Comandos
* Para ejecutar el proyecto usar `ng serve -0`
* Para obtener proyecto productivo usar `ng build`

### Librerías
* @ng-bootstrap/ng-bootstrap: 11.0.0
* angular-datatables: 6.0.0
* bootstrap: 5.1.3
* datatables.net: 1.11.3
* datatables.net-dt: 1.11.3
* jquery: 3.6.0
* @auth0/auth0-angular: 1.9.0


Librerias de desarrollo:
* @types/datatables.net: 1.10.21
* @types/jquery: 3.5.9

### Enlaces API
* https://ddragon.leagueoflegends.com/cdn/12.3.1/data/es_ES/champion.json
* http://ddragon.leagueoflegends.com/cdn/12.3.1/data/es_ES/champion/Aatrox.json
* https://ddragon.leagueoflegends.com/cdn/12.3.1/data/es_ES/item.json
* http://ddragon.leagueoflegends.com/cdn/12.3.1/img/item/1001.png
* http://ddragon.leagueoflegends.com/cdn/12.3.1/data/es_ES/summoner.json
