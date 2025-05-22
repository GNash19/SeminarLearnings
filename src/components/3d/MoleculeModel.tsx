// src/components/3d/MoleculeModel.tsx

const MoleculeModel = ({ className }: { className?: string }) => {
  return (
    <div className={`${className} bg-gradient-to-br from-green-100 to-teal-100 rounded-lg flex items-center justify-center`}>
      <span className="text-green-600 font-medium">3D Molecule Model</span>
    </div>
  );
};

export default MoleculeModel;