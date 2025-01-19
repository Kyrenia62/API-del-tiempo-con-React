Aplicación OpenWeather con React
Aplicación construida con React que permite buscar cualquier ciudad y obtener su temperatura en tiempo real utilizando la API de OpenWeatherMap.

TECNOLOGIAS UTILIZADAS:
	ReactJS: Framework JavaScript para crear interfaces de usuario.
	OpenWeatherMap API: API para obtener datos meteorológicos.
	npm: administrador de paquetes para Node.js.


ESTRUCTURA DEL PROYECTO:
	openweather: Directorio principal de la aplicación.
		node_modules: Dependencias del proyecto.
		public: Contiene el archivo HTML index.html.
		origen:
			assets/css: Archivos CSS para estilizar la aplicación.
			components: Componentes React reutilizables.
			app.js: Componente principal de la aplicación.
			app.test.js: Pruebas unitarias para el componente principal.
			index.js: Punto de entrada de la aplicación.
	package.json: Archivo de configuración de npm.
	package-lock.json: Archivo generado por npm para bloquear las versiones de las dependencias.


INSTALACIÓN Y EJECUCIÓN:
1. Clonar el repositorio:
		git clone [https://tu-repositorio.git](https://github.com/Kyrenia62/API-del-tiempo-con-React/tree/main)
	Reemplaza tu-repositorio.git con la URL de tu repositorio.

2. Instalar dependencias:
		cd openweather-react-main
		npm install

3. Iniciar la aplicación:
		npm start
	La aplicación se ejecutará en http://localhost:3000.


FUNCIONAMIENTO DEL PROYECTO:
	1. Buscar una ciudad: Ingresa el nombre de una ciudad en el campo de búsqueda y presiona Enter.
	2. Ver resultados: La aplicación mostrará la temperatura actual de la ciudad, así como otros detalles meteorológicos (si están implementados).

CONFIGURACIÓN:
API Key de OpenWeatherMap: Para utilizar la aplicación, debes obtener una API key gratuita de OpenWeatherMap y configurarla en tu entorno de desarrollo. Consulta la documentación de OpenWeatherMap para obtener más información.
