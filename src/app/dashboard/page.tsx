import { auth } from '@/auth';
import { redirect } from "next/navigation";
import DashboardUI from "@/ui/dashboardUI";
import { Suspense } from 'react';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Dashbord",
  description: "Dashbord url",
};

export default async function Dashboard () {
  const session = await auth();

  if(!session?.user) {
    redirect('/')
  }
  
  return (
    <Suspense fallback={<div>Loading.......</div>}>
      <DashboardUI user={session?.user}/>
    </Suspense>
  )
}