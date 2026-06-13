import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
  linkText?: string;
  badge?: string;
  featured?: boolean;
  tech?: string[];
  features?: string[];
}

const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  (
    {
      className,
      imgSrc,
      title,
      description,
      link,
      linkText = "View Project",
      badge,
      featured = false,
      tech = [],
      features = [],
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl transition-all duration-500 ease-in-out hover:-translate-y-2",
          className
        )}
        style={{
          background: '#ffffff',
          border: featured ? '2px solid #f97316' : '1px solid #e5e7eb',
          boxShadow: featured
            ? '0 4px 24px rgba(249,115,22,0.15)'
            : '0 2px 12px rgba(0,0,0,0.07)',
        }}
        {...props}
      >
        {/* Badge */}
        {badge && (
          <div style={{ position: 'absolute', top: 12, left: 12, zIndex: 10 }}>
            <span style={{
              background: '#f97316',
              color: '#fff',
              fontSize: '0.68rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
              fontFamily: 'var(--font-code)',
            }}>
              {badge}
            </span>
          </div>
        )}

        {/* Image */}
        <div className="aspect-video overflow-hidden">
          <img
            src={imgSrc}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '1.5rem' }}>
          <h3 style={{
            color: '#111',
            fontWeight: 700,
            fontSize: '1.05rem',
            marginBottom: '0.5rem',
            transition: 'color 0.3s',
            lineHeight: 1.4,
          }}
            className="group-hover:text-orange-500"
          >
            {title}
          </h3>

          <p style={{
            color: '#555',
            fontSize: '0.85rem',
            lineHeight: 1.7,
            flex: 1,
            marginBottom: '0.75rem',
          }}>
            {description}
          </p>

          {/* Feature bullets */}
          {features.length > 0 && (
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '0.875rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
              {features.map((f) => (
                <li key={f} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#f97316', fontSize: '0.5rem', marginTop: '0.38rem', flexShrink: 0 }}>▶</span>
                  <span style={{ color: '#444', fontSize: '0.8rem', lineHeight: 1.5 }}>{f}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Tech chips */}
          {tech.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
              {tech.map((t) => (
                <span key={t} style={{
                  fontSize: '0.68rem',
                  fontFamily: 'var(--font-code)',
                  fontWeight: 600,
                  padding: '0.2rem 0.6rem',
                  borderRadius: '9999px',
                  background: 'rgba(249,115,22,0.08)',
                  border: '1px solid rgba(249,115,22,0.28)',
                  color: '#c2410c',
                }}>
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* CTA */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#f97316',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {linkText}
            <ArrowRight style={{ width: 14, height: 14 }} />
          </a>
        </div>
      </div>
    );
  }
);
ProjectCard.displayName = "ProjectCard";

export { ProjectCard };
