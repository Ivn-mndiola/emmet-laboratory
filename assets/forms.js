document.querySelectorAll("form").forEach(function (form) {
    let status = form.querySelector(".form-status");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        status.textContent = "Form checked. This practice form does not send or save any information.";
    });

    form.addEventListener("input", function () {
        status.textContent = "";
    });
});
