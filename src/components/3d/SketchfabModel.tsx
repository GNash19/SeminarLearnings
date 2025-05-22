// components/3d/SketchfabModel.tsx
const SketchfabModel = ({ embedUrl }: { embedUrl: string }) => {
  return (
    <div className="w-full h-96">
      <iframe
        title="3D Model"
        src={embedUrl}
        className="w-full h-full"
        allow="autoplay; fullscreen; vr"
        allowFullScreen
      ></iframe>
    </div>
  );
};

// Usage in About.tsx

// Add to your component
<SketchfabModel embedUrl="https://sketchfab.com/models/your-model-id/embed" />