import { auth } from '@/auth';
import { redirect } from "next/navigation";
import DashboardUI from "@/ui/dashboardUI";

export default async function Dashboard () {
  const session = await auth();

  console.log(session?.user)

  if(!session?.user) {
    redirect('/')
  }

  return <DashboardUI/>
}