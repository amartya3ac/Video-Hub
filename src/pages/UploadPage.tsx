import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const UploadPage: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [category, setCategory] = useState('');
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoName, setVideoName] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  
  if (!isAuthenticated) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)]">
          <h1 className="text-2xl font-bold mb-4">Please sign in to upload videos</h1>
          <Button onClick={() => navigate('/')}>Go to Home</Button>
        </div>
      </Layout>
    );
  }
  
  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setThumbnail(file);
      
      // Create preview URL
      const reader = new FileReader();
      reader.onload = () => {
        setThumbnailPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setVideoFile(file);
      setVideoName(file.name);
    }
  };
  
  const clearThumbnail = () => {
    setThumbnail(null);
    setThumbnailPreview(null);
  };
  
  const clearVideo = () => {
    setVideoFile(null);
    setVideoName(null);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!videoFile) {
      alert('Please select a video file');
      return;
    }
    
    // Simulate upload
    setIsUploading(true);
    
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          
          // Simulate processing and redirection
          setTimeout(() => {
            setIsUploading(false);
            alert('Video uploaded successfully!');
            navigate('/');
          }, 1500);
          
          return 100;
        }
        return prev + 5;
      });
    }, 300);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Upload Video</h1>
        
        <div className="bg-gray-800 rounded-lg p-6">
          {isUploading ? (
            <div className="text-center py-8">
              <h2 className="text-xl font-semibold mb-4">Uploading your video...</h2>
              <div className="w-full bg-gray-700 h-4 rounded-full mb-4">
                <div 
                  className="bg-orange-500 h-4 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              <p className="text-gray-300">{uploadProgress}% Complete</p>
              {uploadProgress === 100 && (
                <p className="mt-4 text-green-400">Upload complete! Processing video...</p>
              )}
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  {/* Video Upload Section */}
                  <div className="mb-8">
                    <h2 className="text-lg font-semibold mb-4">1. Select Video</h2>
                    {!videoFile ? (
                      <label className="border-2 border-dashed border-gray-600 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:border-orange-500 transition-colors">
                        <Upload className="w-12 h-12 text-gray-400 mb-4" />
                        <p className="text-center text-gray-300 mb-2">Drag and drop your video file here</p>
                        <p className="text-center text-gray-500 mb-4">or</p>
                        <Button type="button" variant="outline">Select File</Button>
                        <input 
                          type="file" 
                          accept="video/*" 
                          onChange={handleVideoChange} 
                          className="hidden" 
                        />
                        <p className="text-xs text-gray-500 mt-4">Max file size: 2GB</p>
                      </label>
                    ) : (
                      <div className="bg-gray-700 rounded-lg p-4 flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="bg-gray-600 rounded p-2 mr-3">
                            <Upload className="w-6 h-6 text-gray-300" />
                          </div>
                          <div>
                            <p className="font-medium text-white truncate max-w-[200px]">{videoName}</p>
                            <p className="text-xs text-gray-400">
                              {(videoFile.size / (1024 * 1024)).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <button 
                          type="button" 
                          onClick={clearVideo}
                          className="text-gray-400 hover:text-white"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    )}
                  </div>
                  
                  {/* Thumbnail Upload Section */}
                  <div>
                    <h2 className="text-lg font-semibold mb-4">2. Select Thumbnail</h2>
                    {!thumbnailPreview ? (
                      <label className="border-2 border-dashed border-gray-600 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-orange-500 transition-colors">
                        <Upload className="w-10 h-10 text-gray-400 mb-4" />
                        <p className="text-center text-gray-300 mb-2">Upload thumbnail image</p>
                        <p className="text-center text-gray-500 mb-4">or</p>
                        <Button type="button" variant="outline" size="sm">Select Image</Button>
                        <input 
                          type="file" 
                          accept="image/*" 
                          onChange={handleThumbnailChange} 
                          className="hidden" 
                        />
                        <p className="text-xs text-gray-500 mt-4">Recommended: 1280x720 (16:9)</p>
                      </label>
                    ) : (
                      <div className="relative">
                        <img 
                          src={thumbnailPreview} 
                          alt="Thumbnail preview" 
                          className="w-full h-40 object-cover rounded-lg" 
                        />
                        <button 
                          type="button"
                          onClick={clearThumbnail}
                          className="absolute top-2 right-2 bg-black bg-opacity-70 rounded-full p-1 text-white hover:bg-opacity-100"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  {/* Video Details */}
                  <h2 className="text-lg font-semibold mb-4">3. Video Details</h2>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="title" className="block text-gray-300 mb-2">Title (required)</label>
                      <Input
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Add a title that describes your video"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="description" className="block text-gray-300 mb-2">Description</label>
                      <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Tell viewers about your video"
                        className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent h-32 resize-none"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="category" className="block text-gray-300 mb-2">Category</label>
                      <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">Select a category</option>
                        <option value="music">Music</option>
                        <option value="gaming">Gaming</option>
                        <option value="sports">Sports</option>
                        <option value="education">Education</option>
                        <option value="comedy">Comedy</option>
                        <option value="science">Science & Technology</option>
                        <option value="travel">Travel</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="tags" className="block text-gray-300 mb-2">Tags</label>
                      <Input
                        id="tags"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        placeholder="Add tags separated by commas"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Tags help viewers find your video
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-end">
                <Button type="button" variant="outline" className="mr-4">
                  Save as Draft
                </Button>
                <Button type="submit">
                  Upload Video
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default UploadPage;