
import React, { createContext, useContext, useState, useEffect } from 'react';

type AccessibilityPreferences = {
  highContrast: boolean;
  largeText: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
  mobilityFeatures: boolean;
  voiceAssistant: boolean;
};

type AccessibilityContextType = {
  preferences: AccessibilityPreferences;
  updatePreference: (key: keyof AccessibilityPreferences, value: boolean) => void;
  togglePreference: (key: keyof AccessibilityPreferences) => void;
  resetPreferences: () => void;
};

const defaultPreferences: AccessibilityPreferences = {
  highContrast: false,
  largeText: false,
  reducedMotion: false,
  screenReader: false,
  mobilityFeatures: false,
  voiceAssistant: false,
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [preferences, setPreferences] = useState<AccessibilityPreferences>(() => {
    // Load saved preferences from localStorage if available
    const savedPrefs = localStorage.getItem('accessibility-preferences');
    return savedPrefs ? JSON.parse(savedPrefs) : defaultPreferences;
  });

  // Save preferences to localStorage when they change
  useEffect(() => {
    localStorage.setItem('accessibility-preferences', JSON.stringify(preferences));
    
    // Apply CSS classes based on preferences
    if (preferences.highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
    
    if (preferences.largeText) {
      document.documentElement.classList.add('large-text');
    } else {
      document.documentElement.classList.remove('large-text');
    }
    
    if (preferences.reducedMotion) {
      document.documentElement.classList.add('reduced-motion');
    } else {
      document.documentElement.classList.remove('reduced-motion');
    }
  }, [preferences]);

  const updatePreference = (key: keyof AccessibilityPreferences, value: boolean) => {
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  const togglePreference = (key: keyof AccessibilityPreferences) => {
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const resetPreferences = () => {
    setPreferences(defaultPreferences);
  };

  return (
    <AccessibilityContext.Provider value={{ preferences, updatePreference, togglePreference, resetPreferences }}>
      {children}
    </AccessibilityContext.Provider>
  );
};
