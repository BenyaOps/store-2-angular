Empezando

#veamos rutas

#ciclo de vida de compoenente

| CLiclo de vida  | 
| ------------- | 
| Constructor  |
| ngOnChanges  | 
| ngOnInit | 
| ngDoCheck | By
| ngAfterContentInit | 
| ngAfterContentChecked | 
| ngAfterViewInit | 
| ngAfterViewCheck | 
| ngOnDestroy| 

en <variable> !: <tipo>  en "!:" significa que, cuando yo considere voy a inicializar la variable

el decorator @ViewChild('container') sirve para hacer referencia a un elemento del dom
Por ejemplo: <div #container>, habilita un "this.container.nativeElement" en vez de "$document.getElementById('container')" 

Por ahora nuestra arquitectura de componentes va quedadno de la siguiente manera:
ProductComponent ---- ListComponent ---- HeaderComponent
ListComponent es encargado de renderizar los componentes de Product y Header.
La informacion se transifiere a traves de Inputs y Outputs.
Si se agrega un producto al carrito, esto se comunica al ListCOmponent, y luego se comparte al headerComponent

Dentro del HeaderCOmponent creamos un @Input para el "cart" 

¿como pasamos la info del Product al Header?
Como vemos hay un intermediario que es el ListCompoent
dentro del product, tenemos el evento addToCart, donde lanzamos un emit con los datos del producto.
Dentro del List, creamos un signal "productsCart",  en el evento donde recibimps el output, como es un signal hacemos un update con los datos.
En la vista para que se vea reflejado
en el app-header agregamos el signal productsCart() dentro del property [cart].

--El problema del drop drilling--
¿acabamos de ver como se comunican los componentes si hay intermediarios?
¿Pero que sucede cuando tenemos un gran proyecto, un gran arbol con muchos compoonentes conectados?
Es cuando surge el problema del drop drilling, que se resume en la gran carga de pasar de componente a compoenente hasta llegar al destino.
Esto al no ser eficiente, se presenta na brilllante solucion.
Se crean estados, estos estados permanecen en un punto del arbol en la parte superior, para que el cambio que se genere por ejm: en ProductComponent, se escuche en por ejm: HeaderComponent.

A nivel de codigo, lo vemos con los servicios. Creamos nuestro primer servicio "ng g s domains/shared/services/cart"

Dentro del servicio cart, cremos el signa 'cart' y el computed 'total', donde tendremos un callback.
un computed es una propiedad que deriva de otra y detecta cambios en la otra propiedad para actuar.
Dentro del HeaderCOmponent importamos la inyeccion de dependencias, es decir, creamos una variable privada de cartService = inject(<nombreDelServicio>)
entonces el cartService ya tendra el estado de los 2 signals para que lo uses en el componente.

--entendiendo la inyeccion de dependencias--
Esta inyeccion pertenece al patron de inyeccion de dependencias.
El objetivo de servicio es plasmar la logica de negocio, conectarse a una api, calcular totales, entre otros.
EL patron nos dice que 1 servicio, puede comunicarse con 1 o 2 componenetes (puede ser mas pero se debe tener cuidado).
Para no caer en  un antipatron los servicios no pueden inyectarse entre si, porque por debajo lo que ocurre es 'c=quien fue primero el huevo o la gallina'

--como hacr llamados a una api--
Creas tu servicio donde te conectaras a la api (ejm: productService)
importamos en app.config.ts: import { provideHttpClient } from '@angular/common/http';
lo  invocamos en los providers
Dentro del productSERVICE creamos un var privada llamada 'http' que tendra un inject de HttpClient. Tambien creamos el metodo para hacer get al api, y retornara return this.http.get<Product[]>(URL);
Este metodo lo invocaremos en el ListComxtonent, dentro del ngOnInit; una vez pongamos el getProduct() ejecutara el 'subscribe()' que dentro tendra un 'next' para que ejecute el success y un 'error' para que detecte si algo falla.

--Pipes en Angular--
los pipes(tuberias) sirven para transformar los datos antes de mostrarlos en la vista. Se utilizan para formatear fechas, números, cadenas de texto, entre otros. También se pueden crear pipes personalizados para aplicar transformaciones específicas a los datos.

--usando query params en la URL--
Dentro de nuestro ListComponent, importamos el RouterLinkWithHref, 

--lazloading  codde splitting --
Primero veamos los tiempos de carga de Javascript: descarga Js, parsear, compilar y ejecutar.
el mayor tiempo es de descarga. POr esto podemos, este es el paso que podemos optmizar en peso.
En Angular tenemos muchos archivos typescrit, para traducirlo a JS el trabajo lo hace el empaquetador de Angular. COnvirtiendo todos los compoentes, directivas, servicios y  llevandolo a un MainJS.
La tecnica de lazyloading y codespliting, es no dejar todo en el MainJS, sino particionarlo en varios Chunk JS (que son varios pedazos del codigo)
Nuestro trabajo es decirle al empequetador como manejar esos Chunks, cuales cargar primero.
