interface ElectronAPI {
    onNavigateToHome: (callback: () => void) => void;
  }
  
  interface Window {
    electron?: ElectronAPI;
  }
  