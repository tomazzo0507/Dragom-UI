document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger')
    const sidebar = document.querySelector('.sidebar')

    const auto = document.getElementById('auto')
    const alcance = document.getElementById('alcance')
    const carga = document.getElementById('carga')
    const video = document.getElementById('video')
    const report = document.getElementById('report')

    if (hamburger && sidebar) {
        hamburger.addEventListener('click', function () {
            sidebar.classList.toggle('active')
        })
        // cerrar click fuera
        document.addEventListener('click', function (e) {
            if (
                sidebar.classList.contains('active') &&
                !sidebar.contains(e.target) &&
                !hamburger.contains(e.target)
            ) {
                sidebar.classList.remove('active')
            }
        });
    }
    //modules redirect

    auto.addEventListener('click', (e) => {
    location.href = "/views/auto.html";
    });

    alcance.addEventListener('click', (e) => {
    location.href = "/views/alcance.html";
    });

    carga.addEventListener('click', (e) => {
    location.href = "/views/carga.html";
    });

    report.addEventListener('click', (e) => {
    location.href = "/views/report.html";
    });

})