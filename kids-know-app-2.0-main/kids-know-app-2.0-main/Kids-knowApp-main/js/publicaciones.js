function togglePublicacion(infoId) {
    const infoContainer = document.getElementById(infoId);
    if (infoContainer.style.display === "none" || infoContainer.style.display === "") {
        infoContainer.style.display = "block";
    } else {
        infoContainer.style.display = "none";
    }
}
