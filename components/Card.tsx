'use client';

export interface CardProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  interactive?: boolean;
}

export function Card({
  title,
  description,
  children,
  className = '',
  icon,
  onClick,
  interactive = false,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all ${
        interactive ? 'cursor-pointer hover:shadow-md hover:border-blue-300' : ''
      } ${className}`}
    >
      {(title || icon) && (
        <div className="mb-4 flex items-center gap-3">
          {icon && <div className="text-2xl">{icon}</div>}
          {title && <h3 className="text-lg font-semibold text-gray-900">{title}</h3>}
        </div>
      )}
      {description && <p className="mb-3 text-sm text-gray-600">{description}</p>}
      {children}
    </div>
  );
}
