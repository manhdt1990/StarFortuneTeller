import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { calculateFourPillars, FourPillars } from '@/lib/chinese-calendar';
import { generateFortuneReading, FortuneReading } from '@/lib/fortune-generator';
import PillarCard from '@/components/pillar-card';
import FortuneSection from '@/components/fortune-section';
import { User, Briefcase, Heart, Plus } from 'lucide-react';

export default function Home() {
  const [birthDate, setBirthDate] = useState('');
  const [birthTime, setBirthTime] = useState('');
  const [gender, setGender] = useState('male');
  const [showResults, setShowResults] = useState(false);
  const [pillars, setPillars] = useState<FourPillars | null>(null);
  const [fortune, setFortune] = useState<FortuneReading | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!birthDate || !birthTime) {
      alert('Vui lòng nhập đầy đủ thông tin sinh!');
      return;
    }

    setIsLoading(true);
    
    try {
      const calculatedPillars = calculateFourPillars(birthDate, birthTime);
      const generatedFortune = generateFortuneReading(calculatedPillars, gender);
      
      setPillars(calculatedPillars);
      setFortune(generatedFortune);
      setShowResults(true);
      
      // Scroll to results after a short delay
      setTimeout(() => {
        document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (error) {
      console.error('Error calculating destiny:', error);
      alert('Có lỗi xảy ra khi tính toán. Vui lòng thử lại!');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setShowResults(false);
    setPillars(null);
    setFortune(null);
    setBirthDate('');
    setBirthTime('');
    setGender('male');
    document.getElementById('input-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const shareResults = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Tứ Trụ Mệnh Lý - Kết Quả Của Tôi',
          text: 'Tôi vừa khám phá vận mệnh qua Tứ Trụ Mệnh Lý. Bạn cũng thử xem nhé!',
          url: window.location.href
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Đã sao chép link vào clipboard!');
      } catch (error) {
        alert('Không thể chia sẻ. Vui lòng sao chép link thủ công.');
      }
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Floating Particles Background */}
      <div className="floating-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <div className="text-yellow-400 text-4xl animate-spin-slow inline-block">☯</div>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-2 text-yellow-400">
            Tứ Trụ Mệnh Lý
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light">
            Four Pillars of Destiny - Khám Phá Vận Mệnh Của Bạn
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 relative z-10">
        {/* Input Form Section */}
        {!showResults && (
          <div id="input-section" className="max-w-2xl mx-auto mb-12">
            <Card className="pillar-card animate-glow">
              <CardHeader>
                <CardTitle className="text-2xl font-serif font-bold text-center text-yellow-400">
                  📅 Nhập Thông Tin Sinh
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-gray-300 font-medium">
                        📅 Ngày Sinh
                      </Label>
                      <Input
                        type="date"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        className="bg-gray-800 border-gray-600 text-white focus:border-yellow-400"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label className="text-gray-300 font-medium">
                        🕐 Giờ Sinh
                      </Label>
                      <Input
                        type="time"
                        value={birthTime}
                        onChange={(e) => setBirthTime(e.target.value)}
                        className="bg-gray-800 border-gray-600 text-white focus:border-yellow-400"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label className="text-gray-300 font-medium">
                      ⚧ Giới Tính
                    </Label>
                    <Select value={gender} onValueChange={setGender}>
                      <SelectTrigger className="bg-gray-800 border-gray-600 text-white focus:border-yellow-400">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Nam</SelectItem>
                        <SelectItem value="female">Nữ</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 font-bold py-4 px-8 rounded-lg hover:from-yellow-500 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    {isLoading ? '⏳ Đang tính toán...' : '✨ Khám Phá Vận Mệnh'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Results Section */}
        {showResults && pillars && fortune && (
          <div id="results-section" className="animate-reveal">
            {/* Four Pillars Display */}
            <div className="max-w-6xl mx-auto mb-12">
              <h2 className="text-3xl font-serif font-bold text-center mb-8 text-yellow-400">
                🏛️ Tứ Trụ Mệnh
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <PillarCard pillar={pillars.year} type="year" />
                <PillarCard pillar={pillars.month} type="month" />
                <PillarCard pillar={pillars.day} type="day" />
                <PillarCard pillar={pillars.hour} type="hour" />
              </div>
            </div>

            {/* Element Relationships */}
            <div className="max-w-4xl mx-auto mb-12">
              <Card className="pillar-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif font-bold text-center text-yellow-400">
                    ⚛️ Quan Hệ Ngũ Hành
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-5 gap-4 mb-6">
                    <div className="text-center element-wood border-2 rounded-lg p-4">
                      <div className="text-2xl mb-2">🌱</div>
                      <div className="font-bold">Mộc</div>
                      <div className="text-xs">Wood</div>
                    </div>
                    <div className="text-center element-fire border-2 rounded-lg p-4">
                      <div className="text-2xl mb-2">🔥</div>
                      <div className="font-bold">Hỏa</div>
                      <div className="text-xs">Fire</div>
                    </div>
                    <div className="text-center element-earth border-2 rounded-lg p-4">
                      <div className="text-2xl mb-2">🏔️</div>
                      <div className="font-bold">Thổ</div>
                      <div className="text-xs">Earth</div>
                    </div>
                    <div className="text-center element-metal border-2 rounded-lg p-4">
                      <div className="text-2xl mb-2">🪙</div>
                      <div className="font-bold">Kim</div>
                      <div className="text-xs">Metal</div>
                    </div>
                    <div className="text-center element-water border-2 rounded-lg p-4">
                      <div className="text-2xl mb-2">💧</div>
                      <div className="font-bold">Thủy</div>
                      <div className="text-xs">Water</div>
                    </div>
                  </div>
                  
                  <div className="text-center text-gray-400 text-sm">
                    <p>Mộc → Hỏa → Thổ → Kim → Thủy → Mộc (Tương Sinh)</p>
                    <p>Mộc ↔ Thổ, Hỏa ↔ Kim, Thổ ↔ Thủy (Tương Khắc)</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Fortune Reading */}
            <div className="max-w-4xl mx-auto">
              <Card className="pillar-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif font-bold text-center text-yellow-400">
                    🔮 Lời Giải Mệnh
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <FortuneSection
                      title="Tính Cách & Đặc Điểm"
                      icon={<User className="inline mr-2" size={20} />}
                      content={fortune.personality}
                      colorClass="text-yellow-400"
                    />
                    
                    <FortuneSection
                      title="Sự Nghiệp & Tài Chính"
                      icon={<Briefcase className="inline mr-2" size={20} />}
                      content={fortune.career}
                      colorClass="text-green-400"
                    />
                    
                    <FortuneSection
                      title="Tình Cảm & Gia Đình"
                      icon={<Heart className="inline mr-2" size={20} />}
                      content={fortune.love}
                      colorClass="text-red-400"
                    />
                    
                    <FortuneSection
                      title="Sức Khỏe & Lời Khuyên"
                      icon={<Plus className="inline mr-2" size={20} />}
                      content={fortune.health}
                      colorClass="text-blue-400"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 text-center space-x-4">
                    <Button
                      onClick={resetForm}
                      variant="outline"
                      className="bg-gray-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-500 transition-all duration-300"
                    >
                      🔄 Xem Mệnh Khác
                    </Button>
                    <Button
                      onClick={shareResults}
                      className="bg-yellow-400 text-purple-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-all duration-300"
                    >
                      📤 Chia Sẻ Kết Quả
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-8 mt-12 border-t border-gray-700">
        <p className="text-gray-400 text-sm">
          ℹ️ Kết quả chỉ mang tính chất tham khảo và giải trí
        </p>
      </footer>
    </div>
  );
}
