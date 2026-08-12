const form = document.getElementById("donorForm");
const donorList = document.getElementById("donorList");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const bloodGroup = document.getElementById("bloodGroup").value;

    const li = document.createElement("li");
    li.textContent = `${name} - ${bloodGroup}`;

    donorList.appendChild(li);

    form.reset();
});