import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let posX = -100;
    let posY = -100;
    let isTouchActive = false;

    // Direct 1:1 hardware-accelerated update - perfectly centered with zero lag or offset
    const updatePosition = (clientX: number, clientY: number, target: EventTarget | null) => {
      posX = clientX;
      posY = clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
      }

      setIsVisible(true);

      // Check for interactive elements with data-cursor badge
      if (target instanceof HTMLElement) {
        const interactive = target.closest('a, button, [data-cursor], input, textarea, select, [role="button"]');
        if (interactive) {
          setIsHovered(true);
          const badge = interactive.getAttribute('data-cursor');
          setCursorText(badge || '');
        } else {
          setIsHovered(false);
          setCursorText('');
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isTouchActive) return;
      updatePosition(e.clientX, e.clientY, e.target);
    };

    const handleTouchStart = (e: TouchEvent) => {
      isTouchActive = true;
      if (e.touches && e.touches[0]) {
        updatePosition(e.touches[0].clientX, e.touches[0].clientY, e.target);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      isTouchActive = true;
      if (e.touches && e.touches[0]) {
        updatePosition(e.touches[0].clientX, e.touches[0].clientY, e.target);
      }
    };

    const handleTouchEnd = () => {
      setTimeout(() => {
        setIsVisible(false);
        setIsHovered(false);
        isTouchActive = false;
      }, 150);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Precision Center Pinpoint Dot - exactly centered at mouse / finger */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#C19A6B] -translate-x-1/2 -translate-y-1/2 pointer-events-none shadow-[0_0_8px_#C19A6B] will-change-transform"
        style={{
          transform: 'translate3d(-100px, -100px, 0)',
        }}
      />

      {/* Precision Tracking Ring - centered exactly on the cursor / finger pointer */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border pointer-events-none flex items-center justify-center will-change-transform transition-[width,height,background-color,border-color,opacity] duration-150 ease-out ${
          isHovered
            ? 'w-14 h-14 bg-[#C19A6B]/20 border-[#C19A6B] backdrop-blur-[1px] shadow-[0_0_20px_rgba(193,154,107,0.4)]'
            : 'w-8 h-8 border-[#C19A6B]/70 bg-transparent'
        } ${isClicking ? 'scale-90' : 'scale-100'}`}
        style={{
          transform: 'translate3d(-100px, -100px, 0)',
        }}
      >
        {cursorText && (
          <span className="text-[9px] font-sans tracking-wide text-[#F5F5F7] font-bold select-none px-1">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}

