import React, { useState, useEffect } from "react";
import { useAdmin } from "./hooks/useAdmin";
import {
  Upload,
  Trash2,
  Edit,
  Plus,
  Save,
  X,
  Image as ImageIcon,
  FileText,
  Calendar,
  Eye,
  EyeOff,
  AlertCircle,
  GraduationCap,
  Award,
  Building,
  Video,
} from "lucide-react";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("gallery");
  const [isUploading, setIsUploading] = useState(false);
  const [showAddNotice, setShowAddNotice] = useState(false);
  const [editingNotice, setEditingNotice] = useState(null);
  const [debugInfo, setDebugInfo] = useState("");
  const [showImageUploadForm, setShowImageUploadForm] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadType, setUploadType] = useState("gallery");

  const {
    galleryImages,
    slideshowImages,
    notices,
    videos,
    loading,
    isAdmissionOpen,
    admissionSession,
    setIsAdmissionOpen,
    setAdmissionSession,
    updateAdmissionSettings,
    addGalleryImage,
    removeGalleryImage,
    addSlideshowImage,
    removeSlideshowImage,
    toggleSlideshowImageActive,
    addVideo,
    removeVideo,
    addNotice,
    updateNotice,
    removeNotice,
    toggleNoticeActive,
  } = useAdmin();

  // Debug info
  useEffect(() => {
    setDebugInfo(
      `Gallery: ${galleryImages.length}, Slideshow: ${slideshowImages.length}, Notices: ${notices.length}`
    );
    console.log("AdminPanel - Current state:", {
      galleryImages,
      slideshowImages,
      notices,
      loading,
    });
  }, [galleryImages, slideshowImages, notices, loading]);

  const handleFileSelect = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setUploadType(type);
      setShowImageUploadForm(true);
    }
  };

  const handleVideoUpload = async (videoData) => {
    if (!selectedFile) return;
    setIsUploading(true);

    try {
      const finalVideoData = {
        file: selectedFile,
        title: videoData.title,
        category: videoData.category,
        date: new Date().toISOString().split("T")[0],
        description: videoData.description,
      };

      console.log("About to add video to database:", finalVideoData);
      await addVideo(finalVideoData);
      console.log("Video upload successful, closing dialog");

      setShowImageUploadForm(false);
      setSelectedFile(null);
      setUploadType("gallery");
    } catch (err) {
      console.error("Video upload failed:", err.message);
      alert("Failed to upload video: " + err.message);
    } finally {
      setIsUploading(false);
    }
  };

  const handleImageUpload = async (imageData) => {
    if (!selectedFile) return;
    setIsUploading(true);

    try {
      const finalImageData = {
        file: selectedFile,
        title: imageData.title,
        category: imageData.category,
        date: new Date().toISOString().split("T")[0],
        description: imageData.description,
      };

      console.log("About to add image to database:", finalImageData);
      if (uploadType === "slideshow") {
        await addSlideshowImage({
          ...finalImageData,
          subtitle: imageData.subtitle || "New slideshow image",
          active: true,
        });
      } else {
        await addGalleryImage(finalImageData);
      }

      console.log("Image upload successful, closing dialog");
      setShowImageUploadForm(false);
      setSelectedFile(null);
      setUploadType("gallery");
    } catch (err) {
      console.error("Image upload failed:", err.message);
      alert("Failed to upload image: " + err.message);
    } finally {
      setIsUploading(false);
    }
  };

  const deleteImage = (id, type) => {
    if (type === "gallery") {
      removeGalleryImage(id);
    } else {
      removeSlideshowImage(id);
    }
  };

  const toggleImageActive = (id, type) => {
    if (type === "slideshow") {
      toggleSlideshowImageActive(id);
    }
  };

  const handleAddNotice = (noticeData) => {
    const newNotice = {
      ...noticeData,
      date: new Date().toISOString().split("T")[0],
      active: true,
    };
    console.log("Adding notice with data:", newNotice);
    addNotice(newNotice);
    setShowAddNotice(false);
    setEditingNotice(null);
  };

  const handleUpdateNotice = (id, noticeData) => {
    updateNotice(id, noticeData);
    setEditingNotice(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Admin Panel
              </h1>
              <p className="text-gray-600">
                Manage your school website content
              </p>
              {debugInfo && (
                <div className="mt-2 p-2 bg-blue-50 rounded text-sm text-blue-700">
                  <AlertCircle className="w-4 h-4 inline mr-1" />
                  Debug: {debugInfo}
                </div>
              )}
            </div>
            <button
              onClick={() => {
                localStorage.removeItem("adminAuthenticated");
                window.location.href = "/admin";
              }}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-4">
            <button
              onClick={() => setActiveTab("gallery")}
              className={`px-4 py-2 font-medium rounded-lg transition-colors ${
                activeTab === "gallery"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <ImageIcon className="w-5 h-5 inline mr-2" />
              Gallery
            </button>
            <button
              onClick={() => setActiveTab("slideshow")}
              className={`px-4 py-2 font-medium rounded-lg transition-colors ${
                activeTab === "slideshow"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <ImageIcon className="w-5 h-5 inline mr-2" />
              Slideshow
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`px-4 py-2 font-medium rounded-lg transition-colors ${
                activeTab === "videos"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <Video className="w-5 h-5 inline mr-2" />
              Videos
            </button>
            <button
              onClick={() => setActiveTab("notices")}
              className={`px-4 py-2 font-medium rounded-lg transition-colors ${
                activeTab === "notices"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              <FileText className="w-5 h-5 inline mr-2" />
              Notices
            </button>
          </div>
        </div>

        {/* Admission Settings */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Admission Settings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={isAdmissionOpen}
                  onChange={(e) => {
                    setIsAdmissionOpen(e.target.checked);
                    updateAdmissionSettings({
                      isAdmissionOpen: e.target.checked,
                      admissionSession: admissionSession,
                    });
                  }}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-lg font-medium text-gray-700">
                  Admission Open
                </span>
              </label>
              <p className="text-sm text-gray-500 mt-1">
                Toggle admission status for the website
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Admission Session
              </label>
              <input
                type="text"
                value={admissionSession}
                onChange={(e) => {
                  setAdmissionSession(e.target.value);
                  updateAdmissionSettings({
                    isAdmissionOpen: isAdmissionOpen,
                    admissionSession: e.target.value,
                  });
                }}
                placeholder="e.g., 2024-25, 2025-26"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-sm text-gray-500 mt-1">
                This will appear on the website
              </p>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          {activeTab === "gallery" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Gallery Management ({galleryImages.length} images)
                </h2>
                <label className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors">
                  <Upload className="w-5 h-5 inline mr-2" />
                  Upload Images
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleFileSelect(e, "gallery")}
                  />
                </label>
              </div>

              {isUploading && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                    Uploading images...
                  </div>
                </div>
              )}

              {/* Gallery Tab Content */}
              <>
                {galleryImages.length === 0 ? (
                  <div className="text-center py-12">
                    <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">
                      No Gallery Images
                    </h3>
                    <p className="text-gray-500">
                      Upload some images to get started
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image) => (
                      <div key={image.id} className="bg-gray-50 rounded-lg p-4">
                        <img
                          src={image.url}
                          alt={image.title}
                          className="w-full h-48 object-cover rounded-lg mb-3"
                        />
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-semibold text-gray-800">
                              {image.title}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {image.date}
                            </p>
                          </div>
                          <button
                            onClick={() => deleteImage(image._id, "gallery")}
                            className="text-red-600 hover:text-red-800 transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            </div>
          )}

          {activeTab === "slideshow" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Slideshow Management
                </h2>
                <label className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors">
                  <Upload className="w-5 h-5 inline mr-2" />
                  Upload Slideshow Images
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleFileSelect(e, "slideshow")}
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {slideshowImages.map((image) => (
                  <div key={image.id} className="bg-gray-50 rounded-lg p-4">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-64 object-cover rounded-lg mb-3"
                    />
                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-800">
                        {image.title}
                      </h3>
                      <p className="text-sm text-gray-600">{image.subtitle}</p>
                      <div className="flex justify-between items-center">
                        <button
                          onClick={() =>
                            toggleImageActive(image.id, "slideshow")
                          }
                          className={`px-3 py-1 rounded text-sm ${
                            image.active
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {image.active ? (
                            <Eye className="w-4 h-4 inline mr-1" />
                          ) : (
                            <EyeOff className="w-4 h-4 inline mr-1" />
                          )}
                          {image.active ? "Active" : "Inactive"}
                        </button>
                        <button
                          onClick={() => deleteImage(image._id, "slideshow")}
                          className="text-red-600 hover:text-red-800 transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "videos" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Video Management ({videos.length} videos)
                </h2>
                <label className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors">
                  <Upload className="w-5 h-5 inline mr-2" />
                  Upload Video
                  <input
                    type="file"
                    accept="video/*"
                    className="hidden"
                    onChange={(e) => handleFileSelect(e, "video")}
                  />
                </label>
              </div>

              {isUploading && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                    Uploading video...
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.length === 0 ? (
                  <div className="text-center py-12 col-span-full">
                    <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">
                      No Videos
                    </h3>
                    <p className="text-gray-500">
                      Upload some videos to get started
                    </p>
                  </div>
                ) : (
                  videos.map((video) => (
                    <div key={video._id} className="bg-gray-50 rounded-lg p-4">
                      <video
                        src={video.url}
                        className="w-full h-48 object-cover rounded-lg mb-3"
                        controls
                        preload="metadata"
                      />
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold text-gray-800">
                            {video.title}
                          </h3>
                          <p className="text-sm text-gray-500">{video.date}</p>
                          <p className="text-xs text-gray-400">
                            {video.category}
                          </p>
                        </div>
                        <button
                          onClick={() => removeVideo(video._id)}
                          className="text-red-600 hover:text-red-800 transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {activeTab === "notices" && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Notices & Updates
                </h2>
                <button
                  onClick={() => setShowAddNotice(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus className="w-5 h-5 inline mr-2" />
                  Add Notice
                </button>
              </div>

              <div className="space-y-4">
                {notices.map((notice) => (
                  <div key={notice.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-gray-800">
                            {notice.title}
                          </h3>
                          <span
                            className={`px-2 py-1 rounded text-xs ${
                              notice.priority === "high"
                                ? "bg-red-100 text-red-800"
                                : notice.priority === "medium"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {notice.priority}
                          </span>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                            {notice.type}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-2">{notice.content}</p>
                        <p className="text-sm text-gray-500">{notice.date}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => toggleNoticeActive(notice.id)}
                          className={`p-2 rounded ${
                            notice.active
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {notice.active ? (
                            <Eye className="w-4 h-4" />
                          ) : (
                            <EyeOff className="w-4 h-4" />
                          )}
                        </button>
                        <button
                          onClick={() => setEditingNotice(notice)}
                          className="p-2 bg-blue-100 text-blue-800 rounded hover:bg-blue-200 transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => removeNotice(notice.id)}
                          className="p-2 bg-red-100 text-red-800 rounded hover:bg-red-200 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Image/Video Upload Form Modal */}
        {showImageUploadForm && selectedFile && (
          <ImageUploadForm
            file={selectedFile}
            type={uploadType}
            isUploading={isUploading}
            onSubmit={
              uploadType === "video" ? handleVideoUpload : handleImageUpload
            }
            onCancel={() => {
              setShowImageUploadForm(false);
              setSelectedFile(null);
              setUploadType("gallery");
            }}
          />
        )}

        {/* Add/Edit Notice Modal */}
        {(showAddNotice || editingNotice) && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">
                  {editingNotice ? "Edit Notice" : "Add New Notice"}
                </h3>
                <button
                  onClick={() => {
                    setShowAddNotice(false);
                    setEditingNotice(null);
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <NoticeForm
                notice={editingNotice}
                onSubmit={editingNotice ? handleUpdateNotice : handleAddNotice}
                onCancel={() => {
                  setShowAddNotice(false);
                  setEditingNotice(null);
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Image/Video Upload Form Component
const ImageUploadForm = ({ file, type, isUploading, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category:
      type === "gallery"
        ? "gallery"
        : type === "video"
        ? "school_tour"
        : "slideshow",
    subtitle: type === "slideshow" ? "" : undefined,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const categoryOptions =
    type === "gallery"
      ? ["gallery", "events", "students", "sports", "general"]
      : type === "video"
      ? ["school_tour", "general"]
      : ["slideshow"];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Upload{" "}
          {type === "gallery"
            ? "Gallery"
            : type === "video"
            ? "Video"
            : "Slideshow"}{" "}
          {type === "video" ? "Video" : "Image"}
        </h3>

        {file && (
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">Selected file: {file.name}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {type !== "slideshow" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categoryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          )}

          {type === "slideshow" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subtitle
              </label>
              <input
                type="text"
                value={formData.subtitle}
                onChange={(e) =>
                  setFormData({ ...formData, subtitle: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <div className="flex space-x-3 pt-4">
            <button
              type="submit"
              disabled={isUploading}
              className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isUploading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white inline mr-2"></div>
                  Uploading...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 inline mr-2" />
                  Upload
                </>
              )}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Notice Form Component
const NoticeForm = ({ notice, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: notice?.title || "",
    content: notice?.content || "",
    type: notice?.type || "general",
    priority: notice?.priority || "medium",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (notice) {
      onSubmit(notice._id || notice.id, formData);
    } else {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Title
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Content
        </label>
        <textarea
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type
          </label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="general">General</option>
            <option value="admission">Admission</option>
            <option value="event">Event</option>
            <option value="meeting">Meeting</option>
            <option value="exam">Exam</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Priority
          </label>
          <select
            value={formData.priority}
            onChange={(e) =>
              setFormData({ ...formData, priority: e.target.value })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      <div className="flex space-x-3 pt-4">
        <button
          type="submit"
          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Save className="w-4 h-4 inline mr-2" />
          {notice ? "Update" : "Save"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AdminPanel;
