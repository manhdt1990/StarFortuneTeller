export interface Pillar {
  stem: string;
  branch: string;
  element: string;
  stemVN: string;
  branchVN: string;
}

export interface FourPillars {
  year: Pillar;
  month: Pillar;
  day: Pillar;
  hour: Pillar;
}

// Heavenly Stems (Thiên Can)
const heavenlyStems = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const heavenlyStemsVN = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];

// Earthly Branches (Địa Chi)
const earthlyBranches = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
const earthlyBranchesVN = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];

// Elements mapping
const stemElements = ['Mộc', 'Mộc', 'Hỏa', 'Hỏa', 'Thổ', 'Thổ', 'Kim', 'Kim', 'Thủy', 'Thủy'];
const branchElements = ['Thủy', 'Thổ', 'Mộc', 'Mộc', 'Thổ', 'Hỏa', 'Hỏa', 'Thổ', 'Kim', 'Kim', 'Thổ', 'Thủy'];

export function calculateFourPillars(birthDate: string, birthTime: string): FourPillars {
  const date = new Date(`${birthDate}T${birthTime}`);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();

  // Simplified calculation based on Gregorian calendar
  // In a real implementation, this would need proper Chinese calendar conversion
  
  // Year pillar
  const yearStemIndex = (year - 4) % 10;
  const yearBranchIndex = (year - 4) % 12;
  
  // Month pillar (approximate)
  const monthStemIndex = (yearStemIndex * 2 + month) % 10;
  const monthBranchIndex = (month + 1) % 12;
  
  // Day pillar (simplified Julian day calculation)
  const dayNumber = Math.floor((date.getTime() - new Date('1900-01-01').getTime()) / (1000 * 60 * 60 * 24));
  const dayStemIndex = (dayNumber + 9) % 10;
  const dayBranchIndex = (dayNumber + 1) % 12;
  
  // Hour pillar
  const hourBranchIndex = Math.floor((hour + 1) / 2) % 12;
  const hourStemIndex = (dayStemIndex * 2 + hourBranchIndex) % 10;

  return {
    year: {
      stem: heavenlyStems[yearStemIndex],
      branch: earthlyBranches[yearBranchIndex],
      element: stemElements[yearStemIndex],
      stemVN: heavenlyStemsVN[yearStemIndex],
      branchVN: earthlyBranchesVN[yearBranchIndex]
    },
    month: {
      stem: heavenlyStems[monthStemIndex],
      branch: earthlyBranches[monthBranchIndex],
      element: stemElements[monthStemIndex],
      stemVN: heavenlyStemsVN[monthStemIndex],
      branchVN: earthlyBranchesVN[monthBranchIndex]
    },
    day: {
      stem: heavenlyStems[dayStemIndex],
      branch: earthlyBranches[dayBranchIndex],
      element: stemElements[dayStemIndex],
      stemVN: heavenlyStemsVN[dayStemIndex],
      branchVN: earthlyBranchesVN[dayBranchIndex]
    },
    hour: {
      stem: heavenlyStems[hourStemIndex],
      branch: earthlyBranches[hourBranchIndex],
      element: stemElements[hourStemIndex],
      stemVN: heavenlyStemsVN[hourStemIndex],
      branchVN: earthlyBranchesVN[hourBranchIndex]
    }
  };
}

export function getBranchElement(branch: string): string {
  const branchIndex = earthlyBranches.indexOf(branch);
  return branchIndex !== -1 ? branchElements[branchIndex] : 'Thổ';
}

export const elementRelationships = {
  generating: {
    'Mộc': 'Hỏa',
    'Hỏa': 'Thổ',
    'Thổ': 'Kim',
    'Kim': 'Thủy',
    'Thủy': 'Mộc'
  },
  destructive: {
    'Mộc': 'Thổ',
    'Hỏa': 'Kim',
    'Thổ': 'Thủy',
    'Kim': 'Mộc',
    'Thủy': 'Hỏa'
  }
};
