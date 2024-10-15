export const FakeAuth = {
    isAuthenticated: false,   //user still not logined 
    authenticate(cb) 
    {
      this.isAuthenticated = true;  //user now logined
      setTimeout(cb, 100);          //display a page after 1 sec
    },
  };
  