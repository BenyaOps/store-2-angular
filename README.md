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
