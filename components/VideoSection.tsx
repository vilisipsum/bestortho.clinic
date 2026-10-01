'use client';

import React, { useState } from 'react';
import { Play, Clock, BookOpen, ShieldCheck, X, FileText } from 'lucide-react';
import { educationalVideos, EducationalVideo } from '@/lib/content';

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<EducationalVideo | null>(null);

  const approvedVideos = educationalVideos.filter((v) => v.approved);

  return (
    <section className="py-16 md:py-24 bg-[#FFF8E7] border-b-2 border-dark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="pill-badge bg-accent-blue text-white mb-3">
            Patient Education
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-dark tracking-tight font-display">
            Educational Videos & Practice Guides
          </h2>
          <p className="text-base sm:text-lg text-dark/70 font-semibold mt-2">
            Clear visual explanations prepared by Dr. Gaurav Sharma to help patients understand common joint conditions and first-aid response.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {approvedVideos.map((video) => (
            <div
              key={video.id}
              className="card-editorial bg-white p-5 flex flex-col justify-between hover:-translate-y-1 transition-transform cursor-pointer group"
              onClick={() => setActiveVideo(video)}
            >
              <div>
                {/* Thumbnail Card with StandOut Agra Styling */}
                <div className="relative aspect-video rounded-2xl border-2 border-dark bg-dark overflow-hidden mb-4 flex flex-col justify-between p-3.5 group-hover:shadow-hard-sm transition-all">
                  <div className="flex items-center justify-between">
                    <span className="pill-badge bg-white text-dark text-[10px] border-none">
                      {video.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-dark/80 text-white text-[11px] font-mono flex items-center gap-1">
                      <Clock className="w-3 h-3 text-accent-lime" />
                      {video.duration}
                    </span>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="my-auto mx-auto w-12 h-12 rounded-full bg-accent-orange border-2 border-white flex items-center justify-center text-white shadow-hard-sm group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 ml-0.5 fill-current" />
                  </div>

                  {/* Thumbnail Topic Caption */}
                  <div className="bg-white/95 rounded-lg border border-dark p-1.5 text-center">
                    <p className="text-[10px] font-black text-dark truncate">
                      {video.title}
                    </p>
                  </div>
                </div>

                <h3 className="text-base font-black text-dark font-display line-clamp-2 mb-2 group-hover:text-accent-orange transition-colors">
                  {video.title}
                </h3>

                <p className="text-xs text-dark/75 line-clamp-3 leading-relaxed mb-4">
                  {video.description}
                </p>
              </div>

              <div className="pt-3 border-t border-dark/10 flex items-center justify-between text-xs font-bold text-dark">
                <span className="flex items-center gap-1 text-accent-orange">
                  <Play className="w-3 h-3 fill-current" />
                  <span>Watch Video</span>
                </span>
                {video.transcriptAvailable && (
                  <span className="text-[11px] text-dark/50 flex items-center gap-1">
                    <FileText className="w-3 h-3" />
                    Transcript
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Video Ethics & Safety Disclaimer */}
        <div className="mt-10 p-5 rounded-2xl bg-white border-2 border-dark flex items-start gap-4 text-xs text-dark/80">
          <ShieldCheck className="w-5 h-5 text-accent-lime flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-dark font-bold">Educational Video Standard:</strong> BestOrtho.clinic does not host graphic operative footage on public overview sections. All media content is curated strictly for patient understanding, post-injury guidance, and informed clinical decision-making.
          </p>
        </div>

      </div>

      {/* Video Modal Player / Preview */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-dark/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border-2 border-dark shadow-hard-xl max-w-2xl w-full p-6 relative">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 p-2 rounded-xl border-2 border-dark bg-white shadow-hard-sm hover:bg-accent-orange hover:text-white transition-colors"
              aria-label="Close Video"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="pill-badge bg-accent-blue text-white mb-2">
              {activeVideo.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-dark font-display mb-4 pr-10">
              {activeVideo.title}
            </h3>

            {/* Video Player Display */}
            <div className="aspect-video rounded-2xl border-2 border-dark bg-dark/95 flex flex-col items-center justify-center p-6 text-center text-white mb-4 relative overflow-hidden">
              <div className="w-16 h-16 rounded-full bg-accent-orange border-2 border-white flex items-center justify-center text-white shadow-hard mb-3">
                <Play className="w-7 h-7 ml-1 fill-current" />
              </div>
              <p className="font-bold text-base text-accent-lime">
                Educational Video Preview ({activeVideo.duration})
              </p>
              <p className="text-xs text-white/70 max-w-md mt-1">
                Official high-definition video lesson scheduled for clinic streaming release. 
                Comprehensive clinical transcript provided below.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FFF8E7] border border-dark/20 text-xs text-dark/80 leading-relaxed space-y-2">
              <p className="font-bold text-dark">Topic Overview & Clinical Notes:</p>
              <p>{activeVideo.description}</p>
            </div>

            <div className="mt-5 flex justify-end">
              <button
                onClick={() => setActiveVideo(null)}
                className="btn-secondary text-xs py-2 px-5"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
