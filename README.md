# e-commerce

Publicacion de la app. : https://e-commerce-coder-six.vercel.app/

📊 1. Estructura General de los Componentes

En la carpeta src/components se encuentran los siguientes subcomponentes:

components/
  
      ├── banner/
  
      ├── cart/

      ├── cartWidget/
  
      ├── item/
  
      ├── itemCount/
  
      ├── ItemDetail/
  
      ├── ItemDetailContainer/
  
      ├── itemList/
  
      ├── itemListContainer/
  
      ├── Loader/
  
      └── navbar/

📦 2. Desglose de los Componentes
A continuación, una descripción detallada de cada uno:

🏞️ a) banner/
  Archivos: Banner.jsx y Banner.css
  
  Función: Muestra una imagen o sección destacada (generalmente en la parte superior del sitio).
  
  Uso esperado: Se renderiza en la página principal para mostrar una oferta o promoción destacada.
  
🛒 b) cart/
  Archivos: Cart.jsx
  Función: Muestra un resumen de la compra con distintas funcionalides, y permite finalizarla.

🛒 c) cartWidget/
  Archivos: CartWidget.jsx
  Función: Icono del carrito de compras que muestra la cantidad de productos seleccionados.
  Uso esperado: Normalmente se encuentra en la barra de navegación, permitiendo acceder al carrito.

📦 d) item/
  Archivos: Item.jsx
  Función: Representa un producto individual con detalles como nombre, imagen y precio.
  Uso esperado: Se utiliza dentro de un contenedor de lista para mostrar múltiples productos.

🔢 e) itemCount/
  Archivos: ItemCount.jsx
  Función: Control para ajustar la cantidad de un producto antes de agregarlo al carrito.
  Uso esperado: Aparece en la vista de detalle de un producto y permite seleccionar la cantidad a comprar.

📄 f) ItemDetail/
  Archivos: ItemDetail.jsx
  Función: Muestra información detallada de un producto específico (descripción, imagen, precio, etc.).
  Uso esperado: Renderiza la vista cuando el usuario selecciona un producto para verlo en detalle.

📦 g) ItemDetailContainer/
  Archivos: ItemDetailContainer.jsx
  Función: Componente encargado de gestionar la lógica para obtener y mostrar el ItemDetail.
  Uso esperado: Se comunica con una API simulada o base de datos para cargar un producto específico.

📋 h) itemList/
  Archivos: ItemList.jsx
  Función: Renderiza una lista de productos utilizando múltiples componentes Item.
  Uso esperado: Utilizado para mostrar todos los productos o los filtrados por categoría.

📦 i) itemListContainer/
  Archivos: ItemListContainer.jsx
  Función: Actúa como un contenedor que obtiene datos (productos) y los pasa a ItemList.
  Uso esperado: Se usa en la página principal o en las vistas de categorías.

⌛ j) Loader/
  Archivos: Loader.jsx
  Función: Muestra un indicador de carga mientras se recuperan los datos (productos o detalles).
  Uso esperado: Aparece cuando se está cargando contenido desde una API.

🧭 k) navbar/
  Archivos: Navbar.jsx
  Función: Barra de navegación principal con enlaces a diferentes secciones (inicio, categorías, carrito).
  Uso esperado: Siempre visible, facilita el acceso a distintas partes de la tienda.

📌 3. Flujo de la Aplicación
  Navbar permite navegar por la tienda.
  ItemListContainer obtiene productos y los pasa a ItemList, que los muestra como Item.
  Al seleccionar un producto, ItemDetailContainer obtiene el detalle y lo muestra en ItemDetail.
  CartWidget actualiza el estado del carrito y muestra la cantidad de productos seleccionados.
  Luego en Cart muestra un resumen e la compra y permite finalizarla


📌 3. Flujo de la Aplicación
  Navbar permite navegar por la tienda.
  ItemListContainer obtiene productos y los pasa a ItemList, que los muestra como Item.
  Al seleccionar un producto, ItemDetailContainer obtiene el detalle y lo muestra en ItemDetail.
  CartWidget actualiza el estado del carrito y muestra la cantidad de productos seleccionados.

