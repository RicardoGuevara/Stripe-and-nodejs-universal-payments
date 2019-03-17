const { Router } = require('express');
const router = Router();
const stripe = require('stripe')('sk_test_tyQwsl3l8UlPHeJCxtjMy3mu');
//configración de respuestas al detectar una petición get (ruta de la petición, función)
router.get('/',(req,res) => {
	res.render('index');
});

router.post('/checkout', (req,res) =>{
	console.log("\x1b[36m%s\x1b[0m","Pago recivido")
  	console.log(req.body);
  	const customer = stripe.customers.create({
  		email: req.body.stripeEmail,
  		source: req.body.stripeToken
  	});
	const charge = stripe.charges.create({
		amount: '1000',
		currency: 'usd',
		customer: customer.id,
		description: 'descripción de productos'
	});
	console.log(charge.id);
	res.render('succes');
});

module.exports = router;