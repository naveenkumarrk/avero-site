'use client'

import { useEffect, useRef, useState } from 'react'

/* ─── Triangle mark SVG ────────────────────────────────────────────────── */
function TriangleMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 28" className={className} aria-hidden="true">
      <path d="M 12 0 L 24 28 L 0 28 Z" fill="currentColor" />
      <rect x="6" y="18.2" width="12" height="3" fill="#D6F23A" />
    </svg>
  )
}

/* ─── Nav sections ─────────────────────────────────────────────────────── */
const NAV_ITEMS = [
  { id: 'logo',       label: 'Logo & mark',       num: '01' },
  { id: 'color',      label: 'Color',              num: '02' },
  { id: 'typography', label: 'Typography',         num: '03' },
  { id: 'spacing',    label: 'Spacing & radius',   num: '04' },
  { id: 'components', label: 'Components',         num: '05' },
  { id: 'voice',      label: 'Voice & tone',       num: '06' },
]

/* ─── Sidebar ──────────────────────────────────────────────────────────── */
function Sidebar({ active }: { active: string }) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <aside
      style={{ width: 240 }}
      className="sticky top-0 h-screen py-9 px-7 border-r border-ink-12 flex flex-col gap-9 bg-bg shrink-0 overflow-y-auto"
    >
      {/* Brand lockup */}
      <div className="flex items-center gap-2">
        <TriangleMark className="w-4 h-[18px] text-ink" />
        <span className="font-sans font-semibold text-sm tracking-tight text-ink">avero.</span>
      </div>

      {/* Sections nav */}
      <div className="flex flex-col gap-2">
        <h6
          className="font-mono text-[10px] uppercase tracking-widest text-ink-50 mb-1"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Sections
        </h6>
        <nav className="flex flex-col gap-0.5">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`flex items-center gap-2 text-left px-3 py-2 rounded-lg text-sm transition-colors w-full ${
                  isActive
                    ? 'bg-ink text-white'
                    : 'text-ink-70 hover:bg-ink-12'
                }`}
              >
                <span
                  className="font-mono text-[10px] shrink-0"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {item.num}
                </span>
                <span className="font-sans text-xs font-medium">{item.label}</span>
              </button>
            )
          })}
        </nav>
      </div>

      {/* Meta */}
      <div
        className="mt-auto flex flex-col gap-1"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        <span className="font-mono text-[10px] text-ink-50">v 1.0</span>
        <span className="font-mono text-[10px] text-ink-50">Updated 2026-05-07</span>
        <span className="font-mono text-[10px] text-ink-50">Maintained by studio</span>
      </div>
    </aside>
  )
}

