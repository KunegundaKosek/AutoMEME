import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-red-600 mr-3" />
                    <span>contact@example.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-red-600 mr-3" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-red-600 mr-3" />
                    <span>123 Main St, City, Country</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Office Hours
                </h2>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Saturday: 10:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}