let maps = document.getElementById( "maps" );

let width =  window.innerWidth
//console.log(width);
let mapswidth =  width*0.9;
//console.log(mapswidth);
let mapsheight =  width*0.56;
//console.log(mapsheight);

if (width > 1200) {
    maps.insertAdjacentHTML('beforeend', `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d280.1900246892129!2d136.9350958905805!3d35.134778238757356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60037a671d1461bd%3A0xaf918be047bea798!2z6Iqz5pil5a-6!5e0!3m2!1sja!2sjp!4v1641183993379!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`);
} else if (width > 992) {
    maps.insertAdjacentHTML('beforeend', `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d280.1900246892129!2d136.9350958905805!3d35.134778238757356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60037a671d1461bd%3A0xaf918be047bea798!2z6Iqz5pil5a-6!5e0!3m2!1sja!2sjp!4v1641183993379!5m2!1sja!2sjp" width="500" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`);
} else {
    maps.insertAdjacentHTML('beforeend', `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d280.1900246892129!2d136.9350958905805!3d35.134778238757356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60037a671d1461bd%3A0xaf918be047bea798!2z6Iqz5pil5a-6!5e0!3m2!1sja!2sjp!4v1641183993379!5m2!1sja!2sjp" width="${mapswidth}" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`);
}

