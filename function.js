function Download() {
    const anchor = document.createElement("a");
    anchor.href = "https://github.com/MGCodesBR/portfolioalexa/raw/main/assets/pdf/alexa_cv.pdf";
    anchor.download = "https://github.com/MGCodesBR/portfolioalexa/raw/main/assets/pdf/alexa_cv.pdf";
    document.body.appendChild(anchor);
    anchor.click();
}