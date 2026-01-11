'use client';

import { motion } from 'framer-motion';
import BearMascot from '@/components/BearMascot';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '',
    problem: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', teamSize: '', problem: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-light via-primary to-primary-dark text-white px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <BearMascot size="large" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-balance"
          >
            The Truth About Your Sales Team Is Hard To Bear
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            But someone needs to say it. Most sales teams aren&apos;t broken because of bad people - they&apos;re broken because of no process, no structure, and a lot of hope. Let&apos;s fix that.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="#contact"
              className="inline-block bg-accent hover:bg-accent-dark text-white font-bold text-lg px-10 py-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Get a Free Sales Reality Check
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 text-lg opacity-90"
          >
            Russell Westgarth | Hard To Bear Consulting
          </motion.p>
        </div>
      </section>

      {/* Hard Truths Section */}
      <section id="hard-truths" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-secondary"
          >
            Is This Hard To Bear?
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              "Your top rep is crushing it. Your bottom three can't hit quota. You call this 'performance management'",
              "Your CRM is a graveyard of stale opportunities and fictional close dates",
              "You hired two more salespeople thinking it would solve the revenue problem. It didn't.",
              "Your sales 'process' is whatever each rep feels like doing that day",
              "You can't forecast next quarter with any confidence because pipeline is fiction",
              "Onboarding a new rep takes 6 months and they still don't know what they're doing"
            ].map((truth, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-charcoal-light/5 p-8 rounded-lg border-l-4 border-primary"
              >
                <p className="text-xl font-semibold text-charcoal leading-relaxed">
                  {truth}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            {...fadeInUp}
            className="text-2xl md:text-3xl font-bold text-center mt-16 text-primary"
          >
            This isn&apos;t a people problem. It&apos;s a structure problem. And structure is fixable.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-secondary text-white">
        <div className="max-w-6xl mx-auto">
          <motion.p
            {...fadeInUp}
            className="text-xl md:text-2xl mb-16 text-center max-w-4xl mx-auto leading-relaxed"
          >
            I help SME sales leaders build sales operations that don&apos;t rely on superhero reps or blind hope. Process-driven, metrics-focused, no fluff.
          </motion.p>

          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                title: "Sales Process That Actually Gets Followed",
                points: [
                  "Build a repeatable methodology your team uses (not some binder that sits on a shelf)",
                  "Document what good looks like at every stage",
                  "Create playbooks that scale when you hire"
                ]
              },
              {
                title: "Team Structure That Drives Performance",
                points: [
                  "Right roles, right comp plans, right accountability",
                  "Performance frameworks that separate coaching from firing",
                  "Metrics that predict revenue, not vanity numbers"
                ]
              },
              {
                title: "Pipeline You Can Actually Trust",
                points: [
                  "CRM hygiene that sticks",
                  "Forecasting models based on reality",
                  "Activity metrics that tell you what's really happening"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-6 text-accent">
                  {service.title}
                </h3>
                <ul className="space-y-4">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-accent mr-3 text-xl font-bold">•</span>
                      <span className="text-lg leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hard To Bear Section */}
      <section id="why" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="flex justify-center mb-8">
            <BearMascot size="medium" />
          </motion.div>

          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-secondary"
          >
            Why Hard To Bear?
          </motion.h2>

          <motion.div
            {...fadeInUp}
            className="prose prose-lg max-w-none"
          >
            <p className="text-xl leading-relaxed mb-6 text-charcoal">
              &quot;Hard To Bear&quot; comes from rugby. When a teammate made a mistake, you&apos;d call it out - &quot;ah mate, that&apos;s hard to bear&quot; - but always with empathy. You wanted them to do better because you were on the same team.
            </p>
            <p className="text-xl leading-relaxed mb-6 text-charcoal">
              That&apos;s how I approach sales consulting. I&apos;ll tell you the uncomfortable truths about your sales operation. Not to embarrass you, but because I genuinely want you to win. And you can&apos;t win if everyone&apos;s just being polite about the problems.
            </p>
            <p className="text-xl leading-relaxed text-charcoal italic">
              (Also, my mam used to call me Rusty Bear when I was little. So there&apos;s that.)
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Russell Section */}
      <section id="about" className="py-20 px-4 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-12"
          >
            About Russell
          </motion.h2>

          <motion.div {...fadeInUp} className="space-y-6 text-lg leading-relaxed">
            <p>
              <strong className="text-accent">Background:</strong> 4 years in media sales (radio, OOH, TV) selling to every type of SME imaginable. Flooring companies, dentists, law firms. Currently at Salesfire (B2B SaaS, eCommerce optimisation). Seen what works and what&apos;s a waste of time across industries.
            </p>
            <p>
              Built this consultancy because too many good SMEs are winging their sales operations.
            </p>
            <p>
              <strong className="text-accent">Approach:</strong> Direct but not a dick about it. Process-driven but flexible to your business. Metrics that matter, not vanity dashboards. Built for SMEs, not enterprise theatre.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="how-we-work" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-secondary"
          >
            How We Work
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-3 mb-16">
            {[
              {
                title: "Option 1: Sales Reality Check",
                duration: "2-3 weeks",
                description: "Deep dive into your current state. What's working, what's broken, what to fix first.",
                deliverable: "Prioritised roadmap with no BS recommendations."
              },
              {
                title: "Option 2: Build The Engine",
                duration: "2-3 months",
                description: "Design and implement your sales process, playbooks, and performance frameworks.",
                deliverable: "A sales operation that runs without you micromanaging."
              },
              {
                title: "Option 3: Fractional Sales Leadership",
                duration: "Ongoing",
                description: "Embedded support 1-2 days/week. Strategy, coaching, accountability.",
                deliverable: "Consistent execution and improvement."
              }
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-primary-light to-primary p-8 rounded-lg text-white hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-2xl font-bold mb-3">{option.title}</h3>
                <p className="text-lg opacity-90 mb-4">{option.duration}</p>
                <p className="mb-4 leading-relaxed">{option.description}</p>
                <p className="font-semibold">
                  <span className="text-accent">Deliverable:</span> {option.deliverable}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeInUp}
            className="bg-secondary/5 p-8 rounded-lg border-2 border-secondary"
          >
            <h3 className="text-2xl font-bold mb-6 text-secondary">Process:</h3>
            <ol className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="font-bold text-primary mr-4 text-xl">1.</span>
                <span>Free 30-min call (no pitch, just honesty about fit)</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-primary mr-4 text-xl">2.</span>
                <span>Reality check audit (if needed)</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-primary mr-4 text-xl">3.</span>
                <span>Proposal</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-primary mr-4 text-xl">4.</span>
                <span>Implementation</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-primary mr-4 text-xl">5.</span>
                <span className="font-bold">You actually hit your numbers</span>
              </li>
            </ol>
          </motion.div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section id="who-for" className="py-20 px-4 bg-charcoal-light text-white">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Who This Is For
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-green-600/20 border-2 border-green-500 p-8 rounded-lg"
            >
              <h3 className="text-3xl font-bold mb-6 text-green-400">Best Fit:</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 text-xl">✓</span>
                  <span>SMEs with 2-10 salespeople, £500K-£10M revenue</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 text-xl">✓</span>
                  <span>You know something&apos;s broken but not sure what</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 text-xl">✓</span>
                  <span>Willing to change how things work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 text-xl">✓</span>
                  <span>Ready to invest in getting it right</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-red-600/20 border-2 border-red-500 p-8 rounded-lg"
            >
              <h3 className="text-3xl font-bold mb-6 text-red-400">Not For You If:</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 text-xl">✗</span>
                  <span>You want quick fixes or silver bullets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 text-xl">✗</span>
                  <span>You&apos;re not willing to hold your team accountable</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 text-xl">✗</span>
                  <span>You think more activity equals more revenue (it doesn&apos;t)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 text-xl">✗</span>
                  <span>You&apos;re looking for someone to just tell you you&apos;re doing great</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="flex justify-center mb-8">
            <BearMascot size="medium" />
          </motion.div>

          <motion.h2
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-6"
          >
            Get Your Free Sales Reality Check
          </motion.h2>

          <motion.p
            {...fadeInUp}
            className="text-xl text-center mb-12 max-w-3xl mx-auto"
          >
            No 47-slide deck. No &apos;discovery process.&apos; Just a straight conversation about whether your sales operation is actually set up to scale.
          </motion.p>

          <motion.form
            {...fadeInUp}
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 mb-12"
          >
            <div className="grid gap-6">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-lg font-semibold mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Company name"
                />
              </div>

              <div>
                <label htmlFor="teamSize" className="block text-lg font-semibold mb-2">
                  Sales Team Size
                </label>
                <input
                  type="text"
                  id="teamSize"
                  required
                  value={formData.teamSize}
                  onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="e.g., 5 reps"
                />
              </div>

              <div>
                <label htmlFor="problem" className="block text-lg font-semibold mb-2">
                  What&apos;s Actually Broken (be honest)
                </label>
                <textarea
                  id="problem"
                  required
                  value={formData.problem}
                  onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Tell me what's not working..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent-dark disabled:bg-gray-500 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 shadow-xl"
              >
                {isSubmitting ? 'Sending...' : 'Request Reality Check'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-300 text-center font-semibold">
                  Thanks! I&apos;ll get back to you within 24 hours.
                </p>
              )}

              {submitStatus === 'error' && (
                <p className="text-red-300 text-center font-semibold">
                  Something went wrong. Email me directly at hello@russellwestgarth.com
                </p>
              )}
            </div>
          </motion.form>

          <motion.div
            {...fadeInUp}
            className="text-center space-y-6"
          >
            <p className="text-lg">
              <strong>Prefer to book directly?</strong>
              <br />
              <a
                href="https://calendly.com/russellwestgarth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-light underline font-semibold"
              >
                Book a 30-minute call on Calendly
              </a>
            </p>

            <div className="flex justify-center items-center gap-6 text-2xl">
              <a
                href="mailto:hello@russellwestgarth.com"
                className="hover:text-accent transition-colors duration-300"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://linkedin.com/in/russellwestgarth"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/russellwestgarth"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>

            <p className="text-sm opacity-75">
              hello@russellwestgarth.com | russellwestgarth.com
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-dark text-white/70 py-8 px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Hard To Bear Consulting. All rights reserved.</p>
        <p className="mt-2 text-sm">Russell Westgarth | No-BS Sales Consulting for SMEs</p>
      </footer>
    </main>
  );
}
