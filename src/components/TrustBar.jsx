import { Trophy, Star, Lock, Zap } from 'lucide-react';
import './TrustBar.css';

export default function TrustBar() {
  return (
    <div className="trust-bar fade-in visible">
      <div className="trust-bar-inner">
        <div className="trust-item"><div className="trust-icon"><Trophy size={24} /></div><span>Top IT Company Nepal</span></div>
        <div className="trust-item"><div className="trust-icon"><Star size={24} /></div><span>5/5 Client Rating</span></div>
        <div className="trust-item"><div className="trust-icon"><Lock size={24} /></div><span>ISO Certified Process</span></div>
        <div className="trust-item"><div className="trust-icon"><Zap size={24} /></div><span>Agile Development</span></div>
      </div>
    </div>
  );
}
