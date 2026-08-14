import React, { useState, useEffect } from 'react';
import { ScreenType, ServiceItem } from './types';
import { Header } from './components/Header';
import { BottomNavBar } from './components/BottomNavBar';
import { SidebarDrawer } from './components/SidebarDrawer';
import { Footer } from './components/Footer';
import { HomeScreen } from './components/screens/HomeScreen';
import { ServicesScreen } from './components/screens/ServicesScreen';
import { EmergencyScreen } from './components/screens/EmergencyScreen';
import { QuoteScreen } from './components/screens/QuoteScreen';
import { EmergencyModal } from './components/EmergencyModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Scroll to top whenever screen changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScreen]);

  const handleNavigate = (screen: ScreenType) => {
    setCurrentScreen(screen);
    setIsMobileDrawerOpen(false);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
  };

  const handleEmergencyCall = () => {
    setIsEmergencyModalOpen(true);
  };

  const handleRequestQuoteForService = (serviceName: string) => {
    setCurrentScreen('quote');
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e] flex flex-col font-sans antialiased selection:bg-[#F97316] selection:text-white">
      {/* Top Application Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        onOpenMobileDrawer={() => setIsMobileDrawerOpen(true)}
        onEmergencyCall={handleEmergencyCall}
      />

      {/* Off-canvas Mobile Drawer */}
      <SidebarDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        onEmergencyCall={handleEmergencyCall}
      />

      {/* Main Content Viewport */}
      <main className="flex-grow pt-16 pb-20 md:pb-0">
        {currentScreen === 'home' && (
          <HomeScreen
            onNavigate={handleNavigate}
            onSelectService={handleSelectService}
            onEmergencyCall={handleEmergencyCall}
          />
        )}

        {currentScreen === 'services' && (
          <ServicesScreen
            onNavigate={handleNavigate}
            onSelectService={handleSelectService}
            onEmergencyCall={handleEmergencyCall}
          />
        )}

        {currentScreen === 'emergency' && (
          <EmergencyScreen
            onNavigate={handleNavigate}
            onEmergencyCall={handleEmergencyCall}
          />
        )}

        {currentScreen === 'quote' && (
          <QuoteScreen
            onNavigate={handleNavigate}
            onEmergencyCall={handleEmergencyCall}
          />
        )}
      </main>

      {/* Universal Footer */}
      <Footer
        onNavigate={handleNavigate}
        onEmergencyCall={handleEmergencyCall}
      />

      {/* Mobile Fixed Bottom Navigation Bar */}
      <BottomNavBar
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        onEmergencyCall={handleEmergencyCall}
      />

      {/* Emergency Call Dialog */}
      <EmergencyModal
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
        onNavigateToEmergency={() => {
          setIsEmergencyModalOpen(false);
          setCurrentScreen('emergency');
        }}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={handleRequestQuoteForService}
        onEmergencyCall={handleEmergencyCall}
      />
    </div>
  );
}
