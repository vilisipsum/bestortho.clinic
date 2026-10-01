'use client';

import React, { useState } from 'react';
import { Play, Clock, BookOpen, ShieldCheck, X, FileText } from 'lucide-react';
import { educationalVideos, EducationalVideo } from '@/lib/content';

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<EducationalVideo | null>(null);

  const approvedVideos = educationalVideos.filter((v) => v.approved);

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200 mb-3">
            Patient Education
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-950 tracking-tight font-display">
            Educational Videos & Practice Guides
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal mt-2">
            Clear visual explanations prepared by Dr. Gaurav Sharma to help patients understand common joint conditions and first-aid response.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {approvedVideos.map((video) => (
            <div
              key={video.id}
              className="card-medical bg-white p-5 flex flex-col justify-between hover:border-slate-300 transition-all cursor-pointer group"
              onClick={() => setActiveVideo(video)}
            >
              <div>
                {/* Thumbnail Card with Clean Medical Styling */}
                <div className="relative aspect-video rounded-xl border border-slate-200 bg-slate-900 overflow-hidden mb-4 flex flex-col justify-between p-3.5 group-hover:shadow-subtle transition-all">
                  <div className="flex items-center justify-between">
                    <span className="pill-badge bg-white text-slate-800 text-[10px] border-none font-semibold">
                      {video.category}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-slate-800/80 text-white text-[11px] font-mono flex items-center gap-1">
                      <Clock className="w-3 h-3 text-brand-300" />
                      {video.duration}
                    </span>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="my-auto mx-auto w-12 h-12 rounded-full bg-brand-700 border border-white/20 flex items-center justify-center text-white shadow-md group-hover:bg-brand-600 group-hover:scale-105 transition-all">
                    <Play className="w-5 h-5 ml-0.5 fill-current" />
                  </div>

                  {/* Thumbnail Topic Caption */}
                  <div className="bg-white/95 rounded-md border border-slate-200 p-1.5 text-center">
                    <p className="text-[10px] font-bold text-slate-900 truncate">
                      {video.title}
                    </p>
                  </div>
                </div>

                <h3 className="text-base font-bold text-brand-950 font-display line-clamp-2 mb-2 group-hover:text-brand-700 transition-colors">
                  {video.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                  {video.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1 text-brand-700">
                  <Play className="w-3 h-3 fill-current" />
                  <span>Watch Video</span>
                </span>
                {video.transcriptAvailable && (
                  <span className="text-[11px] text-slate-400 flex items-center gap-1 font-normal">
                    <FileText className="w-3 h-3" />
                    Transcript
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Video Ethics & Safety Disclaimer */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-slate-200 shadow-subtle flex items-start gap-4 text-xs text-slate-600">
          <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-slate-900 font-semibold">Educational Video Standard:</strong> BestOrtho.clinic does not host graphic operative footage on public overview sections. All media content is curated strictly for patient understanding, post-injury guidance, and informed clinical decision-making.
          </p>
        </div>

      </div>

      {/* Video Modal Player / Preview */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-elevated max-w-2xl w-full p-6 relative">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 p-2 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition-colors"
              aria-label="Close Video"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200 mb-2">
              {activeVideo.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-brand-950 font-display mb-4 pr-10">
              {activeVideo.title}
            </h3>

            {/* Video Player Display */}
            <div className="aspect-video rounded-xl border border-slate-200 bg-slate-950 flex flex-col items-center justify-center p-6 text-center text-white mb-4 relative overflow-hidden">
              <div className="w-14 h-14 rounded-full bg-brand-700 border border-white/20 flex items-center justify-center text-white shadow-md mb-3">
                <Play className="w-6 h-6 ml-0.5 fill-current" />
              </div>
              <p className="font-semibold text-base text-brand-200">
                Educational Video Preview ({activeVideo.duration})
              </p>
              <p className="text-xs text-slate-400 max-w-md mt-1">
                Official high-definition video lesson scheduled for clinic streaming release. 
                Comprehensive clinical transcript provided below.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed space-y-2">
              <p className="font-semibold text-slate-900">Topic Overview & Clinical Notes:</p>
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
