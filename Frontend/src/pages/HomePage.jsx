import React from 'react'
import UrlForm from '../components/UrlForm'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
            URL Shortener
          </h1>
          <p className="text-gray-600 text-center mb-6">
            Paste your long URL to create a shorter link
          </p>
          <UrlForm/>
        </div>

        <div className="bg-gray-50 px-6 py-4">
          <p className="text-xs text-gray-500 text-center">
            Create short, memorable links in seconds
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage