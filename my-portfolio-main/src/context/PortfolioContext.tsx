import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Role, Project, ContentItem, Stats } from '../types';
import { projects } from '../data/projects';
import { blockchainProjects } from '../data/WebDev';
import fetchYouTubeVideos from '../data/fetchYoutubeVideo';

interface PortfolioContextType {
  activeRole: Role;
  setActiveRole: (role: Role) => void;
  projects: Project[];
  blockchainProjects: Project[];
  filteredContent: ContentItem[];
  contentFilter: string;
  setContentFilter: (filter: string) => void;
  stats: Stats;
}

const initialStats: Stats = {
  projects: 0,
  githubStars: 0,
  certificates: 6, // 👉 You mentioned some certificates (update if needed)
  youtube: {
    subscribers: 0,
    videos: 0,
    views: 0
  },
  experience: {
    development: 2,       // Years in Python/ML/Web Dev
    blockchain: 1,        // If you worked on blockchain
    contentCreation: 7    // If you did content like blogs/YouTube
  }
};

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeRole, setActiveRole] = useState<Role>('developer');
  const [contentFilter, setContentFilter] = useState<string>('all');
  const [stats, setStats] = useState<Stats>(initialStats);
  const [contentItems, setContentItems] = useState<ContentItem[]>([]);

  // 🔹 Your GitHub username
  const GITHUB_USERNAME = 'shivani-07-04';  

  // 🔹 Your YouTube channel details (update .env)
  const YOUTUBE_CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;
  const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const reposResponse = await axios.get(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
        );

        const totalStars = reposResponse.data.reduce(
          (acc: number, repo: any) => acc + repo.stargazers_count,
          0
        );

        setStats(prev => ({
          ...prev,
          projects: reposResponse.data.length,
          githubStars: totalStars
        }));
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    const fetchYouTubeData = async () => {
      if (!YOUTUBE_CHANNEL_ID || !YOUTUBE_API_KEY) {
        console.error('YouTube Channel ID or API Key is not set');
        return;
      }
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels`,
          {
            params: {
              part: 'statistics',
              id: YOUTUBE_CHANNEL_ID,
              key: YOUTUBE_API_KEY
            }
          }
        );
        const youtube = {
          subscribers: parseInt(response.data.items[0].statistics.subscriberCount),
          videos: parseInt(response.data.items[0].statistics.videoCount),
          views: parseInt(response.data.items[0].statistics.viewCount)
        };

        setStats(prev => ({
          ...prev,
          youtube
        }));
      } catch (error) {
        console.error('Error fetching YouTube data:', error);
      }
    };

    const fetchYouTubeContentData = async () => {
      try {
        const videoData = [
          // 👉 Replace with your YouTube video IDs
          { id: "abc123", category: "Tutorial" },
          { id: "def456", category: "Storytelling" },
        ];
        const response = await fetchYouTubeVideos(videoData);
        setContentItems(response);
      } catch (error) {
        console.error('Error fetching YouTube content:', error);
      }
    };

    fetchGitHubData();
    fetchYouTubeData();
    fetchYouTubeContentData();
  }, []);

  const filteredContent = contentFilter === 'all'
    ? contentItems
    : contentItems.filter(item => item.category === contentFilter);

  return (
    <PortfolioContext.Provider
      value={{
        activeRole,
        setActiveRole,
        projects,
        blockchainProjects,
        filteredContent,
        contentFilter,
        setContentFilter,
        stats,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = (): PortfolioContextType => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
