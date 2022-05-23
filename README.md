#Readme e2e_dataPools

# Paso a Paso para ejecutar el programa

## Porfavor tener en cuenta las precondiciones antes de ejecutar los casos:
    * Realizar la instalación de Ghost en una imagen de Docker.
    * Tener instalado Git en su máquina. (No se explica en este Readme)
    * Tener instalaso Visual Studio Code. (No se explica en este Readme)

1. Realizar la instalación de Docker:
* 		En este link buscan su sistema operativo e instalan el Docker -> https://docs.docker.com/desktop/mac/install/
Ejecutar los siguientes comandos para instalar las imágenes necesarias para correr las dos versiones de Ghost
* 		docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.42 ghost:3.41.1
Ese contenedor va a enviar información desde su puerto 2368 (que es el que utiliza Ghost) a el puerto 3001 (en este ejemplo) en nuestro computador

Luego de tener instaladas la imagen de docker se debe ejecutar el comando 

* Docker start <ID-contenedor>, por ejemplo: docker start 9f1445846454. Lo anterior se debe realizar para la imagen que se creo previamente.

2. Ingresar a la url de ghost desde un browser. http://localhost:3001/ghost/#/dashboard (Ghost V3.41.1)

3. Ingresar a Ghost y crear un usuario y contraseña. (Instalado previemante en su máquina)

4. Cree un directorio vacio en su máquina.

5. Dirijase a este direcctorio por medio de la terminal o CMD

6. Ejecute el siguiente comando: git init.

7. Clone el proyecto con el siguiente comando: git clone git@github.com:carlosvillamilc/e2e_dataPools.git

8. Dentro de la carpeta en la que clono el proyecto, ejecute el comando: "code . "

9. Desde Visual Studio Code Dirigirse al archivo ghost.json y cambie el valor de contraseña y usuario establecidos por por usted así: 
  {
    "user": "correo@generado",
    "password": "claveGenerada"     
  }
  
10. La herramienta usada para la ejecución de las pruebas es Cypress, por lo tanto debe tenerla instalada en el computador.

11. Abra una nueva terminal

12. Ejecute el comando: npm install
  
13. En la consola digite el comando `cypress open`, el cual abrira la interfaz grafica de cypress y desde allí debe abrir la carpeta donde alojo su proyecto.

14. Desde allí podrá ejecutar los casos uno a uno dando click en el nombre de cada uno de ellos o podra seleccionar la opción que dice "Run 120 integration specs.

    * Nota: Dos casos se encuentran comentados dado que se encontraron dos bugs que afectan considerablemente el comportamiento de la aplicación, ya que se cambia el usuario para ingresar desde la aplicación y esto se haría en tiempo de ejecución de la automatización y generaria que los demás casos empiecen a fallar. Estos casos se encuentran en el archivo perfilUsuario.js y estan entre la lineas 29 a 36. Así que si desea ejecutarlos es necesario descomentar dichas lineas.

    *Nota2": Para ciertos casos hay que colocar el Slug de su usuario, es decir el nombre de pila que ingreso en su registro, solo es ir a los casos PerfilUsuario Y ProfileWebSite, en cada uno de ellos encontrara una varible llamada usernameSlug, cambiale por el nombre mencionado.

## Bugs reportados
    * Se encuentran enla sección de Issues del proyecto en Github

## Detalle de casos y estrategia utilizada

