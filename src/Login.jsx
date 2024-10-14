// import { useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { useNavigate,useLocation } from "react-router-dom"; 


// function Login() 
// {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");

//   const [nameColor, setNameColor] = useState({ color: "" });
//   const [passwordColor, setPasswordColor] = useState({ color: "" });
//   const [emailColor, setEmailColor] = useState({ color: "" });

//   const [nameResult, setNameResult] = useState("");
//   const [passwordResult, setPasswordResult] = useState("");
//   const [emailResult, setEmailResult] = useState("");

//   const navigateto = useNavigate(); 

//   const { state } = useLocation();
//   const from = state?.from || { pathname: '/' };
//   const [redirectToReferrer, setRedirectToReferrer] = useState(false);

//   const login = () => {
//     FakeAuth.authenticate(() => {
//       setRedirectToReferrer(true);
//     });
//   };


// function submitdatas()
// {
//     let isValid = true;

//     const namePattern = /^([a-zA-Z]{2,30})$/;
//     if (name === "") 
//     {
//       setNameResult("Please Enter your name");
//       setNameColor({ color: "Red" });
//       isValid = false;
//     } 
//     else if(!namePattern.test(name))
//     {
//       setNameResult("Invalid name");
//       setNameColor({ color: "Red" });
//       isValid = false;
//     }
//     else 
//     {
//       setNameResult(`Your Name is: ${name}`);
//       setNameColor({ color: "Green" });
//     }


//     const passwordPattern = /^[A-Za-z]\w{7,14}$/;
//     if (password === "") 
//     {
//       setPasswordResult("Please Enter your password");
//       setPasswordColor({ color: "Red" });
//       isValid = false;
//     } 
//     else if(!passwordPattern.test(password)) 
//     {
//       setPasswordResult("Invalid password");
//       setPasswordColor({ color: "Red" });
//       isValid = false;
//     } 
//     else 
//     {
//       setPasswordResult(`Your Password is: ${password}`);
//       setPasswordColor({ color: "Green" });
//     }

 
//     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     if (email === "") 
//     {
//       setEmailResult("Please Enter your email");
//       setEmailColor({ color: "Red" });
//       isValid = false;
//     } 
//     else if(!emailPattern.test(email))
//     {
//       setEmailResult("Invalid email");
//       setEmailColor({ color: "Red" });
//       isValid = false;
//     } 
//     else 
//     {
//       setEmailResult(`Your Email is: ${email}`);
//       setEmailColor({ color: "Green" });
//     }


//     if (isValid === true) {
//       navigateto("/Home"); 
//     }
    
// }

//   return (
//     <Container className="border form">
//       <Row className="p-3 bg-primary text-white">
//         <Col><h1>Login</h1></Col>
//       </Row>

//       <form>
//         <Row className="bg-info-subtle pt-4">
//           <Col>
//             <label>Enter Name:</label>
//             <input type="text" placeholder="Enter your name.." value={name} onChange={(e) => setName(e.target.value)} />
//             <p style={nameColor}>{nameResult}</p>
//           </Col>

//           <Col>
//             <label>Enter Password:</label>
//             <input type="password" placeholder="Enter your password.." value={password} onChange={(e) => setPassword(e.target.value)} />
//             <p style={passwordColor}>{passwordResult}</p>
//           </Col>
//         </Row>

//         <Row className="bg-info-subtle pt-4">
//           <Col>
//             <label>Enter Email:</label>
//             <input type="email" placeholder="Enter your email.." value={email} onChange={(e) => setEmail(e.target.value)} />
//             <p style={emailColor}>{emailResult}</p>
//           </Col>
//         </Row>

//         <Row className="bg-info-subtle pt-4 pb-3">
//           <Col>
//             <button className="btn btn-primary" style={{ width: "50%" }} onClick={submitdatas} type="submit">Sign IN</button>
//           </Col>
//         </Row>
//       </form>
//     </Container>
//   );
// }


// export default Login;


// export const FakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100);
//   },
// };






import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom"; 
import { FakeAuth } from './FakeAuth';

function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [nameColor, setNameColor] = useState({ color: "" });
    const [passwordColor, setPasswordColor] = useState({ color: "" });
    const [emailColor, setEmailColor] = useState({ color: "" });
    const [nameResult, setNameResult] = useState("");
    const [passwordResult, setPasswordResult] = useState("");
    const [emailResult, setEmailResult] = useState("");

    const navigateto = useNavigate(); 
    const { state } = useLocation();
    const from = state?.from || { pathname: '/' };
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);

    const checklogin = () => {
      FakeAuth.authenticate(() => {
          setRedirectToReferrer(true);
          navigateto("/Home"); 
      });
    };
  

   
    const submitdatas = (e) => {
      e.preventDefault();
      let isValid = true;
  
      if (!name) {
          setNameResult("Please Enter your name");
          setNameColor({ color: "Red" });
          isValid = false;
      } else {
          setNameColor({ color: "Green" });
          setNameResult("");
      }
  
      if (!password) {
          setPasswordResult("Please Enter your password");
          setPasswordColor({ color: "Red" });
          isValid = false;
      } else {
          setPasswordColor({ color: "Green" });
          setPasswordResult("");
      }
  
      if (!email) {
          setEmailResult("Please Enter your email");
          setEmailColor({ color: "Red" });
          isValid = false;
      } else {
          setEmailColor({ color: "Green" });
          setEmailResult("");
      }
  
      if (isValid) {
          checklogin();
      }
  };
  

    return (
        <Container className="border form">
            <Row className="p-3 bg-primary text-white">
                <Col><h1>Login</h1></Col>
            </Row>

            <form onSubmit={submitdatas}>
                <Row className="bg-info-subtle pt-4">
                    <Col>
                        <label>Enter Name:</label>
                        <input type="text" placeholder="Enter your name.." value={name} onChange={(e) => setName(e.target.value)} />
                        <p style={nameColor}>{nameResult}</p>
                    </Col>
                    <Col>
                        <label>Enter Password:</label>
                        <input type="password" placeholder="Enter your password.." value={password} onChange={(e) => setPassword(e.target.value)} />
                        <p style={passwordColor}>{passwordResult}</p>
                    </Col>
                </Row>

                <Row className="bg-info-subtle pt-4">
                    <Col>
                        <label>Enter Email:</label>
                        <input type="email" placeholder="Enter your email.." value={email} onChange={(e) => setEmail(e.target.value)} />
                        <p style={emailColor}>{emailResult}</p>
                    </Col>
                </Row>

                <Row className="bg-info-subtle pt-4 pb-3">
                    <Col>
                        <button className="btn btn-primary" style={{ width: "50%" }} type="submit">Sign IN</button>
                    </Col>
                </Row>
            </form>
        </Container>
    );
}

export default Login;
