import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device is touch-primary (mobile/tablet)
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) {
      // On mobile/tablet, native touch gestures feel best without an artificial cursor
      return;
    }

    let posX = -100;
    let posY = -100;

    // Laser-precise 1:1 hardware-accelerated update centered exactly with translate(-50%, -50%)
    const updatePosition = (clientX: number, clientY: number, target: EventTarget | null) => {
      posX = clientX;
      posY = clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${posX}px, ${posY}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${posX}px, ${posY}px, 0) translate(-50%, -50%)`;
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
      updatePosition(e.clientX, e.clientY, e.target);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none transition-opacity duration-200 hidden md:block ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* Precision Center Pinpoint Dot - Vibrant Electric Cyan */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#38BDF8] pointer-events-none shadow-[0_0_10px_#38BDF8] will-change-transform"
        style={{
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
        }}
      />

      {/* Precision Tracking Ring - Centered 100% on the pointer */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full border pointer-events-none flex items-center justify-center will-change-transform transition-[width,height,background-color,border-color,transform] duration-200 ease-out ${
          isHovered
            ? 'w-14 h-14 bg-[#38BDF8]/15 border-[#38BDF8] backdrop-blur-[2px] shadow-[0_0_25px_rgba(56,189,248,0.45)]'
            : 'w-9 h-9 border-[#38BDF8]/70 bg-transparent shadow-[0_0_8px_rgba(56,189,248,0.2)]'
        } ${isClicking ? 'scale-85' : 'scale-100'}`}
        style={{
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)',
        }}
      >
        {cursorText && (
          <span className="text-[10px] font-sans font-bold tracking-wide text-white select-none px-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