|Caso|DataPool|
|-|-|
|Password ambos campos correctos| Datos Apriori |
|Password vacios los dos| Datos Apriori |
|Password vacio y lleno| Datos Apriori |
|Password lleno y vacio| Datos Apriori |
|Password correcto e incorrecto| Datos Apriori |
|Password incorrecto e correcto| Datos Apriori |
|Password ambos incorrectos| Datos Apriori |
|Usuario sin arroba| Datos Apriori |
|Usuario sin domino| Datos Apriori |
|Correo con mas de 191 caracteres| Datos Apriori |
|Correo con 191 caracteres| Datos Apriori |
|Full name - vacio, Email con datos| Datos Apriori |
|Full name con datos - Email vacio| Datos Apriori |
|Email con arroba y dominio sin más texto| Datos Apriori |
|Email sin arroba| Datos Apriori |
|Email con arroba sin dominio| Datos Apriori |
|Email con más de una arroba y un dominio| Datos Apriori |
|Email con un arroba y 3 dominios| Datos Apriori |
|Email con longitud mayor a 190| Datos Apriori |
|Email con longitud igual a 190| Datos Apriori |
|Full name vacio y email lleno correcto| Datos Apriori |
|Full name correcto y email vacio| Datos Apriori |
|Los dos campos vacios| Datos Apriori |
|Tag vacio con descripción menor a 500| Datos Apriori |
|Tag vacio con descripción = a 500| Datos Apriori |
|Tag vacio con descripción > a 500| Datos Apriori |
|Tag diligenciado con descripción < a 500| Datos Apriori |
|Tag diligenciado con descripción > a 500| Datos Apriori |
|Tag diligenciado con descripción = a 500| Datos Apriori |
|Tags Color un numero| Datos Apriori |
|Creacion de tags con el campo Color dos numeros|Faker|
|Creacion de tags con el campo Color tres numeros|Faker|
|Creacion de Tags con el campo Color cuatro numeros|Faker|
|Creacion de tags con el campo Color cinco numeros|Faker|
|Creacion de tags con el campo color seis numeros|Faker|
|Creacion de tags con el campo color caracteres especiales|Faker|
|Creacion de tags con el campo Name mayor a 191 caracteres|Faker|
|Creacion de tags con el campo Name = a 191 caracteres|Faker|
|Creacion de tags con el campo Slug = 191 caracteres|Faker|
|Creacion de tags con el campo Slug > 191 caracteres|Faker|
|Staff invitar nuevo usuario correo correcto- author|Faker|
|Staff invitar nuevo usuario correo correcto- admin|Faker|
|Staff invitar nuevo usuario correo correcto- contibutor|Faker|
|Staff invitar nuevo usuario correo correcto- editor|Faker|
|Staff invitar nuevo usuario correo incorrecto- author|Faker|
|Staff invitar nuevo usuario correo incorrecto- admin|Faker|
|Staff invitar nuevo usuario correo incorrecto- contibutor|Faker|
|Staff invitar nuevo usuario correo incorrecto- editor|Faker|
|Staff invitar nuevo usuario sin arroba|Faker|
|Staff invitar nuevo usuario sin dominio|Faker|
|Staff invitar nuevo usuario con doble arroba|Faker|
|Staff invitar nuevo usuario correo mayor a 74 caracteres|Faker|
|Staff invitar nuevo usuario correo = a 74 caracteres|Faker|
|Vista General Settings campo Metatitle con 300 caracteres|Faker|
|Vista General Settings campo Metatitle > 300 caracteres|Faker|
|Vista General Settings campo Meta Description = 300 caracteres|Faker|
|Vista General Settings campo Meta Description > 300 caracteres |Faker|
|Vista General Settings campo Site Title = 150 caracteres|Faker|
|Vista General Settings campo Site Title > 150 caracteres|Faker|
|Vista General Settings campo Site Title < 150 caracteres|Faker|
|Vista General Settings campo Site Description = 200 caracteres|Faker|
|Vista General Settings campo Site Description > 200 caracteres|Faker|
|Vista General Settings campo Site Description < 200 caracteres|Faker|
|Twitter title < 300|
|Twitter title = 300|
|Twitter title > 300|
|Twitter Description < 500|
|Twitter Description = 500|
|Twitter Description > 500|
|Design sin protocolo en campo |
|Design con protocolo en números |
|Design sin url|
|Olvido de password con vieja incorrecta - nuevo y confirmación iguales|
|Olvido de password con vieja correcta - nuevo  vacio y confirmación lleno|
|Olvido de password con vieja correcta - nuevo  lleno y confirmación vacio|
|Olvido de password con vieja correcta - nuevo  vacio y confirmación vacio|
|Olvido de password con vieja correcta - nuevo  lleno < 10 y confirmación lleno|
|Olvido de password con vieja correcta - nuevo  lleno = 10 y confirmación lleno|
|Olvido de password con vieja correcta - nuevo  lleno > 10 y confirmación lleno|
|Olvido de password con vieja correcta - nuevo  lleno  y confirmación lleno <10|
|Olvido de password con vieja correcta - nuevo  lleno  y confirmación lleno = 10|
|Olvido de password con vieja correcta - nuevo  lleno  y confirmación lleno > 10|
|Perfil Bio < 200|
|Perfil Bio = 200|
|Perfil Bio > 200|
|Post title < 2000|
|Post title = 2000|
|Post title > 2000|
|Post title caracteres especiales|
|Members email correcto|
|Members solo arroba pegado del dominio|
|Members email doble arroba|
|Members email sin domino|
|Members email con triple domino|Faker|Datos Apriori|
|Members caracteres especiales y @ + dominio correctos|Faker|Datos Apriori|
|Members nota < 500|Faker|
|Members Nota = 500|Faker|
|Members Nota > 500|Faker|
|Member correo correo mayor a 190|Datos Apriori|
|Member correo correo = a 190|Datos Apriori|
|Member- portal settings - accent color - 1 numero|Faker|
|Member- portal settings - accent color - 2 numeros|Faker|
|Member- portal settings - accent color - 3 numeros|Faker|
|Member- portal settings - accent color - 4 numeros|Faker|
|Member- portal settings - accent color - 5 numeros|Faker|
|Member- portal settings - accent color - 6 numeros|Faker|
|Member- portal settings - accent color - caracteres especiales|Faker|Datos Apriori|
|Profile Website - sin formato|Faker|
|Profile Website - caracteres especiales y dominio|Faker|
|Profile Website - caracteres especiales sin dominio|Faker|
|Integraciones Slack - url sin protocolo|Faker|
|Integraciones Slack - url sin formato|Faker|
|Integraciones Slack - url caracteres especiales|Faker|
|Integración, nueva integración- name > 191|Faker|Datos Apriori|
|Integración, nueva integración- name = 191|Faker|Datos Apriori|
|Integración, nueva integración- name < 191|Faker|Datos Apriori|
|Integration- new web hook - ingresar nombre, ingresar target y click|Faker|Datos Apriori|
|Integration- new web hook - sin nombre, seleccionar evento, ingresar target y click|Faker|Datos Apriori|
|Integration- new web hook - nombre, seleccionar evento, sin target y click|Faker|Datos Apriori|
|Integration- new web hook - sin nombre, seleccionar evento, sin target y click|Faker|Datos Apriori|
|View site - Subscribe - sin correo|Falta un selector siempre cambia|
|View site - Subscribe - correo sin arroba|Falta un selector siempre cambia|
|View site - Subscribe - correo sin domino|Falta un selector siempre cambia|
|View site - Subscribe - correo con 3 dominos|Falta un selector siempre cambia|
