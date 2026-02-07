'use client';

import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Copy,
  Check,
  RotateCcw,
  Loader2,
  Zap,
  Globe,
  Palette,
  ShieldCheck,
  Clock,
  Languages,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { siteConfig } from '@/lib/site-config';
import { tools } from '@/lib/tools';

/* ─── Options ────────────────────────────────────────────────── */

const toneOptions = [
  { value: 'professional', label: 'Professional' },
  { value: 'casual', label: 'Casual' },
  { value: 'persuasive', label: 'Persuasive' },
  { value: 'friendly', label: 'Friendly' },
  { value: 'formal', label: 'Formal' },
];

const formatOptions = [
  { value: 'paragraph', label: 'Paragraph' },
  { value: 'email', label: 'Email' },
  { value: 'blog-intro', label: 'Blog Intro' },
  { value: 'social-post', label: 'Social Post' },
  { value: 'product-description', label: 'Product Description' },
];

/* ─── Feature data ───────────────────────────────────────────── */

const features = [
  {
    number: '01',
    title: 'Multiple Content Formats',
    description:
      'Generate emails, blog intros, social posts, product descriptions, and paragraphs — all from a single prompt. Pick the format that fits your workflow.',
  },
  {
    number: '02',
    title: 'Tone Control at Your Fingertips',
    description:
      'Professional, casual, persuasive, friendly, or formal — choose the voice that matches your audience. Every piece of content is tailored to strike the right chord.',
  },
  {
    number: '03',
    title: 'Instant Copy-Ready Output',
    description:
      'One click to copy. No reformatting, no cleanup. Paste the generated content straight into your email client, CMS, or social scheduler.',
  },
  {
    number: '04',
    title: 'Built-In Word Counter',
    description:
      'Track output length in real time. Stay within character limits for tweets, meta descriptions, or email subject lines without ever leaving the tool.',
  },
  {
    number: '05',
    title: 'Zero Signup Required',
    description:
      'No account needed. No credit card. Just open the tool, type your prompt, and get results. Free to use, as many times as you want.',
  },
];

/* ─── Benefits data ──────────────────────────────────────────── */

const benefits = [
  {
    icon: Zap,
    title: 'AI-Native Generation',
    description:
      'Powered by the latest AI models to produce natural, high-quality text that reads like it was written by a human.',
  },
  {
    icon: Languages,
    title: 'Multi-Language Support',
    description:
      'Generate content in multiple languages. Write prompts in English and get results optimized for your target audience.',
  },
  {
    icon: Clock,
    title: 'Super Fast Processing',
    description:
      'Built on cutting-edge AI infrastructure. Get your content in seconds, not minutes — even for long-form output.',
  },
  {
    icon: Palette,
    title: 'Brand Voice Consistency',
    description:
      'Tone controls ensure every piece of content aligns with your brand identity. Consistent messaging across all channels.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Private',
    description:
      'Your prompts and generated content are handled with strict privacy. Nothing is stored or shared — ever.',
  },
  {
    icon: Globe,
    title: 'Works Everywhere',
    description:
      'Use it on any device, any browser. The output works in Gmail, Notion, WordPress, LinkedIn — anywhere you write.',
  },
];

/* ─── Component ──────────────────────────────────────────────── */

