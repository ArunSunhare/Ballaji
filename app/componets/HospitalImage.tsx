'use client';

import React from 'react';

interface HospitalImageProps {
    src: string;
    alt: string;
    className: string;
}

export default function HospitalImage({ src, alt, className }: HospitalImageProps) {
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
        (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='192' viewBox='0 0 320 192'%3E%3Crect fill='%23ddd' width='320' height='192'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='16' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EHospital Image%3C/text%3E%3C/svg%3E";
    };

    return (
        <img 
            src={src} 
            alt={alt}
            className={className}
            onError={handleImageError}
        />
    );
}
