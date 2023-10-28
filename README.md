# Dashboard Clima/Tránsito

Una aplicación que recopila datos del clima de "open-meteo.com" y del tránsito de "datosabiertos-transporte-apis.buenosaires.gob.ar".

## ¿Cómo se Usa? 🚀

La mitad izquierda muestra datos del clima obtenidos de "open-meteo.com":

-El recuadro principal, muestra la información del clima de día actual: el día, la temperatura actual, la sensasión térmica, la temperatura máxima y mínima, la probabilidad de lluvia, además de un ícono representativo del "weathercode" con su descripción.

-Los 8 recuadros más pequeños brindan datos de: horario de Amanecer/Anochecer, Humedad, Indice UV, velocidad y dirección del viento, visibilidad en km y la calidad del aire (obtenido también de Open-Meteo).

-El recuadro inferior muestra un aproximado de la variación horaria de la temperatura para el día de la fecha.

-El recuadro de la derecha muestra el pronóstico para los próximos 4 días (muestra la condición del clima y las temperaturas máxima-mínima).

La mitad derecha muestra un mapa de la centrado en la Ciudad de Buenos Aires:

-El menú desplegable permite seleccionar las lineas.

-Una vez seleccionada la lista, se cargará un marcador representando la posición actual de cada uno de los colectivos del recorrido.

-Las posiciones de los marcadores se actualizará cada 31 segundos o al cambiar de linea.

## Datos de Desarrollo 🛠️

Creado con React.

El gráfico de la temperatura horaria fue creado usando la librería "Recharts.js"

El mapa se genera a partir de la librería "React-leaflet"

Los íconos representando cada línea por separado fueron se obtienen de "www.xcolectivo.com.ar".

El componente Transito.jsx engloba todos los elementos, y espero dividirlo en componentes. (proximamente)

## Autor ✒️

* **Gustavo Grisetti** - [Greyhearth](https://github.com/Greyhearth)