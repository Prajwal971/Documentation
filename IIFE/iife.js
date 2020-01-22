(function () {
    var userName = "demo";
    
    function display(name)
    {
        console.log("This is " ,name);
    }

    display(userName);
  })(userName);//passing args