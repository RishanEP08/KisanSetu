// Mock data for KishanSetu - Indian AgriTech Platform

export const crops = [
  {
    id: 'c1',
    name: 'Tomato',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop',
    quantity: 120,
    unit: 'kg',
    price: 45,
    harvestDate: '2026-09-15',
    location: 'Nadia, West Bengal',
    district: 'Nadia',
    state: 'West Bengal',
    farmerId: 'f1',
    farmerName: 'Ramesh Mondal',
    demand: 'High',
    aiQuality: 'Good',
    status: 'Available',
    description: 'Fresh farm-grown tomatoes, pesticide-free.',
    category: 'Vegetable'
  },
  {
    id: 'c2',
    name: 'Potato',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop',
    quantity: 250,
    unit: 'kg',
    price: 32,
    harvestDate: '2026-09-10',
    location: 'Hooghly, West Bengal',
    district: 'Hooghly',
    state: 'West Bengal',
    farmerId: 'f2',
    farmerName: 'Suresh Das',
    demand: 'Medium',
    aiQuality: 'Excellent',
    status: 'Available',
    description: 'High quality potatoes suitable for all culinary uses.',
    category: 'Vegetable'
  },
  {
    id: 'c3',
    name: 'Rice',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop',
    quantity: 500,
    unit: 'kg',
    price: 58,
    harvestDate: '2026-09-05',
    location: 'Burdwan, West Bengal',
    district: 'Burdwan',
    state: 'West Bengal',
    farmerId: 'f3',
    farmerName: 'Anil Ghosh',
    demand: 'High',
    aiQuality: 'Good',
    status: 'Available',
    description: 'Premium aromatic rice from fertile fields.',
    category: 'Grain'
  },
  {
    id: 'c4',
    name: 'Onion',
    image: 'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=400&h=300&fit=crop',
    quantity: 180,
    unit: 'kg',
    price: 38,
    harvestDate: '2026-09-12',
    location: 'Howrah, West Bengal',
    district: 'Howrah',
    state: 'West Bengal',
    farmerId: 'f1',
    farmerName: 'Ramesh Mondal',
    demand: 'High',
    aiQuality: 'Fair',
    status: 'Available',
    description: 'Red onions with strong flavor.',
    category: 'Vegetable'
  },
  {
    id: 'c5',
    name: 'Wheat',
    image: 'https://images.unsplash.com/photo-1574323342126-8aeb39c6d3c7?w=400&h=300&fit=crop',
    quantity: 400,
    unit: 'kg',
    price: 28,
    harvestDate: '2026-08-28',
    location: 'North 24 Parganas, West Bengal',
    district: 'North 24 Parganas',
    state: 'West Bengal',
    farmerId: 'f4',
    farmerName: 'Bikash Roy',
    demand: 'Medium',
    aiQuality: 'Good',
    status: 'Available',
    description: 'Quality wheat grains for flour production.',
    category: 'Grain'
  },
  {
    id: 'c6',
    name: 'Maize',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=300&fit=crop',
    quantity: 300,
    unit: 'kg',
    price: 22,
    harvestDate: '2026-09-08',
    location: 'South 24 Parganas, West Bengal',
    district: 'South 24 Parganas',
    state: 'West Bengal',
    farmerId: 'f2',
    farmerName: 'Suresh Das',
    demand: 'Low',
    aiQuality: 'Good',
    status: 'Available',
    description: 'Sweet maize for both human and animal consumption.',
    category: 'Grain'
  },
  {
    id: 'c7',
    name: 'Mustard',
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop',
    quantity: 150,
    unit: 'kg',
    price: 65,
    harvestDate: '2026-09-01',
    location: 'Nadia, West Bengal',
    district: 'Nadia',
    state: 'West Bengal',
    farmerId: 'f3',
    farmerName: 'Anil Ghosh',
    demand: 'Medium',
    aiQuality: 'Excellent',
    status: 'Available',
    description: 'High oil content mustard seeds.',
    category: 'Oilseed'
  },
  {
    id: 'c8',
    name: 'Jute',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=300&fit=crop',
    quantity: 200,
    unit: 'kg',
    price: 42,
    harvestDate: '2026-08-25',
    location: 'Hooghly, West Bengal',
    district: 'Hooghly',
    state: 'West Bengal',
    farmerId: 'f4',
    farmerName: 'Bikash Roy',
    demand: 'Low',
    aiQuality: 'Good',
    status: 'Available',
    description: 'Raw jute fiber for textile industry.',
    category: 'Fiber'
  }
];

