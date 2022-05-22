#Readme e2e_dataPools

# Paso a Paso para ejecutar el programa

## Porfavor tener en cuenta las precondiciones antes de ejecutar los casos

1. Realizar la instalación de Docker:
* 		En este link buscan su sistema operativo e instalan el Docker -> https://docs.docker.com/desktop/mac/install/
Ejecutar los siguientes comandos para instalar las imágenes necesarias para correr las dos versiones de Ghost
* 		docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.42 ghost:3.41.1
Ese contenedor va a enviar información desde su puerto 2368 (que es el que utiliza Ghost) a el puerto 3001 (en este ejemplo) en nuestro computador

Luego de tener instaladas la imagen de docker se debe ejecutar el comando 

* Docker start <ID-contenedor>, por ejemplo: docker start 9f1445846454. Lo anterior se debe realizar para las imagen que se creo previamente.

2. Ingresar a las url de ghost desde un browser. http://localhost:3001/ghost/#/dashboard (Ghost V3.41.1)

3. Ingresar a Ghost y crear un usuario y contraseña el cual debe ser exactamente igual para ambas versiones.

4. Dirigirse al archivo ghost.json y cambiar el valor establecido por el generado por usted así: 
  {
    "user": "correo@generado",
    "password": "claveGenerada"     
  }
  
5. La herramienta usada para la ejecución de las pruebas es Cypress, por lo tanto debe tenerla instalada en el computador.
  
6. En la consola digitar el comando `cypress open`, el cual abrira la interfaz grafica de cypress y debe abrir la carpeta donde clono el presente repositorio. Alli podra ejecutar los casos desarrollados.

|Caso|DataPool|
|-|-|
|Password ambos campos correctos|
|Password vacios los dos|
|Password vacio y lleno|
|Password lleno y vacio|
|Password correcto e incorrecto|
|Password incorrecto e correcto|
|Password ambos incorrectos|
|Usuario sin arroba|
|Usuario sin domino|
|Correo con mas de 191 caracteres|
|Correo con 191 caracteres|
|Full name - vacio, Email con datos|
|Full name con datos - Email vacio|
|Email con arroba y dominio sin más texto|
|Email sin arroba|
|Email con arroba sin dominio|
|Email con más de una arroba y un dominio|
|Email con un arroba y 3 dominios|
|Email con longitud mayor a 190|
|Email con longitud igual a 190|
|Full name vacio y email lleno correcto|
|Full name correcto y email vacio|
|Los dos campos vacios|
|Tag vacio con descripción menor a 500|
|Tag vacio con descripción = a 500|
|Tag vacio con descripción > a 500|
|Tag diligenciado con descripción < a 500|
|Tag diligenciado con descripción > a 500|
|Tag diligenciado con descripción = a 500|
|Tags Color un numero|
|Tags Color dos numeros|Faker|
|Tags Color tres numeros|Faker|
|Tags Color cuatro numeros|Faker|
|Tags Color cinco numeros|Faker|
|Tags Color seis numeros|Faker|
|Tags Color caracteres especiales|Faker|
|Name mayor a 191|Faker|
|Name = a 191|Faker|
|Slug = 191|Faker|
|Slug > 191|Faker|
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
|General Settings Metatitle = 300|Faker|
|Metatitle > 300|Faker|
|Meta Description = 300|Faker|
|Meta Description > 300|Faker|
|Site Title = 150 caracteres|Faker|
|Site Title > 150 caracteres|Faker|
|Site Title < 150 caracteres|Faker|
|Site Description = 200 caracteres|Faker|
|Site Description > 200 caracteres|Faker|
|Site Description < 200 caracteres|Faker|
|Canonical URL = 2000|
|Canonical URL < 2000|
|Canonical URL >2000|
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
|Members email con triple domino|
|Members caracteres especiales y @ + dominio correctos|
|Members nota < 500|
|Members Nota = 500|
|Members Nota > 500|
|Member correo correo mayor a 190|
|Member correo correo = a 190|
|Member- portal settings - accent color - 1 numero|
|Member- porta settings - accent color - 2 numeros|
|Member- porta settings - accent color - 3 numeros|
|Member- porta settings - accent color - 4 numeros|
|Member- portal settings - accent color - 5 numeros|
|Member- portal settings - accent color - 6 numeros|
|Member- portal settings - accent color - caracteres especiales|
|Profile Website - sin formato|
|Profile Website - caracteres especiales y dominio|
|Profile Website - caracteres especiales sin dominio|
|Integraciones Slack - url sin protocolo|
|Integraciones Slack - url sin formato|
|Integraciones Slack - url caracteres especiales|
|Integración, nueva integración- name > 191|
|Integración, nueva integración- name = 191|
|Integración, nueva integración- name < 191|
|Integration- new web hook - ingresar nombre, ingresar target y click|
|Integration- new web hook - sin nombre, seleccionar evento, ingresar target y click|
|Integration- new web hook - nombre, seleccionar evento, sin target y click|
|Integration- new web hook - sin nombre, seleccionar evento, sin target y click|
|View site - Subscribe - sin correo|
|View site - Subscribe - correo sin arroba|
|View site - Subscribe - correo sin domino|
|View site - Subscribe - correo con 3 dominos|
