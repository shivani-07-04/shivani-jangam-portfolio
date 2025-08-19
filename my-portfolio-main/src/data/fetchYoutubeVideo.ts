// src/utils/fetchYouTubeVideos.ts
import { ContentItem } from '../types';

type VideoProp = {
  id: string;
  category: string;
};

interface YouTubeVideo {
  id: string;
  snippet: {
    title: string;
    publishedAt: string;
    thumbnails: {
      standard?: { url: string };
      high?: { url: string };
    };
  };
  statistics: {
    viewCount: string;
    likeCount: string;
  };
}

interface YouTubeResponse {
  items: YouTubeVideo[];
}

// ✅ Add your YouTube video IDs + categories here
export const myYouTubeVideos: VideoProp[] = [
  { id: "abcd1234xyz", category: "AI/ML" },        // AI Resume Screening
  { id: "efgh5678uvw", category: "Web Development" }, // Ice Cream Parlour Website
  { id: "ijkl9012rst", category: "Full Stack" },      // Coffee Shop Website
  { id: "mnop3456opq", category: "AI/ML" },        // Heart Disease Prediction
  { id: "qrst7890klm", category: "AI/ML" },        // Restaurant Rating Prediction
];

const fetchYouTubeVideos = async (
  videos: VideoProp[] = myYouTubeVideos
): Promise<ContentItem[]> => {
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const videoIdArray = videos.map(video => video.id);

  if (!API_KEY) {
    console.error('YouTube API Key is not set');
    return [];
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIdArray.join(',')}&key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch YouTube videos');
    }

    const data: YouTubeResponse = await response.json();

    return data.items.map((item: YouTubeVideo) => {
      const videoWithCategory = videos.find(v => v.id === item.id);

      return {
        id: item.id,
        title: item.snippet.title,
        thumbnailUrl:
          item.snippet.thumbnails.standard?.url ||
          item.snippet.thumbnails.high?.url ||
          '',
        videoUrl: `https://www.youtube.com/embed/${item.id}`,
        views: parseInt(item.statistics.viewCount || "0"),
        likes: parseInt(item.statistics.likeCount || "0"),
        date: item.snippet.publishedAt.substring(0, 10),
        category: videoWithCategory?.category || ''
      };
    });
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return [];
  }
};

export default fetchYouTubeVideos;
