# Web básica de ventas con Stripe y Node js

## Para preparar los paquetes utilizados en backend:

npm init -y

npm i express express-handlebars stripe

## About:

[Stripe - pasarela de pagos](https://stripe.com/about)

[Bootstrap - framework css](https://getbootstrap.com)

[Bootswatch - bootstrap modified](https://bootswatch.com/flatly)

[FontAwesome - icons and fonts](https://fontawesome.com)

## Resumen:

<div align="center">
  
  <p>
    <img align="left" src="https://github.com/RicardoGuevara/Stripe-and-nodejs-universal-payments/blob/master/repo_images/pag_principal1.PNG" width="400" />  
    <h3>Biblioteca de productos: </h3>
    Muestra de productos disponibles en la plataforma
    <h3>Pagos individuales habilitados: </h3>
    Pago individual de productos con tarjeta (visa/mastercard)
  </p>
  <p>
    <img align="left" src="https://github.com/RicardoGuevara/Stripe-and-nodejs-universal-payments/blob/master/repo_images/ventana_pago_1.PNG" width="400" />  
    <h3>Ventana de pago: </h3>
    Descripción de producto e identificador de pagos con verificación (Stripe)
    <h3>Tarjetas habilitadas: </h3>
   	<a href="https://stripe.com/docs/testing">Tarjetas de test - Stripe</a>
   	Tarjetas reales visa o mastercard
  </p>
  <p>
    <img align="left" src="https://github.com/RicardoGuevara/Stripe-and-nodejs-universal-payments/blob/master/repo_images/succes1.PNG" width="400" />  
    <h3>Mensaje de compra exitosa: </h3>
    Acción configurable
  </p>
  <p>
    <img align="left" src="https://github.com/RicardoGuevara/Stripe-and-nodejs-universal-payments/blob/master/repo_images/pago_efectivo1.PNG" width="400" />  
    <h3>Verificaciones en Stripe: </h3>
    Información de cada compra realizada en la plataforma
  </p>

</div>

## Reciclable

<div>
	<h3>
		Stripe API y solicitudes asincronas en Js, respuestas get/post
	</h3>
	<code class="language-js">
		router.get('/',(req,res) => {
			res.render('index');
		});
		router.post('/checkout', async (req,res) =>{
			console.log("\x1b[36m%s\x1b[0m","Pago recivido")
		  	console.log(req.body);
		  	const customer = await stripe.customers.create({
		  		email: req.body.stripeEmail,
		  		source: req.body.stripeToken
		  	});
			const charge = await stripe.charges.create({
				amount: '1000',
				currency: 'usd',
				customer: customer.id,
				description: 'descripción de productos'
			});
			console.log(charge.id);
			res.render('succes');
		});
	</code>
</div>
