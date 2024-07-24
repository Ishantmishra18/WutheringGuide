import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const FancyInputForm = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [shakeEmail, setShakeEmail] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (validateEmail(e.target.value)) {
      setEmailError('');
      setShakeEmail(false);
    } else {
      setEmailError('Invalid email format');
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError('Invalid email format');
      setShakeEmail(true);
      return;
    }

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs.send('service_g7bq3cp', 'template_3gv4tqt', templateParams,'GM2sp8xcTw8v-vtwL')
      .then((result) => {
        return(
          alert('Thanks for the feedback')
        )
      }, (error) => {
        alert('Failed to send email. Please try again later.');
      });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div
      className={`relative transition-all finputbar overflow-hidden bg-white border-2 border-gray-300 rounded-3xl ${isHovered ? 'expand' : 'h-12 w-60'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!isHovered && (<div className="absolute fmsg text-gray-500 h-full w-full top-1/2 left-1/2">Feedback here</div>)}
      {isHovered && (
        <form className="flex flex-col items-center p-4 h-full w-full" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="w-full mb-2 p-2 border-b-2 border-gray-300 focus:outline-none h-[15%]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className={`w-full mb-2 p-2 border-b-2 focus:outline-none h-[15%] ${emailError ? 'invalid-email' : 'border-gray-300'} ${shakeEmail ? 'shake' : ''}`}
            value={email}
            onChange={handleEmailChange}
            onAnimationEnd={() => setShakeEmail(false)}
          />
          <textarea
            placeholder="Message"
            className="w-full mb-2 p-2 border-b-2 border-gray-300 focus:outline-none h-[45%]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className="w-full h-[20%] p-2 mt- duration-200 fsubmit grid place-content-center text-white bg-neutral-800 hover:bg-neutral-900 rounded-xl">Submit</button>
        </form>
      )}
    </div>
  );
};

export default FancyInputForm;
