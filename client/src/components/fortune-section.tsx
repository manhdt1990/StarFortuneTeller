import { ReactNode } from 'react';

interface FortuneSectionProps {
  title: string;
  icon: ReactNode;
  content: string;
  colorClass: string;
}

export default function FortuneSection({ title, icon, content, colorClass }: FortuneSectionProps) {
  return (
    <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6">
      <h4 className={`text-lg font-bold mb-3 ${colorClass}`}>
        {icon}
        {title}
      </h4>
      <p className="text-gray-300 leading-relaxed">
        {content}
      </p>
    </div>
  );
}
