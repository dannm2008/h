const productos = [

  ];
  
  const carrito = [];
  
  function mostrarProductos() {
    const contenedor = document.getElementById("productos");
    contenedor.innerHTML = "";
    productos.forEach((p, index) => {
      contenedor.innerHTML += `
        <div class="producto">
          <img src="${p.imagen}" alt="${p.nombre}">
          <h3>${p.nombre}</h3>
          <p>${p.descripcion}</p>
          <strong>${p.precio}</strong>
          <button onclick="agregarAlCarrito(${index})">🛒 Añadir al carrito</button>
        </div>
      `;
    });
  }
  
  function agregarAlCarrito(index) {
    carrito.push(productos[index]);
    actualizarCarrito();
  }
  
  function actualizarCarrito() {
    const contador = document.getElementById("contador");
    contador.textContent = carrito.length;
  
    const lista = document.getElementById("lista-carrito");
    lista.innerHTML = "";
    carrito.forEach(p => {
      const li = document.createElement("li");
      li.textContent = `${p.nombre} - ${p.precio}`;
      lista.appendChild(li);
    });

}
        
  mostrarProductos();
  
