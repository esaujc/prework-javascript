Buenos d�as/tardes.

Me gustar�a que me indic�rais que cosas he hecho mal para poder mejorarlas.

En el caso de Javascript (Rover) he modificado el index.html para mostrar un "plano" de c�mo se mueve.

- He cambiado de lugar la llamada al script, para poder "pintar" y poder utilizar la propiedad "document.getElementById(elemento).innerHTML"
- He a�adido otro Rover y les he puesto nombre a cada uno para saber cuando me muevo, qu� Rover es. 
- Cuando carga, muestra los 2 Rover y varios obst�culos, que los lee de la matriz del fichero .js. Por defecto, muestra los datos del "Rover 1".
	- Para ver los datos actuales de un Rover, utlizad la funci�n "changeRover(rover2)" por ejemplo.
	- La funci�n "paintBoard()" 'pinta' los datos en el board.
	- La funci�n "checkObstacle(x,y)" comprueba si hay alg�n obst�culo en esa posici�n.
	- La funci�n "moveRover(list,rover)" se ha modificado para indicarle primero, el listado de movimientos y el segundo par�metro indica el Rover a mover.  Por ejemplo: moveRover("rff",rover1)
	- Funci�n "commandRight(rover)": actualiza los datos del comando anterior y actual.
	- Funci�n "commandLeft(rover)": actualiza los datos del comando anterior y actual.
	- Los Rover se identifican con O y los obst�culos con X
	- La posici�n inicial del "rover1" es [0,0] y la de "rover2" es [0,9] direcci�n Este.

Un saludo.



