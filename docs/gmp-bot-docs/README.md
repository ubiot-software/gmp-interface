<p align="center"> <img src="https://raw.githubusercontent.com/alejandroch1202/gmp-interface/main/src/assets/logo.png"/></p>

# <p align="center">@ubiot_gmp_bot</p>

## Documentación

### Requisitos
- Debes poseer una cuenta registrada en [DocuSign](https://www.docusign.com/start) para hacer las firmas electrónicas de las transacciones.

- Solicitar el registro en la plataforma al equipo de [GMP](mailto:erick@ubiot.io?subject=Solicitud%20de%20registro%20en%20GMP).

- Una vez completado el registro, escribir al bot de Telegram [@ubiot_gmp_bot](https://t.me/ubiot_gmp_bot). La primera vez saldra un botón de **START** al cual se debe pulsar para iniciar el chat con el bot.

### Compra
- Una vez seleccionado el boton de <b>START</b>, el bot mostrará un mensaje con un teclado en donde puede seleccionar que desea hacer con el bot. En este caso selecionaremos **Comprar**.

<p align="center"><img width="300px" src="https://raw.githubusercontent.com/ubiot-software/gmp-interface/main/docs/gmp-bot-docs/1.jpg"/></p>

- Al seleccionar el boton de **Comprar**, el bot mostrará un mensaje con un teclado en donde puede seleccionar en que formato desea ver las opciones de compra disponibles.

    - **Mostrar todas**: Mostrará todas las opciones de compra disponibles ordenadas por su ID.
    - **Filtrar por precio**: Mostrará solo las opciones de compra disponibles en el rango de precio seleccionado.
    - **Filtrar por m³**: Mostrará solo las opciones de compra disponibles en el rango de m³ seleccionado.
    - **Menor precio**: Mostrará todas las opciones de compra disponibles ordenadas de menor precio a mayor precio.
    - **Menor m³**: Mostrará todas las opciones de compra disponibles ordenadas de menor cantidad de m³ a mayor cantidad de m³.

<p align="center"><img width="300px" src="https://raw.githubusercontent.com/ubiot-software/gmp-interface/main/docs/gmp-bot-docs/2.jpg"/></p>

- Al seleccionar alguna opción el bot mostrará un mensaje con un teclado en donde puede seleccionar las opciones de compra disponibles. Cada una de ellas muestrá:

    - El **ID** de la venta en cuestión: Se mostrará de color azul en el mensaje. Ejemplo: [/7](#)
    - El **precio por m³** de la venta en cuestión. Ejemplo: 200 EUR
    - La **cantidad disponible de m³** de la venta en cuestión. Ejemplo: 400 m³
    - El **vendedor** de la venta en cuestión. Ejemplo: Yelitza Alvarez

<p align="center"><img width="300px" src="https://raw.githubusercontent.com/ubiot-software/gmp-interface/main/docs/gmp-bot-docs/3.jpg"/></p>

- Al hacer click en el teclado con el número correspondiente al **ID** de la venta que queremos comprar el bot mostrará un mensaje y un teclado para confirmar la compra de la venta seleccionada.

<p align="center"><img width="300px" src="https://raw.githubusercontent.com/ubiot-software/gmp-interface/main/docs/gmp-bot-docs/4.jpg"/></p>

- Si selecciona "No, mostrar opciones", el bot enviará a escoger nuevamente otra venta. Por otro lado, si selecciona "Si, comprar ID: X", el bot hará el procesamiento y posteriormente le llegará un correo para hacer la firma en [DocuSign](https://www.docusign.com/start) y cerrar así su transacción de derechos de agua.

<p align="center"><img width="300px" src="https://raw.githubusercontent.com/ubiot-software/gmp-interface/main/docs/gmp-bot-docs/5.jpg"/></p>

<p align="center">Developed by Ubiot, 2023.</p>
