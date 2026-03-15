
import React, { useState, useRef } from 'react';
import { SectionId } from '../../types';
import { editImage } from '../../services/geminiService';

const EQStudio: React.FC = () => {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [editedImage, setEditedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setOriginalImage(reader.result as string);
        setEditedImage(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = async () => {
    if (!originalImage || !prompt.trim()) return;

    setIsProcessing(true);
    setError(null);

    try {
      const mimeType = originalImage.split(';')[0].split(':')[1];
      const result = await editImage(originalImage, mimeType, prompt);
      
      if (result.editedImageBase64) {
        setEditedImage(result.editedImageBase64);
      } else {
        setError("The AI didn't return an edited image. Try a different prompt.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to edit image. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const clearAll = () => {
    setOriginalImage(null);
    setEditedImage(null);
    setPrompt('');
    setError(null);
  };

  return (
    <section id={SectionId.EQStudio} className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            EQ <span className="text-secondary">Studio</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Experience the power of Human-Centric AI. Upload an image and use natural language to transform it. 
            From artistic filters to complex edits, our AI understands your creative intent.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Controls */}
          <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2.5rem] border border-slate-700/50 shadow-2xl">
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-4 uppercase tracking-widest">Step 1: Upload Image</label>
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-3xl p-12 text-center cursor-pointer transition-all ${
                    originalImage ? 'border-secondary/50 bg-secondary/5' : 'border-slate-700 hover:border-secondary/50 hover:bg-slate-700/30'
                  }`}
                >
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleFileChange} 
                    accept="image/*" 
                    className="hidden" 
                  />
                  {originalImage ? (
                    <div className="space-y-2">
                      <svg className="w-12 h-12 text-secondary mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <p className="text-secondary font-bold">Image Selected</p>
                      <p className="text-xs text-slate-500">Click to change</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto">
                        <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      </div>
                      <div>
                        <p className="font-bold text-slate-200">Drop your image here</p>
                        <p className="text-sm text-slate-500">or click to browse files</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-400 mb-4 uppercase tracking-widest">Step 2: Describe Edit</label>
                <textarea 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g., 'Add a retro filter', 'Make the sky look like a sunset', 'Remove the background'..."
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-3xl p-6 text-white placeholder:text-slate-600 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all h-32 resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleEdit}
                  disabled={!originalImage || !prompt.trim() || isProcessing}
                  className="flex-grow bg-secondary text-primary font-bold py-5 px-8 rounded-2xl hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 shadow-xl shadow-secondary/10"
                >
                  {isProcessing ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      <span>Apply AI Magic</span>
                    </>
                  )}
                </button>
                <button 
                  onClick={clearAll}
                  className="bg-slate-700 text-white font-bold py-5 px-8 rounded-2xl hover:bg-slate-600 transition-all"
                >
                  Reset
                </button>
              </div>

              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-sm flex items-center space-x-3">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>{error}</span>
                </div>
              )}
            </div>
          </div>

          {/* Preview */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-8">
              {/* Original Preview */}
              <div className="space-y-4">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Original</span>
                <div className="aspect-video bg-slate-800 rounded-[2.5rem] overflow-hidden border border-slate-700 flex items-center justify-center relative group">
                  {originalImage ? (
                    <img src={originalImage} alt="Original" className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-slate-600 text-sm italic">No image uploaded</div>
                  )}
                </div>
              </div>

              {/* Result Preview */}
              <div className="space-y-4">
                <span className="text-xs font-bold text-secondary uppercase tracking-widest">AI Result</span>
                <div className="aspect-video bg-slate-800 rounded-[2.5rem] overflow-hidden border border-secondary/20 flex items-center justify-center relative shadow-2xl shadow-secondary/5">
                  {isProcessing ? (
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-12 h-12 border-4 border-secondary/20 border-t-secondary rounded-full animate-spin"></div>
                      <p className="text-slate-400 text-sm animate-pulse">Reimagining your image...</p>
                    </div>
                  ) : editedImage ? (
                    <>
                      <img src={editedImage} alt="Edited" className="w-full h-full object-cover" />
                      <a 
                        href={editedImage} 
                        download="eq-studio-edit.png"
                        className="absolute bottom-6 right-6 bg-white text-primary p-4 rounded-2xl shadow-xl hover:scale-110 transition-transform"
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                      </a>
                    </>
                  ) : (
                    <div className="text-slate-600 text-sm italic">Waiting for AI magic...</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EQStudio;
