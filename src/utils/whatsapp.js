export function openWhatsApp() {
    const phoneNumber = "523337275115";
    const message = "Me gustaría saber más acerca de Areni Tower.";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