export const farmers = [
  {
    id: 'f1',
    name: 'Ramesh Mondal',
    phone: '+91 98765 43210',
    email: 'ramesh.mondal@email.com',
    village: 'Krishnagar',
    district: 'Nadia',
    state: 'West Bengal',
    farmSize: '5 acres',
    crops: ['Tomato', 'Onion'],
    rating: 4.7,
    joined: '2024-03-15'
  },
  {
    id: 'f2',
    name: 'Suresh Das',
    phone: '+91 98765 43211',
    email: 'suresh.das@email.com',
    village: 'Chinsurah',
    district: 'Hooghly',
    state: 'West Bengal',
    farmSize: '8 acres',
    crops: ['Potato', 'Maize'],
    rating: 4.5,
    joined: '2024-01-20'
  },
  {
    id: 'f3',
    name: 'Anil Ghosh',
    phone: '+91 98765 43212',
    email: 'anil.ghosh@email.com',
    village: 'Burdwan Town',
    district: 'Burdwan',
    state: 'West Bengal',
    farmSize: '12 acres',
    crops: ['Rice', 'Mustard'],
    rating: 4.8,
    joined: '2023-11-10'
  },
  {
    id: 'f4',
    name: 'Bikash Roy',
    phone: '+91 98765 43213',
    email: 'bikash.roy@email.com',
    village: 'Barasat',
    district: 'North 24 Parganas',
    state: 'West Bengal',
    farmSize: '6 acres',
    crops: ['Wheat', 'Jute'],
    rating: 4.3,
    joined: '2024-05-01'
  }
];

export const buyers = [
  {
    id: 'b1',
    name: 'Priya Sharma',
    email: 'priya.sharma@email.com',
    phone: '+91 99887 66554',
    address: '12 Park Street',
    district: 'Kolkata',
    state: 'West Bengal',
    pincode: '700016'
  },
  {
    id: 'b2',
    name: 'Amit Kumar',
    email: 'amit.kumar@email.com',
    phone: '+91 99887 66555',
    address: '45 Salt Lake',
    district: 'Kolkata',
    state: 'West Bengal',
    pincode: '700091'
  }
];

export const drivers = [
  {
    id: 'd1',
    name: 'Rajesh Kumar',
    phone: '+91 97654 32109',
    email: 'rajesh.driver@email.com',
    vehicleType: 'Pickup Truck',
    vehicleNumber: 'WB-26-AB-1234',
    license: 'WB-DL-2020-12345',
    district: 'Nadia',
    rating: 4.6,
    totalDeliveries: 145
  },
  {
    id: 'd2',
    name: 'Sunil Yadav',
    phone: '+91 97654 32110',
    email: 'sunil.driver@email.com',
    vehicleType: 'Mini Truck',
    vehicleNumber: 'WB-12-CD-5678',
    license: 'WB-DL-2019-67890',
    district: 'Hooghly',
    rating: 4.4,
    totalDeliveries: 98
  }
];

export const microhubs = [
  {
    id: 'mh1',
    name: 'Microhub 01 - Krishnagar',
    distance: '3.2 km',
    address: 'Near Krishnagar Bus Stand, Nadia',
    capacity: '5000 kg',
    operatingHours: '6:00 AM - 8:00 PM',
    acceptedCrops: ['Tomato', 'Onion', 'Potato', 'Mustard'],
    rating: 4.5,
    lat: 23.4052,
    lng: 88.4907
  },
  {
    id: 'mh2',
    name: 'Microhub 02 - Chinsurah',
    distance: '5.8 km',
    address: 'Hooghly Station Road, Chinsurah',
    capacity: '8000 kg',
    operatingHours: '5:30 AM - 9:00 PM',
    acceptedCrops: ['Potato', 'Rice', 'Maize', 'Jute'],
    rating: 4.7,
    lat: 22.8912,
    lng: 88.3967
  },
  {
    id: 'mh3',
    name: 'Microhub 03 - Burdwan Central',
    distance: '12 km',
    address: 'GT Road, Burdwan',
    capacity: '10000 kg',
    operatingHours: '6:00 AM - 10:00 PM',
    acceptedCrops: ['Rice', 'Wheat', 'Mustard', 'Maize'],
    rating: 4.8,
    lat: 23.2324,
    lng: 87.8615
  },
  {
    id: 'mh4',
    name: 'Microhub 04 - Barasat Hub',
    distance: '8.5 km',
    address: 'Jessore Road, Barasat',
    capacity: '6000 kg',
    operatingHours: '6:00 AM - 8:30 PM',
    acceptedCrops: ['Wheat', 'Jute', 'Potato', 'Onion'],
    rating: 4.4,
    lat: 22.7222,
    lng: 88.4814
  }
];

