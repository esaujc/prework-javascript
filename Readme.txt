Buenos días/tardes.

Me gustaría que me indicárais que cosas he hecho mal para poder mejorarlas.

En el caso de Javascript (Rover) he modificado el index.html para mostrar un "plano" de cómo se mueve.

- He cambiado de lugar la llamada al script, para poder "pintar" y poder utilizar la propiedad "document.getElementById(elemento).innerHTML"
- He añadido otro Rover y les he puesto nombre a cada uno para saber cuando me muevo, qué Rover es. 
- Cuando carga, muestra los 2 Rover y varios obstáculos, que los lee de la matriz del fichero .js. Por defecto, muestra los datos del "Rover 1".
	- Para ver los datos actuales de un Rover, utlizad la función "changeRover(rover2)" por ejemplo.
	- La función "paintBoard()" 'pinta' los datos en el board.
	- La función "checkObstacle(x,y)" comprueba si hay algún obstáculo en esa posición.
	- La función "moveRover(list,rover)" se ha modificado para indicarle primero, el listado de movimientos y el segundo parámetro indica el Rover a mover.  Por ejemplo: moveRover("rff",rover1)
	- Función "commandRight(rover)": actualiza los datos del comando anterior y actual.
	- Función "commandLeft(rover)": actualiza los datos del comando anterior y actual.
	- Los Rover se identifican con O y los obstáculos con X
	- La posición inicial del "rover1" es [0,0] y la de "rover2" es [0,9] dirección Este.

Un saludo.



