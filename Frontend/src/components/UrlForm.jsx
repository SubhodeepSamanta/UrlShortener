import React from 'react'

const UrlForm = () => {
    const [value,setValue] = useState(null)
  return (
    <form className="space-y-4">
            <div>
              <input
                type="url"
                onChange={(event)=>setValue(event.target.value)}
                placeholder="https://example.com/very-long-url"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-[1.02] disabled:opacity-70 cursor-pointer"
            >
              Shorten URL
            </button>
          </form>
          
  )
}

export default UrlForm