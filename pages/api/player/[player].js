export default (req, res) => {
	const {
    	query: { player },
  	} = req
  	setTimeout( () => {
  		res.statusCode = 200
	  	res.setHeader('Content-Type', 'application/json')
	  	if(player === 'sora'){
	  		res.end(JSON.stringify({ 
		  		playerName: 'Sora',
		  		vitality: 200,
		  		magic: 135,
		  		power: 250,
		  		defence: 200,
		  		ph: 20,
		  		urlImage: '/magic-1.gif'
	  		}));
  		}else if(player === 'kairi'){
  			res.end(JSON.stringify({ 
		  		playerName: 'Kairi',
		  		vitality: 200,
		  		magic: 135,
		  		power: 250,
		  		defence: 200,
		  		ph: 20,
		  		urlImage: '/magic-2.webp'
	  		}));
  		}
  	}, 3000)
}