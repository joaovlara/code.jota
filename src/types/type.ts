// Types centralizados para uso global

export type Skill = {
	name: string;
	icon: React.ElementType;
	color: string;
	link?: string;
};

export type Project = {
	id: number;
	title: string;
	description: string;
	image: string;
	skills: string[];
	link?: string;
};

export type Profile = {
	name: string;
	role: string;
	email: string;
	location: string;
	workType: string;
	website: string;
	image: string;
};

export type Contact = {
	type: string;
	value: string;
	icon: string;
};

export type Category = {
  label: string;
  value: string;
};

export type Work = {
  id: number;
  title: string;
  category: string[];
  image: string;
};

export type ExperienceItem = {
  company: string;
  position: string;
  period: string;
  description: string;
};

export type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  description: string;
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type ExpertiseSection = {
  title: string;
  subtitle: string;
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  education: {
    title: string;
    items: EducationItem[];
  };
  skills: {
    title: string;
    categories: SkillCategory[];
  };
};

export type NavigationItem = {
  name: string;
  href: string;
};

export type SocialLink = {
  name: string;
  icon: React.ElementType;
  url: string;
};
