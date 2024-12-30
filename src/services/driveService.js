const FOLDER_IDS = {
  hackathons: '1loaQPeUjVa--43r2RhOXJmT_oioN_6as',
  sessions: '1lrXbJWvURecuJ7_6gx9Xvzxyv6DJ7GXf',
  workshops: '1ltL1Npz-nr-TRVUuNlPiWGSolsUXeFGB'
};

export const getImagesFromFolder = async (folderId) => {
  try {
    const response = await fetch(`https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${process.env.REACT_APP_GOOGLE_API_KEY}&fields=files(id,name,webContentLink,thumbnailLink)`);
    const data = await response.json();
    
    if (data.files) {
      return data.files.map(file => ({
        // Use webViewLink format which is more reliable
        url: `https://drive.google.com/file/d/${file.id}/preview`,
        thumbnailUrl: file.thumbnailLink,
        title: file.name.replace(/\.[^/.]+$/, ''), // Remove file extension from name
        id: file.id
      }));
    }
    return [];
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};

export const getAllGalleryImages = async () => {
  try {
    const [sessions, hackathons, workshops] = await Promise.all([
      getImagesFromFolder(FOLDER_IDS.sessions),
      getImagesFromFolder(FOLDER_IDS.hackathons),
      getImagesFromFolder(FOLDER_IDS.workshops)
    ]);

    return {
      sessions,
      hackathons,
      workshops
    };
  } catch (error) {
    console.error('Error fetching all images:', error);
    return {
      sessions: [],
      hackathons: [],
      workshops: []
    };
  }
};
