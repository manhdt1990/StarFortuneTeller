import { FourPillars } from './chinese-calendar';

export interface FortuneReading {
  personality: string;
  career: string;
  love: string;
  health: string;
}

const personalityReadings = {
  'Mộc': [
    "Bạn là người có tính cách mạnh mẽ, quyết đoán và không ngại khó khăn. Bạn có khả năng lãnh đạo tự nhiên và luôn tìm cách vượt qua thử thách.",
    "Bạn có tinh thần sáng tạo cao, luôn tìm kiếm sự đổi mới và phát triển. Bạn có khả năng thích ứng tốt với môi trường thay đổi.",
    "Bạn là người có tính cách ôn hòa nhưng kiên định. Bạn có khả năng nuôi dưỡng và phát triển những ý tưởng tốt đẹp."
  ],
  'Hỏa': [
    "Bạn có tính cách năng động, nhiệt huyết và đầy cảm hứng. Bạn có khả năng truyền cảm hứng cho người khác và tạo ra những thay đổi tích cực.",
    "Bạn là người có charisma tự nhiên, thu hút người khác bằng sự nhiệt tình và lạc quan. Bạn có khả năng lãnh đạo thông qua tấm gương.",
    "Bạn có trái tim nóng và luôn sẵn sàng giúp đỡ người khác. Tuy nhiên, đôi khi bạn cần học cách kiểm soát cảm xúc."
  ],
  'Thổ': [
    "Bạn là người đáng tin cậy, ổn định và có tinh thần trách nhiệm cao. Bạn có khả năng xây dựng nền tảng vững chắc cho mọi việc.",
    "Bạn có tính cách kiên nhẫn và thực tế. Bạn có khả năng biến những ý tưởng thành hiện thực thông qua sự kiên trì.",
    "Bạn là người có tâm hồn bao dung và luôn sẵn sàng hỗ trợ người khác. Bạn có khả năng tạo ra môi trường hài hòa xung quanh."
  ],
  'Kim': [
    "Bạn có tính cách mạnh mẽ, quyết đoán và có nguyên tắc. Bạn có khả năng cắt bỏ những gì không cần thiết để tập trung vào mục tiêu.",
    "Bạn là người có tư duy logic và phân tích tốt. Bạn có khả năng nhìn thấy bản chất của vấn đề và đưa ra giải pháp hiệu quả.",
    "Bạn có tinh thần công bằng và luôn đòi hỏi sự hoàn hảo. Tuy nhiên, đôi khi bạn cần học cách linh hoạt hơn."
  ],
  'Thủy': [
    "Bạn có tính cách linh hoạt, thông minh và có khả năng thích ứng tốt. Bạn có thể tìm thấy cách giải quyết vấn đề trong mọi tình huống.",
    "Bạn là người có trực giác tốt và khả năng cảm nhận tinh tế. Bạn có thể hiểu được những điều mà người khác không thể cảm nhận.",
    "Bạn có tính cách điềm tĩnh và sâu sắc. Bạn có khả năng nuôi dưỡng và phát triển những tiềm năng ẩn giấu."
  ]
};

const careerReadings = {
  'Mộc': [
    "Sự nghiệp của bạn có nhiều cơ hội phát triển, đặc biệt trong các lĩnh vực sáng tạo hoặc kinh doanh. Bạn có khả năng xây dựng thương hiệu cá nhân mạnh.",
    "Các nghề nghiệp liên quan đến giáo dục, tư vấn hoặc phát triển cá nhân rất phù hợp với bạn. Bạn có thể trở thành người dẫn dắt trong lĩnh vực của mình.",
    "Bạn phù hợp với những công việc đòi hỏi sự sáng tạo và đổi mới. Khởi nghiệp có thể mang lại thành công lớn cho bạn."
  ],
  'Hỏa': [
    "Các ngành nghề liên quan đến truyền thông, marketing hoặc biểu diễn rất phù hợp với bạn. Bạn có khả năng tỏa sáng trước đám đông.",
    "Bạn thích hợp với các vị trí lãnh đạo hoặc quản lý. Khả năng truyền cảm hứng của bạn sẽ giúp team đạt được mục tiêu cao.",
    "Các lĩnh vực như bán hàng, quan hệ công chúng hoặc tổ chức sự kiện có thể mang lại thành công cho bạn."
  ],
  'Thổ': [
    "Bạn phù hợp với công việc đòi hỏi sự tỉ mỉ và kiên nhẫn như kế toán, quản lý hoặc bất động sản. Đầu tư dài hạn sẽ mang lại kết quả tích cực.",
    "Các nghề nghiệp trong lĩnh vực xây dựng, nông nghiệp hoặc dịch vụ khách hàng rất phù hợp với tính cách của bạn.",
    "Bạn có khả năng xây dựng sự nghiệp ổn định và bền vững. Tài chính sẽ dần được cải thiện thông qua sự kiên trì."
  ],
  'Kim': [
    "Các lĩnh vực tài chính, luật pháp hoặc công nghệ rất phù hợp với khả năng phân tích của bạn. Bạn có thể đạt được vị trí cao trong tổ chức.",
    "Bạn thích hợp với những công việc đòi hỏi độ chính xác cao và khả năng ra quyết định nhanh chóng.",
    "Kinh doanh trong lĩnh vực kim loại, máy móc hoặc công nghệ có thể mang lại lợi nhuận cao cho bạn."
  ],
  'Thủy': [
    "Các nghề nghiệp liên quan đến nghiên cứu, tâm lý học hoặc nghệ thuật rất phù hợp với trực giác của bạn.",
    "Bạn có khả năng thành công trong các lĩnh vực liên quan đến nước như vận tải biển, du lịch hoặc đồ uống.",
    "Công việc đòi hỏi sự linh hoạt và khả năng thích ứng như tư vấn hoặc môi giới sẽ mang lại thành công."
  ]
};

