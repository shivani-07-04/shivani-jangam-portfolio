// src/components/sections/RolesSection.tsx
import React, { useState } from 'react';
import { Code, Brain, Globe, PenTool } from 'lucide-react';
import RoleCard from './RoleCard';

const RolesSection: React.FC = () => {
  const [activeRole, setActiveRole] = useState<string | null>(null);

  const handleCardClick = (roleType: string) => {
    setActiveRole(roleType);
  };

  const roles = [
    {
      type: 'developer',
      title: 'Python Developer',
      description: 'Building scalable apps, APIs, and automation scripts with Python.',
      icon: <Code size={40} />,
    },
    {
      type: 'blockchain',
      title: 'AI & ML Enthusiast',
      description: 'Exploring Artificial Intelligence, Machine Learning, and Deep Learning models.',
      icon: <Brain size={40} />,
    },
    {
      type: 'content',
      title: 'Web Developer',
      description: 'Creating modern, responsive websites with React, Flask, and Tailwind CSS.',
      icon: <Globe size={40} />,
    },
    {
      type: 'developer',
      title: 'Content Creator',
      description: 'Writing blogs and tutorials on Python, AI, and full-stack development.',
      icon: <PenTool size={40} />,
    },
  ];

  return (
    <section id="roles" className="py-16 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-10">💡 What I Do</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {roles.map((role) => (
          <RoleCard
            key={role.type + role.title}
            title={role.title}
            description={role.description}
            icon={role.icon}
            type={role.type}
            active={activeRole === role.type}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </section>
  );
};

export default RolesSection;
