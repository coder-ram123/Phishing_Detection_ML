// // const wrapper = document.querySelector('.wrapper'); 
// // const registerLink = document.querySelector('.register-link'); 
// // const loginLink = document.querySelector('.login-link');
// // // add
// // const dashboardLink = document.querySelector('.dashboard-link');

// // const signup=document.getElementById("signUpbtn");
// // const login=document.getElementById("loginbtn");
// // // add
// // const button=document.getElementById("btn");

// // const signupForm=document.forms.signup;
// // const signInForm=document.forms.signIn;
// // // add
// // const dashboardForm=document.forms.dashboard;

// // registerLink.addEventListener('click', () => {
// //     wrapper.classList.add('active');
    
// // }); 


// // loginLink.addEventListener('click', () => {
// //     wrapper.classList.remove('active');  
// // })

// // // add
// // dashboardLink.addEventListener('click', () => {
// //     wrapper.classList.remove('active');  
// // })

// // signupForm.addEventListener('submit', async (e) => {
// //     e.preventDefault();
// //     const name=signupForm.name.value;
// //     const email=signupForm.email.value;
// //     const password=signupForm.password.value;
// //    alert(name);

// //    //code for checking email duplicate in database in if not duplicate then register
// //     const res1=await fetch('/start/checkduplicate', {
// //         method: 'POST',
// //         body: JSON.stringify({ email }),
// //         headers: { 'Content-Type': 'application/json' }
// //     });
// //     const data1=await res1.json();
// //     if(data1.duplicate){
// //         alert('Email already exists');
// //         return;
// //     }
// //     else{
// //         const res=await fetch('/start/register', {
// //             method: 'POST',
// //             body: JSON.stringify({ name, email, password }),
// //             headers: { 'Content-Type': 'application/json' }
// //         });
// //         const data=await res.json();
// //         if(data.status==='ok'){
// //             alert('User Registered');
// //         }
// //         else{
// //             alert('User not Registered');
// //         }

// //     }

// //     // const res=await fetch('/start/register',{
// //     //     method:'POST',
// //     //     body:JSON.stringify({name,email,password}),
// //     //     headers: { 'Content-Type': 'application/json' }
// //     // });
// //     // const data=await res.json();
// //     // if(data.status==='ok'){
// //     //     alert('User Registered');
// //     // }
// //     // else{
// //     //     alert('User not Registered');
// //     // }
  
// // });

// // signInForm.addEventListener('submit', async (e) => {
// //     e.preventDefault();
// //     const email=signInForm.email.value;
// //     const password=signInForm.pass.value;

// //     // 
   
// //     const res=await fetch('/start/login',{
// //         method:'POST',
// //         body:JSON.stringify({email,password}),
// //         headers: { 'Content-Type': 'application/json' }
// //     });
// //     const data=await res.json();
// //     if(data.status==='ok'){
// //         // alert('User Logged In');
// //         window.location.href = 'http://127.0.0.1:5000';
// //     }
// //     else{
// //         alert('User not Logged In');
// //     }
// // });
    

// // dashboardForm.addEventListener('submit', async (e) => {
// //     e.preventDefault();
// //     const url=dashboardForm.url.value;
    
// //     const res=await fetch('/start/dashboard',{
// //         method:'POST',
// //         body:JSON.stringify({url}),
// //         headers: { 'Content-Type': 'application/json' }
// //     });
// //     const data=await res.json();
// //     if(data.status==='ok'){
// //         alert('Phishing URL');
// //     }
// //     else{
// //         alert('Not Phishing URL');
// //     }
// // });
    
// const wrapper = document.querySelector('.wrapper'); 
// const registerLink = document.querySelector('.register-link'); 
// const loginLink = document.querySelector('.login-link');
// const dashboardLink = document.querySelector('.dashboard-link');

// const signupForm = document.forms.signup;
// const signInForm = document.forms.signIn;
// const dashboardForm = document.forms.dashboard;

// registerLink.addEventListener('click', () => {
//     wrapper.classList.add('active');
// });

// loginLink.addEventListener('click', () => {
//     wrapper.classList.remove('active');  
// });

// dashboardLink.addEventListener('click', () => {
//     window.location.href = 'http://127.0.0.1:5000/'; // or any other dashboard URL
// });

// signupForm.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const name = signupForm.name.value;
//     const email = signupForm.email.value;
//     const password = signupForm.password.value;

//     // code for checking email duplicate in database in if not duplicate then register
//     const res1 = await fetch('/start/checkduplicate', {
//         method: 'POST',
//         body: JSON.stringify({ email }),
//         headers: { 'Content-Type': 'application/json' }
//     });
//     const data1 = await res1.json();
//     if (data1.duplicate) {
//         alert('Email already exists');
//         return;
//     } else {
//         const res = await fetch('/start/register', {
//             method: 'POST',
//             body: JSON.stringify({ name, email, password }),
//             headers: { 'Content-Type': 'application/json' }
//         });
//         const data = await res.json();
//         if (data.status === 'ok') {
//             alert('User Registered');
//         } else {
//             alert('User not Registered');
//         }
//     }
// });

// signInForm.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const email = signInForm.email.value;
//     const password = signInForm.pass.value;

//     const res = await fetch('/start/login', {
//         method: 'POST',
//         body: JSON.stringify({ email, password }),
//         headers: { 'Content-Type': 'application/json' }
//     });
    
//     const data = await res.json();
//     if (data.status === 'ok') {
//         // window.location.href = 'http://127.0.0.1:5000/';
//         window.location.href = 'http://127.0.0.1:5000/';
   
//     } else {
//         alert('User not Logged In');
//     }
    