export const marketDemand = [
  { crop: 'Tomato', demand: 'High', trend: 'up', change: 12, price: 45, predicted: 48 },
  { crop: 'Onion', demand: 'High', trend: 'up', change: 8, price: 38, predicted: 42 },
  { crop: 'Rice', demand: 'High', trend: 'stable', change: 2, price: 58, predicted: 59 },
  { crop: 'Potato', demand: 'Medium', trend: 'down', change: -5, price: 32, predicted: 30 },
  { crop: 'Wheat', demand: 'Medium', trend: 'stable', change: 1, price: 28, predicted: 28 },
  { crop: 'Mustard', demand: 'Medium', trend: 'up', change: 6, price: 65, predicted: 68 },
  { crop: 'Maize', demand: 'Low', trend: 'down', change: -3, price: 22, predicted: 20 },
  { crop: 'Jute', demand: 'Low', trend: 'stable', change: 0, price: 42, predicted: 42 }
];

export const weatherData = {
  current: {
    temp: 32,
    humidity: 78,
    rainProbability: 65,
    wind: 12,
    condition: 'Partly Cloudy',
    location: 'Nadia, West Bengal'
  },
  forecast: [
    { day: 'Today', temp: 32, rain: 65, condition: 'Cloudy' },
    { day: 'Thu', temp: 30, rain: 80, condition: 'Rain' },
    { day: 'Fri', temp: 29, rain: 40, condition: 'Cloudy' },
    { day: 'Sat', temp: 31, rain: 20, condition: 'Sunny' },
    { day: 'Sun', temp: 33, rain: 10, condition: 'Sunny' }
  ],
  alerts: [
    { type: 'warning', message: 'Heavy rainfall expected in Nadia district. Delay outdoor harvesting.' },
    { type: 'info', message: 'Optimal humidity for tomato cultivation this week.' }
  ],
  cropImpact: [
    { crop: 'Tomato', impact: 'Moderate water stress risk', recommendation: 'Ensure proper drainage' },
    { crop: 'Rice', impact: 'Favorable', recommendation: 'Continue current irrigation' },
    { crop: 'Potato', impact: 'Risk of rot if excess rain', recommendation: 'Harvest early if possible' }
  ]
};

export const priceTrends = [
  { month: 'Apr', tomato: 38, potato: 28, rice: 52, onion: 32 },
  { month: 'May', tomato: 40, potato: 30, rice: 54, onion: 35 },
  { month: 'Jun', tomato: 42, potato: 29, rice: 55, onion: 40 },
  { month: 'Jul', tomato: 44, potato: 31, rice: 56, onion: 42 },
  { month: 'Aug', tomato: 43, potato: 33, rice: 57, onion: 39 },
  { month: 'Sep', tomato: 45, potato: 32, rice: 58, onion: 38 }
];

export const districts = [
  { name: 'Kolkata', crops: ['Tomato', 'Onion'], avgPrice: 48, demand: 'High', rainfall: 'Moderate' },
  { name: 'Howrah', crops: ['Onion', 'Potato'], avgPrice: 36, demand: 'High', rainfall: 'High' },
  { name: 'Nadia', crops: ['Tomato', 'Mustard'], avgPrice: 52, demand: 'High', rainfall: 'High' },
  { name: 'Hooghly', crops: ['Potato', 'Jute'], avgPrice: 37, demand: 'Medium', rainfall: 'Moderate' },
  { name: 'North 24 Parganas', crops: ['Wheat', 'Rice'], avgPrice: 42, demand: 'Medium', rainfall: 'Moderate' },
  { name: 'South 24 Parganas', crops: ['Maize', 'Rice'], avgPrice: 35, demand: 'Low', rainfall: 'High' },
  { name: 'Burdwan', crops: ['Rice', 'Mustard'], avgPrice: 55, demand: 'High', rainfall: 'Moderate' }
];

