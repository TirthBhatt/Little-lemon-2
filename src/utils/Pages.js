const pages = new Map();
pages.set('home', { name: 'Home', path: '/', anchorable: true });
pages.set('about', { name: 'About', path: '/Under', anchorable: true });
pages.set('menu', { name: 'Menu', path: 'Under', anchorable: true });
pages.set('Booking', { 
  name: 'Reservations', 
  path: '/booking', 
  anchorable: true 
});
pages.set('confirmedBooking', { 
  name: 'confirmedBooking', 
  path: '/cmf', 
  anchorable: true 
});
pages.set('orderOnline', { 
  name: 'Order Online', 
  path: '/Under', 
  anchorable: true 
});
pages.set('login', { name: 'Login', path: '/Under', anchorable: true });

export default pages;