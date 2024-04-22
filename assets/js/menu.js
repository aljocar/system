const container_contenido = document.getElementById('container_contenido');

//Crear variables para cada uno de los items del menu
const item_menu_inicio = document.getElementById('item_menu_inicio');
const item_menu_inicio2 = document.getElementById('item_menu_inicio2');
const item_menu_profile = document.getElementById('item_menu_profile');
const item_menu_task = document.getElementById('item_menu_task');
const item_menu_form = document.getElementById('item_menu_form');
const item_menu_authors = document.getElementById('item_menu_authors');
const item_menu_administrators = document.getElementById('item_menu_administrators');
const item_menu_books = document.getElementById('item_menu_books');
const item_menu_merchandising = document.getElementById('item_menu_merchandising');
const item_menu_notifications = document.getElementById('item_menu_notifications');
const item_menu_setting = document.getElementById('item_menu_setting');

//Inicio de Código que se va a ejecutar cuando haga clic en el
//menu-item del cliente
item_menu_inicio.addEventListener('click', (event) => {
  event.preventDefault(); // Evita que el enlace cargue una nueva página

  fetch('inicio.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
}); ////Fin de código del menu-item del cliente


//Inicio de Código que se va a ejecutar cuando haga clic en el
//menu-item del cliente
item_menu_inicio2.addEventListener('click', (event) => {
  event.preventDefault(); // Evita que el enlace cargue una nueva página

  fetch('inicio.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
}); ////Fin de código del menu-item del cliente


//Inicio de Código que se va a ejecutar cuando haga clic en el
//menu-item del cliente
item_menu_profile.addEventListener('click', (event) => {
  event.preventDefault(); // Evita que el enlace cargue una nueva página

  fetch('profile.html')
    .then(response => response.text())
    .then(html => {
        container_contenido.innerHTML = html;
    });
}); ////Fin de código del menu-item del cliente


//Inicio de Código que se va a ejecutar cuando haga clic en el
//menu-item del producto
item_menu_task.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('task.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
  });  ////Fin de código del menu-item del producto


  item_menu_form.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('form.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
  });


  item_menu_authors.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('authors.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
  });


  item_menu_administrators.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('administrators.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
  });


  item_menu_books.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('books.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
  });


  item_menu_merchandising.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('merchandising.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
  });


  item_menu_notifications.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('notifications.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
  });


  item_menu_setting.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace cargue una nueva página
  
    fetch('setting.html')
      .then(response => response.text())
      .then(html => {
          container_contenido.innerHTML = html;
      });
  });