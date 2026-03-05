const WHATSAPP_NUMBER = "919680906100";

export function openWhatsAppForService(serviceName = "Laundry Service") {
  const message = `Hi, mujhe ${serviceName}  chahiye.`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
}
