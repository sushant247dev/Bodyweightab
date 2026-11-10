"use client";

import { useState, useEffect, useRef } from "react";

interface ApplicationModalProps {
  isOpen: boolean;
  initialSkill?: string;
  onClose: () => void;
}

export function ApplicationModal({
  isOpen,
  initialSkill = "",
  onClose,
}: ApplicationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    instagram: "",
    experience: "Intermediate (Consistent Training)",
    targetSkill: initialSkill || "Handstand",
    obstacle: "",
    notes: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedId, setSubmittedId] = useState("");

  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Sync initial skill when modal opens
  useEffect(() => {
    if (initialSkill) {
      setFormData((prev) => ({ ...prev, targetSkill: initialSkill }));
    }
  }, [initialSkill]);

  // Lock body scroll and focus first input
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = "";
      setStatus("idle");
      setErrorMessage("");
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Light dismiss on backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit coaching application.");
      }

      setSubmittedId(data.applicationId || "APP-CONFIRMED");
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Network error. Please try again."
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 bg-[#0E0E0E]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl bg-[#F9F8F5] text-[#111111] border border-[#111111]/20 p-6 sm:p-10 md:p-12 shadow-2xl my-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-xs font-mono tracking-widest uppercase text-[#6B6862] hover:text-[#111111] transition-colors p-2"
          aria-label="Close application dialog"
        >
          [Close ✕]
        </button>

        {/* Modal Header */}
        <div className="pb-6 border-b border-[#111111]/10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 bg-[#111111]" />
            <span className="text-[10px] font-mono tracking-widest text-[#6B6862] uppercase">
              1-on-1 Coaching Application
            </span>
          </div>
          <h2
            id="modal-headline"
            className="font-editorial text-3xl sm:text-4xl text-[#111111] font-light"
          >
            Initiate Your <span className="font-editorial-italic font-normal">Progression</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#6B6862] leading-relaxed">
            Coaching slots are intentionally capped at 15 athletes to guarantee
            thorough video analysis. Please complete the diagnostic intake below.
          </p>
        </div>

        {/* State 1: Success Feedback */}
        {status === "success" ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-12 h-12 bg-[#111111] text-[#F9F8F5] mx-auto flex items-center justify-center font-mono text-xl">
              ✓
            </div>
            <h3 className="font-editorial text-2xl text-[#111111]">
              Intake Received
            </h3>
            <p className="text-sm text-[#6B6862] max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. Your application (
              <span className="font-mono text-xs">{submittedId}</span>) for{" "}
              <strong>{formData.targetSkill}</strong> has been logged.
            </p>
            <p className="text-xs font-mono text-[#6B6862] pt-2">
              We review biomechanical compatibility within 24-48 hours. Expect an
              email response at <span className="text-[#111111]">{formData.email}</span>.
            </p>
            <div className="pt-6">
              <button
                onClick={onClose}
                className="bg-[#111111] text-[#F9F8F5] px-8 py-3 text-xs font-mono tracking-widest uppercase hover:bg-[#262626] transition-colors"
              >
                Return to Site
              </button>
            </div>
          </div>
        ) : (
          /* State 2: Active Intake Form */
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {status === "error" && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-mono">
                {errorMessage}
              </div>
            )}

            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="form-name"
                  className="block text-[11px] font-mono tracking-wider uppercase text-[#111111] mb-1"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="form-name"
                  ref={firstInputRef}
                  type="text"
                  required
                  placeholder="e.g. Alex Rivera"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-[#F2EFE9] border border-[#111111]/20 px-3.5 py-2.5 text-sm text-[#111111] focus:border-[#111111] focus:bg-[#FAF9F6] outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="form-email"
                  className="block text-[11px] font-mono tracking-wider uppercase text-[#111111] mb-1"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="form-email"
                  type="email"
                  required
                  placeholder="alex@domain.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-[#F2EFE9] border border-[#111111]/20 px-3.5 py-2.5 text-sm text-[#111111] focus:border-[#111111] focus:bg-[#FAF9F6] outline-none transition-colors"
                />
              </div>
            </div>

            {/* Instagram & Experience Level */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="form-instagram"
                  className="block text-[11px] font-mono tracking-wider uppercase text-[#111111] mb-1"
                >
                  Instagram Handle <span className="text-[#6B6862] text-[10px]">(Optional for video review)</span>
                </label>
                <input
                  id="form-instagram"
                  type="text"
                  placeholder="@yourhandle"
                  value={formData.instagram}
                  onChange={(e) =>
                    setFormData({ ...formData, instagram: e.target.value })
                  }
                  className="w-full bg-[#F2EFE9] border border-[#111111]/20 px-3.5 py-2.5 text-sm text-[#111111] focus:border-[#111111] focus:bg-[#FAF9F6] outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="form-experience"
                  className="block text-[11px] font-mono tracking-wider uppercase text-[#111111] mb-1"
                >
                  Calisthenics Experience <span className="text-red-500">*</span>
                </label>
                <select
                  id="form-experience"
                  value={formData.experience}
                  onChange={(e) =>
                    setFormData({ ...formData, experience: e.target.value })
                  }
                  className="w-full bg-[#F2EFE9] border border-[#111111]/20 px-3.5 py-2.5 text-sm text-[#111111] focus:border-[#111111] focus:bg-[#FAF9F6] outline-none transition-colors cursor-pointer"
                >
                  <option value="Beginner (Wall handstands / Basic bodyweight)">
                    Beginner (Wall handstands / Basic bodyweight)
                  </option>
                  <option value="Intermediate (Consistent Training / Working on holds)">
                    Intermediate (Consistent Training / Working on holds)
                  </option>
                  <option value="Advanced (Solid handstand / Chasing Planche or OAH)">
                    Advanced (Solid handstand / Chasing Planche or OAH)
                  </option>
                  <option value="Rehab / Returning from wrist or shoulder issues">
                    Rehab / Returning from wrist or shoulder issues
                  </option>
                </select>
              </div>
            </div>

            {/* Target Skill Selection */}
            <div>
              <label
                htmlFor="form-skill"
                className="block text-[11px] font-mono tracking-wider uppercase text-[#111111] mb-1"
              >
                Primary Skill You Want to Unlock <span className="text-red-500">*</span>
              </label>
              <select
                id="form-skill"
                value={formData.targetSkill}
                onChange={(e) =>
                  setFormData({ ...formData, targetSkill: e.target.value })
                }
                className="w-full bg-[#F2EFE9] border border-[#111111]/20 px-3.5 py-2.5 text-sm text-[#111111] focus:border-[#111111] focus:bg-[#FAF9F6] outline-none transition-colors cursor-pointer"
              >
                <option value="Handstand">Handstand (Wall to Freestanding 30s+)</option>
                <option value="Handstand Push-Ups">Handstand Push-Ups (Overhead Pressing Depth)</option>
                <option value="One-Arm Handstand">One-Arm Handstand (Weight Shift &amp; Balance)</option>
                <option value="Press to Handstand">Press to Handstand (Pancake Compression)</option>
                <option value="L-Sit & V-Sit">L-Sit &amp; V-Sit (Scapular Depression)</option>
                <option value="Middle Splits & Flexibility">Middle Splits &amp; Loaded Flexibility</option>
                <option value="Planche">Planche (Straight-Arm Protraction)</option>
                <option value="Front Lever">Front Lever (Horizontal Suspension &amp; Lats)</option>
                <option value="General Calisthenics Strength">Comprehensive Strength &amp; Conditioning</option>
              </select>
            </div>

            {/* Biggest Obstacle */}
            <div>
              <label
                htmlFor="form-obstacle"
                className="block text-[11px] font-mono tracking-wider uppercase text-[#111111] mb-1"
              >
                Current Biggest Obstacle <span className="text-red-500">*</span>
              </label>
              <textarea
                id="form-obstacle"
                required
                rows={3}
                placeholder="e.g. Inconsistent kick-ups, fear of falling, shoulder tightness, or lack of structured weekly volume."
                value={formData.obstacle}
                onChange={(e) =>
                  setFormData({ ...formData, obstacle: e.target.value })
                }
                className="w-full bg-[#F2EFE9] border border-[#111111]/20 px-3.5 py-2.5 text-sm text-[#111111] focus:border-[#111111] focus:bg-[#FAF9F6] outline-none transition-colors resize-none"
              />
            </div>

            {/* Additional Information */}
            <div>
              <label
                htmlFor="form-notes"
                className="block text-[11px] font-mono tracking-wider uppercase text-[#111111] mb-1"
              >
                Additional Notes or Injury History{" "}
                <span className="text-[#6B6862] text-[10px]">(Optional)</span>
              </label>
              <input
                id="form-notes"
                type="text"
                placeholder="e.g. Previous wrist sprain, train 4 days/week at home with parallettes."
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
                className="w-full bg-[#F2EFE9] border border-[#111111]/20 px-3.5 py-2.5 text-sm text-[#111111] focus:border-[#111111] focus:bg-[#FAF9F6] outline-none transition-colors"
              />
            </div>

            {/* Submit Action */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[10px] font-mono text-[#6B6862]">
                🔒 100% Confidential. No Spam Ever.
              </span>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#111111] text-[#F9F8F5] px-8 py-4 text-xs font-mono tracking-[0.2em] uppercase hover:bg-[#262626] transition-colors disabled:opacity-50"
              >
                <span>
                  {status === "submitting" ? "Transmitting..." : "Submit Application"}
                </span>
                <span>→</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
