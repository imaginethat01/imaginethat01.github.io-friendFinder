// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  // Displays all characters
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });
  
  // Displays a single character, or returns false
  app.get("/api/friends/:friend", function(req, res) {
    var chosen = req.params.friend;
  
    console.log(chosen);
  
    for (var i = 0; i < friends.length; i++) {
      if (chosen === friends[i].routeName) {
        return res.json(friends[i]);
      }
    }
  
    return res.json(false);
  });
  
  // Create New Characters - takes in JSON input
  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newfriend = req.body;
  
    console.log(newfriend);
  
    // We then add the json the user sent to the character array
    friends.push(newfriend);
  
    // We then display the JSON to the users
    res.json(newfriend);
  });