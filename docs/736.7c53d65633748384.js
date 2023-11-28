"use strict";(self.webpackChunkturisTrazo=self.webpackChunkturisTrazo||[]).push([[736],{9736:(K,v,n)=>{n.r(v),n.d(v,{TourModule:()=>$});var c=n(6895),m=n(2045),e=n(8256),p=n(7440);let Z=(()=>{class o{static#e=this.\u0275fac=function(r){return new(r||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["tour-inicio"]],decls:15,vars:0,consts:[[1,"relative","bg-blueGray-50"],[1,"relative","pt-16","pb-32","flex","content-center","items-center","justify-center","min-h-screen-75"],[1,"absolute","top-0","w-full","h-full","bg-center","bg-cover","bg-image"],["id","blackOverlay",1,"w-full","h-full","absolute","opacity-75","bg-black"],[1,"container","relative","mx-auto"],[1,"items-center","flex","flex-wrap"],[1,"w-full","lg:w-6/12","px-4","ml-auto","mr-auto","text-center"],[1,"pr-12"],[1,"text-white","font-semibold","text-5xl"],[1,"mt-4","text-lg","text-blueGray-200","text-white"],[1,"top-auto","bottom-0","left-0","right-0","w-full","absolute","pointer-events-none","overflow-hidden","h-70-px",2,"transform","translateZ(0px)"],["xmlns","http://www.w3.org/2000/svg","preserveAspectRatio","none","version","1.1","viewBox","0 0 2560 100","x","0","y","0",1,"absolute","bottom-0","overflow-hidden"],["points","2560 0 2560 100 0 100",1,"text-blueGray-200","fill-current"]],template:function(r,i){1&r&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2),e._UZ(3,"span",3),e.qZA(),e.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"h1",8),e._uU(9," Reserva y Disfruta. "),e.qZA(),e.TgZ(10,"p",9),e._uU(11," Vive momentos inolvidables "),e.qZA()()()()(),e.TgZ(12,"div",10),e.O4$(),e.TgZ(13,"svg",11),e._UZ(14,"polygon",12),e.qZA()()()())},styles:[".bg-image[_ngcontent-%COMP%]{background-image:url(/./assets/comuna-13.jpg)}"]})}return o})();var f=n(7279),b=n(1261);let y=(()=>{class o{constructor(){}static#e=this.\u0275fac=function(r){return new(r||o)};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["tour-card"]],inputs:{imagen:"imagen",titulo:"titulo",sitio:"sitio",id:"id"},decls:14,vars:5,consts:[[1,"rounded-xl","bg-white","p-3","shadow-lg","hover:shadow-xl","hover:transform","hover:scale-105","duration-300"],[3,"routerLink"],[1,"relative","flex","items-end","overflow-hidden","rounded-xl"],["alt","Hotel Photo",3,"src"],[1,"mt-1","p-2"],[1,"text-slate-700"],[1,"mt-1","text-sm","text-slate-400"],[1,"mt-3","flex","items-end","justify-between"],[1,"flex","items-center","space-x-1.5","rounded-lg","bg-blue-500","px-4","py-1.5","text-white","duration-100","hover:bg-blue-600"],[1,"text-sm"]],template:function(r,i){1&r&&(e.TgZ(0,"article",0)(1,"a",1)(2,"div",2),e._UZ(3,"img",3),e.qZA(),e.TgZ(4,"div",4)(5,"h2",5),e._uU(6),e.qZA(),e.TgZ(7,"p",6),e._uU(8),e.qZA(),e.TgZ(9,"div",7)(10,"div",8)(11,"a",1)(12,"button",9),e._uU(13,"Ver Detalle"),e.qZA()()()()()()()),2&r&&(e.xp6(1),e.Q6J("routerLink","/tour/"+i.id),e.xp6(2),e.Q6J("src",i.imagen,e.LSH),e.xp6(3),e.Oqu(i.titulo),e.xp6(2),e.Oqu(i.sitio),e.xp6(3),e.Q6J("routerLink","/tour/"+i.id))},dependencies:[m.rH],styles:["img[_ngcontent-%COMP%]{width:100%;height:200px;object-fit:cover}"]})}return o})();function I(o,u){if(1&o&&(e.TgZ(0,"div"),e._UZ(1,"tour-card",6),e.qZA()),2&o){const t=u.$implicit;e.xp6(1),e.Q6J("id",t.id||0)("imagen",t.imagenData||"")("sitio",(null==t.barrioMedellin?null:t.barrioMedellin.nombre)||"")("titulo",t.nombre)}}let _=(()=>{class o{constructor(t,r){this.tourService=t,this.sitioInteresService=r,this.filtro="",this.tour=[],this.tourFiltrados=[],this.terminoBusqueda=""}ngOnInit(){this.tourService.getAllTour().subscribe(t=>{this.tour=t,this.tourFiltrados=t,this.getImages()})}getImages(){this.tour.forEach(t=>{this.sitioInteresService.getImages(t.imagen).subscribe(r=>{const i=new FileReader;i.onload=()=>{t.imagenData=i.result},i.readAsDataURL(r)},r=>{console.error(`Error al obtener imagen para ${t.imagen}:`,r)})})}filtrarSitios(t){this.tourFiltrados=""===t.trim()?this.tour:this.tour.filter(r=>r.nombre?.toLowerCase().includes(t.toLowerCase()))}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(f.Q),e.Y36(b.S))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["tour-list"]],inputs:{filtro:"filtro"},decls:7,vars:1,consts:[[1,"bg-white"],[1,"mt-4","bg-white"],[1,"text-center","text-2xl","font-bold","text-gray-800"],[1,"py-10","bg-gray-100"],[1,"grid","grid-cols-1","sm:grid-cols-2","md:grid-cols-4","lg:grid-cols-4","xl:grid-cols-4","gap-4"],[4,"ngFor","ngForOf"],[3,"id","imagen","sitio","titulo"]],template:function(r,i){1&r&&(e.TgZ(0,"body",0)(1,"div",1)(2,"h1",2),e._uU(3,"Tour "),e.qZA()(),e.TgZ(4,"section",3)(5,"div",4),e.YNc(6,I,2,4,"div",5),e.qZA()()()),2&r&&(e.xp6(6),e.Q6J("ngForOf",i.tourFiltrados))},dependencies:[c.sg,y],encapsulation:2})}return o})(),A=(()=>{class o{constructor(t){this.authService=t}get isGuide(){return this.authService.isGuide()}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(p.e))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-reservar-tour"]],decls:2,vars:0,template:function(r,i){1&r&&e._UZ(0,"tour-inicio")(1,"tour-list")},dependencies:[Z,_]})}return o})();var S=n(4128),s=n(4006),x=n(8773),C=n(4322),T=n(7185),U=n(1529),w=n(6817),F=n(938);function P(o,u){if(1&o&&(e.TgZ(0,"section")(1,"div",12),e._UZ(2,"shared-slider",13),e.qZA()()),2&o){const t=e.oxw(2);e.xp6(2),e.Q6J("images",t.imagenes)}}function q(o,u){if(1&o){const t=e.EpF();e.TgZ(0,"form",14),e.NdJ("ngSubmit",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.contactarGuia())}),e.TgZ(1,"div",15)(2,"div",16)(3,"label",17),e._uU(4,"Fecha de reserva:"),e.qZA(),e._UZ(5,"input",18),e.qZA(),e.TgZ(6,"div",19)(7,"label",20),e.NdJ("input",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.calcularPrecioTotal())}),e._uU(8,"N\xfamero de personas:"),e.qZA(),e._UZ(9,"input",21),e.qZA()(),e.TgZ(10,"div",22)(11,"label",23),e._uU(12,"Precio estimado:"),e.qZA(),e._UZ(13,"input",24),e.qZA(),e.TgZ(14,"div",22)(15,"label",25),e._uU(16,"N\xfamero de contacto:"),e.qZA(),e._UZ(17,"input",26),e.qZA(),e.TgZ(18,"button",27),e._uU(19," Contactar Gu\xeda "),e.qZA()()}if(2&o){const t=e.oxw(2);let r,i,a;e.Q6J("formGroup",t.formTour),e.xp6(5),e.ekj("border-red-500",(null==(r=t.formTour.get("fechaReserva"))?null:r.invalid)&&((null==(r=t.formTour.get("fechaReserva"))?null:r.dirty)||(null==(r=t.formTour.get("fechaReserva"))?null:r.touched))),e.xp6(4),e.ekj("border-red-500",(null==(i=t.formTour.get("numeroPersonas"))?null:i.invalid)&&((null==(i=t.formTour.get("numeroPersonas"))?null:i.dirty)||(null==(i=t.formTour.get("numeroPersonas"))?null:i.touched))),e.xp6(8),e.ekj("border-red-500",(null==(a=t.formTour.get("numeroPersonas"))?null:a.invalid)&&((null==(a=t.formTour.get("numeroPersonas"))?null:a.dirty)||(null==(a=t.formTour.get("numeroPersonas"))?null:a.touched)))}}function R(o,u){1&o&&(e.TgZ(0,"div",28)(1,"h2",29),e._uU(2,"Inicia sesi\xf3n para contactar gu\xeda del tour "),e.TgZ(3,"a",30),e._uU(4,"Iniciar Sesi\xf3n"),e.qZA()()())}function N(o,u){1&o&&(e.TgZ(0,"div",28)(1,"h2",31),e._uU(2,"Calificaciones del tour"),e.qZA()())}function Y(o,u){if(1&o&&(e.ynx(0),e.TgZ(1,"div",35),e._UZ(2,"resenas-card",36),e.qZA(),e.BQk()),2&o){const t=u.$implicit;e.xp6(2),e.Q6J("resena",t)}}function J(o,u){if(1&o&&(e.TgZ(0,"div",32)(1,"div",33),e.YNc(2,Y,3,1,"ng-container",34),e.qZA()()),2&o){const t=e.oxw(2);e.xp6(1),e.Udp("transform","translateX("+-t.slideIndex*t.slideWidth+"px)"),e.xp6(1),e.Q6J("ngForOf",t.extendedListResena)}}function D(o,u){if(1&o&&(e.TgZ(0,"div",1)(1,"div",2),e._UZ(2,"br"),e.TgZ(3,"h1",3),e._uU(4),e.qZA(),e.TgZ(5,"h2",4),e._uU(6),e.qZA(),e.TgZ(7,"div",5)(8,"p",6),e._uU(9),e.qZA()(),e._UZ(10,"br")(11,"br"),e.YNc(12,P,3,1,"section",7),e._UZ(13,"br")(14,"br"),e.YNc(15,q,20,7,"form",8),e.TgZ(16,"div",9),e.YNc(17,R,5,0,"div",10),e.qZA(),e._UZ(18,"br")(19,"br"),e.qZA(),e.YNc(20,N,3,0,"div",10),e.YNc(21,J,3,3,"div",11),e.qZA()),2&o){const t=e.oxw();e.xp6(4),e.Oqu(t.tour.nombre),e.xp6(2),e.AsE("",null==t.tour.barrioMedellin?null:t.tour.barrioMedellin.nombre,"- ",null==t.tour.guia||null==t.tour.guia.usuario?null:t.tour.guia.usuario.nombre," "),e.xp6(3),e.Oqu(t.tour.descripcion),e.xp6(3),e.Q6J("ngIf",t.validado&&t.validadoSlider),e.xp6(3),e.Q6J("ngIf",t.turista),e.xp6(2),e.Q6J("ngIf",!t.turista&&!t.logueado),e.xp6(3),e.Q6J("ngIf",t.resenasValidado),e.xp6(1),e.Q6J("ngIf",t.resenasValidado)}}let Q=(()=>{class o{constructor(t,r,i,a,l,g,d,h,X,z,H){this.authService=t,this.route=r,this.tourService=i,this.router=a,this.location=l,this.sitioInteresService=g,this.imagenService=d,this.resenaService=h,this.formBuilder=X,this.toastr=z,this.reservaService=H,this.validado=!1,this.imagenes=[],this.validadoSlider=!1,this.slideIndex=0,this.slideWidth=330,this.listResena=[],this.resenasValidado=!1,this.turista=!1,this.logueado=!1,this.isValidate=!1,this.imagenesDafaul=[{id:1,imagen:"",imagenData:"/./assets/educate.avif"},{id:2,imagen:"",imagenData:"/./assets/comuna-13.jpg"}],this.formTour=this.formBuilder.group({fechaReserva:["",s.kI.required],numeroPersonas:["",s.kI.required],numeroContacto:["",s.kI.required],precioEstimado:[0]})}ngOnInit(){this.logueado=this.authService.isLoggued(),this.turista=this.authService.isTourist(),this.route.params.subscribe(t=>{this.id=+t.id,isNaN(this.id)?this.location.back():(this.tourService.findTourById(Number(this.id)).subscribe(i=>{this.isValidate=this.authService.isAdmin()&&Boolean(!i.validado),i.validado||this.isValidate?(this.tour=i,this.tour.imagenData="",this.getImages(this.tour.imagen)):this.router.navigateByUrl("")},()=>{this.router.navigateByUrl("/sitio_interes")}),this.imagenService.getAllImagen({id:this.id,isSitio:!1}).subscribe(i=>{this.imagenes=i,0===this.imagenes.length?(this.imagenes=this.imagenesDafaul,this.validadoSlider=!0):this.getImagesForAll()}))}),this.resenaService.resenas$.subscribe(t=>{this.listResena=t,this.resenasValidado=!0}),this.getAllResenasById(),this.startSlider(),this.formTour.get("numeroPersonas")?.valueChanges.subscribe(()=>{this.calcularPrecioTotal()})}get extendedListResena(){return[...this.listResena,...this.listResena]}startSlider(){setInterval(()=>{this.slideIndex=(this.slideIndex+1)%this.listResena.length},2e3)}getImagesForAll(){const t=this.imagenes.map(r=>this.sitioInteresService.getImages(r.imagen));(0,S.D)(t).subscribe(r=>{r.forEach((i,a)=>{const l=new FileReader;l.onload=()=>{this.imagenes[a].imagenData=l.result,this.validadoSlider=!0},l.readAsDataURL(i)})},r=>{console.error("Error al obtener im\xe1genes:",r)})}getImages(t){this.sitioInteresService.getImages(t).subscribe(r=>{const i=new FileReader;i.onload=()=>{this.tour.imagenData=i.result,this.validado=!0},i.readAsDataURL(r)},r=>{console.error(`Error al obtener imagen para ${t}:`,r)})}getAllResenasById(){this.resenaService.getAllResenaByTourId(this.id).subscribe(t=>{this.listResena=t,this.listResena.length>0&&(this.resenasValidado=!0)})}calcularPrecioTotal(){const r=(this.formTour.get("numeroPersonas")?.value||0)*(this.tour.precioPersona||0);this.formTour.get("precioEstimado")?.setValue(r)}contactarGuia(){if(this.formTour.invalid)this.toastr.error("Existen campos sin diligenciar");else if(this.turista){const t={id:0,fecha:this.formTour.get("fechaReserva")?.value,numeroContacto:this.formTour.get("numeroContacto")?.value,numeroPersonas:this.formTour.get("numeroPersonas")?.value,precioEstimado:this.formTour.get("precioEstimado")?.value,tour:this.tour};this.reservaService.saveReserva(t).subscribe(()=>{this.toastr.success("Se ha registrado tu solicitud, el gu\xeda te contactar\xe1 pronto."),this.formTour.reset()})}}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(p.e),e.Y36(m.gz),e.Y36(f.Q),e.Y36(m.F0),e.Y36(c.Ye),e.Y36(b.S),e.Y36(x.n),e.Y36(C.u),e.Y36(s.qu),e.Y36(T._W),e.Y36(U.n))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-detalle-tour"]],decls:1,vars:1,consts:[["class","bg-gray-100 min-h-screen p-8",4,"ngIf"],[1,"bg-gray-100","min-h-screen","p-8"],[1,"max-w-4xl","mx-auto"],[1,"text-4xl","font-bold","mb-4","text-center"],[1,"text-lg","mb-4","text-center","text-gray-700"],[1,"mb-8"],[1,"text-lg","mb-4"],[4,"ngIf"],["class","mb-8",3,"formGroup","ngSubmit",4,"ngIf"],[1,"div"],["class","text-center mb-4 mt-2",4,"ngIf"],["class","overflow-hidden bg-gray-200 w-11/12 m-auto mt-2",4,"ngIf"],[1,"h-2/4","m-auto"],[3,"images"],[1,"mb-8",3,"formGroup","ngSubmit"],[1,"flex","flex-col","md:flex-row","justify-between","items-center"],[1,"mb-4","md:w-1/2","md:mr-4"],["for","fecha-reserva",1,"block","text-gray-700","font-semibold","mb-2"],["formControlName","fechaReserva","type","date","id","fecha-reserva","name","fecha-reserva",1,"w-full","px-4","py-2","rounded-md","border","border-gray-300","focus:outline-none","focus:border-indigo-500"],[1,"mb-4","md:w-1/2","md:ml-4"],["for","numero-personas",1,"block","text-gray-700","font-semibold","mb-2",3,"input"],["formControlName","numeroPersonas","type","number","id","numero-personas","name","numero-personas",1,"w-full","px-4","py-2","rounded-md","border","border-gray-300","focus:outline-none","focus:border-indigo-500"],[1,"mb-4"],["for","precio-estimado",1,"block","text-gray-700","font-semibold","mb-2"],["type","number","id","precio-estimado","name","precio-estimado","formControlName","precioEstimado","type","number","id","precio-estimado","name","precio-estimado",1,"w-full","px-4","py-2","rounded-md","border","border-gray-300","bg-gray-200","focus:outline-none"],["for","numero-contacto",1,"block","text-gray-700","font-semibold","mb-2"],["formControlName","numeroContacto","type","number","id","numero-contacto","name","numero-contacto",1,"w-full","px-4","py-2","rounded-md","border","border-gray-300","focus:outline-none","focus:border-indigo-500"],["type","submit",1,"bg-indigo-500","text-white","px-6","py-3","rounded-md","shadow-md","hover:bg-indigo-600","transition","duration-300","block","mx-auto"],[1,"text-center","mb-4","mt-2"],[1,"text-xl"],["routerLink","/auth/login",1,"underline","text-indigo-600"],[1,"text-4xl","font-bold"],[1,"overflow-hidden","bg-gray-200","w-11/12","m-auto","mt-2"],[1,"flex","transition-transform","ease-linear","duration-300"],[4,"ngFor","ngForOf"],[1,"flex-none","w-1/4","px-2"],[3,"resena"]],template:function(r,i){1&r&&e.YNc(0,D,22,9,"div",0),2&r&&e.Q6J("ngIf",i.validado)},dependencies:[c.sg,c.O5,m.rH,w.P,F.K,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.sg,s.u]})}return o})();var B=n(5905),E=n(8505),G=n(529);let L=(()=>{class o{constructor(t,r){this.http=t,this.authService=r,this.URL_API="/api/guide"}findGuide(t){return this.http.get(`${this.URL_API}/${t}`).pipe((0,E.b)(()=>{}))}static#e=this.\u0275fac=function(r){return new(r||o)(e.LFG(G.eN),e.LFG(p.e))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function O(o,u){if(1&o&&(e.TgZ(0,"option",19),e._uU(1),e.qZA()),2&o){const t=u.$implicit;e.Q6J("value",t.codigoPostal),e.xp6(1),e.Oqu(t.nombre)}}const k=[{path:"",component:A},{path:"register",component:(()=>{class o{constructor(t,r,i,a,l,g,d,h){this.imagenService=t,this.toast=r,this.authService=i,this.router=a,this.formBuilder=l,this.tourService=g,this.neighborhoodService=d,this.guiaService=h,this.formSend=!1,this.selectedImages=[],this.selectedSecondaryImages=[],this.tourForm=this.formBuilder.group({tourName:["",s.kI.required],description:["",s.kI.required],temperature:["",s.kI.required],pricePerPerson:["",s.kI.required],neighborhood:[1]}),this.barrios=[]}ngOnInit(){this.authService.isGuide()?this.neighborhoodService.getAllNeighborhood().subscribe(t=>{this.barrios=t}):this.router.navigateByUrl("")}sendTour(){this.formSend=!0;let t="",r=[];if(this.tourForm.valid){const i=Number(this.tourForm.get("neighborhood")?.value||0),a=this.barrios.find(l=>l.codigoPostal===i);a&&this.guiaService.findGuide(this.authService.getUser()?.numeroIdentidad||0).subscribe(l=>{if(l){if(this.selectedImages)for(let d=0;d<this.selectedImages.length;d++)t=this.selectedImages[0].name,r.push(this.selectedImages[d].name);this.uploadImagesToServer();const g={id:0,guia:l,nombre:this.tourForm.get("tourName")?.value||"",descripcion:this.tourForm.get("description")?.value||"",imagen:t,validado:!1,precioPersona:Number(this.tourForm.get("pricePerPerson")?.value||0),barrioMedellin:a,temperatura:this.tourForm.get("temperature")?.value||""};this.tourService.saveTour(g).subscribe(d=>{this.tourForm.reset(),this.formSend=!1,this.toast.success("El tour ha sido enviado, ser\xe1 revisado en los pr\xf3ximos d\xedas"),this.imagenService.saveImages({tour:d,nameImages:r}).subscribe()},()=>{this.toast.error("Error al enviar el tour")})}else this.toast.error("\xa1Ups!, Algo sali\xf3 mal")})}else this.toast.error("Existe informaci\xf3n sin diligenciar")}uploadImagesToServer(){this.selectedImages.length>0&&this.imagenService.uploadImages(this.selectedImages).subscribe(t=>{},t=>{})}onImageChange(t){this.selectedImages=t.target.files}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(x.n),e.Y36(T._W),e.Y36(p.e),e.Y36(m.F0),e.Y36(s.qu),e.Y36(f.Q),e.Y36(B.I),e.Y36(L))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["tour-registrar-tour"]],decls:31,vars:2,consts:[[1,"w-3/4","mx-auto","border","border-gray-300","shadow-md","rounded-lg","p-6","mt-10"],[3,"formGroup","ngSubmit"],[1,"grid","grid-cols-1","sm:grid-cols-2","gap-4"],[1,"mb-4"],["for","tourName",1,"block","mb-1"],["type","text","id","tourName","name","tourName","formControlName","tourName",1,"w-full","border","rounded-md","px-3","py-2"],["for","description",1,"block","mb-1"],["id","description","name","description","formControlName","description",1,"w-full","border","rounded-md","px-3","py-2"],["for","temperature",1,"block","mb-1"],["type","number","id","temperature","name","temperature","formControlName","temperature",1,"w-full","border","rounded-md","px-3","py-2"],["for","pricePerPerson",1,"block","mb-1"],["type","number","id","pricePerPerson","name","pricePerPerson","formControlName","pricePerPerson",1,"w-full","border","rounded-md","px-3","py-2"],["for","neighborhood",1,"block","mb-1"],["id","neighborhood","name","neighborhood","formControlName","neighborhood",1,"w-full","border","rounded-md","px-3","py-2"],[3,"value",4,"ngFor","ngForOf"],["for","images",1,"block","mb-1"],["type","file","id","images","name","images","multiple","",1,"w-full","border","rounded-md","px-3","py-2",3,"change"],[1,"mt-6"],["type","submit",1,"bg-blue-500","hover:bg-blue-600","text-white","font-bold","py-2","px-4","rounded"],[3,"value"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0)(1,"form",1),e.NdJ("ngSubmit",function(){return i.sendTour()}),e.TgZ(2,"div",2)(3,"div",3)(4,"label",4),e._uU(5,"Nombre del Tour"),e.qZA(),e._UZ(6,"input",5),e.qZA(),e.TgZ(7,"div",3)(8,"label",6),e._uU(9,"Descripci\xf3n"),e.qZA(),e._UZ(10,"textarea",7),e.qZA(),e.TgZ(11,"div",3)(12,"label",8),e._uU(13,"Temperatura del Lugar"),e.qZA(),e._UZ(14,"input",9),e.qZA(),e.TgZ(15,"div",3)(16,"label",10),e._uU(17,"Precio por Persona"),e.qZA(),e._UZ(18,"input",11),e.qZA(),e.TgZ(19,"div",3)(20,"label",12),e._uU(21,"Barrio"),e.qZA(),e.TgZ(22,"select",13),e.YNc(23,O,2,2,"option",14),e.qZA()(),e.TgZ(24,"div",3)(25,"label",15),e._uU(26,"Insertar im\xe1genes del tour"),e.qZA(),e.TgZ(27,"input",16),e.NdJ("change",function(l){return i.onImageChange(l)}),e.qZA()()(),e.TgZ(28,"div",17)(29,"button",18),e._uU(30," Enviar "),e.qZA()()()()),2&r&&(e.xp6(1),e.Q6J("formGroup",i.tourForm),e.xp6(22),e.Q6J("ngForOf",i.barrios))},dependencies:[c.sg,s._Y,s.YN,s.Kr,s.Fj,s.wV,s.EJ,s.JJ,s.JL,s.sg,s.u],encapsulation:2})}return o})()},{path:":id",component:Q},{path:"**",redirectTo:""}];let j=(()=>{class o{static#e=this.\u0275fac=function(r){return new(r||o)};static#t=this.\u0275mod=e.oAB({type:o});static#r=this.\u0275inj=e.cJS({imports:[m.Bz.forChild(k),m.Bz]})}return o})();var M=n(4466),V=n(6202);let $=(()=>{class o{static#e=this.\u0275fac=function(r){return new(r||o)};static#t=this.\u0275mod=e.oAB({type:o});static#r=this.\u0275inj=e.cJS({imports:[c.ez,j,M.m,V.ResenaCalificacionModule,s.u5,s.UX]})}return o})()}}]);