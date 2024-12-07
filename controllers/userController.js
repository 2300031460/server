const User = require('../models/User');

	// Register new user
	const registerUser = async (req, res) => {
  	const { name, email, password } = req.body;
  	try {
    	const user = new User({ name, email, password });
    	await user.save();
    	res.status(201).json(user);
  	} catch (error) {
    	res.status(400).json({ message: error.message });
  	}
	};

	module.exports = { registerUser };
