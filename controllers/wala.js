const createUser = async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      const newUser = new User({ username, password });
      await newUser.save();
      res.status(200).json({ message: "User created successfully" });
    } catch (err) {
      console.error("Error during user creation:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  };