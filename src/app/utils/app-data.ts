import { MenuBar } from "../shared/intserfaces/layout.interfaces";

export const menuItemsTop: MenuBar[] = [
    { label: 'Dashboard', route: 'dashboard', logo: 'dashboard' },
    { label: 'Jobs', route: 'dashboard/jobs', logo: 'work' },
    {
      label: 'Talent Pool',
      route: 'dashboard/talent-pool',
      logo: 'data_thresholding',
    },
    { label: 'Interview', route: 'dashboard/interview', logo: 'groups' },
    { label: 'Reports', route: 'dashboard/report', logo: 'summarize' },
    { label: 'Mails', route: 'dashboard/mails-box', logo: 'mail' },
  ];