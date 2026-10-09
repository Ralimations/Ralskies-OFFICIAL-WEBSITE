document.querySelectorAll("[data-service]").forEach((link)=>{link.addEventListener("click",()=>{document.getElementById("service-select").value=link.dataset.service;});});