export default function AiWriter() {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('professional');
  const [format, setFormat] = useState('paragraph');
  const [result, setResult] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const otherTools = tools.filter((t) => t.id !== 'ai-writer').slice(0, 6);

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setIsGenerating(true);
    setResult('');

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const generated = generateSampleContent(topic, tone, format);
    setResult(generated);
    setWordCount(generated.split(/\s+/).filter(Boolean).length);
    setIsGenerating(false);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setTopic('');
    setResult('');
    setWordCount(0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ════════════════════════════════════════════════════════
          SECTION 1 — Tool
      ════════════════════════════════════════════════════════ */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm font-medium">Back to Tools</span>
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 border border-blue-100">
              <Sparkles className="h-5 w-5 text-blue-600" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              AI Writer
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl">
            Generate high-quality written content in seconds. Describe your
            topic, pick a tone, and let AI do the heavy lifting.
          </p>
        </div>

        {/* Tool cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Input Card */}
          <Card className="border-gray-200 shadow-sm">
            <CardContent className="pt-6 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Input
                </span>
                {topic && (
                  <button
                    onClick={handleReset}
                    className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1 transition-colors"
                  >
                    <RotateCcw className="h-3 w-3" />
                    Reset
                  </button>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Topic or prompt
                </label>
                <textarea
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  rows={4}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="e.g. Write a welcome email for new SaaS customers that highlights key features..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Tone
                </label>
                <div className="flex flex-wrap gap-2">
                  {toneOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setTone(opt.value)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                        tone === opt.value
                          ? 'bg-gray-900 text-white border-gray-900'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Format
                </label>
                <div className="flex flex-wrap gap-2">
                  {formatOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setFormat(opt.value)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                        format === opt.value
                          ? 'bg-gray-900 text-white border-gray-900'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <Button
                onClick={handleGenerate}
                disabled={!topic.trim() || isGenerating}
                className="w-full"
                variant="gradient"
                size="lg"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    Generate
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Output Card */}
          <Card className="border-gray-200 shadow-sm">
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Output
                </span>
                {result && (
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400">
                      {wordCount} words
                    </span>
                    <button
                      onClick={handleCopy}
                      className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1 transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3 w-3 text-green-500" />
                          <span className="text-green-500">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>

              <div className="min-h-[280px] rounded-lg border border-gray-100 bg-gray-50 p-4">
                {isGenerating ? (
                  <div className="flex flex-col items-center justify-center h-full min-h-[260px] text-gray-400 gap-3">
                    <Loader2 className="h-6 w-6 animate-spin" />
                    <p className="text-sm">Writing your content...</p>
                  </div>
                ) : result ? (
                  <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {result}
                  </p>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full min-h-[260px] text-gray-400 gap-2">
                    <Sparkles className="h-6 w-6" />
                    <p className="text-sm">
                      Generated content will appear here
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          SECTION 2 — Why Use This Tool  (numbered features)
      ════════════════════════════════════════════════════════ */}
      <section className="bg-white border-t border-gray-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Our AI Writer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Purpose-built AI that turns a simple prompt into polished,
              publish-ready content — in any tone, any format.
            </p>
          </div>

          <div className="space-y-10">
            {features.map((feature, idx) => (
              <div
                key={feature.number}
                className={`flex flex-col md:flex-row gap-6 md:gap-10 items-start ${
                  idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Number badge + text */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-900 text-white text-sm font-bold shrink-0">
                      {feature.number}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed pl-12">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative card placeholder */}
                <div className="flex-1 w-full">
                  <div className="rounded-xl border border-gray-200 bg-gray-50 h-40 flex items-center justify-center">
                    <span className="text-sm text-gray-300 font-medium">
                      Illustration
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 3 — Benefits grid
      ════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
              Benefits
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Discover the Power of Free AI Writing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              More than just a text generator — a complete content creation
              toolkit built for speed, quality, and ease of use.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <Card
                key={benefit.title}
                className="border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="pt-6 space-y-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 border border-blue-100">
                    <benefit.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SECTION 4 — More Free Tools
      ════════════════════════════════════════════════════════ */}
      {otherTools.length > 0 && (
        <section className="bg-white border-t border-gray-100">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2">
                More Free Tools
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Explore Our Other Tools
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Experience the convenience of our free online tools. AI-powered
                utilities that deliver excellent results.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherTools.map((tool) => (
                <Link
                  key={tool.id}
                  href={tool.href}
                  className="group flex flex-col bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-gray-300 transition-all duration-200 h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <tool.icon className="size-6 text-gray-900" />
                    {tool.badge && (
                      <span className="text-xs font-medium px-2 py-1 rounded bg-blue-100 text-blue-700 border border-blue-200">
                        {tool.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2 flex-grow">
                    {tool.description}
                  </p>
                  <span className="inline-flex items-center text-blue-600 text-sm font-medium transition-all w-fit">
                    Try Now
                    <span className="w-0 overflow-hidden transition-all duration-200 group-hover:w-6 group-hover:ml-1">
                      <ArrowRight className="size-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════════════
          SECTION 5 — CTA
      ════════════════════════════════════════════════════════ */}
      <section className="border-t border-gray-100 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {siteConfig.cta?.primary?.url
              ? siteConfig.cta.primary.text
              : 'Start Writing with AI Today'}
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            {siteConfig.description ||
              'Free to use, no signup required. Generate professional content in seconds.'}
          </p>
          {siteConfig.cta?.primary?.url ? (
            <Button asChild variant="gradient" size="lg">
              <a href={siteConfig.cta.primary.url}>
                {siteConfig.cta.primary.text}
              </a>
            </Button>
          ) : (
            <Button
              variant="gradient"
              size="lg"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Sparkles className="h-4 w-4" />
              Try AI Writer Free
            </Button>
          )}
        </div>
      </section>
    </div>
  );
}

/* ─── Sample content generator (placeholder) ─────────────────── */

function generateSampleContent(
  topic: string,
  tone: string,
  format: string
): string {
  const toneAdj: Record<string, string> = {
    professional: 'clear and authoritative',
    casual: 'relaxed and conversational',
    persuasive: 'compelling and action-oriented',
    friendly: 'warm and approachable',
    formal: 'structured and dignified',
  };

  const toneDesc = toneAdj[tone] || 'clear';

  if (format === 'email') {
    return `Subject: ${topic}\n\nHi there,\n\nThank you for your interest. I wanted to reach out regarding ${topic.toLowerCase()}.\n\nOur team has been working on delivering exceptional results in this area, and we'd love to share more about how we can help you achieve your goals.\n\nThe key benefits include:\n• Streamlined workflow that saves you hours every week\n• Data-driven insights to make better decisions\n• Dedicated support from our expert team\n\nWould you be available for a quick call this week to discuss further?\n\nBest regards,\nYour Team`;
  }

  if (format === 'social-post') {
    return `🚀 ${topic}\n\nHere's what you need to know:\n\n✅ It saves time and boosts productivity\n✅ Anyone can get started in minutes\n✅ Results speak for themselves\n\nThe future is here, and it's ${toneDesc}.\n\nDrop a 🔥 if you agree!\n\n#productivity #tools #growth`;
  }

  if (format === 'blog-intro') {
    return `${topic} is transforming the way businesses operate in 2026.\n\nWhether you're a startup founder or leading a team at an enterprise, the landscape has shifted dramatically. In this guide, we'll break down everything you need to know — from the fundamentals to advanced strategies that top performers are using right now.\n\nBy the end, you'll have a ${toneDesc} understanding of exactly how to apply these principles to your own workflow. Let's dive in.`;
  }

  if (format === 'product-description') {
    return `Introducing the ultimate solution for ${topic.toLowerCase()}.\n\nDesigned with simplicity and power in mind, this tool helps you accomplish more in less time. The intuitive interface makes it easy to get started, while advanced features scale with your needs.\n\nKey Features:\n• Lightning-fast performance\n• Beautiful, ${toneDesc} interface\n• Works seamlessly across devices\n• Built-in analytics and reporting\n\nJoin thousands of professionals who've already made the switch.`;
  }

  return `${topic} has become an essential consideration for modern teams and professionals.\n\nThe approach is ${toneDesc}, focusing on delivering measurable value from day one. Rather than overcomplicating things, the emphasis is on clarity and practical results that move the needle.\n\nTeams that adopt this approach typically see a significant improvement in both efficiency and output quality. The key is starting with a clear objective and iterating based on real feedback.\n\nAs the landscape continues to evolve in 2026, staying ahead means embracing tools and strategies that work — not just in theory, but in practice.`;
}
