import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LatestPodcastSection from './components/LatestPodcastSection';
import TopicsSection from './components/TopicsSection';
import TrendingPodcastSection from './components/TrendingPodcastSection';
import Footer from './components/Footer';

function explore() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <LatestPodcastSection />
      <TopicsSection />
      <TrendingPodcastSection />
      <Footer />
    </div>
  );
}

export default explore;
