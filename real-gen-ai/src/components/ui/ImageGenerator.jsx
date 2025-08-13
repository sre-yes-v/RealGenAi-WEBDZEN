/* real-gen-ai/src/components/ui/ImageGenerator.jsx */
import { useState, useEffect } from 'react';

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // revoke Blob URLs to avoid memory leaks
  useEffect(() => {
    return () => {
      if (imageUrl?.startsWith('blob:')) URL.revokeObjectURL(imageUrl);
    };
  }, [imageUrl]);

  const handleGenerateImage = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt to generate an image.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const apiKey = import.meta.env.VITE_CLIPDROP_API_KEY;
      if (!apiKey) {
        throw new Error('API key is missing');
      }

      
      const form = new FormData();
      form.append('prompt', prompt);

      const resp = await fetch('https://clipdrop-api.co/text-to-image/v1', {
        method: 'POST',
        headers: {
          'x-api-key': apiKey,
          'Accept': 'image/jpeg', 
        },
        body: form,
      });

      if (!resp.ok) {
        const txt = await resp.text().catch(() => '');
        throw new Error(`Clipdrop request failed (${resp.status}). ${txt}`);
      }

      // Clipdrop returns raw image bytes -> convert to object URL
      const blob = await resp.blob();
      const url = URL.createObjectURL(blob);
      setImageUrl((prev) => {
        if (prev?.startsWith('blob:')) URL.revokeObjectURL(prev);
        return url;
      });
    } catch (e) {
      console.error('Full error:', e);
      setError(e?.message || 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (!imageUrl) return;
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'generated-image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFullScreen = () => {
    if (!imageUrl) return;
    const win = window.open();
    if (win && win.document) {
      win.document.write(
        `<img src="${imageUrl}" alt="Generated Image" style="width:100%; height:auto;"/>`
      );
    }
  };

  return (
    <div className="w-full max-w-full p-4 bg-[#283593] flex flex-col gap-6">
      {/* Image Display Area */}
      <div className="w-full lg:w-1/2 mx-auto h-80 sm:h-96 bg-gray-300 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-inner">
        {isLoading ? (
          <svg
            className="animate-spin h-10 w-10 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10"
              stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : imageUrl ? (
          <img src={imageUrl} alt="Generated from prompt" className="w-full h-full object-cover" />
        ) : (
          <div className="text-gray-600 text-lg sm:text-xl font-medium">
            Your generated image will appear here.
          </div>
        )}

        {/* Buttons Overlay */}
        {imageUrl && (
          <div className="absolute bottom-6 flex space-x-4">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-6 py-3 bg-white text-blue-950 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Download
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
                viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 11.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
                  clipRule="evenodd" />
                <path fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v9a1 1 0 11-2 0V3a1 1 0 011-1z"
                  clipRule="evenodd" />
              </svg>
            </button>
            <button
              onClick={handleFullScreen}
              className="flex items-center gap-2 px-6 py-3 bg-blue-950 text-white font-semibold rounded-full shadow-lg hover:bg-blue-800 transition-colors duration-200"
            >
              Show Full Screen
            </button>
          </div>
        )}
      </div>

      {/* Input and Generate Button */}
      <div className="w-full lg:w-1/2 mx-auto flex items-center gap-4 mt-4">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleGenerateImage()}
          placeholder="generate an image of a spaceship"
          className="flex-grow px-6 py-4 rounded-full text-lg text-gray-800 bg-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300 shadow-xl"
        />
        <button
          onClick={handleGenerateImage}
          disabled={isLoading}
          className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300
            ${isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      {/* Error Message Display */}
      {error && (
        <div className="mt-4 text-red-400 text-center text-sm sm:text-base">
          {error}
        </div>
      )}
    </div>
  );
}
