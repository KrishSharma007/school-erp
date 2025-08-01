// Admin Service - Handles data operations for admin panel
// In a real application, this would connect to a backend API

const STORAGE_KEYS = {
  GALLERY: "galleryImages",
  SLIDESHOW: "slideshowImages",
  NOTICES: "notices",
  AUTH: "adminAuthenticated",
};

export const adminService = {
  // Authentication
  login: (username, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "admin" && password === "admin123") {
          localStorage.setItem(STORAGE_KEYS.AUTH, "true");
          resolve({ success: true });
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 1000);
    });
  },

  logout: () => {
    localStorage.removeItem(STORAGE_KEYS.AUTH);
  },

  isAuthenticated: () => {
    return localStorage.getItem(STORAGE_KEYS.AUTH) === "true";
  },

  // Gallery Management
  getGalleryImages: () => {
    const images = localStorage.getItem(STORAGE_KEYS.GALLERY);
    return images ? JSON.parse(images) : [];
  },

  saveGalleryImages: (images) => {
    localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(images));
  },

  addGalleryImage: (image) => {
    const images = adminService.getGalleryImages();
    const newImage = {
      ...image,
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
    };
    images.push(newImage);
    adminService.saveGalleryImages(images);
    return newImage;
  },

  removeGalleryImage: (id) => {
    const images = adminService.getGalleryImages();
    const filteredImages = images.filter((img) => img.id !== id);
    adminService.saveGalleryImages(filteredImages);
  },

  // Slideshow Management
  getSlideshowImages: () => {
    const images = localStorage.getItem(STORAGE_KEYS.SLIDESHOW);
    return images ? JSON.parse(images) : [];
  },

  saveSlideshowImages: (images) => {
    localStorage.setItem(STORAGE_KEYS.SLIDESHOW, JSON.stringify(images));
  },

  addSlideshowImage: (image) => {
    const images = adminService.getSlideshowImages();
    const newImage = {
      ...image,
      id: Date.now(),
      active: true,
    };
    images.push(newImage);
    adminService.saveSlideshowImages(images);
    return newImage;
  },

  removeSlideshowImage: (id) => {
    const images = adminService.getSlideshowImages();
    const filteredImages = images.filter((img) => img.id !== id);
    adminService.saveSlideshowImages(filteredImages);
  },

  toggleSlideshowImageActive: (id) => {
    const images = adminService.getSlideshowImages();
    const updatedImages = images.map((img) =>
      img.id === id ? { ...img, active: !img.active } : img
    );
    adminService.saveSlideshowImages(updatedImages);
  },

  // Notices Management
  getNotices: () => {
    const notices = localStorage.getItem(STORAGE_KEYS.NOTICES);
    return notices ? JSON.parse(notices) : [];
  },

  saveNotices: (notices) => {
    localStorage.setItem(STORAGE_KEYS.NOTICES, JSON.stringify(notices));
  },

  addNotice: (notice) => {
    const notices = adminService.getNotices();
    const newNotice = {
      ...notice,
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      active: true,
    };
    notices.push(newNotice);
    adminService.saveNotices(notices);
    return newNotice;
  },

  updateNotice: (id, updatedNotice) => {
    const notices = adminService.getNotices();
    const updatedNotices = notices.map((notice) =>
      notice.id === id ? { ...notice, ...updatedNotice } : notice
    );
    adminService.saveNotices(updatedNotices);
  },

  removeNotice: (id) => {
    const notices = adminService.getNotices();
    const filteredNotices = notices.filter((notice) => notice.id !== id);
    adminService.saveNotices(filteredNotices);
  },

  toggleNoticeActive: (id) => {
    const notices = adminService.getNotices();
    const updatedNotices = notices.map((notice) =>
      notice.id === id ? { ...notice, active: !notice.active } : notice
    );
    adminService.saveNotices(updatedNotices);
  },

  // File Upload Simulation
  uploadImage: (file) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const url = URL.createObjectURL(file);
        resolve({
          url,
          name: file.name,
          size: file.size,
          type: file.type,
        });
      }, 2000);
    });
  },
};
