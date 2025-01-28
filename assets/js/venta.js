nuevo = document.getElementById('nuevo');
card = document.getElementById('card');

const propiedades_venta = [
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    baños: 4,
    costo: '5.000', // Dejarlo como número devuelve 5 en vez de 5.000 por alguna razón
    smoke: false,
    pets: false
    },
    {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    baños: 1,
    costo: '1.200', // Dejarlo como número devuelve 5 en vez de 5.000 por alguna razón
    smoke: true,
    pets: true
    },
    {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    baños: 3,
    costo: '4.500',
    smoke: true,
    pets: true
    },
    {
        nombre: 'Casa de campo con vista panorámica',
        src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/409823144.jpg?k=8cfd37e9c4ddc5a6ceb71075a58653c7a48a9190cb98d38f8f8b5d4c37e9a20d&o=&hp=1',
        descripcion: 'Hermosa casa de campo con impresionantes vistas a las montañas',
        ubicacion: '789 Countryside Road, Serenity Hills, TX 78901',
        habitaciones: 5,
        baños: 3,
        costo: '3.200',
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse moderno en el corazón de la ciudad',
        src: 'https://img.freepik.com/fotos-premium/vida-lujo-corazon-ciudad-apartamento-moderno-gran-altura-impresionante-vista-al-horizonte-ciudad_839035-58975.jpg',
        descripcion: 'Un penthouse elegante con acabados modernos y acceso privado al ascensor',
        ubicacion: '456 City Center Ave, Downtown District, NY 12345',
        habitaciones: 3,
        baños: 2,
        costo: '8.500',
        smoke: false,
        pets: true
    },
    {
        nombre: 'Cabaña acogedora junto al lago',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnqbNhzCNVr24muxolDQL5ibuayxHZPM9xbQ&s',
        descripcion: 'Una cabaña tranquila con acceso directo al lago y muelle privado',
        ubicacion: '234 Lakeview Drive, Whispering Pines, MN 56789',
        habitaciones: 2,
        baños: 1,
        costo: '2.100',
        smoke: true,
        pets: false
    },
    {
        nombre: 'Villa con jardín tropical y piscina',
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR45Ppcb1aUCd6W-WNRPBmZA0c66mR8-jjXxQ&s',
        descripcion: 'Espaciosa villa rodeada de un exuberante jardín tropical y una gran piscina privada',
        ubicacion: '321 Paradise Lane, Palm Beach, FL 67890',
        habitaciones: 6,
        baños: 5,
        costo: '12.000',
        smoke: false,
        pets: true
    }
]

let html = ''

for (element of propiedades_venta) {
    html += `
    <div class="col-md-4 mb-4" id="card">
            <div class="card">
              <img
                src="${element.src}"
                class="card-img-top"
                alt="Imagen del departamento"
                id="src"
              />
              <div class="card-body">
                <h5 class="card-title" id="nombre">${element.nombre}</h5>
                <p class="card-text" id="descripcion">${element.descripcion}</p>
                <p>
                  <i class=" fa-map-marker-alt" id="ubicacion">${element.ubicacion}</i>
                </p>
                <p>
                  <i class="fa-bed" id="habitaciones"> ${element.habitaciones} Habitaciones | </i>
                  <i class="fa-bath" id="baños">${element.baños} Baños</i>
                </p>
                <p><i class=" fa-dollar-sign" id="costo">${element.costo}</i></p>
                <p class="${element.smoke ? 'text-success' : 'text-danger'}">
                    <i class="fas ${element.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i>
                    ${element.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                </p>
                <p class="${element.pets ? 'text-success' : 'text-danger'}">
                    <i class="fas ${element.pets ? 'fa-paw' : 'fa-ban'}"></i>
                    ${element.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                </p>
              </div>
            </div>
          </div>
    `
}

nuevo.innerHTML = html
