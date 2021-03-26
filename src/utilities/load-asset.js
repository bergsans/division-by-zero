export default function loadAsset(url) {
  return new Promise((resolve, reject) => {
    if (!url.includes('audio')) {
      const img = new Image();
      img.addEventListener('load', () => resolve(img));
      img.addEventListener('error', () => {
        reject(new Error(`Failed to load image's URL: ${url}`));
      });
      img.src = url;
    } else {
      const audio = new Audio(url);
      audio.addEventListener('canplaythrough', () => resolve(audio));
      audio.addEventListener('error', () => reject(new Error(`Failed to play audio: ${url}`)));
    }
  });
}