const loveReadings = {
  'Mộc': [
    "Trong tình cảm, bạn là người chân thành và có xu hướng yêu lâu dài. Bạn cần một người bạn đời có thể cùng bạn phát triển.",
    "Bạn có khả năng nuôi dưỡng tình yêu và tạo ra mối quan hệ bền vững. Hôn nhân của bạn sẽ ngày càng tốt đẹp theo thời gian.",
    "Bạn thu hút những người có tính cách mạnh mẽ và quyết đoán. Tình yêu của bạn có thể bắt đầu từ tình bạn."
  ],
  'Hỏa': [
    "Tình cảm của bạn luôn nồng nàn và đầy đam mê. Bạn có thể có nhiều mối quan hệ trước khi tìm thấy người phù hợp.",
    "Bạn thu hút người khác bằng sự nhiệt tình và lạc quan. Đối tác của bạn thường là người trầm tĩnh để cân bằng.",
    "Trong hôn nhân, bạn cần học cách kiềm chế cảm xúc và lắng nghe đối phương nhiều hơn."
  ],
  'Thổ': [
    "Bạn là người đáng tin cậy trong tình yêu và có xu hướng xây dựng gia đình ổn định. Bạn thích sự an toàn trong mối quan hệ.",
    "Tình yêu của bạn phát triển chậm nhưng bền vững. Bạn có thể kết hôn với người quen biết từ lâu.",
    "Trong gia đình, bạn là người chăm sóc và bảo vệ những người thân yêu. Con cái sẽ là niềm hạnh phúc lớn nhất."
  ],
  'Kim': [
    "Bạn có tiêu chuẩn cao trong tình yêu và có thể khó tính trong việc chọn đối tác. Tuy nhiên, khi yêu thì rất chân thành.",
    "Bạn cần một người bạn đời có thể hiểu và tôn trọng nguyên tắc của bạn. Tình yêu của bạn dựa trên sự tôn trọng lẫn nhau.",
    "Trong hôn nhân, bạn cần học cách biểu đạt cảm xúc một cách dịu dàng hơn."
  ],
  'Thủy': [
    "Tình cảm của bạn sâu sắc và tinh tế. Bạn có khả năng hiểu và cảm thông với đối phương một cách tự nhiên.",
    "Bạn có thể có những mối tình lãng mạn và đầy cảm xúc. Trực giác sẽ giúp bạn tìm thấy người phù hợp.",
    "Trong gia đình, bạn tạo ra không khí ấm áp và hài hòa. Bạn có khả năng nuôi dưỡng tình yêu thương."
  ]
};

const healthReadings = {
  'Mộc': [
    "Sức khỏe tổng thể tốt nhưng cần chú ý đến gan và mắt. Nên duy trì chế độ ăn uống lành mạnh và tập thể dục đều đặn.",
    "Hệ thần kinh có thể nhạy cảm với stress. Yoga và thiền định sẽ có lợi cho sức khỏe tinh thần của bạn.",
    "Cần chú ý đến sức khỏe cột sống và khớp. Hoạt động ngoài trời sẽ giúp bạn tái tạo năng lượng."
  ],
  'Hỏa': [
    "Cần chú ý đến hệ tim mạch và huyết áp. Nên tránh thức khuya và duy trì lối sống cân bằng.",
    "Hệ tiêu hóa có thể bị ảnh hưởng bởi stress và cảm xúc. Nên ăn uống đều đặn và tránh thức ăn cay nóng.",
    "Bài tập thể dục nhẹ nhàng như đi bộ hoặc bơi lội sẽ tốt hơn các môn thể thao cường độ cao."
  ],
  'Thổ': [
    "Cần chú ý đến hệ tiêu hóa và dạ dày. Nên ăn uống điều độ và tránh thức ăn khó tiêu.",
    "Cơ bắp và xương khớp cần được chăm sóc đặc biệt. Massage và xoa bóp sẽ có lợi cho sức khỏe.",
    "Sức khỏe tổng thể ổn định nhưng cần tránh ăn uống quá độ và duy trì cân nặng hợp lý."
  ],
  'Kim': [
    "Hệ hô hấp và phổi cần được chú ý đặc biệt. Nên tránh môi trường ô nhiễm và hút thuốc.",
    "Da và tóc có thể nhạy cảm. Nên sử dụng các sản phẩm chăm sóc tự nhiên và tránh hóa chất.",
    "Cần duy trì chế độ nghỉ ngơi đầy đủ và tránh làm việc quá sức."
  ],
  'Thủy': [
    "Hệ thận và bàng quang cần được chăm sóc. Nên uống đủ nước và tránh giữ nước tiểu lâu.",
    "Hệ sinh sản và hormone có thể không ổn định. Nên khám sức khỏe định kỳ và duy trì lối sống lành mạnh.",
    "Sức khỏe tinh thần cần được chú ý. Thiền định và các hoạt động thư giãn sẽ rất có lợi."
  ]
};

export function generateFortuneReading(pillars: FourPillars, gender: string): FortuneReading {
  // Use the day pillar stem element as the primary element for reading
  const primaryElement = pillars.day.element;
  
  // Get random readings based on the primary element
  const personality = personalityReadings[primaryElement as keyof typeof personalityReadings][Math.floor(Math.random() * 3)];
  const career = careerReadings[primaryElement as keyof typeof careerReadings][Math.floor(Math.random() * 3)];
  const love = loveReadings[primaryElement as keyof typeof loveReadings][Math.floor(Math.random() * 3)];
  const health = healthReadings[primaryElement as keyof typeof healthReadings][Math.floor(Math.random() * 3)];

  return {
    personality,
    career,
    love,
    health
  };
}
