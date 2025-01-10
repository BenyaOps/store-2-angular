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
