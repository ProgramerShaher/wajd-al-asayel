import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const reqRef = useRef<number | null>(null);

  useEffect(() => {
    // Check if touch device
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [data-cursor], input, textarea, select, [role="button"]');
      if (interactive) {
        setIsHovered(true);
        const customBadge = interactive.getAttribute('data-cursor');
        setCursorText(customBadge || '');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Smooth lerp loop for outer fluid ring
    let currentX = -100;
    let currentY = -100;

    const loop = () => {
      currentX += (mousePos.x - currentX) * 0.15;
      currentY += (mousePos.y - currentY) * 0.15;
      setCursorPos({ x: currentX, y: currentY });
      reqRef.current = requestAnimationFrame(loop);
    };

    reqRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
    };
  }, [mousePos.x, mousePos.y, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300">
      {/* Center Pinpoint Dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#C19A6B] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 shadow-[0_0_10px_#C19A6B]"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) scale(${isClicking ? 0.6 : 1})`,
        }}
      />

      {/* Fluid Outer Ring / Expanding Spotlight */}
      <div
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-300 flex items-center justify-center ${
          isHovered
            ? 'w-20 h-20 bg-[#C19A6B]/15 border-[#C19A6B] backdrop-blur-[2px] shadow-[0_0_30px_rgba(193,154,107,0.3)]'
            : 'w-8 h-8 border-[#C19A6B]/50 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0) scale(${isClicking ? 0.9 : 1})`,
        }}
      >
        {cursorText && (
          <span className="text-[9px] font-sans tracking-widest text-[#F5F5F7] uppercase font-semibold select-none animate-fadeIn">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