// });
// // app.get('/views/signInsignUp.html', (req, res) => {
// //     res.redirect('http://127.0.0.1:5000/');
// // });
// dashboardForm.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const url = dashboardForm.url.value;
    
//     const res = await fetch('/start/dashboard', {
//         method: 'POST',
//         body: JSON.stringify({ url }),
//         headers: { 'Content-Type': 'application/json' }
//     });
//     const data = await res.json();
//     if (data.status === 'ok') {
//         alert('Phishing URL');
//     } else {
//         alert('Not Phishing URL');
//     }
// });
// const wrapper = document.querySelector('.wrapper'); 
// const registerLink = document.querySelector('.register-link'); 
// const loginLink = document.querySelector('.login-link');
// // add
// const dashboardLink = document.querySelector('.dashboard-link');

// const signup=document.getElementById("signUpbtn");
// const login=document.getElementById("loginbtn");
// // add
// const button=document.getElementById("btn");

// const signupForm=document.forms.signup;
// const signInForm=document.forms.signIn;
// // add
// const dashboardForm=document.forms.dashboard;

// registerLink.addEventListener('click', () => {
//     wrapper.classList.add('active');
    
// }); 


// loginLink.addEventListener('click', () => {
//     wrapper.classList.remove('active');  
// })

// // add
// dashboardLink.addEventListener('click', () => {
//     wrapper.classList.remove('active');  
// })

// signupForm.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const name=signupForm.name.value;
//     const email=signupForm.email.value;
//     const password=signupForm.password.value;
//    alert(name);

//    //code for checking email duplicate in database in if not duplicate then register
//     const res1=await fetch('/start/checkduplicate', {
//         method: 'POST',
//         body: JSON.stringify({ email }),
//         headers: { 'Content-Type': 'application/json' }
//     });
//     const data1=await res1.json();
//     if(data1.duplicate){
//         alert('Email already exists');
//         return;
//     }
//     else{
//         const res=await fetch('/start/register', {
//             method: 'POST',
//             body: JSON.stringify({ name, email, password }),
//             headers: { 'Content-Type': 'application/json' }
//         });
//         const data=await res.json();
//         if(data.status==='ok'){
//             alert('User Registered');
//         }
//         else{
//             alert('User not Registered');
//         }

//     }

//     // const res=await fetch('/start/register',{
//     //     method:'POST',
//     //     body:JSON.stringify({name,email,password}),
//     //     headers: { 'Content-Type': 'application/json' }
//     // });
//     // const data=await res.json();
//     // if(data.status==='ok'){
//     //     alert('User Registered');
//     // }
//     // else{
//     //     alert('User not Registered');
//     // }
  
// });

// signInForm.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const email=signInForm.email.value;
//     const password=signInForm.pass.value;

//     // 
   
//     const res=await fetch('/start/login',{
//         method:'POST',
//         body:JSON.stringify({email,password}),
//         headers: { 'Content-Type': 'application/json' }
//     });
//     const data=await res.json();
//     if(data.status==='ok'){
//         // alert('User Logged In');
//         window.location.href = 'http://127.0.0.1:5000';
//     }
//     else{
//         alert('User not Logged In');
//     }
// });
    

// dashboardForm.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const url=dashboardForm.url.value;
    
//     const res=await fetch('/start/dashboard',{
//         method:'POST',
//         body:JSON.stringify({url}),
//         headers: { 'Content-Type': 'application/json' }
//     });
//     const data=await res.json();
//     if(data.status==='ok'){
//         alert('Phishing URL');
//     }
//     else{
//         alert('Not Phishing URL');
//     }
// });
    
const wrapper = document.querySelector('.wrapper'); 
const registerLink = document.querySelector('.register-link'); 
const loginLink = document.querySelector('.login-link');
const dashboardLink = document.querySelector('.dashboard-link');

const signupForm = document.forms.signup;
const signInForm = document.forms.signIn;
const dashboardForm = document.forms.dashboard;

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');  
});

// dashboardLink.addEventListener('click', () => {
//     window.location.href = 'http://127.0.0.1:5000/'; // or any other dashboard URL
// });

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = signupForm.name.value;
    const email = signupForm.email.value;
    const password = signupForm.password.value;

    // code for checking email duplicate in database in if not duplicate then register
    const res1 = await fetch('/start/checkduplicate', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' }
    });
    const data1 = await res1.json();
    if (data1.duplicate) {
        alert('Email already exists');
        return;
    } else {
        const res = await fetch('/start/register', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await res.json();
        if (data.status === 'ok') {
            alert('User Registered');
        } else {
            alert('User not Registered');
        }
    }
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = signInForm.email.value;
    const password = signInForm.pass.value;

    const res = await fetch('/start/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' }
    });
    
    fetch('your-api-endpoint')
    .then(res => {
        // Check if response is ok
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        // Parse response as JSON
        return res.json();
    })
    .then(data => {
        // Log the received data
        console.log('Received data:', data);

        // Check if data contains the expected 'status' property
        if (data.status === 'ok') {
            // Redirect to dashboard URL
            window.location.href = 'http://127.0.0.1:5000/'; // or any other dashboard URL
        } else {
            // Alert user if not logged in
            alert('User not Logged In');
        }
    })
    .catch(error => {
        // Log and handle any errors
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });

});
// app.get('/views/signInsignUp.html', (req, res) => {
//     res.redirect('http://127.0.0.1:5000/');
// });

dashboardForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const url = dashboardForm.url.value;
    
    const res = await fetch('/start/dashboard', {
        method: 'POST',
        body: JSON.stringify({ url }),
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();
    if (data.status === 'ok') {
        alert('Phishing URL');
    } else {
        alert('Not Phishing URL');
    }
});
