
import React from 'react';

export enum SectionId {
  Home = 'home',
  About = 'about',
  Services = 'services',
  Courses = 'courses',
  SocialImpact = 'impact',
  EQStudio = 'studio',
  Contact = 'contact'
}

export interface ServiceDetail {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
  color: string;
}

export interface Course {
  id: string;
  level: string;
  name: string;
  price: number;
  description: string;
  features: string[];
}

export interface SocialArea {
  title: string;
  icon: string;
  description: string;
  image: string;
}
