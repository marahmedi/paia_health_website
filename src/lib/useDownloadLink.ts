type DownloadLink = {
    label: string;
    href: string;
  };
  
  export const useDownloadLink = (): DownloadLink => {
    if (typeof navigator === "undefined") {
      return {
        label: "Download Now",
        href: "https://www.yourapp.com/download",
      };
    }
  
    const ua = navigator.userAgent.toLowerCase();
  
    if (/iphone|ipad|ipod/.test(ua)) {
      return {
        label: "Download on the App Store",
        href: "https://apps.apple.com/",
      };
    }
  
    if (/android/.test(ua)) {
      return {
        label: "Get it on Google Play",
        href: "https://play.google.com/store",
      };
    }
  
    return {
      label: "Download Now",
      href: "https://www.yourapp.com/download",
    };
  };
  
