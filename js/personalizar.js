
const btnCartSidebar = document.querySelector('.btn-cart-sidebar');

let globalDesignSrc = './assets/universalcopy_icon.ico';


window.addEventListener('DOMContentLoaded', () => {

    for (let i = 1; i <= 10; i++) {
        const img = document.getElementById('overlay-' + i);
        if (img) img.src = globalDesignSrc;
    }


    initFromURL();
});

function initFromURL() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('product');

    if (productId) {

        const element = document.getElementById(productId);
        if (element) {
            showProduct(productId, null);

            const buttons = document.querySelectorAll('.nav-btn');
            buttons.forEach(btn => {
                if (btn.getAttribute('onclick').includes(productId)) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }
    }
}

const globalUpload = document.getElementById('globalUpload');
if (globalUpload) {
    globalUpload.addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (evt) {
                globalDesignSrc = evt.target.result;

                for (let i = 1; i <= 10; i++) {
                    const img = document.getElementById('overlay-' + i);
                    if (img) img.src = globalDesignSrc;
                }
            };
            reader.readAsDataURL(file);
        }
    });
}



function showProduct(itemId, btnElement) {

    document.querySelectorAll('.product-view').forEach(v => v.classList.remove('active'));


    const selectedView = document.getElementById(itemId);
    if (selectedView) selectedView.classList.add('active');


    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');


    const textControls = document.getElementById('text-controls');
    if (textControls) {
        if (itemId === 'item-7') {
            textControls.style.display = 'block';
        } else {
            textControls.style.display = 'none';
        }
    }
}

btnCartSidebar.addEventListener('click', function (event) {
    event.preventDefault();
    //Bandera
    let bandera = true;
    // Comprobar si el usuario ha iniciado sesión
    if (!localStorage.getItem('usuarioLogueado')) {
        Swal.fire({
            title: 'Imposible añadir al carrito',
            text: 'Solo los usuarios registrados pueden añadir productos al carrito.',
            icon: 'info',
            confirmButtonText: 'Registrate',
            cancelButtonText: 'Cancelar',
            showCancelButton: true
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'registro.html';
            }
        });
        bandera = false;
    }

    // Comprobar si la imagen sigue siendo la por defecto
    if (globalDesignSrc.includes('universalcopy_icon.ico')) {
        Swal.fire({
            icon: "info",
            title: "¡Imposible añadir al carrito!",
            text: "Por favor, sube una imagen para personalizar el producto.",
            confirmButtonText: "Continuar",
        })
        bandera = false;
    }

    // Comprobar tamaño del archivo
    const fileInput = document.getElementById('globalUpload');
    if (fileInput && fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const maxSize = 2 * 1024 * 1024; // 2MB

        if (file.size > maxSize) {
            Swal.fire({
                icon: "info",
                title: "¡Imposible añadir al carrito!",
                text: "La imagen es demasiado pesada. El tamaño máximo permitido es de 2MB.",
                confirmButtonText: "Continuar",
            })
            bandera = false;
        }
    }

    // Si todo es correcto
    if (bandera) {
        Swal.fire({
            icon: "success",
            title: "¡Listo!",
            text: "Producto agregado al carrito.",
            confirmButtonText: "Continuar",
        })

        // Agregar al carrito


    }//
});