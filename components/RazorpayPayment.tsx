
import React, { useCallback } from 'react';

interface RazorpayPaymentProps {
  amount: number;
  courseName: string;
  courseLevel: string;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

const RazorpayPayment: React.FC<RazorpayPaymentProps> = ({ amount, courseName, courseLevel }) => {
  const handlePayment = useCallback(() => {
    // In a production backend, you would first call your API to create an 'order_id'
    // For this example, we show the frontend checkout experience.
    
    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // Replace with actual Key ID
      amount: amount * 100, // paise
      currency: "INR",
      name: "EQC Global",
      description: `Enrollment for ${courseName} (${courseLevel})`,
      image: "https://picsum.photos/200/200?random=logo",
      // order_id: "order_9A33XU165Z62X", // This comes from your backend
      handler: function (response: any) {
        alert(`Payment Successful! Transaction ID: ${response.razorpay_payment_id}`);
        // Send payment data to your server for final verification
      },
      prefill: {
        name: "Human Potential Seeker",
        email: "contact@example.com",
        contact: "918984291985"
      },
      notes: {
        address: "EQC Global HQ"
      },
      theme: {
        color: "#0f172a" // Deep Blue
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.on('payment.failed', function (response: any) {
      alert(`Payment Failed: ${response.error.description}`);
    });
    rzp.open();
  }, [amount, courseName, courseLevel]);

  return (
    <button
      onClick={handlePayment}
      className="w-full py-5 bg-secondary text-white font-extrabold rounded-2xl shadow-xl hover:bg-emerald-600 transition-all flex items-center justify-center space-x-3"
    >
      <span>Enroll & Pay Securely</span>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
    </button>
  );
};

export default RazorpayPayment;
