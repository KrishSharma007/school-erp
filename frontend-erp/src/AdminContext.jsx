import React, { useState, useEffect, createContext } from "react";

const AdminContext = createContext();

// API base URL
const API_BASE_URL = "http://localhost:5001/api";

export const AdminProvider = ({ children }) => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [slideshowImages, setSlideshowImages] = useState([]);
  const [notices, setNotices] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  const [admissionSession, setAdmissionSession] = useState("");

  // Load data from API on component mount
  useEffect(() => {
    console.log("AdminContext - Loading initial data...");
    fetchGalleryImages();
    fetchSlideshowImages();
    fetchNotices();
    fetchVideos();
    fetchAdmissionSettings();
  }, []);

  // API Functions
  const fetchGalleryImages = async () => {
    try {
      setLoading(true);
      console.log("Fetching gallery images from:", `${API_BASE_URL}/gallery`);
      const response = await fetch(`${API_BASE_URL}/gallery`);
      console.log("Gallery fetch response status:", response.status);
      if (response.ok) {
        const data = await response.json();
        console.log("Gallery images fetched:", data);
        setGalleryImages(data);
      } else {
        console.error(
          "Gallery fetch failed:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Error fetching gallery images:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSlideshowImages = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/slideshow`);
      if (response.ok) {
        const data = await response.json();
        setSlideshowImages(data);
      }
    } catch (error) {
      console.error("Error fetching slideshow images:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchNotices = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/notices`);
      if (response.ok) {
        const data = await response.json();
        setNotices(data);
      }
    } catch (error) {
      console.error("Error fetching notices:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchVideos = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/videos`);
      if (response.ok) {
        const data = await response.json();
        setVideos(data);
      }
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setLoading(false);
    }
  };

  const addVideo = async (videoData) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", videoData.file);
      Object.entries(videoData).forEach(([key, value]) => {
        if (key !== "file") formData.append(key, value);
      });
      const response = await fetch(`${API_BASE_URL}/videos`, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const newVideo = await response.json();
        setVideos((prev) => [...prev, newVideo]);
      }
    } catch (error) {
      console.error("Error adding video:", error);
    } finally {
      setLoading(false);
    }
  };

  const removeVideo = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/videos/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setVideos((prev) => prev.filter((video) => video._id !== id));
      }
    } catch (error) {
      console.error("Error removing video:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchAdmissionSettings = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/admission`);
      if (response.ok) {
        const data = await response.json();
        setIsAdmissionOpen(data.isAdmissionOpen);
        setAdmissionSession(data.admissionSession);
      }
    } catch (error) {
      console.error("Error fetching admission settings:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateAdmissionSettings = async (settings) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/admission`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(settings),
      });
      if (response.ok) {
        const data = await response.json();
        setIsAdmissionOpen(data.isAdmissionOpen);
        setAdmissionSession(data.admissionSession);
      }
    } catch (error) {
      console.error("Error updating admission settings:", error);
    } finally {
      setLoading(false);
    }
  };

  const addGalleryImage = async (imageData) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", imageData.file);
      Object.entries(imageData).forEach(([key, value]) => {
        if (key !== "file") formData.append(key, value);
      });
      const response = await fetch(`${API_BASE_URL}/gallery`, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const newImage = await response.json();
        setGalleryImages((prev) => [...prev, newImage]);
      }
    } catch (error) {
      console.error("Error adding gallery image:", error);
    } finally {
      setLoading(false);
    }
  };

  const removeGalleryImage = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/gallery/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setGalleryImages((prev) => prev.filter((img) => img._id !== id));
      }
    } catch (error) {
      console.error("Error removing gallery image:", error);
    } finally {
      setLoading(false);
    }
  };

  const addSlideshowImage = async (imageData) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", imageData.file);
      Object.entries(imageData).forEach(([key, value]) => {
        if (key !== "file") formData.append(key, value);
      });
      const response = await fetch(`${API_BASE_URL}/slideshow`, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const newImage = await response.json();
        setSlideshowImages((prev) => [...prev, newImage]);
      }
    } catch (error) {
      console.error("Error adding slideshow image:", error);
    } finally {
      setLoading(false);
    }
  };

  const removeSlideshowImage = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/slideshow/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setSlideshowImages((prev) => prev.filter((img) => img._id !== id));
      }
    } catch (error) {
      console.error("Error removing slideshow image:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleSlideshowImageActive = async (id) => {
    try {
      setLoading(true);
      const image = slideshowImages.find((img) => img._id === id);
      const response = await fetch(`${API_BASE_URL}/slideshow/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ active: !image.active }),
      });
      if (response.ok) {
        setSlideshowImages((prev) =>
          prev.map((img) =>
            img._id === id ? { ...img, active: !img.active } : img
          )
        );
      }
    } catch (error) {
      console.error("Error toggling slideshow image:", error);
    } finally {
      setLoading(false);
    }
  };

  const addNotice = async (noticeData) => {
    try {
      setLoading(true);
      console.log("Adding notice:", noticeData);
      const response = await fetch(`${API_BASE_URL}/notices`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(noticeData),
      });
      console.log("Notice response status:", response.status);
      if (response.ok) {
        const newNotice = await response.json();
        console.log("Notice added successfully:", newNotice);
        setNotices((prev) => [...prev, newNotice]);
      } else {
        const errorText = await response.text();
        console.error("Notice API error:", errorText);
      }
    } catch (error) {
      console.error("Error adding notice:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateNotice = async (id, updatedNotice) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/notices/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedNotice),
      });
      if (response.ok) {
        setNotices((prev) =>
          prev.map((notice) =>
            notice._id === id ? { ...notice, ...updatedNotice } : notice
          )
        );
      }
    } catch (error) {
      console.error("Error updating notice:", error);
    } finally {
      setLoading(false);
    }
  };

  const removeNotice = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/notices/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setNotices((prev) => prev.filter((notice) => notice._id !== id));
      }
    } catch (error) {
      console.error("Error removing notice:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleNoticeActive = async (id) => {
    try {
      setLoading(true);
      const notice = notices.find((n) => n._id === id);
      const response = await fetch(`${API_BASE_URL}/notices/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ active: !notice.active }),
      });
      if (response.ok) {
        setNotices((prev) =>
          prev.map((notice) =>
            notice._id === id ? { ...notice, active: !notice.active } : notice
          )
        );
      }
    } catch (error) {
      console.error("Error toggling notice:", error);
    } finally {
      setLoading(false);
    }
  };

  const value = {
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
    fetchGalleryImages,
    fetchSlideshowImages,
    fetchNotices,
    fetchVideos,
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};

export { AdminContext };
