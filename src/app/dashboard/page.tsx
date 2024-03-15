import { auth } from '@/auth';
import { redirect } from "next/navigation";
import DashboardUI from "@/ui/dashboardUI";

export default async function Dashboard () {
  const session = await auth();

  if(!session?.user) {
    redirect('/')
  }

  return <DashboardUI user={session?.user}/>
}