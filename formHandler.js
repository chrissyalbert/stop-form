
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("ripa-stop-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {};

    for (const [key, value] of formData.entries()) {
      if (key.endsWith("[]")) {
        const name = key.replace("[]", "");
        if (!data[name]) {
          data[name] = [];
        }
        data[name].push(value);
      } else {
        data[key] = value;
      }
    }

    console.log("Form data submitted:", JSON.stringify(data, null, 2));

    form.reset(); // clear form inputs
  });
});
