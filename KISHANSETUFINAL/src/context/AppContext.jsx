import { createContext, useContext, useState, useEffect } from 'react';
import { crops as initialCrops, initialShipments, initialOrders, pickupRequests as initialPickups, notifications as initialNotifs, demoUsers } from '../data/mockData';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('ks_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [theme, setTheme] = useState(() => localStorage.getItem('ks_theme') || 'light');
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('ks_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [cropsList, setCropsList] = useState(() => {
    const saved = localStorage.getItem('ks_crops');
    return saved ? JSON.parse(saved) : initialCrops;
  });
  const [shipments, setShipments] = useState(() => {
    const saved = localStorage.getItem('ks_shipments');
    return saved ? JSON.parse(saved) : initialShipments;
  });
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem('ks_orders');
    return saved ? JSON.parse(saved) : initialOrders;
  });
  const [pickups, setPickups] = useState(() => {
    const saved = localStorage.getItem('ks_pickups');
    return saved ? JSON.parse(saved) : initialPickups;
  });
  const [registeredUsers, setRegisteredUsers] = useState(() => {
    const saved = localStorage.getItem('ks_registered');
    return saved ? JSON.parse(saved) : [];
  });
  const [notifs, setNotifs] = useState(initialNotifs);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    if (user) localStorage.setItem('ks_user', JSON.stringify(user));
    else localStorage.removeItem('ks_user');
  }, [user]);

  useEffect(() => {
    localStorage.setItem('ks_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Apply theme on first load
  useEffect(() => {
    const t = localStorage.getItem('ks_theme') || 'light';
    if (t === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, []);

  useEffect(() => {
    localStorage.setItem('ks_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('ks_crops', JSON.stringify(cropsList));
  }, [cropsList]);

  useEffect(() => {
    localStorage.setItem('ks_shipments', JSON.stringify(shipments));
  }, [shipments]);

  useEffect(() => {
    localStorage.setItem('ks_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('ks_pickups', JSON.stringify(pickups));
  }, [pickups]);

  useEffect(() => {
    localStorage.setItem('ks_registered', JSON.stringify(registeredUsers));
  }, [registeredUsers]);

  // Demo login by role
  const login = (roleOrUser) => {
    if (typeof roleOrUser === 'string') {
      const u = demoUsers[roleOrUser];
      setUser(u);
      addToast(`Logged in as ${u.name} (${roleOrUser})`, 'success');
    } else {
      setUser(roleOrUser);
      addToast(`Logged in as ${roleOrUser.name}`, 'success');
    }
  };

  // Login with email/password from registered users or form
  const loginWithCredentials = (email, password, role) => {
    // Check registered users first
    const found = registeredUsers.find(
      u => u.email?.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (found) {
      const { password: _, ...safeUser } = found;
      setUser(safeUser);
      addToast(`Welcome back, ${found.name}!`, 'success');
      return found.role;
    }
    // Fallback: create session from entered email + selected role (demo-friendly)
    const nameFromEmail = email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    const newUser = {
      id: 'u' + Date.now(),
      name: nameFromEmail || 'User',
      email,
      role,
      phone: '',
      district: '',
      state: 'West Bengal',
    };
    setUser(newUser);
    addToast(`Logged in as ${newUser.name}`, 'success');
    return role;
  };

  // Register a new user from form data
  const register = (formData, role) => {
    const newUser = {
      id: 'u' + Date.now(),
      ...formData,
      role,
    };
    setRegisteredUsers(prev => [...prev, newUser]);
    const { password: _, ...safeUser } = newUser;
    setUser(safeUser);
    addToast(`Welcome to KishanSetu, ${newUser.name}!`, 'success');
    return role;
  };

  const logout = () => {
    setUser(null);
    addToast('Logged out successfully', 'info');
  };

  const switchRole = (role) => {
    login(role);
  };

  const addToCart = (crop, qty = 1) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === crop.id);
      if (existing) {
        return prev.map(i => i.id === crop.id ? { ...i, quantity: i.quantity + qty } : i);
      }
      return [...prev, { ...crop, quantity: qty }];
    });
    addToast(`${crop.name} added to cart`, 'success');
  };

  const updateCartQty = (id, qty) => {
    if (qty <= 0) {
      setCart(prev => prev.filter(i => i.id !== id));
    } else {
      setCart(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i));
    }
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(i => i.id !== id));
    addToast('Item removed from cart', 'info');
  };

  const clearCart = () => setCart([]);

  const addCrop = (crop) => {
    const newCrop = {
      ...crop,
      id: 'c' + Date.now(),
      status: 'Available',
      demand: 'Medium',
      aiQuality: 'Good',
      farmerId: user?.id,
      farmerName: user?.name,
    };
    setCropsList(prev => [newCrop, ...prev]);
    addToast('Crop added successfully', 'success');
    return newCrop;
  };

  const updateCrop = (id, updates) => {
    setCropsList(prev => prev.map(c => c.id === id ? { ...c, ...updates } : c));
    addToast('Crop updated', 'success');
  };

  const deleteCrop = (id) => {
    setCropsList(prev => prev.filter(c => c.id !== id));
    addToast('Crop deleted', 'info');
  };

  const updateShipmentStatus = (id, status) => {
    setShipments(prev => prev.map(s => s.id === id ? { ...s, status } : s));
    addToast(`Shipment ${id} updated to ${status}`, 'success');
  };

  const addShipment = (shipment) => {
    const newS = {
      ...shipment,
      id: 'SH' + String(Date.now()).slice(-4),
      status: 'Pending',
      date: new Date().toISOString().slice(0, 10),
    };
    setShipments(prev => [newS, ...prev]);
    addToast('Shipment created', 'success');
    return newS;
  };

  const placeOrder = (orderData) => {
    const newOrder = {
      id: 'ORD' + String(Date.now()).slice(-4),
      ...orderData,
      date: new Date().toISOString().slice(0, 10),
      status: 'Processing',
      eta: '1-2 days',
    };
    setOrders(prev => [newOrder, ...prev]);
    clearCart();
    addToast('Order placed successfully!', 'success');
    return newOrder;
  };

  const updateOrderStatus = (id, status) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status } : o));
  };

  const acceptPickup = (id) => {
    setPickups(prev => prev.map(p => p.id === id ? { ...p, status: 'Accepted' } : p));
    addToast('Pickup accepted', 'success');
  };

  const rejectPickup = (id) => {
    setPickups(prev => prev.map(p => p.id === id ? { ...p, status: 'Rejected' } : p));
    addToast('Pickup rejected', 'info');
  };

  const addToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
  };

  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  return (
    <AppContext.Provider
      value={{
        user,
        login,
        loginWithCredentials,
        register,
        logout,
        switchRole,
        theme,
        toggleTheme,
        cart,
        addToCart,
        updateCartQty,
        removeFromCart,
        clearCart,
        cropsList,
        addCrop,
        updateCrop,
        deleteCrop,
        shipments,
        updateShipmentStatus,
        addShipment,
        orders,
        placeOrder,
        updateOrderStatus,
        pickups,
        acceptPickup,
        rejectPickup,
        notifs,
        setNotifs,
        toasts,
        addToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
