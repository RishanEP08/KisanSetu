import { useState } from 'react';
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { 
  LayoutDashboard, Wheat, Brain, TrendingUp, Cloud, Truck, Store, 
  ShoppingBag, User, Settings, HelpCircle, Menu, X, Bell, LogOut,
  ShoppingCart, MapPin, Package, History, DollarSign, Star, FileText,
  Map, Navigation, Moon, Sun, ChevronDown
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import Toast from '../components/Toast';

const farmerNav = [
  { to: '/farmer', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/farmer/crops', icon: Wheat, label: 'My Crops' },
  { to: '/farmer/ai-analysis', icon: Brain, label: 'AI Crop Analysis' },
  { to: '/farmer/market-demand', icon: TrendingUp, label: 'Market Demand' },
  { to: '/farmer/weather', icon: Cloud, label: 'Weather Impact' },
  { to: '/farmer/shipments', icon: Truck, label: 'Shipments' },
  { to: '/farmer/microhubs', icon: Store, label: 'Microhubs' },
  { to: '/farmer/orders', icon: ShoppingBag, label: 'Order History' },
  { to: '/farmer/profile', icon: User, label: 'Profile' },
  { to: '/farmer/settings', icon: Settings, label: 'Settings' },
];

const buyerNav = [
  { to: '/buyer', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/buyer/marketplace', icon: Store, label: 'Marketplace' },
  { to: '/buyer/cart', icon: ShoppingCart, label: 'My Cart' },
  { to: '/buyer/orders', icon: Package, label: 'Orders' },
  { to: '/buyer/locations', icon: MapPin, label: 'Crop Locations' },
  { to: '/buyer/profile', icon: User, label: 'Profile' },
  { to: '/buyer/settings', icon: Settings, label: 'Settings' },
];

const driverNav = [
  { to: '/driver', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/driver/pickups', icon: Package, label: 'Pickup Requests' },
  { to: '/driver/deliveries', icon: Truck, label: 'Active Deliveries' },
  { to: '/driver/map', icon: Map, label: 'Map' },
  { to: '/driver/tracking', icon: Navigation, label: 'Live Tracking' },
  { to: '/driver/history', icon: History, label: 'Delivery History' },
  { to: '/driver/earnings', icon: DollarSign, label: 'Earnings' },
  { to: '/driver/ratings', icon: Star, label: 'Ratings' },
  { to: '/driver/pass', icon: FileText, label: 'Digital Pass' },
  { to: '/driver/profile', icon: User, label: 'Profile' },
  { to: '/driver/settings', icon: Settings, label: 'Settings' },
];

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [roleOpen, setRoleOpen] = useState(false);
  const { user, logout, switchRole, theme, toggleTheme, notifs, cart } = useApp();
  const location = useLocation();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  const nav = user.role === 'farmer' ? farmerNav : user.role === 'buyer' ? buyerNav : driverNav;
  const roleNotifs = notifs[user.role] || [];
  const unread = roleNotifs.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-200 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="flex items-center justify-between h-16 px-5 border-b border-gray-200 dark:border-gray-700">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-700 rounded-lg flex items-center justify-center">
              <Wheat className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-green-800 dark:text-green-400">KishanSetu</span>
          </Link>
          <button className="lg:hidden p-1" onClick={() => setSidebarOpen(false)}>
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <nav className="p-3 space-y-1 overflow-y-auto h-[calc(100vh-8rem)]">
          {nav.map(item => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${
                  active
                    ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
                {item.to.includes('cart') && cart.length > 0 && (
                  <span className="ml-auto bg-green-700 text-white text-xs px-2 py-0.5 rounded-full">{cart.length}</span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-gray-200 dark:border-gray-700">
          <button onClick={logout} className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-4 lg:px-6 sticky top-0 z-30">
          <div className="flex items-center gap-3">
            <button className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => setSidebarOpen(true)}>
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white hidden sm:block capitalize">
              {user.role} Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Demo Role Switcher */}
            <div className="relative">
              <button
                onClick={() => setRoleOpen(!roleOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-xs font-semibold hover:bg-green-100 transition"
              >
                DEMO: {user.role}
                <ChevronDown className="w-3 h-3" />
              </button>
              {roleOpen && (
                <div className="absolute right-0 mt-1 w-36 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 py-1 z-50">
                  {['farmer', 'buyer', 'driver'].map(r => (
                    <button
                      key={r}
                      onClick={() => { switchRole(r); setRoleOpen(false); navigate(`/${r}`); }}
                      className={`w-full text-left px-4 py-2 text-sm capitalize hover:bg-gray-50 dark:hover:bg-gray-700 ${user.role === r ? 'text-green-700 font-semibold' : 'text-gray-700 dark:text-gray-300'}`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              {theme === 'light' ? <Moon className="w-5 h-5 text-gray-600" /> : <Sun className="w-5 h-5 text-yellow-400" />}
            </button>

            {/* Notifications */}
            <div className="relative">
              <button onClick={() => setNotifOpen(!notifOpen)} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 relative">
                <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                {unread > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">{unread}</span>
                )}
              </button>
              {notifOpen && (
                <div className="absolute right-0 mt-1 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 py-2 z-50 max-h-80 overflow-y-auto">
                  <p className="px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-700">Notifications</p>
                  {roleNotifs.length === 0 ? (
                    <p className="px-4 py-6 text-sm text-gray-500 text-center">No notifications</p>
                  ) : roleNotifs.map(n => (
                    <div key={n.id} className={`px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-50 dark:border-gray-700 ${!n.read ? 'bg-green-50/50 dark:bg-green-900/10' : ''}`}>
                      <p className="text-sm text-gray-800 dark:text-gray-200">{n.message}</p>
                      <p className="text-xs text-gray-400 mt-1">{n.time}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 pl-2 border-l border-gray-200 dark:border-gray-700">
              <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                {user.name.charAt(0)}
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</p>
                <p className="text-xs text-gray-500 capitalize">{user.role}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 lg:p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
      <Toast />
    </div>
  );
}
