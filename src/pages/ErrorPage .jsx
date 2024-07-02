import logo from "../assets/signin.gif";
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img
            src={logo}
            alt="Error"
            className="h-24 w-24 object-cover rounded-full animate-bounce"
          />
        </div>
        <h1 className="text-4xl font-bold text-red-500 mb-2">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-700 mb-6">Sorry, the page you are looking for does not exist.</p>
        <button
          onClick={goBack}
          className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300"
        >
          Go Back Home
        </button>
        <div className="mt-6">
          <a
            href="/contact"
            className="text-indigo-500 hover:underline"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
