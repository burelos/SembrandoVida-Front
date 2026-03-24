## Instalar la paqueteria de flowbite
npm install flowbite

## importar en la carpeta de estilos global en styles.css
@plugin "flowbite/plugin";
@source "../node_modules/flowbite";
@source "../node_modules/flowbite-datepicker";

## En la carpeta principal del proyecto implementar el OnInit y anexar initFlowbite()
export class App implements OnInit{
  protected readonly title = signal('SembrandoVida-Front');

  ngOnInit(): void {
    initFlowbite();
  }
}

## En angular.json anexar el siguiente codigo
"scripts": [
  "node_modules/flowbite/dist/flowbite.min.js"
]

## Instalar el datepicker
npm install flowbite-datepicker --save

## En angular.json anexar este script debaje del flowbite.min.js
"node_modules/flowbite-datepicker/dist/js/datepicker.min.js"

## Instalar modo dark, en el estilo global styles.css
/* MODO DARK*/
@custom-variant dark (&:where(.dark, .dark *));

## Para que el flowbite me funcionara eliminar en angular.json el server
"server": "src/main.server.ts"

## Y el output lo cambia de server a static
"outputMode": "server" <---- Antes

"outputMode": "static" <---- Despues
## Anexe en angular.json la ruta de la carpeta assets
"assets": [
          "src/assets",
]