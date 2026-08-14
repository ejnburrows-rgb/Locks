import React, { useState, useEffect, useRef } from 'react';
import { TestimonialItem } from '../types';
import { TESTIMONIALS_DATA } from '../data/mockData';
import {
  Star,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Quote,
  Clock,
  Play,
  Pause,
  Filter,
  Sparkles,
  MessageSquarePlus,
  ThumbsUp,
  X
} from 'lucide-react';

interface TestimonialCarouselProps {
  onEmergencyCall?: () => void;
  onRequestQuote?: () => void;
}

export const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  onEmergencyCall,
  onRequestQuote,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'emergency' | 'residential' | 'commercial' | 'automotive'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [newReviewSubmitted, setNewReviewSubmitted] = useState(false);

  // Form state for customer review modal
  const [reviewAuthor, setReviewAuthor] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewService, setReviewService] = useState('Residential Lockout');
  const [reviewText, setReviewText] = useState('');

  const filteredReviews = activeFilter === 'all'
    ? (TESTIMONIALS_DATA as TestimonialItem[])
    : (TESTIMONIALS_DATA as TestimonialItem[]).filter(r => r.serviceCategory === activeFilter);

  // Auto-play timer
  useEffect(() => {
    if (!isPlaying || filteredReviews.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredReviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, filteredReviews.length]);

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredReviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredReviews.length);
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewAuthor || !reviewText) return;
    setNewReviewSubmitted(true);
    setTimeout(() => {
      setNewReviewSubmitted(false);
      setIsReviewModalOpen(false);
      setReviewAuthor('');
      setReviewText('');
    }, 2500);
  };

  return (
    <section id="testimonials-section" className="py-14 md:py-20 bg-[#f7f9fb] border-b border-[#e0e3e5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#d2e1f7] text-[#131b2e] px-3.5 py-1 rounded-full text-xs font-bold tracking-wide">
              <ShieldCheck className="w-4 h-4 text-[#131b2e]" />
              <span>VERIFIED CLIENT REVIEWS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#191c1e] tracking-tight">
              Trusted by 10,000+ Homeowners & Businesses
            </h2>
            <p className="text-sm sm:text-base text-[#45464d] max-w-2xl">
              See what our customers say about our 15-minute emergency response, transparent upfront pricing, and certified locksmith craftsmanship.
            </p>
          </div>

          {/* Aggregate Rating Badge Card */}
          <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#e0e3e5] shadow-xs flex items-center gap-4 shrink-0">
            <div className="text-center pr-4 border-r border-[#e0e3e5]">
              <div className="text-3xl font-black text-[#191c1e] tracking-tight">4.9</div>
              <div className="flex items-center gap-0.5 text-amber-500 my-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <div className="text-[10px] font-bold text-[#556477] uppercase tracking-wider">
                1,280+ Reviews
              </div>
            </div>
            <div className="space-y-1 text-xs text-[#45464d]">
              <div className="flex items-center gap-1.5 font-semibold text-[#191c1e]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>99.4% On-Time Arrival</span>
              </div>
              <div className="flex items-center gap-1.5 font-semibold text-[#191c1e]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>100% Upfront Quote Guarantee</span>
              </div>
              <div className="text-[11px] text-[#556477]">
                Google • Yelp • Angi Verified
              </div>
            </div>
          </div>
        </div>

        {/* Filter Pills & Carousel Controls Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#131b2e] text-white shadow-xs'
                  : 'bg-white text-[#45464d] border border-[#e0e3e5] hover:bg-[#eceef0]'
              }`}
            >
              All Reviews ({TESTIMONIALS_DATA.length})
            </button>
            <button
              onClick={() => setActiveFilter('emergency')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === 'emergency'
                  ? 'bg-[#ba1a1a] text-white shadow-xs'
                  : 'bg-white text-[#ba1a1a] border border-[#ffdad6] hover:bg-[#ffdad6]/40'
              }`}
            >
              Emergency 24/7 ({TESTIMONIALS_DATA.filter(t => t.serviceCategory === 'emergency').length})
            </button>
            <button
              onClick={() => setActiveFilter('residential')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === 'residential'
                  ? 'bg-[#131b2e] text-white shadow-xs'
                  : 'bg-white text-[#45464d] border border-[#e0e3e5] hover:bg-[#eceef0]'
              }`}
            >
              Residential ({TESTIMONIALS_DATA.filter(t => t.serviceCategory === 'residential').length})
            </button>
            <button
              onClick={() => setActiveFilter('commercial')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === 'commercial'
                  ? 'bg-[#131b2e] text-white shadow-xs'
                  : 'bg-white text-[#45464d] border border-[#e0e3e5] hover:bg-[#eceef0]'
              }`}
            >
              Commercial ({TESTIMONIALS_DATA.filter(t => t.serviceCategory === 'commercial').length})
            </button>
            <button
              onClick={() => setActiveFilter('automotive')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === 'automotive'
                  ? 'bg-[#131b2e] text-white shadow-xs'
                  : 'bg-white text-[#45464d] border border-[#e0e3e5] hover:bg-[#eceef0]'
              }`}
            >
              Automotive ({TESTIMONIALS_DATA.filter(t => t.serviceCategory === 'automotive').length})
            </button>
          </div>

          {/* Controls: Prev, Next, Play/Pause, Write Review */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              title={isPlaying ? "Pause auto-scroll" : "Resume auto-scroll"}
              className="p-2 rounded-xl bg-white border border-[#e0e3e5] hover:bg-[#eceef0] text-[#45464d] transition-colors cursor-pointer text-xs flex items-center gap-1"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[#F97316]" />}
            </button>
            <button
              id="testimonial-prev-btn"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="p-2 rounded-xl bg-white border border-[#e0e3e5] hover:bg-[#eceef0] text-[#191c1e] transition-colors cursor-pointer shadow-xs active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              id="testimonial-next-btn"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="p-2 rounded-xl bg-white border border-[#e0e3e5] hover:bg-[#eceef0] text-[#191c1e] transition-colors cursor-pointer shadow-xs active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsReviewModalOpen(true)}
              className="ml-2 px-3 py-1.5 bg-[#131b2e] hover:bg-black text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
            >
              <MessageSquarePlus className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Share Review</span>
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="relative">
          {filteredReviews.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-2xl border border-[#e0e3e5]">
              <p className="text-sm text-[#45464d]">No reviews match the selected filter category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Show items centered around currentIndex */}
              {Array.from({ length: Math.min(3, filteredReviews.length) }).map((_, slotIndex) => {
                const itemIndex = (currentIndex + slotIndex) % filteredReviews.length;
                const review = filteredReviews[itemIndex];
                const isPrimary = slotIndex === 0;

                return (
                  <div
                    key={`${review.id}-${slotIndex}`}
                    className={`bg-white rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between relative group ${
                      isPrimary
                        ? 'border-[#131b2e] shadow-md ring-1 ring-[#131b2e]/10'
                        : 'border-[#e0e3e5] shadow-xs hover:border-[#CBD5E1] hover:shadow-sm'
                    }`}
                  >
                    {/* Top Row: Stars + Verified Badge */}
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                          ))}
                        </div>
                        <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{review.verifiedSource}</span>
                        </div>
                      </div>

                      {/* Highlight Phrase */}
                      {review.highlightPhrase && (
                        <div className="font-bold text-sm sm:text-base text-[#191c1e] mb-2 leading-snug">
                          "{review.highlightPhrase}"
                        </div>
                      )}

                      {/* Review Comment */}
                      <p className="text-xs sm:text-sm text-[#45464d] leading-relaxed mb-4">
                        {review.comment}
                      </p>
                    </div>

                    {/* Bottom Metadata & Reviewer Info */}
                    <div className="pt-4 border-t border-[#f2f4f6] mt-2 space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-bold text-xs sm:text-sm text-[#191c1e]">
                            {review.name}
                          </div>
                          <div className="text-[11px] text-[#556477]">
                            {review.role} • {review.location}
                          </div>
                        </div>
                        <div className="text-[10px] font-medium text-[#7c839b] bg-[#f7f9fb] px-2 py-1 rounded-md">
                          {review.date}
                        </div>
                      </div>

                      {/* Service & Technician Badge */}
                      <div className="flex flex-wrap items-center justify-between gap-1.5 pt-1 text-[11px] text-[#556477] bg-[#f7f9fb] p-2 rounded-xl border border-[#e0e3e5]">
                        <span className="font-medium text-[#191c1e]">
                          {review.serviceName}
                        </span>
                        <span className="text-[10px] text-[#F97316] font-semibold">
                          Tech: {review.technicianName}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Pagination Indicators */}
          {filteredReviews.length > 1 && (
            <div className="flex items-center justify-center gap-1.5 mt-8">
              {filteredReviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === i
                      ? 'w-6 bg-[#131b2e]'
                      : 'w-2 bg-[#CBD5E1] hover:bg-[#94A3B8]'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Review Submission Modal */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-[#e0e3e5] relative animate-in zoom-in-95">
            <div className="bg-[#131b2e] text-white p-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#F97316]" />
                <h3 className="font-bold text-lg">Leave a Customer Review</h3>
              </div>
              <button
                onClick={() => setIsReviewModalOpen(false)}
                className="p-1 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {newReviewSubmitted ? (
                <div className="text-center py-6 space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#191c1e]">Thank You for Your Feedback!</h4>
                  <p className="text-xs text-[#556477]">
                    Your review helps fellow homeowners and businesses choose trusted security services.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleAddReview} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[#191c1e] uppercase tracking-wider mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={reviewAuthor}
                      onChange={(e) => setReviewAuthor(e.target.value)}
                      placeholder="e.g. Alex Henderson"
                      className="w-full px-3.5 py-2.5 bg-[#f7f9fb] border border-[#CBD5E1] rounded-xl text-xs sm:text-sm focus:outline-hidden focus:border-[#131b2e]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#191c1e] uppercase tracking-wider mb-1">
                      Service Performed
                    </label>
                    <select
                      value={reviewService}
                      onChange={(e) => setReviewService(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#f7f9fb] border border-[#CBD5E1] rounded-xl text-xs sm:text-sm focus:outline-hidden focus:border-[#131b2e]"
                    >
                      <option value="Residential Lockout">Residential Lockout</option>
                      <option value="Smart Lock Installation">Smart Lock Installation</option>
                      <option value="Commercial Access Control">Commercial Access Control</option>
                      <option value="Automotive Key Fob">Automotive Key Fob</option>
                      <option value="Lock Rekeying">Lock Rekeying</option>
                      <option value="Broken Key Extraction">Broken Key Extraction</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#191c1e] uppercase tracking-wider mb-1">
                      Rating
                    </label>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setReviewRating(star)}
                          className="p-1 text-amber-500 hover:scale-110 transition-transform cursor-pointer"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= reviewRating ? 'fill-amber-500 text-amber-500' : 'text-[#CBD5E1]'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#191c1e] uppercase tracking-wider mb-1">
                      Your Experience
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      placeholder="Tell us about the technician's arrival time, professionalism, and workmanship..."
                      className="w-full px-3.5 py-2.5 bg-[#f7f9fb] border border-[#CBD5E1] rounded-xl text-xs sm:text-sm focus:outline-hidden focus:border-[#131b2e] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all active:scale-95"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span>Submit Verified Review</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
