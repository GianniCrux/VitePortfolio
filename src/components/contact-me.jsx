import emailjs from 'emailjs-com';
import { Mail, MessageSquare, User } from 'lucide-react';
import { toast, Toaster } from 'sonner';

const ContactMe = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`); // Check form data
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text); // Log the result for debugging
          toast.success('Message Sent!', {
            position: 'bottom-center',
            duration: 5000,
            style: {
              background: '#4CAF50',
              color: 'white',
              padding: '16px 24px',
              fontSize: '16px',
              fontWeight: 'bold',
              borderRadius: '8px',
            },
          });
        },
        (error) => {
          console.log(error.text); // Log any errors for debugging
          toast.error('Message failed to send. Please try again.', {
            position: 'bottom-center',
            duration: 5000,
            style: {
              background: '#F44336',
              color: 'white',
              padding: '16px 24px',
              fontSize: '16px',
              fontWeight: 'bold',
              borderRadius: '8px',
            },
          });
        }
      );

    e.target.reset(); // Clear form fields after submission
  };

  return (
    <section id="contact" className="py-16 bg-black text-amber-600 font-lora">
      <Toaster />
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Send a message</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-6 text-white">Feel free to reach out through any of these channels:</p>
            <div className='flex flex-wrap gap-4 mb-8'>
              <a href='https://mail.google.com/mail/?view=cm&fs=1&to=gianni.disti@gmail.com' target='_blank' rel="noopener noreferrer" className='flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="hidden sm:inline">Email</span>
              </a>
              <a href="https://www.linkedin.com/in/giovanni-di-stefano-0b00bb202/" target='_blank' rel="noopener noreferrer" className='flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-amber-700 transition-colors'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a href="https://github.com/GianniCrux" target='_blank' rel="noopener noreferrer" className='flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors'>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </div>
          </div>

          <div>

            <form onSubmit={sendEmail} className="space-y-4">
              <div className='flex items-center'>
              <User className="w-5 h-5 mr-2 text-amber-500" />
                <input
                  placeholder='Your name'
                  type="text"
                  id="name"
                  name="from_name"
                  className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-900 text-white"
                  required
                />
              </div>
              <div className='flex items-center'>
              <Mail className="w-5 h-5 mr-2 text-amber-500" />
                <input
                  placeholder='Your email'
                  type="email"
                  id="email"
                  name="reply_to"
                  className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-900 text-white"
                  required
                />
              </div>
              <div className='flex items-center'>
              <MessageSquare className="w-5 h-5 mr-2 text-amber-500" />
                <textarea
                  placeholder='Your message'
                  id="message"
                  name="message"
                  className="w-full px-3 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 bg-gray-900 text-white"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;