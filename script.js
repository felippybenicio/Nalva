function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
}

const form = document.getElementById('form')
const enviar = document.querySelector('.btnFull')
    


function handleCtaClick() {
    form.style.display = 'block'
}

form.addEventListener("submit", function (event) {
    event.preventDefault(); // impede envio automático

    const userName = document.getElementById("userName").value.trim();
    const userPhone = document.getElementById("userPhone").value.trim();
    const orderDetails = document.getElementById("orderDetails").value.trim();
    const productType = document.querySelector('input[name="productType"]:checked');

    if (!userName || !userPhone || !orderDetails || !productType) {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return;
    }

    alert('Formulario enviado com sucesso. Só aguardar nossa equipe entrara em contato em breve, obrigado pela escolha')
    form.reset();
});
