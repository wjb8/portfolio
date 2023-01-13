export interface ResumeProps {
  data: {
    education: {
      school: string;
      degree: string;
      fieldOfStudy: string;
      startDate: string;
      endDate: string;
    }[];
    workExperience: {
      company: string;
      position: string;
      startDate: string;
      endDate: string;
      responsibilities: string[];
    }[];
    skills: string[];
  };
}

export interface PortfolioProps {
  data: {
    projects: Array<{
      title: string;
      description: string;
      link: string;
    }>;
  };
}

export interface ContactProps {
  name: string;
  email: string;
  message: string;
}

export interface HomeProps {
  resumeData: ResumeProps;
  portfolioData: PortfolioProps;
}
