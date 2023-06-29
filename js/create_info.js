const queryString = document.location.search
const params = new URLSearchParams(queryString)

const id_silla = params.get("id")
const searchedSilla = sillas.find( sillas => sillas.id == id_silla)
const container_sillas = document.querySelector(".container_info")

container_sillas.innerHTML = `<div class="column">
    <h2>${searchedSilla.name}</h2>
    <img src="${searchedSilla.img}" alt="Silla imagen">
</div>
<div class="column">
    <h2>Detalles:</h2>
    <p>${searchedSilla.info}</p>
</div>`
