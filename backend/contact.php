<?php
// Simple handler para formulario de contacto
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = $_POST["nombre"] ?? '';
    $email = $_POST["email"] ?? '';
    $mensaje = $_POST["mensaje"] ?? '';

    $to = "tucorreo@ejemplo.com";
    $subject = "Nuevo mensaje de contacto";
    $body = "Nombre: $nombre\nEmail: $email\nMensaje: $mensaje";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["success" => true, "message" => "Mensaje enviado correctamente."]);
    } else {
        echo json_encode(["success" => false, "message" => "Error al enviar el mensaje."]);
    }
    exit;
}
?>
