import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
export const LanguageToggle = () => {
  const {
    language,
    toggleLanguage
  } = useLanguage();
  return;
};