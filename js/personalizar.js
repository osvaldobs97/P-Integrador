
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
