nuevo = document.getElementById('nuevo');
card = document.getElementById('card');

const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: '2.000',
        smoke: false,
        pets: true
        },
        {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: '2.500', // Dejarlo como número devuelve 5 en vez de 5.000 por alguna razón
        smoke: true,
        pets: true
        },
        {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: '2.200',
        smoke: false,
        pets: false
        },
        {
    nombre: 'Departamento acogedor cerca del centro',
    src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/524389219.jpg?k=96e236bc8947ed2ac64cf0f4cae2a36019cb568d46fe825e6d85c78fb1adfee4&o=&hp=1',
    descripcion: 'Un cómodo departamento en una ubicación ideal, cerca de todas las comodidades urbanas',
    ubicacion: '112 Urban St, Downtown Area, TX 43210',
    habitaciones: 3,
    baños: 2,
    costo: '2.400',
    smoke: false,
    pets: true
},
{
    nombre: 'Loft moderno con vistas urbanas',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQydbl96kwynXbvDFGCbEP4PTerE1jEYCTpYw&s',
    descripcion: 'Loft luminoso con diseño moderno y vistas panorámicas del skyline de la ciudad',
    ubicacion: '101 Skyline Blvd, City View, CA 32165',
    habitaciones: 1,
    baños: 1,
    costo: '1.800',
    smoke: true,
    pets: false
},
{
    nombre: 'Apartamento de 2 habitaciones en zona tranquila',
    src: 'https://assets.easybroker.com/property_images/4741048/80151439/EB-RF1048.jpg?version=1726561448',
    descripcion: 'Apartamento luminoso y silencioso en una zona residencial tranquila y accesible',
    ubicacion: '54 Quiet Ave, Peaceful Suburb, IL 67892',
    habitaciones: 2,
    baños: 1,
    costo: '2.200',
    smoke: false,
    pets: false
},
{
    nombre: 'Estudio funcional en barrio céntrico',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfaqOMZ-4DIj4d6qQWhblA84y0FJwvw0xpHg&s',
    descripcion: 'Estudio pequeño pero funcional, ideal para vivir solo en el corazón de la ciudad',
    ubicacion: '230 Central St, Inner City, NY 12376',
    habitaciones: 1,
    baños: 1,
    costo: '1.650',
    smoke: true,
    pets: true
}
        
]

let html = ''

for (element of propiedades_alquiler) {
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
