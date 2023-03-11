function panggilFilterParameters(value) {
 var arr = [
   {negara: 'Indonesia', benua: 'Asia'},
   {negara: 'Jerman', benua: 'Eropa'},
   {negara: 'Spanyol', benua: 'Eropa'},
   {negara: 'Korea', benua: 'Asia'},
   {negara: 'Portugal', benua: 'Eropa'},
   {negara: 'Amerika Serikat', benua: 'Amerika'},
 ];

 var benuaEropa = arr.filter(function(arr) {
return arr.benua === 'Asia';
 });
 var benuaasia = arr.filter(function (arr) {
   return arr.benua === 'Eropa';
 })

 console.log(benuaEropa);
 console.log(benuaasia);
}
panggilFilterParameters()
