import { Pillar, getBranchElement } from '@/lib/chinese-calendar';

interface PillarCardProps {
  pillar: Pillar;
  type: 'year' | 'month' | 'day' | 'hour';
}

const pillarLabels = {
  year: 'Năm Trụ',
  month: 'Tháng Trụ', 
  day: 'Nhật Trụ',
  hour: 'Giờ Trụ'
};

const pillarMeanings = {
  year: 'Thể hiện tổ tiên, gia đình',
  month: 'Thể hiện cha mẹ, sự nghiệp',
  day: 'Thể hiện bản thân, vợ/chồng',
  hour: 'Thể hiện con cái, tương lai'
};

export default function PillarCard({ pillar, type }: PillarCardProps) {
  const branchElement = getBranchElement(pillar.branch);
  
  return (
    <div className={`pillar-card rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300 element-${pillar.element.toLowerCase()}`}>
      <div className="text-yellow-400 text-lg font-bold mb-2">
        {pillarLabels[type]}
      </div>
      <div className="text-3xl font-serif mb-2">
        {pillar.stem}{pillar.branch}
      </div>
      <div className="text-sm text-gray-400 mb-2">
        {pillar.element} - {branchElement}
      </div>
      <div className="text-xs text-gray-500">
        {pillarMeanings[type]}
      </div>
    </div>
  );
}