export const initialShipments = [
  {
    id: 'SH001',
    crop: 'Tomato',
    quantity: 50,
    buyer: 'Priya Sharma',
    microhub: 'Microhub 01 - Krishnagar',
    driver: 'Rajesh Kumar',
    status: 'In Transit',
    farmerId: 'f1',
    date: '2026-09-20'
  },
  {
    id: 'SH002',
    crop: 'Potato',
    quantity: 100,
    buyer: 'Amit Kumar',
    microhub: 'Microhub 02 - Chinsurah',
    driver: 'Sunil Yadav',
    status: 'At Microhub',
    farmerId: 'f2',
    date: '2026-09-19'
  },
  {
    id: 'SH003',
    crop: 'Rice',
    quantity: 200,
    buyer: 'Priya Sharma',
    microhub: 'Microhub 03 - Burdwan Central',
    driver: null,
    status: 'Pending',
    farmerId: 'f3',
    date: '2026-09-21'
  }
];

export const initialOrders = [
  {
    id: 'ORD001',
    crop: 'Tomato',
    cropId: 'c1',
    buyer: 'Priya Sharma',
    buyerId: 'b1',
    quantity: 20,
    amount: 900,
    date: '2026-09-20',
    status: 'Out for Delivery',
    farmer: 'Ramesh Mondal',
    driver: 'Rajesh Kumar',
    eta: '2 hours'
  },
  {
    id: 'ORD002',
    crop: 'Potato',
    cropId: 'c2',
    buyer: 'Amit Kumar',
    buyerId: 'b2',
    quantity: 50,
    amount: 1600,
    date: '2026-09-18',
    status: 'Delivered',
    farmer: 'Suresh Das',
    driver: 'Sunil Yadav',
    eta: null
  },
  {
    id: 'ORD003',
    crop: 'Rice',
    cropId: 'c3',
    buyer: 'Priya Sharma',
    buyerId: 'b1',
    quantity: 30,
    amount: 1740,
    date: '2026-09-21',
    status: 'Processing',
    farmer: 'Anil Ghosh',
    driver: null,
    eta: '1 day'
  }
];

export const pickupRequests = [
  {
    id: 'PR001',
    farmer: 'Ramesh Mondal',
    crop: 'Tomato',
    quantity: 50,
    pickupLocation: 'Krishnagar, Nadia',
    microhub: 'Microhub 01 - Krishnagar',
    distance: '3.2 km',
    status: 'Pending'
  },
  {
    id: 'PR002',
    farmer: 'Suresh Das',
    crop: 'Potato',
    quantity: 80,
    pickupLocation: 'Chinsurah, Hooghly',
    microhub: 'Microhub 02 - Chinsurah',
    distance: '2.1 km',
    status: 'Pending'
  }
];

export const notifications = {
  farmer: [
    { id: 1, type: 'success', message: 'Shipment SH001 accepted by driver Rajesh Kumar', time: '10 min ago', read: false },
    { id: 2, type: 'info', message: 'Demand for Tomato increased by 12% in your area', time: '1 hour ago', read: false },
    { id: 3, type: 'warning', message: 'Weather alert: Heavy rain expected tomorrow', time: '2 hours ago', read: true }
  ],
  buyer: [
    { id: 1, type: 'info', message: 'Order ORD001 is out for delivery', time: '15 min ago', read: false },
    { id: 2, type: 'warning', message: 'Tomato prices increased 8% in Nadia', time: '3 hours ago', read: false }
  ],
  driver: [
    { id: 1, type: 'info', message: 'New pickup request from Ramesh Mondal', time: '5 min ago', read: false },
    { id: 2, type: 'success', message: 'Delivery ORD002 completed successfully', time: '1 day ago', read: true }
  ]
};

export const demoUsers = {
  farmer: {
    id: 'f1',
    name: 'Ramesh Mondal',
    email: 'farmer@kishansetu.com',
    phone: '+91 98765 43210',
    role: 'farmer',
    village: 'Krishnagar',
    district: 'Nadia',
    state: 'West Bengal',
    farmSize: '5 acres'
  },
  buyer: {
    id: 'b1',
    name: 'Priya Sharma',
    email: 'buyer@kishansetu.com',
    phone: '+91 99887 66554',
    role: 'buyer',
    address: '12 Park Street',
    district: 'Kolkata',
    state: 'West Bengal',
    pincode: '700016'
  },
  driver: {
    id: 'd1',
    name: 'Rajesh Kumar',
    email: 'driver@kishansetu.com',
    phone: '+91 97654 32109',
    role: 'driver',
    vehicleType: 'Pickup Truck',
    vehicleNumber: 'WB-26-AB-1234',
    district: 'Nadia',
    rating: 4.6
  }
};
