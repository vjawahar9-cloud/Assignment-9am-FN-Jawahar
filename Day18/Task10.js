
   const defaultsettings = {
        "theme": "light",
        language: "en",
        notification: true,
   };

   let usersettings ={..defaultsettings};

   usersettings.theme = "dark";
   usersettings.language = "tamil";
   usersettings.notification = false;

   console.log("defaultsettings", defaultsettings);
   console.log("user preferences", usersettings);