'use client';

export default function PipeSystem() {
  return (
    <div className="professional-pipes" aria-hidden="true">
      <svg className="pipe pipe-left" viewBox="0 0 170 900" preserveAspectRatio="none">
        <path className="pipe-shadow" d="M 38 -40 L 38 248 Q 38 284 74 284 L 118 284 Q 148 284 148 314 L 148 940" />
        <path className="pipe-copper" d="M 38 -40 L 38 248 Q 38 284 74 284 L 118 284 Q 148 284 148 314 L 148 940" />
        <path className="pipe-highlight" d="M 31 -40 L 31 246 Q 31 292 72 292 L 116 292 Q 139 292 139 316 L 139 940" />
      </svg>

      <svg className="pipe pipe-right" viewBox="0 0 190 900" preserveAspectRatio="none">
        <path className="pipe-shadow" d="M 146 -40 L 146 170 Q 146 205 112 205 L 72 205 Q 38 205 38 240 L 38 540 Q 38 576 74 576 L 122 576 Q 158 576 158 612 L 158 940" />
        <path className="pipe-copper" d="M 146 -40 L 146 170 Q 146 205 112 205 L 72 205 Q 38 205 38 240 L 38 540 Q 38 576 74 576 L 122 576 Q 158 576 158 612 L 158 940" />
        <path className="pipe-highlight" d="M 137 -40 L 137 166 Q 137 196 109 196 L 70 196 Q 29 196 29 240 L 29 542 Q 29 586 73 586 L 120 586 Q 149 586 149 614 L 149 940" />
      </svg>
    </div>
  );
}
