import discoverIcon from '@/shared/assets/icons/process-discover.png';
import designingIcon from '@/shared/assets/icons/process-designing.png';
import developmentIcon from '@/shared/assets/icons/process-development.png';
import testingIcon from '@/shared/assets/icons/process-testing.png';
import deploymentIcon from '@/shared/assets/icons/process-deployment.png';
import maintenanceIcon from '@/shared/assets/icons/process-maintenance.png';
import type { ProcessStepModel } from './types';

const DESCRIPTION = 'We aim to attain the greatest satisfaction for our clients and be one of the prominent.';

export const PROCESS_STEPS: ProcessStepModel[] = [
  { id: 'discover', number: '01', title: 'Discover', description: DESCRIPTION, icon: discoverIcon },
  { id: 'designing', number: '02', title: 'Designing', description: DESCRIPTION, icon: designingIcon },
  { id: 'development', number: '03', title: 'Development', description: DESCRIPTION, icon: developmentIcon },
  { id: 'testing', number: '04', title: 'Testing', description: DESCRIPTION, icon: testingIcon },
  { id: 'deployment', number: '05', title: 'Deployment', description: DESCRIPTION, icon: deploymentIcon },
  { id: 'maintenance', number: '06', title: 'Maintenance', description: DESCRIPTION, icon: maintenanceIcon },
];
