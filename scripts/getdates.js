const year = document.querySelector("#year");

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const lastModified = document.lastModified;

const oLastModif = new Date(document.lastModified);

document.getElementById("lastModified").textContent = lastModified;