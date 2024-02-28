# MANUAL DE DESPLIEGUE APLICATIVO WEB 

## 1.	Introducción
Le damos la bienvenida al Manual de Despliegue, una guía esencial que ofrece instrucciones detalladas para la implementación efectiva y la puesta en marcha de la aplicación. Se aconseja revisar y preparar los requisitos previos necesarios, así como seguir cuidadosamente el procedimiento paso a paso proporcionado para asegurar una integración exitosa.

## 2.	Requisitos Previos
### Programas instalados:

#### Editor de código: 
Se recomienda instalar [Visual Studio Code](https://code.visualstudio.com/).
    
#### NodeJS y NPM (Node Package Manager)

Para la instalación de NodeJS se recomienda seguir la [guía oficial](https://nodejs.org/en) y instalar una versión LTS (Long Term Support) y instalar el NPM en las opciones de instalación.

## 3.	Configuraciones:

### Primero

El siguiente paso es instalar la herramienta Angular CLI. Para llevar a cabo esta instalación de manera global en su sistema, abra la terminal y ejecute el comando que se proporciona a continuación:

   ```bash
   $ npm install -g @angular/cli
   ```

Este procedimiento instalará la versión más reciente y estable de Angular CLI, garantizando su disponibilidad para su uso en todo el sistema.

### Segundo
Una vez que haya completado los pasos previos, estará en condiciones de acceder al [repositorio web de la aplicación](https://github.com/AmacomV2/amacom-web).

Al ingresar al enlace, diríjase a la sección 'Código' y copie la URL proporcionada para poder clonar el proyecto en su sistema.

Después de copiar el enlace, el siguiente paso es crear una carpeta específica en nuestro sistema para alojar el proyecto clonado. Una vez ubicados en esta carpeta, abrimos una terminal y ejecutamos el comando git clone, seguido de la URL que hemos copiado anteriormente, para iniciar el proceso de clonación del proyecto:

    
   ```bash
   $  git clone https://github.com/AmacomV2/amacom-web.git
   ```

Una vez finalizado el proceso de clonación del proyecto web se necesita viajar a la raíz del proyecto, donde es posible cambiar entre las diferentes ramas del proyecto. Para cambiar entre una rama u otra se ejecuta el comando:

   ```bash
   $  git checkout [[desired-branch]]
   ```

### Tercero

Para compilar el proyecto en modo desarrollo, navegue hasta la siguiente ruta específica: ``src\app`` y ejecute alguno de los siguientes comandos:

   ```bash
   src/app$  ng serve
   ```

   ```bash
   src/app$  npm start
   ```

Este proceso creara una servidor web de desarrollo. Mientras el servidor esté en funcionamiento, abra el navegador de su preferencia y diríjase a la dirección del servidor local: ``http://localhost:4200/``. Donde podrá visualizar e interactuar con la interfaz web de la aplicación.

### Cuarto

Finalmente, si se quiere navegar o explorar el proyecto, es crucial comprender su estructura organizativa. La aplicación web se organiza de acuerdo con roles de usuario, los cuales incluye: 1. administrador, 2. enfermería y 3. usuario final, cada uno con su carpeta respectiva. Además, se han asignado carpetas específicas para componentes clave, como la 4. autenticación de usuarios y el 5. calendario, facilitando así la navegación y comprensión del aplicativo.


