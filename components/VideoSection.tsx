'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, Clock, BookOpen, ShieldCheck, X, ExternalLink, Video, CheckCircle2 } from 'lucide-react';
import { educationalVideos, EducationalVideo, siteConfig } from '@/lib/content';

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<EducationalVideo | null>(null);

  const approvedVideos = educationalVideos.filter((v) => v.approved);

  return (
    <section id="patient-education-videos" className="py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="pill-badge bg-red-50 text-red-700 border-red-200 text-xs font-semibold">
                <Video className="w-3.5 h-3.5 text-red-600" />
                Video Guidance by Dr. Sharma
              </span>
              <span className="pill-badge bg-emerald-50 text-emerald-800 border-emerald-200 text-xs">
                In Hindi (सरल हिंदी में समझें)
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-950 tracking-tight font-display">
              Doctor Video Advice &amp; Recovery Guides
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal mt-3 leading-relaxed">
              Watch Senior Consultant <strong className="text-brand-950 font-semibold">Dr. Gaurav Sharma</strong> explain critical joint precautions, post-operative milestones, and winter joint pain management in clear, practical Hindi.
            </p>
          </div>

          {/* Social Channels Link */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={siteConfig.socialLinks?.youtube || "https://youtu.be/LXH2a25uaQg"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs py-2 px-3.5 flex items-center gap-1.5"
            >
              <span>YouTube Channel</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {approvedVideos.map((video) => (
            <div
              key={video.id}
              className="card-medical bg-white p-6 sm:p-7 flex flex-col justify-between hover:border-brand-300 transition-all shadow-sm group"
            >
              <div>
                {/* Thumbnail Frame with Click-to-Play Overlay */}
                <div 
                  className="relative aspect-video rounded-2xl bg-slate-950 overflow-hidden mb-5 cursor-pointer shadow-md group-hover:shadow-lg transition-all"
                  onClick={() => setActiveVideo(video)}
                >
                  <Image
                    src={video.thumbnailUrl}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />

                  {/* Category & Language Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-[11px] font-semibold border border-white/20">
                      {video.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-red-600 text-white text-[11px] font-bold flex items-center gap-1 shadow-sm">
                      <Play className="w-3 h-3 fill-current" />
                      <span>Watch in Hindi</span>
                    </span>
                  </div>

                  {/* Centered Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-red-600/90 border-2 border-white flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:bg-red-600 transition-all">
                      <Play className="w-7 h-7 ml-1 fill-current" />
                    </div>
                  </div>

                  {/* Bottom Duration / Speaker Bar */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="font-semibold text-slate-100">{video.speaker}</span>
                    <span className="font-mono bg-black/60 px-2 py-0.5 rounded text-[11px]">HD Video</span>
                  </div>
                </div>

                {/* Video Title in Hindi */}
                <h3 className="text-lg sm:text-xl font-bold text-brand-950 font-display line-clamp-2 mb-2 leading-snug group-hover:text-brand-700 transition-colors">
                  {video.title}
                </h3>

                {/* English Context Title */}
                {video.englishTitle && (
                  <p className="text-xs font-semibold text-brand-700 mb-3">
                    {video.englishTitle}
                  </p>
                )}

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {video.description}
                </p>
              </div>

              {/* Action Bar: Play & Social Links */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setActiveVideo(video)}
                  className="btn-primary text-xs py-2 px-4 flex items-center gap-1.5"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Play Video</span>
                </button>

                <div className="flex items-center gap-2">
                  {video.instagramUrl && (
                    <a
                      href={video.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1.5 rounded-lg bg-pink-50 hover:bg-pink-100 text-pink-700 text-[11px] font-bold flex items-center gap-1 transition-colors border border-pink-200"
                      title="Watch Reel on Instagram"
                    >
                      <span>Instagram Reel</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {video.facebookUrl && (
                    <a
                      href={video.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 text-[11px] font-bold flex items-center gap-1 transition-colors border border-blue-200"
                      title="Watch Video on Facebook"
                    >
                      <span>Facebook</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive YouTube Video Modal Player */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-4xl w-full p-5 sm:p-7 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 mb-4 border-b border-slate-100">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-50 text-red-700 border border-red-200 mb-1.5 inline-block">
                  {activeVideo.category}
                </span>
                <h3 className="text-base sm:text-xl font-bold text-brand-950 font-display leading-snug">
                  {activeVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 transition-colors shrink-0"
                aria-label="Close Video Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Embedded Responsive YouTube Player */}
            <div className="relative aspect-video rounded-2xl bg-black overflow-hidden shadow-inner mb-4">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>

            {/* Modal Clinical Summary & Advice Note */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p>
                  <strong className="text-slate-900 font-semibold">Doctor Clinical Note: </strong>
                  This guidance video is created for patient education. Consult Dr. Gaurav Sharma at the Sikandra clinic for individual diagnostic workup and rehabilitation advice.
                </p>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="btn-secondary text-xs py-2 px-4 shrink-0 self-end sm:self-auto"
              >
                Close Player
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
