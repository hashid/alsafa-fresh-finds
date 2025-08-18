import { useLanguage } from '@/contexts/LanguageContext';
import { Switch } from '@/components/ui/switch';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  
  return (
    <div className="flex items-center space-x-2 bg-white rounded-full px-3 py-1 shadow-sm border">
      <span className={`text-sm font-medium transition-colors ${language === 'en' ? 'text-hypermarket-red' : 'text-muted-foreground'}`}>
        EN
      </span>
      <Switch
        checked={language === 'ar'}
        onCheckedChange={toggleLanguage}
        className="data-[state=checked]:bg-hypermarket-red"
      />
      <span className={`text-sm font-medium transition-colors ${language === 'ar' ? 'text-hypermarket-red' : 'text-muted-foreground'}`}>
        AR
      </span>
    </div>
  );
};