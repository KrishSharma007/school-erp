// Cloudinary upload utility
// Usage: await uploadToCloudinary(file, folder)

const CLOUD_NAME = "dp2gglnh7";
const UPLOAD_PRESET = "schoolerp_unsigned";

export async function uploadToCloudinary(
  file,
  folder = "general",
  options = {}
) {
  try {
    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("folder", `school_erp/${folder}`); // Organize by folder
    formData.append("public_id", `${folder}_${Date.now()}`); // Unique ID

    // Add compression and optimization parameters
    if (options.compression) {
      formData.append("quality", "auto:low"); // Auto compression
      formData.append("fetch_format", "auto"); // Auto format selection
    }

    // Add video-specific parameters
    if (options.video) {
      formData.append("resource_type", "video");
      formData.append("video_codec", "auto");
      formData.append("bit_rate", "500k"); // Reduce video bitrate
      formData.append("duration", "60"); // Limit video duration to 60 seconds
    }

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        `Cloudinary upload failed: ${response.status} ${
          response.statusText
        } - ${errorData.error?.message || "Unknown error"}`
      );
    }

    const data = await response.json();
    console.log("Cloudinary upload successful:", data);
    return data;
  } catch (error) {
    console.error("Cloudinary upload error:", error);

    // Fallback: Create a local blob URL for development
    const blobUrl = URL.createObjectURL(file);
    return {
      secure_url: blobUrl,
      public_id: `${folder}_${Date.now()}`,
      width: 800,
      height: 600,
      folder: folder,
    };
  }
}

// Upload to specific folders with compression
export async function uploadGalleryImage(file) {
  return uploadToCloudinary(file, "gallery", { compression: true });
}

export async function uploadSlideshowImage(file) {
  return uploadToCloudinary(file, "slideshow", { compression: true });
}

export async function uploadNoticeImage(file) {
  return uploadToCloudinary(file, "notices", { compression: true });
}

// Video upload functions
export async function uploadVideo(file, folder = "videos") {
  return uploadToCloudinary(file, folder, { video: true, compression: true });
}

export async function uploadSchoolTourVideo(file) {
  return uploadToCloudinary(file, "videos", { video: true, compression: true });
}

// Alternative upload function for when Cloudinary is not available
export async function uploadImageFallback(file, folder = "general") {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      resolve({
        secure_url: e.target.result,
        public_id: `${folder}_${Date.now()}`,
        width: 800,
        height: 600,
        folder: folder,
      });
    };
    reader.readAsDataURL(file);
  });
}

// Fetch images from Cloudinary (for future use)
export async function fetchCloudinaryImages(folder = "gallery") {
  try {
    const url = `https://res.cloudinary.com/${CLOUD_NAME}/image/list/${folder}.json`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch images");
    }
    const data = await response.json();
    return data.resources || [];
  } catch (error) {
    console.error("Error fetching Cloudinary images:", error);
    return [];
  }
}
