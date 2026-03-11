import emailjs from '@emailjs/browser';
/*serviceID,templateID,publicKey devem ser pegos no site do emailjs. As variáveis do template
devem ser name, email e message, para coincidir com as variáveis do formulário do EmailForm.jsx
*/
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function sendEmail(formRef) {
  if (!formRef?.current) {
    return Promise.reject(new Error('form reference is not set'));
  }
  return emailjs.sendForm(serviceID, templateID, formRef.current, { publicKey });
}