import { Link } from 'react-router-dom';
import { 
  Wheat, Brain, TrendingUp, Store, Truck, ShoppingCart, Home,
  ArrowRight, CheckCircle, Zap, Cloud, BarChart3, MapPin, Moon, Sun
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const flow = [
  { icon: Wheat, label: 'Farmer', color: 'bg-green-100 text-green-700' },
  { icon: Brain, label: 'AI Analysis', color: 'bg-purple-100 text-purple-700' },
  { icon: TrendingUp, label: 'Market', color: 'bg-blue-100 text-blue-700' },
  { icon: Store, label: 'Microhub', color: 'bg-amber-100 text-amber-700' },
  { icon: Truck, label: 'Driver', color: 'bg-cyan-100 text-cyan-700' },
  { icon: ShoppingCart, label: 'Buyer', color: 'bg-orange-100 text-orange-700' },
  { icon: Home, label: 'Consumer', color: 'bg-rose-100 text-rose-700' },
];

const features = [
  { icon: Brain, title: 'AI Crop Insights', desc: 'Upload crop images for instant quality analysis, health assessment and pricing recommendations.' },
  { icon: Truck, title: 'Smart Logistics', desc: 'Optimized routing from farm to microhub to buyer with real-time tracking.' },
  { icon: Store, title: 'Direct Marketplace', desc: 'Connect farmers directly with buyers. Fair prices, transparent deals.' },
  { icon: MapPin, title: 'Live Delivery Tracking', desc: 'Track every shipment from farm pickup to doorstep delivery.' },
  { icon: Cloud, title: 'Weather Intelligence', desc: 'Crop-specific weather impact analysis and actionable recommendations.' },
  { icon: BarChart3, title: 'Market Intelligence', desc: 'Real-time demand trends, price forecasts and district-wise insights.' },
];

export default function Landing() {
  const { theme, toggleTheme } = useApp();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-green-700 rounded-xl flex items-center justify-center">
              <Wheat className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-green-800 dark:text-green-400">KishanSetu</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
            <a href="#how" className="hover:text-green-700 dark:hover:text-green-400 transition">How it Works</a>
            <a href="#features" className="hover:text-green-700 dark:hover:text-green-400 transition">Features</a>
            <a href="#roles" className="hover:text-green-700 dark:hover:text-green-400 transition">For You</a>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              aria-label="Toggle theme"
              title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-600" />
              ) : (
                <Sun className="w-5 h-5 text-amber-400" />
              )}
            </button>
            <Link to="/login" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400 transition">
              Login
            </Link>
            <Link to="/register" className="px-4 py-2 bg-green-700 text-white text-sm font-medium rounded-xl hover:bg-green-800 transition">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero with background image */}
      <section className="relative pt-16 min-h-[85vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />
        {/* Dark green overlay so white + yellow tagline pops (like reference) */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/75 via-green-900/70 to-green-950/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 text-white rounded-full text-xs font-semibold mb-6 backdrop-blur-sm border border-white/20">
            <Zap className="w-3.5 h-3.5 text-amber-300" /> India&apos;s AgriTech Bridge
          </div>

          {/* Tagline — same colour treatment as reference */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight">
            <span className="text-white">Good food starts</span>
            <br />
            <span className="text-white">with a </span>
            <span className="text-amber-400">clearer</span>
            <br />
            <span className="text-amber-400">path.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-white/90 font-medium max-w-xl mx-auto">
            Connecting Farmers, Markets and Consumers
          </p>
          <p className="mt-3 text-sm sm:text-base text-white/70 max-w-2xl mx-auto">
            KishanSetu empowers Indian farmers with AI insights, transparent markets, and efficient logistics — from farm to fork.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register" className="w-full sm:w-auto px-8 py-3.5 bg-amber-400 text-green-950 font-semibold rounded-xl hover:bg-amber-300 transition flex items-center justify-center gap-2 shadow-lg">
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/login" className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-white font-semibold rounded-xl border-2 border-white/50 hover:bg-white/10 transition">
              Explore Marketplace
            </Link>
          </div>

          {/* Flow */}
          <div className="mt-16 overflow-x-auto pb-4">
            <div className="flex items-center justify-center gap-2 sm:gap-3 min-w-max mx-auto">
              {flow.map((item, i) => (
                <div key={item.label} className="flex items-center gap-2 sm:gap-3">
                  <div className="flex flex-col items-center">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${item.color} flex items-center justify-center shadow-md`}>
                      <item.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <span className="mt-2 text-xs font-medium text-white/90">{item.label}</span>
                  </div>
                  {i < flow.length - 1 && <ArrowRight className="w-4 h-4 text-white/40 mb-5" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-20 px-4 sm:px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">How KishanSetu Works</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">A seamless journey from farm to consumer</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Farmer Lists Crops', desc: 'Farmers upload crops, get AI quality analysis, and see real-time market demand.' },
              { step: '02', title: 'Smart Matching', desc: 'Crops are routed to nearby microhubs. Buyers discover and purchase at fair prices.' },
              { step: '03', title: 'Delivered Fresh', desc: 'Drivers pick up from microhubs and deliver to buyers with live tracking.' },
            ].map(s => (
              <div key={s.step} className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition">
                <span className="text-4xl font-extrabold text-green-100 dark:text-green-900">{s.step}</span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-2">{s.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 sm:px-6 bg-green-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Powerful Features</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">Built for the modern Indian agricultural ecosystem</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-xl flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-green-700 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{f.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section id="roles" className="py-20 px-4 sm:px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Built for Everyone</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'For Farmers', icon: Wheat, points: ['List crops with AI quality score', 'See market demand & price trends', 'Weather impact alerts', 'Send to nearby microhubs', 'Track shipments & earnings'] },
              { title: 'For Buyers', icon: ShoppingCart, points: ['Browse fresh local produce', 'Filter by district & price', 'AI quality verified crops', 'Track orders live', 'Fair transparent pricing'] },
              { title: 'For Drivers', icon: Truck, points: ['Accept pickup requests', 'Optimized delivery routes', 'Live tracking & ETA', 'Digital delivery pass', 'Earnings & ratings'] },
            ].map(r => (
              <div key={r.title} className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 rounded-xl flex items-center justify-center mb-4">
                  <r.icon className="w-6 h-6 text-green-700 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{r.title}</h3>
                <ul className="space-y-2">
                  {r.points.map(p => (
                    <li key={p} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 px-4 sm:px-6 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Why KishanSetu?</h2>
          <p className="mt-3 text-green-100 max-w-2xl mx-auto">We bridge the gap between India&apos;s hardworking farmers and conscious consumers with technology that works offline-first and mobile-first.</p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: '10K+', label: 'Farmers Onboarded' },
              { num: '50+', label: 'Microhubs' },
              { num: '₹2Cr+', label: 'Farmer Earnings' },
              { num: '25+', label: 'Districts Covered' },
            ].map(s => (
              <div key={s.label}>
                <p className="text-3xl font-extrabold">{s.num}</p>
                <p className="text-sm text-green-200 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Ready to transform agriculture?</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">Join KishanSetu today — whether you grow, buy, or deliver.</p>
          <Link to="/register" className="inline-flex items-center gap-2 mt-6 px-8 py-3.5 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-800 transition">
            Create Free Account <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center">
                <Wheat className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white">KishanSetu</span>
            </div>
            <p className="text-sm">Connecting Farmers, Markets and Consumers across India.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#how" className="hover:text-white transition">How it Works</a></li>
              <li><Link to="/login" className="hover:text-white transition">Login</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Roles</h4>
            <ul className="space-y-2 text-sm">
              <li>For Farmers</li>
              <li>For Buyers</li>
              <li>For Drivers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>support@kishansetu.in</li>
              <li>+91 1800-XXX-XXXX</li>
              <li>Kolkata, West Bengal</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-800 text-center text-sm">
          © 2026 KishanSetu. Built for Indian Agriculture. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
