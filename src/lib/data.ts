import { Job } from '@/types';
export const jobs: Job[] = [
{id:1,company:'Google',logo:'G',color:'#4285F4',role:'Frontend Developer',location:'Bengaluru, India',salary:'18 – 28 LPA',match:96,tags:['Full-time','Hybrid','React']},
{id:2,company:'Microsoft',logo:'▦',color:'#F35325',role:'Software Engineer II',location:'Hyderabad, India',salary:'22 – 35 LPA',match:92,tags:['Full-time','Remote','TypeScript']},
{id:3,company:'Atlassian',logo:'A',color:'#1868DB',role:'Frontend Engineer',location:'Bengaluru, India',salary:'24 – 40 LPA',match:89,tags:['Full-time','Remote','React']},
{id:4,company:'Stripe',logo:'S',color:'#635BFF',role:'Product Engineer',location:'Remote, India',salary:'28 – 42 LPA',match:87,tags:['Full-time','Remote','JavaScript']}
];
export const initialApplications = [{id:1,company:'Google',role:'Frontend Developer',stage:'Applied'},{id:2,company:'Microsoft',role:'Software Engineer II',stage:'Assessment'},{id:3,company:'Atlassian',role:'Frontend Engineer',stage:'Interview'},{id:4,company:'Razorpay',role:'UI Engineer',stage:'Applied'}];