/* ─── Section 01 — Logo & mark ─────────────────────────────────────────── */
function SectionLogo() {
  return (
    <section
      id="logo"
      className="py-[72px] px-16 border-b border-ink-12"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-10">
        <div>
          <p
            className="font-mono text-[11px] text-ink-50 uppercase tracking-widest mb-2"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            01 — Identity
          </p>
          <h2 className="font-sans font-semibold text-3xl text-ink tracking-tight">
            The mark.
          </h2>
        </div>
      </div>

      {/* Light + Dark logo cards */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Light bg card */}
        <div className="rounded-2xl border border-ink-12 bg-bg flex flex-col items-center justify-center py-16 gap-4">
          <div className="flex items-center gap-3">
            <TriangleMark className="w-8 h-9 text-ink" />
            <span className="font-sans font-semibold text-2xl text-ink tracking-tight">
              avero.
            </span>
          </div>
          <span
            className="font-mono text-[10px] text-ink-50 uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Light — Primary
          </span>
        </div>
        {/* Dark bg card */}
        <div className="rounded-2xl bg-ink flex flex-col items-center justify-center py-16 gap-4">
          <div className="flex items-center gap-3">
            <TriangleMark className="w-8 h-9 text-white" />
            <span className="font-sans font-semibold text-2xl text-white tracking-tight">
              avero.
            </span>
          </div>
          <span
            className="font-mono text-[10px] text-white/40 uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Dark — Reversed
          </span>
        </div>
      </div>

      {/* Variants row */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {/* Accent bg */}
        <div className="rounded-2xl flex flex-col items-center justify-center py-10 gap-3" style={{ background: '#D6F23A' }}>
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 28" className="w-6 h-7" aria-hidden="true">
              <path d="M 12 0 L 24 28 L 0 28 Z" fill="#0A0A0A" />
              <rect x="6" y="18.2" width="12" height="3" fill="#D6F23A" />
            </svg>
            <span className="font-sans font-semibold text-lg text-ink tracking-tight">avero.</span>
          </div>
          <span
            className="font-mono text-[10px] text-ink/60 uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Volt bg
          </span>
        </div>
        {/* Mark only */}
        <div className="rounded-2xl border border-ink-12 bg-bg flex flex-col items-center justify-center py-10 gap-3">
          <TriangleMark className="w-8 h-9 text-ink" />
          <span
            className="font-mono text-[10px] text-ink-50 uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Mark only
          </span>
        </div>
        {/* Dark mark */}
        <div className="rounded-2xl bg-ink flex flex-col items-center justify-center py-10 gap-3">
          <TriangleMark className="w-8 h-9 text-white" />
          <span
            className="font-mono text-[10px] text-white/40 uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Dark mark
          </span>
        </div>
        {/* Mono / favicon */}
        <div className="rounded-2xl border border-ink-12 bg-bg flex flex-col items-center justify-center py-10 gap-3">
          <div className="w-10 h-10 bg-ink rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 24 28" className="w-5 h-6" aria-hidden="true">
              <path d="M 12 0 L 24 28 L 0 28 Z" fill="white" />
              <rect x="6" y="18.2" width="12" height="3" fill="#D6F23A" />
            </svg>
          </div>
          <span
            className="font-mono text-[10px] text-ink-50 uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Favicon
          </span>
        </div>
      </div>

      {/* Construction grid */}
      <div className="mb-4">
        <p
          className="font-mono text-[11px] text-ink-50 uppercase tracking-widest mb-4"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Construction
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-ink-12 bg-bg p-8">
            {/* Grid overlay visual */}
            <div className="relative flex items-center justify-center mb-6" style={{ height: 120 }}>
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #0A0A0A 1px, transparent 1px), linear-gradient(to bottom, #0A0A0A 1px, transparent 1px)',
                  backgroundSize: '16px 16px',
                }}
              />
              <TriangleMark className="w-16 h-[72px] text-ink relative z-10" />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between text-xs">
                <span className="font-sans text-ink-70">Width</span>
                <span className="font-mono text-ink" style={{ fontFamily: 'var(--font-mono)' }}>24u</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="font-sans text-ink-70">Height</span>
                <span className="font-mono text-ink" style={{ fontFamily: 'var(--font-mono)' }}>28u</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="font-sans text-ink-70">Stripe height</span>
                <span className="font-mono text-ink" style={{ fontFamily: 'var(--font-mono)' }}>3u</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="font-sans text-ink-70">Stripe y-offset</span>
                <span className="font-mono text-ink" style={{ fontFamily: 'var(--font-mono)' }}>18.2u</span>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-ink-12 bg-bg p-8">
            <div className="flex items-center justify-center mb-6" style={{ height: 120 }}>
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-2">
                  <TriangleMark className="w-12 h-14 text-ink" />
                  <div
                    className="h-px w-full bg-ink-30"
                    style={{ minWidth: 48 }}
                  />
                  <span className="font-mono text-[9px] text-ink-50" style={{ fontFamily: 'var(--font-mono)' }}>
                    min: 16px
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <TriangleMark className="w-16 h-[72px] text-ink" />
                  <div className="h-px w-full bg-ink-30" />
                  <span className="font-mono text-[9px] text-ink-50" style={{ fontFamily: 'var(--font-mono)' }}>
                    pref: 32px
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between text-xs">
                <span className="font-sans text-ink-70">Clear space</span>
                <span className="font-mono text-ink" style={{ fontFamily: 'var(--font-mono)' }}>0.5× mark height</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="font-sans text-ink-70">Min size (screen)</span>
                <span className="font-mono text-ink" style={{ fontFamily: 'var(--font-mono)' }}>16 × 18.6 px</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="font-sans text-ink-70">Min size (print)</span>
                <span className="font-mono text-ink" style={{ fontFamily: 'var(--font-mono)' }}>6 × 7 mm</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Misuse row */}
      <div>
        <p
          className="font-mono text-[11px] text-ink-50 uppercase tracking-widest mb-4"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Misuse — don&apos;t do this
        </p>
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: 'Stretch / distort', bg: 'bg-bg border border-ink-12', textColor: 'text-ink', content: (
              <div className="flex items-center gap-2" style={{ transform: 'scaleX(1.5)', transformOrigin: 'center' }}>
                <TriangleMark className="w-6 h-7 text-ink" />
                <span className="font-sans font-semibold text-base text-ink">avero.</span>
              </div>
            )},
            { label: 'Low contrast', bg: 'bg-bg border border-ink-12', textColor: 'text-ink', content: (
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 28" className="w-6 h-7" aria-hidden="true">
                  <path d="M 12 0 L 24 28 L 0 28 Z" fill="rgba(10,10,10,0.15)" />
                  <rect x="6" y="18.2" width="12" height="3" fill="#D6F23A" />
                </svg>
                <span className="font-sans font-semibold text-base text-ink-30">avero.</span>
              </div>
            )},
            { label: 'Recolour stripe', bg: 'bg-bg border border-ink-12', textColor: 'text-ink', content: (
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 28" className="w-6 h-7" aria-hidden="true">
                  <path d="M 12 0 L 24 28 L 0 28 Z" fill="#0A0A0A" />
                  <rect x="6" y="18.2" width="12" height="3" fill="#FF4444" />
                </svg>
                <span className="font-sans font-semibold text-base text-ink">avero.</span>
              </div>
            )},
            { label: 'Outline only', bg: 'bg-bg border border-ink-12', textColor: 'text-ink', content: (
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 28" className="w-6 h-7" aria-hidden="true">
                  <path d="M 12 0 L 24 28 L 0 28 Z" fill="none" stroke="#0A0A0A" strokeWidth="1.5" />
                  <rect x="6" y="18.2" width="12" height="3" fill="none" stroke="#D6F23A" strokeWidth="1" />
                </svg>
                <span className="font-sans font-semibold text-base text-ink">avero.</span>
              </div>
            )},
          ].map((card, i) => (
            <div key={i} className={`rounded-2xl ${card.bg} p-6 flex flex-col items-center gap-4 relative`}>
              {/* X badge */}
              <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                <span className="text-white text-[10px] font-bold leading-none">✕</span>
              </div>
              <div className="flex items-center justify-center h-14">
                {card.content}
              </div>
              <span
                className="font-mono text-[10px] text-ink-50 text-center uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {card.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section 02 — Color ───────────────────────────────────────────────── */
function SectionColor() {
  const inkScale = [
    { label: '100', alpha: 1,    hex: '#0A0A0A' },
    { label: '90',  alpha: 0.92, hex: 'rgba(10,10,10,0.92)' },
    { label: '70',  alpha: 0.65, hex: 'rgba(10,10,10,0.65)' },
    { label: '50',  alpha: 0.45, hex: 'rgba(10,10,10,0.45)' },
    { label: '30',  alpha: 0.22, hex: 'rgba(10,10,10,0.22)' },
    { label: '12',  alpha: 0.12, hex: 'rgba(10,10,10,0.12)' },
    { label: '06',  alpha: 0.06, hex: 'rgba(10,10,10,0.06)' },
    { label: '05',  alpha: 0.03, hex: 'rgba(10,10,10,0.03)' },
  ]

  const primaries = [
    { name: 'Ink',   hex: '#0A0A0A', bg: '#0A0A0A', text: 'text-white',       role: 'Primary text & surfaces' },
    { name: 'Paper', hex: '#FAFAF7', bg: '#FAFAF7', text: 'text-ink',  border: true, role: 'Background' },
    { name: 'Volt',  hex: '#D6F23A', bg: '#D6F23A', text: 'text-ink',         role: 'Accent / CTA' },
    { name: 'Snow',  hex: '#FFFFFF', bg: '#FFFFFF', text: 'text-ink',  border: true, role: 'White surfaces' },
  ]

  return (
    <section
      id="color"
      className="py-[72px] px-16 border-b border-ink-12"
    >
      <div className="mb-10">
        <p
          className="font-mono text-[11px] text-ink-50 uppercase tracking-widest mb-2"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          02 — Color
        </p>
        <h2 className="font-sans font-semibold text-3xl text-ink tracking-tight">
          Palette.
        </h2>
      </div>

      {/* Primary swatches */}
      <div className="grid grid-cols-4 gap-4 mb-10">
        {primaries.map((c) => (
          <div key={c.name} className="flex flex-col gap-2">
            <div
              className={`rounded-2xl h-32 ${c.border ? 'border border-ink-12' : ''}`}
              style={{ background: c.bg }}
            />
            <div>
              <p className="font-sans font-semibold text-sm text-ink">{c.name}</p>
              <p
                className="font-mono text-[11px] text-ink-50"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {c.hex}
              </p>
              <p className="font-sans text-xs text-ink-50 mt-0.5">{c.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Ink scale */}
      <div>
        <p
          className="font-mono text-[11px] text-ink-50 uppercase tracking-widest mb-4"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Ink alpha scale
        </p>
        <div className="rounded-2xl border border-ink-12 overflow-hidden">
          {inkScale.map((step, i) => (
            <div
              key={step.label}
              className={`flex items-center gap-4 px-6 py-4 ${i < inkScale.length - 1 ? 'border-b border-ink-12' : ''}`}
            >
              <div
                className="w-10 h-10 rounded-lg shrink-0"
                style={{ background: step.hex }}
              />
              <div className="flex-1">
                <span className="font-sans font-medium text-sm text-ink">
                  ink-{step.label}
                </span>
              </div>
              <span
                className="font-mono text-[11px] text-ink-50"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {step.hex}
              </span>
              <div className="w-24 h-2 rounded-full bg-ink-06 overflow-hidden">
                <div
                  className="h-full rounded-full bg-ink"
                  style={{ width: `${step.alpha * 100}%` }}
                />
              </div>
              <span
                className="font-mono text-[11px] text-ink-50 w-10 text-right"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {Math.round(step.alpha * 100)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section 03 — Typography ──────────────────────────────────────────── */
function SectionTypography() {
  const typeScale = [
    { label: 'Display',      size: '88px', weight: '700', sample: 'avero.',    font: 'font-sans',  class: 'font-bold',         style: {} },
    { label: 'H1',           size: '56px', weight: '600', sample: 'We build.', font: 'font-sans',  class: 'font-semibold',     style: {} },
    { label: 'H2',           size: '36px', weight: '600', sample: 'Studio-grade systems.', font: 'font-sans', class: 'font-semibold', style: {} },
    { label: 'H3',           size: '22px', weight: '600', sample: 'One system, every product.', font: 'font-sans', class: 'font-semibold', style: {} },
    { label: 'Body',         size: '16px', weight: '400', sample: 'Senior studio. Live URL in seven days, not seven weeks.', font: 'font-sans', class: 'font-normal', style: {} },
    { label: 'Mono',         size: '12px', weight: '400', sample: 'v 1.0 · 2026-05-07 · studio', font: 'font-mono', class: 'font-normal', style: { fontFamily: 'var(--font-mono)' } },
    { label: 'Serif accent', size: '56px', weight: '400', sample: 'systems.', font: 'font-serif', class: 'italic font-normal', style: { fontFamily: 'var(--font-serif)', fontStyle: 'italic' } },
  ]

  const glyphs = [
    { char: 'A', font: 'var(--font-poppins)', label: 'Poppins' },
    { char: 'v', font: 'var(--font-poppins)', label: 'Poppins' },
    { char: 'e', font: 'var(--font-poppins)', label: 'Poppins' },
    { char: 'r', font: 'var(--font-poppins)', label: 'Poppins' },
    { char: 'o', font: 'var(--font-poppins)', label: 'Poppins' },
    { char: 'e', font: 'var(--font-instrument)', label: 'Instrument', italic: true },
    { char: 'a', font: 'var(--font-instrument)', label: 'Instrument', italic: true },
    { char: '→', font: 'var(--font-jetbrains)', label: 'JetBrains' },
  ]

  return (
    <section
      id="typography"
      className="py-[72px] px-16 border-b border-ink-12"
    >
      <div className="mb-10">
        <p
          className="font-mono text-[11px] text-ink-50 uppercase tracking-widest mb-2"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          03 — Typography
        </p>
        <h2 className="font-sans font-semibold text-3xl text-ink tracking-tight">
          Type scale.
        </h2>
      </div>

      {/* Type scale rows */}
      <div className="rounded-2xl border border-ink-12 overflow-hidden mb-8">
        {typeScale.map((row, i) => (
          <div
            key={row.label}
            className={`flex items-center gap-6 px-6 py-5 ${i < typeScale.length - 1 ? 'border-b border-ink-12' : ''}`}
          >
            <div className="w-28 shrink-0">
              <p className="font-sans font-medium text-sm text-ink">{row.label}</p>
              <p
                className="font-mono text-[10px] text-ink-50"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {row.size} / {row.weight}
              </p>
            </div>
            <div className="flex-1 overflow-hidden">
              <p
                className={`${row.class} truncate leading-tight`}
                style={{ fontSize: `clamp(14px, 2.5vw, ${row.size})`, ...row.style }}
              >
                {row.sample}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Glyph grid */}
      <div>
        <p
          className="font-mono text-[11px] text-ink-50 uppercase tracking-widest mb-4"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Glyph specimens
        </p>
        <div className="grid grid-cols-8 gap-3">
          {glyphs.map((g, i) => (
            <div
              key={i}
              className="rounded-xl border border-ink-12 bg-bg flex flex-col items-center justify-center py-6 gap-2"
            >
              <span
                className="text-4xl text-ink leading-none"
                style={{
                  fontFamily: g.font,
                  fontStyle: g.italic ? 'italic' : 'normal',
                }}
              >
                {g.char}
              </span>
              <span
                className="font-mono text-[9px] text-ink-50 text-center"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {g.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section 04 — Spacing & radius ────────────────────────────────────── */
function SectionSpacing() {
  const spacingScale = [
    { token: 'space-1',  px: 4  },
    { token: 'space-2',  px: 8  },
    { token: 'space-3',  px: 12 },
    { token: 'space-4',  px: 16 },
    { token: 'space-5',  px: 20 },
    { token: 'space-6',  px: 24 },
    { token: 'space-8',  px: 32 },
    { token: 'space-10', px: 40 },
    { token: 'space-12', px: 48 },
    { token: 'space-16', px: 64 },
    { token: 'space-20', px: 80 },
  ]

  const radiusScale = [
    { token: 'rounded-none', px: 0,   label: '0',    preview: 'w-12 h-12' },
    { token: 'rounded-sm',   px: 2,   label: '2px',  preview: 'w-12 h-12' },
    { token: 'rounded',      px: 4,   label: '4px',  preview: 'w-12 h-12' },
    { token: 'rounded-md',   px: 6,   label: '6px',  preview: 'w-12 h-12' },
    { token: 'rounded-lg',   px: 8,   label: '8px',  preview: 'w-12 h-12' },
    { token: 'rounded-xl',   px: 12,  label: '12px', preview: 'w-12 h-12' },
    { token: 'rounded-2xl',  px: 16,  label: '16px', preview: 'w-12 h-12' },
    { token: 'rounded-3xl',  px: 24,  label: '24px', preview: 'w-12 h-12' },
    { token: 'rounded-full', px: 999, label: '999px',preview: 'w-12 h-6' },
  ]

  const maxPx = 80

  return (
    <section
      id="spacing"
      className="py-[72px] px-16 border-b border-ink-12"
    >
      <div className="mb-10">
        <p
          className="font-mono text-[11px] text-ink-50 uppercase tracking-widest mb-2"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          04 — Spacing & radius
        </p>
        <h2 className="font-sans font-semibold text-3xl text-ink tracking-tight">
          Space & shape.
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Spacing card */}
        <div className="rounded-2xl border border-ink-12 p-6">
          <p
            className="font-mono text-[11px] text-ink-50 uppercase tracking-widest mb-5"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Spacing scale
          </p>
          <div className="flex flex-col gap-3">
            {spacingScale.map((s) => (
              <div key={s.token} className="flex items-center gap-3">
                <div className="w-24 shrink-0">
                  <span
                    className="font-mono text-[10px] text-ink-50"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {s.token}
                  </span>
                </div>
                <div
                  className="h-2 rounded-full shrink-0"
                  style={{
                    width: `${(s.px / maxPx) * 100}%`,
                    maxWidth: '100%',
                    background: '#D6F23A',
                  }}
                />
                <span
                  className="font-mono text-[10px] text-ink-50 ml-auto shrink-0"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {s.px}px
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Radius card */}
        <div className="rounded-2xl border border-ink-12 p-6">
          <p
            className="font-mono text-[11px] text-ink-50 uppercase tracking-widest mb-5"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Radius ladder
          </p>
          <div className="flex flex-col gap-3">
            {radiusScale.map((r) => (
              <div key={r.token} className="flex items-center gap-4">
                <div
                  className="shrink-0 bg-ink-12"
                  style={{
                    width: 48,
                    height: r.px >= 999 ? 24 : 48,
                    borderRadius: r.px >= 999 ? 999 : r.px,
                  }}
                />
                <div className="flex-1">
                  <span
                    className="font-mono text-[10px] text-ink-50"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {r.token}
                  </span>
                </div>
                <span
                  className="font-mono text-[10px] text-ink-50"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  {r.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 05 — Components ──────────────────────────────────────────── */
function SectionComponents() {
  return (
    <section
      id="components"
      className="py-[72px] px-16 border-b border-ink-12"
    >
      <div className="mb-10">
        <p
          className="font-mono text-[11px] text-ink-50 uppercase tracking-widest mb-2"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          05 — Components
        </p>
        <h2 className="font-sans font-semibold text-3xl text-ink tracking-tight">
          Building blocks.
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Buttons */}
        <div className="rounded-2xl border border-ink-12 bg-bg p-8 flex flex-col gap-4">
          <p
            className="font-mono text-[11px] text-ink-50 uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Buttons — light
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <button className="inline-flex items-center gap-2 bg-ink text-white font-sans font-medium text-sm px-5 py-2.5 rounded-full hover:bg-ink-90 transition-colors">
              Get started →
            </button>
            <button className="inline-flex items-center gap-2 border border-ink text-ink font-sans font-medium text-sm px-5 py-2.5 rounded-full hover:bg-ink-06 transition-colors">
              Learn more
            </button>
            <button
              className="inline-flex items-center gap-2 text-ink font-sans font-medium text-sm px-4 py-2.5 rounded-full hover:bg-ink-12 transition-colors"
            >
              Ghost
            </button>
            <button
              className="inline-flex items-center gap-2 font-sans font-medium text-sm px-5 py-2.5 rounded-full transition-colors"
              style={{ background: '#D6F23A', color: '#0A0A0A' }}
            >
              Volt CTA →
            </button>
          </div>
        </div>

        {/* Buttons dark */}
        <div className="rounded-2xl bg-ink p-8 flex flex-col gap-4">
          <p
            className="font-mono text-[11px] text-white/40 uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Buttons — dark
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <button
              className="inline-flex items-center gap-2 font-sans font-medium text-sm px-5 py-2.5 rounded-full transition-colors"
              style={{ background: '#D6F23A', color: '#0A0A0A' }}
            >
              Get started →
            </button>
            <button className="inline-flex items-center gap-2 border border-white/20 text-white font-sans font-medium text-sm px-5 py-2.5 rounded-full hover:bg-white/10 transition-colors">
              Learn more
            </button>
            <button className="inline-flex items-center gap-2 text-white/60 font-sans font-medium text-sm px-4 py-2.5 rounded-full hover:bg-white/10 transition-colors">
              Ghost
            </button>
          </div>
        </div>

        {/* Status pill */}
        <div className="rounded-2xl border border-ink-12 bg-bg p-8 flex flex-col gap-4">
          <p
            className="font-mono text-[11px] text-ink-50 uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Status pill
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <span className="inline-flex items-center gap-1.5 bg-ink-06 text-ink font-mono text-[11px] px-3 py-1.5 rounded-full" style={{ fontFamily: 'var(--font-mono)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
              Live
            </span>
            <span className="inline-flex items-center gap-1.5 bg-ink-06 text-ink font-mono text-[11px] px-3 py-1.5 rounded-full" style={{ fontFamily: 'var(--font-mono)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 inline-block" />
              In progress
            </span>
            <span className="inline-flex items-center gap-1.5 bg-ink-06 text-ink font-mono text-[11px] px-3 py-1.5 rounded-full" style={{ fontFamily: 'var(--font-mono)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-ink-30 inline-block" />
              Draft
            </span>
            <span
              className="inline-flex items-center gap-1.5 font-mono text-[11px] px-3 py-1.5 rounded-full"
              style={{ fontFamily: 'var(--font-mono)', background: '#D6F23A', color: '#0A0A0A' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-ink inline-block" />
              Volt accent
            </span>
          </div>
        </div>

        {/* Eyebrow + heading */}
        <div className="rounded-2xl border border-ink-12 bg-bg p-8 flex flex-col gap-4">
          <p
            className="font-mono text-[11px] text-ink-50 uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Eyebrow + heading
          </p>
          <div className="flex flex-col gap-1">
            <p
              className="font-mono text-[11px] text-ink-50 uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              The system · Foundations
            </p>
            <h3 className="font-sans font-semibold text-2xl text-ink leading-tight">
              One studio,{' '}
              <span
                className="italic font-normal text-accent-deep"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                one system.
              </span>
            </h3>
          </div>
        </div>

        {/* Feature card */}
        <div className="rounded-2xl bg-ink p-8 flex flex-col gap-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: '#D6F23A' }}
          >
            <TriangleMark className="w-4 h-[18px] text-ink" />
          </div>
          <div>
            <p
              className="font-mono text-[11px] text-white/40 uppercase tracking-widest mb-1"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Feature
            </p>
            <h4 className="font-sans font-semibold text-lg text-white leading-snug">
              Ship in days, not weeks.
            </h4>
            <p className="font-sans text-sm text-white/60 mt-2 leading-relaxed">
              Every component, token, and pattern tuned for production velocity.
            </p>
          </div>
        </div>

        {/* Testimonial card */}
        <div className="rounded-2xl border border-ink-12 bg-bg p-8 flex flex-col gap-4">
          <p
            className="font-mono text-[11px] text-ink-50 uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Testimonial card
          </p>
          <blockquote className="flex flex-col gap-4">
            <p className="font-sans text-base text-ink leading-relaxed">
              &ldquo;Working with Avero cut our design-to-production cycle from six weeks to five days. The system just works.&rdquo;
            </p>
            <footer className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-ink-12 flex items-center justify-center">
                <span className="font-sans font-semibold text-xs text-ink">JD</span>
              </div>
              <div>
                <p className="font-sans font-medium text-sm text-ink">Jamie D.</p>
                <p className="font-sans text-xs text-ink-50">Founder, Meridian</p>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 06 — Voice & tone ────────────────────────────────────────── */
function SectionVoice() {
  const doDonts = [
    {
      do: 'Ship in seven days.',
      dont: 'Leverage synergies to accelerate your go-to-market strategy.',
    },
    {
      do: 'Senior studio. Real results.',
      dont: 'We are a full-service agency providing end-to-end digital transformation.',
    },
    {
      do: 'One system. Every product.',
      dont: 'Our proprietary methodology ensures consistent brand alignment across all touchpoints.',
    },
  ]

  const principles = [
    {
      title: 'Direct',
      body: 'Say what you mean in the fewest words possible. No filler, no corporate speak. Every sentence earns its place.',
    },
    {
      title: 'Confident',
      body: 'Avero does not hedge. Use active voice. Drop qualifiers like "perhaps" or "might". If we build it, it works.',
    },
    {
      title: 'Human',
      body: 'Technical does not mean cold. Write like a sharp colleague — smart, clear, and occasionally witty. Never robotic.',
    },
  ]

  return (
    <section
      id="voice"
      className="py-[72px] px-16 border-b border-ink-12"
    >
      <div className="mb-10">
        <p
          className="font-mono text-[11px] text-ink-50 uppercase tracking-widest mb-2"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          06 — Voice & tone
        </p>
        <h2 className="font-sans font-semibold text-3xl text-ink tracking-tight">
          How we speak.
        </h2>
      </div>

      {/* Do / Don't */}
      <div className="flex flex-col gap-4 mb-10">
        {doDonts.map((item, i) => (
          <div key={i} className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-ink p-6 flex flex-col gap-2">
              <span
                className="font-mono text-[10px] text-white/40 uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Do
              </span>
              <p className="font-sans font-medium text-base text-white">
                {item.do}
              </p>
            </div>
            <div className="rounded-2xl border border-ink-12 bg-bg p-6 flex flex-col gap-2 relative">
              <span
                className="font-mono text-[10px] text-ink-50 uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Don&apos;t
              </span>
              <p className="font-sans text-base text-ink-50 line-through">
                {item.dont}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Principles */}
      <div>
        <p
          className="font-mono text-[11px] text-ink-50 uppercase tracking-widest mb-4"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Principles
        </p>
        <div className="grid grid-cols-3 gap-4">
          {principles.map((p, i) => (
            <div key={i} className="rounded-2xl border border-ink-12 bg-bg p-6 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span
                  className="font-mono text-[10px] text-ink-50"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  0{i + 1}
                </span>
                <h4 className="font-sans font-semibold text-base text-ink">{p.title}</h4>
              </div>
              <p className="font-sans text-sm text-ink-70 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Page ─────────────────────────────────────────────────────────────── */
export default function SystemPage() {
  const [activeSection, setActiveSection] = useState('logo')
  const sectionRefs = useRef<Record<string, IntersectionObserverEntry>>({})

  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.id)
    const observers: IntersectionObserver[] = []

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          sectionRefs.current[id] = entry
          // Pick the section with the highest intersection ratio that is visible
          const visible = Object.entries(sectionRefs.current)
            .filter(([, e]) => e.isIntersecting)
            .sort(([, a], [, b]) => b.intersectionRatio - a.intersectionRatio)
          if (visible.length > 0) {
            setActiveSection(visible[0][0])
          }
        },
        { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1], rootMargin: '-10% 0px -40% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <div className="flex min-h-screen">
      <Sidebar active={activeSection} />

      <main className="flex-1 min-w-0">
        {/* Doc header */}
        <header className="py-14 px-16 border-b border-ink-12 flex items-start justify-between gap-8">
          <div className="max-w-xl">
            <p
              className="font-mono text-[11px] text-ink-50 uppercase tracking-widest mb-3"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              The system · Foundations
            </p>
            <h1
              className="font-sans font-bold leading-[1.05] tracking-tight text-ink mb-4"
              style={{ fontSize: 72 }}
            >
              One studio, one{' '}
              <span
                className="italic font-normal text-accent-deep"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                system.
              </span>{' '}
              Built to ship.
            </h1>
            <p className="font-sans text-base text-ink-70 leading-relaxed max-w-md">
              Every colour, typeface, and component in one place. The single source of truth for every product Avero ships.
            </p>
          </div>
          <div className="shrink-0 flex flex-col items-end gap-3 mt-1">
            <div
              className="inline-flex items-center gap-2 font-mono text-[11px] px-3 py-1.5 rounded-full"
              style={{ fontFamily: 'var(--font-mono)', background: '#D6F23A', color: '#0A0A0A' }}
            >
              v 1.0
            </div>
            <p
              className="font-mono text-[11px] text-ink-50 text-right"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              6 sections · 38 tokens
            </p>
          </div>
        </header>

        {/* Sections */}
        <SectionLogo />
        <SectionColor />
        <SectionTypography />
        <SectionSpacing />
        <SectionComponents />
        <SectionVoice />

        {/* Footer */}
        <footer className="py-16 px-16 flex items-center justify-between border-t border-ink-12">
          <div className="flex items-center gap-3">
            <TriangleMark className="w-4 h-[18px] text-ink" />
            <span className="font-sans font-semibold text-sm text-ink">avero.</span>
          </div>
          <span
            className="font-mono text-[11px] text-ink-50"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Design system v 1.0 · Updated 2026-05-07 · Maintained by studio
          </span>
          <span
            className="font-mono text-[11px] text-ink-50"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            © 2026 Avero Studio
          </span>
        </footer>
      </main>
    </div>
  )
}
